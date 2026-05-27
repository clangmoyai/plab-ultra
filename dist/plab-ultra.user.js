// ==UserScript==
// @name         plab-ultra
// @namespace    https://github.com/clangmoyai/plab-ultra
// @version      2026.05.28
// @author       clangmoyai
// @description  Userscript for PornoLab.Net
// @license      MIT
// @icon         https://github.com/clangmoyai/plab-ultra/raw/main/src/assets/logo64.png
// @homepage     https://github.com/clangmoyai/plab-ultra
// @supportURL   https://github.com/clangmoyai/plab-ultra/issues
// @downloadURL  https://github.com/clangmoyai/plab-ultra/raw/main/dist/plab-ultra.user.js
// @updateURL    https://github.com/clangmoyai/plab-ultra/raw/main/dist/plab-ultra.user.js
// @match        https://pornolab.net/forum/viewtopic.php*
// @tag          pornolab
// @tag          pornolab.net
// @connect      *
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';
	var s = new Set();
	var _css = async (t) => {
		if (s.has(t)) return;
		s.add(t);
		((c) => {
			if (typeof GM_addStyle === "function") GM_addStyle(c);
			else (document.head || document.documentElement).appendChild(document.createElement("style")).append(c);
		})(t);
	};
	_css(" .ultra-logo.svelte-zne36e{vertical-align:top;width:16px;margin:0 .45rem 0 0;display:inline-flex}.ultra-logo.svelte-zne36e:hover{cursor:pointer}#x-header.svelte-zne36e{--header-height:4.5rem;margin-bottom:var(--content-margin);min-height:var(--header-height);grid-template-columns:auto 1fr;column-gap:1rem;display:grid}.floatingDownload.svelte-zne36e{padding-right:5rem}.logo.svelte-zne36e{height:var(--header-height)}.logo.svelte-zne36e img:where(.svelte-zne36e){border-radius:var(--border-radius-large);height:100%}.align-right.svelte-zne36e{justify-content:flex-end;min-width:0;display:flex}.container.svelte-zne36e{flex-direction:column;row-gap:1rem;min-width:0;display:flex}.links.svelte-zne36e{flex-wrap:nowrap;justify-content:end;min-width:0;display:flex}.unread.svelte-zne36e{color:var(--highlighted);filter:brightness(1.25)}.item.svelte-zne36e{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.item.svelte-zne36e+.item:where(.svelte-zne36e):before{content:\"|\";color:var(--post-border-color);margin:0 .8rem;display:inline-block;transform:translateY(-1px)}.search.svelte-zne36e{gap:.5rem;display:flex}.search.svelte-zne36e input:where(.svelte-zne36e){border:1px solid var(--post-border-color);min-width:0;color:var(--search-color);border-radius:var(--border-radius-small);flex:auto;padding:.3rem .5rem .4rem;font-family:inherit;background:var(--input-bg)!important;font-size:.8rem!important}.search.svelte-zne36e button:where(.svelte-zne36e){border-radius:var(--border-radius-small);width:1.75rem;background:var(--input-bg)!important;border:1px solid var(--post-border-color)!important}.incognito.svelte-zne36e{filter:var(--incognito-filter)!important}.themeIcon.svelte-zne36e a,.themeIcon.svelte-zne36e a:hover{text-decoration:none!important}@media (width<=768px){#x-header.svelte-zne36e{grid-template-columns:1fr}.logo.svelte-zne36e{display:none}.container.svelte-zne36e{width:100%}}.container.svelte-1emp0k3{justify-content:space-between;gap:1.15rem;display:flex}.column.svelte-1emp0k3{flex-direction:column;gap:.75rem;display:flex;overflow:hidden}h2.svelte-1emp0k3{white-space:nowrap;text-overflow:ellipsis;margin:0 0 .25rem;font-size:1rem;font-weight:500;overflow:hidden}input[type=checkbox].svelte-1emp0k3{margin:4px}label.svelte-1emp0k3{align-items:center;gap:.5rem;display:flex}.disabled.svelte-1emp0k3{cursor:default;text-decoration:line-through}span.svelte-1emp0k3{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.description.svelte-1emp0k3{opacity:.5}input[type=checkbox].svelte-1emp0k3:disabled{cursor:default}@media (width<=1200px){.container.svelte-1emp0k3{grid-template-rows:repeat(2,auto);grid-template-columns:repeat(3,1fr);justify-content:stretch;gap:1rem;display:grid}.column.svelte-1emp0k3{min-width:0}}@media (width<=768px){.container.svelte-1emp0k3{flex-direction:column;gap:1rem;display:flex}.column.svelte-1emp0k3{width:100%;min-width:0}}button.svelte-1obhcw8{all:unset;cursor:pointer;-webkit-user-select:none;user-select:none;white-space:nowrap;border-radius:var(--border-radius-small);color:#fff;transition:background-color opacity 1.8s ease-in-out;justify-content:center;align-items:center;padding:.4rem .5rem;font-family:inherit;font-size:.8rem;font-weight:500;display:flex;background:var(--button-color)!important;border:none!important}button.svelte-1obhcw8:disabled{opacity:.5;cursor:not-allowed;background-color:var(--post-border-color)!important}svg.svelte-1obhcw8{position:absolute}svg.svelte-1obhcw8 path:where(.svelte-1obhcw8){transform-origin:50%;fill:#fff}.container.svelte-1hugea{justify-content:space-between;align-items:center;margin-top:1rem;display:flex}.align-right.svelte-1hugea{gap:.5rem;display:flex}.container.svelte-kvmnko{flex-direction:column;margin-top:1.25rem;display:flex}.item.svelte-kvmnko{grid-template-columns:min-content minmax(0,10rem) 1fr auto;align-items:center;gap:.75rem;min-width:0;margin-bottom:.5rem;display:grid}img.svelte-kvmnko{flex-shrink:0;width:.9rem;height:.9rem}input[type=text].svelte-kvmnko{border:1px solid var(--post-border-color);border-radius:var(--border-radius-small);color:inherit;font:inherit;min-width:0;padding:.3rem .5rem .4rem;background:var(--input-bg)!important;font-size:.8rem!important}button.svelte-kvmnko{border-radius:var(--border-radius-small);-webkit-user-select:none;user-select:none;justify-content:center;align-items:flex-end;width:1.5rem;height:1.5rem;font-size:1.2rem;display:flex;color:#fff!important;background:#a62f2fbf!important;border:none!important}button.svelte-kvmnko:hover{background:#a62f2f!important}div.svelte-1kxfd5y{background:var(--post-bg);border:1px solid var(--post-border-color);border-radius:var(--border-radius-large);margin-bottom:var(--content-margin);flex-flow:column;padding:.9rem 1rem 1rem;font-family:inherit;font-size:.8rem;display:flex;position:relative;overflow:hidden}button.svelte-1kxfd5y{cursor:pointer;-webkit-user-select:none;user-select:none;border:none;flex-shrink:0;font-size:1.5rem;position:absolute;top:.6rem;right:.6rem;background:0 0!important}div.svelte-wvkwp9{z-index:9999;border-radius:var(--border-radius-large);border:1px solid var(--post-border-color);padding:.35rem;position:fixed;top:1.3rem;right:2.5rem;background-color:#009c3c!important}button.svelte-wvkwp9{cursor:pointer;aspect-ratio:1;--size:1.7rem;width:var(--size);width:var(--size);background-color:#fff!important}.ic--sharp-download.svelte-wvkwp9{--svg:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z'/%3E%3C/svg%3E\");-webkit-mask-image:var(--svg);-webkit-mask-image:var(--svg);mask-image:var(--svg);background-color:currentColor;display:inline-block;-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.container.svelte-vtocc6{z-index:2;padding-top:.2rem;position:absolute;transform:translate(-50%)}.indicator.svelte-vtocc6{border-left:8px solid #0000;border-right:8px solid #0000;border-bottom:7px solid var(--post-border-color);position:absolute;left:calc(50% - 8px)}.items.svelte-vtocc6{-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);border-radius:var(--border-radius-large);-webkit-user-select:none;user-select:none;border:1px solid var(--post-border-color);background:var(--overlay-bg);white-space:nowrap;margin-top:7px;position:relative;box-shadow:0 25px 50px -12px #00000040}.items.svelte-vtocc6 img:where(.svelte-vtocc6){-webkit-user-drag:none;width:1rem;height:1rem}.items.svelte-vtocc6 a:where(.svelte-vtocc6){-webkit-user-drag:none;align-items:center;gap:.75rem;padding:.5rem 1rem;font-size:.9rem;font-weight:500;text-decoration:none;display:flex}.items.svelte-vtocc6 a:where(.svelte-vtocc6):hover{color:unset}.items.svelte-vtocc6 a:where(.svelte-vtocc6):first-of-type{padding-top:.9rem}.items.svelte-vtocc6 a:where(.svelte-vtocc6):last-of-type{padding-bottom:1rem}#x-title.svelte-1gft3h5{margin-top:0;margin-bottom:var(--content-margin);font-size:1.375rem}.original-title.svelte-1gft3h5{text-decoration:none}.title-item.svelte-1gft3h5{color:unset;text-decoration:none}.title-item.svelte-1gft3h5:hover,.title-item--hover{cursor:pointer;color:var(--link-color)!important;text-decoration:underline!important}button.svelte-1ai34w7{all:unset;cursor:pointer;background:0 0!important}button.svelte-1ai34w7:disabled{cursor:text;-webkit-user-select:text;user-select:text}#thx-btn{all:unset!important}#x-stats.svelte-cjprq{margin-bottom:var(--content-margin);flex-wrap:wrap;gap:.8rem;font-size:.8rem;font-weight:500;display:flex}.item.svelte-cjprq:not(:last-child):after{content:\"|\";color:var(--post-border-color);margin-left:.8rem;display:inline-block;transform:translateY(-1px)}button.svelte-cjprq{all:unset;cursor:pointer;background:0 0!important}button.svelte-cjprq:disabled{cursor:text;-webkit-user-select:text;user-select:text}.seeders.svelte-cjprq{color:var(--seed-color)}.leechers.svelte-cjprq,.error.svelte-cjprq{color:var(--leech-color)}#x-tags.svelte-ttnt4a{margin-bottom:var(--content-margin);flex-wrap:wrap;gap:.35rem;display:flex}.tag-item.svelte-ttnt4a{border-radius:var(--border-radius-small);white-space:nowrap;cursor:pointer;opacity:.75;color:var(--tag-color);background-color:var(--tag-bg);justify-content:center;align-items:center;gap:.35rem;padding:.25rem .6rem .255rem;font-size:.7rem;font-weight:500;text-decoration:none;transition:opacity .15s ease-in-out;display:inline-flex}.tag-item.svelte-ttnt4a:hover,.tag-item--hover{opacity:1!important;text-decoration:none!important}.tag-res.svelte-ttnt4a{opacity:1;background:var(--highlighted)!important;color:#fff!important}.filelist.svelte-1xito9{background:var(--post-bg);border:1px solid var(--post-border-color);border-radius:var(--border-radius-large);margin-bottom:var(--content-margin);padding:.75rem}.filelist.svelte-1xito9 i{color:var(--link-color);font-style:normal;font-weight:500}div.svelte-x5vner{column-fill:balance;column-gap:.75rem}.dragging.svelte-x5vner{cursor:ew-resize}.loader.svelte-bb97q4{pointer-events:none;width:15%;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}svg.svelte-bb97q4{will-change:transform;width:100%;height:auto}svg.svelte-bb97q4 path:where(.svelte-bb97q4){fill:#fff}.animate.svelte-bb97q4{transform-origin:50%;animation:1s linear infinite svelte-bb97q4-spin}@keyframes svelte-bb97q4-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.debug.svelte-swtc1e{background:var(--button-color);color:#fff;-webkit-user-select:text;user-select:text;word-wrap:break-word;flex-direction:column;gap:.4rem;width:-webkit-fill-available;padding:1rem;font-family:monospace;display:flex;position:relative}.debug.svelte-swtc1e a:where(.svelte-swtc1e){color:#fff;text-decoration:none;display:contents}.debug.svelte-swtc1e p:where(.svelte-swtc1e){word-break:break-all}.error.svelte-swtc1e{color:red}.copy.svelte-swtc1e{cursor:pointer;border:none;flex-shrink:0;font-size:1.5rem;position:absolute;top:.5rem;right:.5rem;background:0 0!important}svg.svelte-swtc1e path:where(.svelte-swtc1e){transform-origin:50%;fill:#fff;transform:translateY(2px)}.image-columns.svelte-1bzlgy6{z-index:2;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);border-radius:0 0 0 var(--border-radius-large);border:1px solid var(--post-border-color);grid-template-columns:auto auto 1fr;height:1.25rem;padding:.75rem;transition:box-shadow .2s ease-in-out;display:flex;position:absolute;top:-1px;right:-1px;box-shadow:0 25px 50px -12px #0000;background:0 0!important;background:var(--overlay-bg)!important}.image-columns.svelte-1bzlgy6:hover{box-shadow:0 25px 50px -12px #00000040}svg.svelte-1bzlgy6{--size:1.25rem;width:var(--size);height:var(--size);fill:#fff;opacity:.75;mix-blend-mode:difference}.slider.svelte-1bzlgy6{gap:.55rem;display:flex}input.svelte-1bzlgy6{margin-left:.75rem}.value.svelte-1bzlgy6{--size:1.25rem;width:var(--size);height:var(--size);background:var(--tag-bg);-webkit-user-select:none;user-select:none;border-radius:50%;justify-content:center;align-items:center;font-size:.75rem;font-weight:500;display:flex}.value.svelte-1bzlgy6 .text:where(.svelte-1bzlgy6){color:var(--tag-color);margin-top:-1px}.section.svelte-27jg01{margin-bottom:var(--content-margin);justify-items:center;padding:1rem;display:grid;position:relative}a.svelte-27jg01{display:block;position:relative;overflow:hidden}.container.svelte-27jg01{border-radius:var(--border-radius-small);break-inside:avoid;height:min-content;margin-bottom:.75rem;overflow:hidden}img.svelte-27jg01{-webkit-user-select:none;user-select:none;will-change:width;word-break:break-all;border:none;flex:1 0 100%;width:100%;height:auto;display:block}a.gif.svelte-27jg01{width:fit-content}img.gif.svelte-27jg01{width:auto;max-width:100%}.incognito.svelte-27jg01{filter:var(--incognito-filter)!important}.dragging.svelte-27jg01 a:where(.svelte-27jg01),.dragging.svelte-27jg01 img:where(.svelte-27jg01){pointer-events:none}.forumline.svelte-wfy26x{flex-direction:column;align-items:center;padding:1rem;display:flex;position:relative}.section.svelte-wfy26x{margin-bottom:var(--content-margin)}a.svelte-wfy26x{color:#4da3ff;text-decoration:none}a.svelte-wfy26x:hover{text-decoration:underline}.post.svelte-wfy26x{border-bottom:1px solid var(--post-border-color);gap:1rem;padding:1rem;display:flex}.post.svelte-wfy26x:nth-child(2n){background-color:var(--post-odd-bg)}.post.svelte-wfy26x:last-child{border-bottom:none}.avatar.svelte-wfy26x img:where(.svelte-wfy26x){border-radius:var(--border-radius-small);object-fit:cover;border:1px solid var(--post-border-color);width:48px;height:48px}.no-avatar.svelte-wfy26x{text-align:center;background:var(--main-bg);border:1px solid var(--post-border-color);border-radius:var(--border-radius-small);cursor:pointer;justify-content:center;align-items:center;width:48px;height:48px;font-size:1.3rem;line-height:48px;display:flex;overflow:clip}.no-avatar.svelte-wfy26x svg:where(.svelte-wfy26x){width:55%;height:55%}.no-avatar.svelte-wfy26x:hover{text-decoration:none!important}.content.svelte-wfy26x{flex:1}.header.svelte-wfy26x{color:#bbb;align-items:center;gap:.5rem;margin-block-end:.4rem;font-size:.8rem;display:flex}.nick.svelte-wfy26x{font-weight:600}.date.svelte-wfy26x{all:unset!important;color:var(--post-date-color)!important;opacity:.8!important;cursor:pointer!important;font-weight:400!important}.date.svelte-wfy26x:hover{opacity:1!important}.message.svelte-wfy26x{margin:0;line-height:1.4}#ultra-pagination.svelte-dlb7of{margin-bottom:var(--content-margin);justify-content:space-between;font-size:.75rem;font-weight:600;display:flex}#ultra-pagination a{text-decoration:none!important}\n/*$vite$:1*/ ");
	var is_array = Array.isArray;
	var index_of = Array.prototype.indexOf;
	var includes = Array.prototype.includes;
	var array_from = Array.from;
	var define_property = Object.defineProperty;
	var get_descriptor = Object.getOwnPropertyDescriptor;
	var get_descriptors = Object.getOwnPropertyDescriptors;
	var object_prototype = Object.prototype;
	var array_prototype = Array.prototype;
	var get_prototype_of = Object.getPrototypeOf;
	var is_extensible = Object.isExtensible;
	function is_function(thing) {
		return typeof thing === "function";
	}
	var noop = () => {};
	function is_promise(value) {
		return typeof value?.then === "function";
	}
	function run(fn) {
		return fn();
	}
	function run_all(arr) {
		for (var i = 0; i < arr.length; i++) arr[i]();
	}
	function deferred() {
		var resolve;
		var reject;
		return {
			promise: new Promise((res, rej) => {
				resolve = res;
				reject = rej;
			}),
			resolve,
			reject
		};
	}
	function to_array(value, n) {
		if (Array.isArray(value)) return value;
		if (n === void 0 || !(Symbol.iterator in value)) return Array.from(value);
		const array = [];
		for (const element of value) {
			array.push(element);
			if (array.length === n) break;
		}
		return array;
	}
	var MANAGED_EFFECT = 1 << 24;
	var CLEAN = 1024;
	var DIRTY = 2048;
	var MAYBE_DIRTY = 4096;
	var INERT = 8192;
	var DESTROYED = 16384;
	var REACTION_RAN = 32768;
	var DESTROYING = 1 << 25;
	var EFFECT_TRANSPARENT = 65536;
	var HEAD_EFFECT = 1 << 18;
	var EFFECT_PRESERVED = 1 << 19;
	var USER_EFFECT = 1 << 20;
	var EFFECT_OFFSCREEN = 1 << 25;
	var WAS_MARKED = 65536;
	var REACTION_IS_UPDATING = 1 << 21;
	var ASYNC = 1 << 22;
	var ERROR_VALUE = 1 << 23;
	var STATE_SYMBOL = Symbol("$state");
	var LEGACY_PROPS = Symbol("legacy props");
	var LOADING_ATTR_SYMBOL = Symbol("");
	var ATTRIBUTES_CACHE = Symbol("attributes");
	var CLASS_CACHE = Symbol("class");
	var STYLE_CACHE = Symbol("style");
	var TEXT_CACHE = Symbol("text");
	var FORM_RESET_HANDLER = Symbol("form reset");
	var STALE_REACTION = new class StaleReactionError extends Error {
		name = "StaleReactionError";
		message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
	}();
	var IS_XHTML = !!globalThis.document?.contentType && globalThis.document.contentType.includes("xml");
	function lifecycle_outside_component(name) {
		throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
	}
	function async_derived_orphan() {
		throw new Error(`https://svelte.dev/e/async_derived_orphan`);
	}
	function each_key_duplicate(a, b, value) {
		throw new Error(`https://svelte.dev/e/each_key_duplicate`);
	}
	function effect_in_teardown(rune) {
		throw new Error(`https://svelte.dev/e/effect_in_teardown`);
	}
	function effect_in_unowned_derived() {
		throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
	}
	function effect_orphan(rune) {
		throw new Error(`https://svelte.dev/e/effect_orphan`);
	}
	function effect_update_depth_exceeded() {
		throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
	}
	function props_invalid_value(key) {
		throw new Error(`https://svelte.dev/e/props_invalid_value`);
	}
	function state_descriptors_fixed() {
		throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
	}
	function state_prototype_fixed() {
		throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
	}
	function state_unsafe_mutation() {
		throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
	}
	function svelte_boundary_reset_onerror() {
		throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
	}
	var HYDRATION_ERROR = {};
	var UNINITIALIZED = Symbol("uninitialized");
	var NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
	var NAMESPACE_SVG = "http://www.w3.org/2000/svg";
	var NAMESPACE_MATHML = "http://www.w3.org/1998/Math/MathML";
	function derived_inert() {
		console.warn(`https://svelte.dev/e/derived_inert`);
	}
	function hydration_mismatch(location) {
		console.warn(`https://svelte.dev/e/hydration_mismatch`);
	}
	function svelte_boundary_reset_noop() {
		console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
	}
	var hydrating = false;
	function set_hydrating(value) {
		hydrating = value;
	}
	var hydrate_node;
	function set_hydrate_node(node) {
		if (node === null) {
			hydration_mismatch();
			throw HYDRATION_ERROR;
		}
		return hydrate_node = node;
	}
	function hydrate_next() {
		return set_hydrate_node(get_next_sibling(hydrate_node));
	}
	function reset(node) {
		if (!hydrating) return;
		if (get_next_sibling(hydrate_node) !== null) {
			hydration_mismatch();
			throw HYDRATION_ERROR;
		}
		hydrate_node = node;
	}
	function next(count = 1) {
		if (hydrating) {
			var i = count;
			var node = hydrate_node;
			while (i--) node = get_next_sibling(node);
			hydrate_node = node;
		}
	}
	function skip_nodes(remove = true) {
		var depth = 0;
		var node = hydrate_node;
		while (true) {
			if (node.nodeType === 8) {
				var data = node.data;
				if (data === "]") {
					if (depth === 0) return node;
					depth -= 1;
				} else if (data === "[" || data === "[!" || data[0] === "[" && !isNaN(Number(data.slice(1)))) depth += 1;
			}
			var next = get_next_sibling(node);
			if (remove) node.remove();
			node = next;
		}
	}
	function read_hydration_instruction(node) {
		if (!node || node.nodeType !== 8) {
			hydration_mismatch();
			throw HYDRATION_ERROR;
		}
		return node.data;
	}
	function equals(value) {
		return value === this.v;
	}
	function safe_not_equal(a, b) {
		return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
	}
	function safe_equals(value) {
		return !safe_not_equal(value, this.v);
	}
	var async_mode_flag = false;
	var legacy_mode_flag = false;
	function enable_legacy_mode_flag() {
		legacy_mode_flag = true;
	}
	var component_context = null;
	function set_component_context(context) {
		component_context = context;
	}
	function push(props, runes = false, fn) {
		component_context = {
			p: component_context,
			i: false,
			c: null,
			e: null,
			s: props,
			x: null,
			r: active_effect,
			l: legacy_mode_flag && !runes ? {
				s: null,
				u: null,
				$: []
			} : null
		};
	}
	function pop(component) {
		var context = component_context;
		var effects = context.e;
		if (effects !== null) {
			context.e = null;
			for (var fn of effects) create_user_effect(fn);
		}
		if (component !== void 0) context.x = component;
		context.i = true;
		component_context = context.p;
		return component ?? {};
	}
	function is_runes() {
		return !legacy_mode_flag || component_context !== null && component_context.l === null;
	}
	var micro_tasks = [];
	function run_micro_tasks() {
		var tasks = micro_tasks;
		micro_tasks = [];
		run_all(tasks);
	}
	function queue_micro_task(fn) {
		if (micro_tasks.length === 0 && !is_flushing_sync) {
			var tasks = micro_tasks;
			queueMicrotask(() => {
				if (tasks === micro_tasks) run_micro_tasks();
			});
		}
		micro_tasks.push(fn);
	}
	function flush_tasks() {
		while (micro_tasks.length > 0) run_micro_tasks();
	}
	function handle_error(error) {
		var effect = active_effect;
		if (effect === null) {
			active_reaction.f |= ERROR_VALUE;
			return error;
		}
		if ((effect.f & 32768) === 0 && (effect.f & 4) === 0) throw error;
		invoke_error_boundary(error, effect);
	}
	function invoke_error_boundary(error, effect) {
		while (effect !== null) {
			if ((effect.f & 128) !== 0) {
				if ((effect.f & 32768) === 0) throw error;
				try {
					effect.b.error(error);
					return;
				} catch (e) {
					error = e;
				}
			}
			effect = effect.parent;
		}
		throw error;
	}
	var STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
	function set_signal_status(signal, status) {
		signal.f = signal.f & STATUS_MASK | status;
	}
	function update_derived_status(derived) {
		if ((derived.f & 512) !== 0 || derived.deps === null) set_signal_status(derived, CLEAN);
		else set_signal_status(derived, MAYBE_DIRTY);
	}
	function clear_marked(deps) {
		if (deps === null) return;
		for (const dep of deps) {
			if ((dep.f & 2) === 0 || (dep.f & 65536) === 0) continue;
			dep.f ^= WAS_MARKED;
			clear_marked(dep.deps);
		}
	}
	function defer_effect(effect, dirty_effects, maybe_dirty_effects) {
		if ((effect.f & 2048) !== 0) dirty_effects.add(effect);
		else if ((effect.f & 4096) !== 0) maybe_dirty_effects.add(effect);
		clear_marked(effect.deps);
		set_signal_status(effect, CLEAN);
	}
	var legacy_is_updating_store = false;
	var is_store_binding = false;
	function capture_store_binding(fn) {
		var previous_is_store_binding = is_store_binding;
		try {
			is_store_binding = false;
			return [fn(), is_store_binding];
		} finally {
			is_store_binding = previous_is_store_binding;
		}
	}
	var first_batch = null;
	var last_batch = null;
	var current_batch = null;
	var previous_batch = null;
	var batch_values = null;
	var last_scheduled_effect = null;
	var is_flushing_sync = false;
	var is_processing = false;
	var collected_effects = null;
	var legacy_updates = null;
	var flush_count = 0;
	var uid = 1;
	var Batch = class Batch {
		id = uid++;
		#started = false;
		linked = true;
		#prev = null;
		#next = null;
		async_deriveds = new Map();
		current = new Map();
		previous = new Map();
		unblocked = new Set();
		#commit_callbacks = new Set();
		#discard_callbacks = new Set();
		#fork_commit_callbacks = new Set();
		#pending = 0;
		#blocking_pending = new Map();
		#deferred = null;
		#roots = [];
		#new_effects = [];
		#dirty_effects = new Set();
		#maybe_dirty_effects = new Set();
		#skipped_branches = new Map();
		#unskipped_branches = new Set();
		is_fork = false;
		#decrement_queued = false;
		#is_deferred() {
			if (this.is_fork) return true;
			for (const effect of this.#blocking_pending.keys()) {
				var e = effect;
				var skipped = false;
				while (e.parent !== null) {
					if (this.#skipped_branches.has(e)) {
						skipped = true;
						break;
					}
					e = e.parent;
				}
				if (!skipped) return true;
			}
			return false;
		}
		skip_effect(effect) {
			if (!this.#skipped_branches.has(effect)) this.#skipped_branches.set(effect, {
				d: [],
				m: []
			});
			this.#unskipped_branches.delete(effect);
		}
		unskip_effect(effect, callback = (e) => this.schedule(e)) {
			var tracked = this.#skipped_branches.get(effect);
			if (tracked) {
				this.#skipped_branches.delete(effect);
				for (var e of tracked.d) {
					set_signal_status(e, DIRTY);
					callback(e);
				}
				for (e of tracked.m) {
					set_signal_status(e, MAYBE_DIRTY);
					callback(e);
				}
			}
			this.#unskipped_branches.add(effect);
		}
		#process() {
			this.#started = true;
			if (flush_count++ > 1e3) {
				this.#unlink();
				infinite_loop_guard();
			}
			if (!this.#is_deferred()) {
				for (const e of this.#dirty_effects) {
					this.#maybe_dirty_effects.delete(e);
					set_signal_status(e, DIRTY);
					this.schedule(e);
				}
				for (const e of this.#maybe_dirty_effects) {
					set_signal_status(e, MAYBE_DIRTY);
					this.schedule(e);
				}
			}
			const roots = this.#roots;
			this.#roots = [];
			this.apply();
			var effects = collected_effects = [];
			var render_effects = [];
			var updates = legacy_updates = [];
			for (const root of roots) try {
				this.#traverse(root, effects, render_effects);
			} catch (e) {
				reset_all(root);
				throw e;
			}
			current_batch = null;
			if (updates.length > 0) {
				var batch = Batch.ensure();
				for (const e of updates) batch.schedule(e);
			}
			collected_effects = null;
			legacy_updates = null;
			if (this.#is_deferred()) {
				this.#defer_effects(render_effects);
				this.#defer_effects(effects);
				for (const [e, t] of this.#skipped_branches) reset_branch(e, t);
				if (updates.length > 0) current_batch.#process();
				return;
			}
			const earlier_batch = this.#find_earlier_batch();
			if (earlier_batch) {
				earlier_batch.#merge(this);
				return;
			}
			this.#dirty_effects.clear();
			this.#maybe_dirty_effects.clear();
			for (const fn of this.#commit_callbacks) fn(this);
			this.#commit_callbacks.clear();
			previous_batch = this;
			flush_queued_effects(render_effects);
			flush_queued_effects(effects);
			previous_batch = null;
			this.#deferred?.resolve();
			var next_batch = current_batch;
			if (this.linked && this.#pending === 0) this.#unlink();
			if (async_mode_flag && !this.linked) {
				this.#commit();
				current_batch = next_batch;
			}
			if (this.#roots.length > 0) {
				if (next_batch === null) {
					next_batch = this;
					this.#link();
				}
				const batch = next_batch;
				batch.#roots.push(...this.#roots.filter((r) => !batch.#roots.includes(r)));
			}
			if (next_batch !== null) next_batch.#process();
		}
		#traverse(root, effects, render_effects) {
			root.f ^= CLEAN;
			var effect = root.first;
			while (effect !== null) {
				var flags = effect.f;
				var is_branch = (flags & 96) !== 0;
				if (!(is_branch && (flags & 1024) !== 0 || (flags & 8192) !== 0 || this.#skipped_branches.has(effect)) && effect.fn !== null) {
					if (is_branch) effect.f ^= CLEAN;
					else if ((flags & 4) !== 0) effects.push(effect);
					else if (async_mode_flag && (flags & 16777224) !== 0) render_effects.push(effect);
					else if (is_dirty(effect)) {
						if ((flags & 16) !== 0) this.#maybe_dirty_effects.add(effect);
						update_effect(effect);
					}
					var child = effect.first;
					if (child !== null) {
						effect = child;
						continue;
					}
				}
				while (effect !== null) {
					var next = effect.next;
					if (next !== null) {
						effect = next;
						break;
					}
					effect = effect.parent;
				}
			}
		}
		#find_earlier_batch() {
			var batch = this.#prev;
			while (batch !== null) {
				if (!batch.is_fork) {
					for (const [value, [, is_derived]] of this.current) if (batch.current.has(value) && !is_derived) return batch;
				}
				batch = batch.#prev;
			}
			return null;
		}
		#merge(batch) {
			for (const [source, value] of batch.current) {
				if (!this.previous.has(source) && batch.previous.has(source)) this.previous.set(source, batch.previous.get(source));
				this.current.set(source, value);
			}
			for (const [effect, deferred] of batch.async_deriveds) {
				const d = this.async_deriveds.get(effect);
				if (d) deferred.promise.then(d.resolve);
			}
			const mark = (value) => {
				var reactions = value.reactions;
				if (reactions === null) return;
				for (const reaction of reactions) {
					var flags = reaction.f;
					if ((flags & 2) !== 0) mark(reaction);
					else {
						var effect = reaction;
						if (flags & 4194320 && !this.async_deriveds.has(effect)) {
							this.#maybe_dirty_effects.delete(effect);
							set_signal_status(effect, DIRTY);
							this.schedule(effect);
						}
					}
				}
			};
			for (const source of this.current.keys()) mark(source);
			this.oncommit(() => batch.discard());
			batch.#unlink();
			current_batch = this;
			this.#process();
		}
		#defer_effects(effects) {
			for (var i = 0; i < effects.length; i += 1) defer_effect(effects[i], this.#dirty_effects, this.#maybe_dirty_effects);
		}
		capture(source, value, is_derived = false) {
			if (source.v !== UNINITIALIZED && !this.previous.has(source)) this.previous.set(source, source.v);
			if ((source.f & 8388608) === 0) {
				this.current.set(source, [value, is_derived]);
				batch_values?.set(source, value);
			}
			if (!this.is_fork) source.v = value;
		}
		activate() {
			current_batch = this;
		}
		deactivate() {
			current_batch = null;
			batch_values = null;
		}
		flush() {
			try {
				is_processing = true;
				current_batch = this;
				this.#process();
			} finally {
				flush_count = 0;
				last_scheduled_effect = null;
				collected_effects = null;
				legacy_updates = null;
				is_processing = false;
				current_batch = null;
				batch_values = null;
				old_values.clear();
			}
		}
		discard() {
			for (const fn of this.#discard_callbacks) fn(this);
			this.#discard_callbacks.clear();
			this.#fork_commit_callbacks.clear();
			this.#unlink();
		}
		register_created_effect(effect) {
			this.#new_effects.push(effect);
		}
		#commit() {
			this.#unlink();
			for (let batch = first_batch; batch !== null; batch = batch.#next) {
				var is_earlier = batch.id < this.id;
				var sources = [];
				for (const [source, [value, is_derived]] of this.current) {
					if (batch.current.has(source)) {
						var batch_value = batch.current.get(source)[0];
						if (is_earlier && value !== batch_value) batch.current.set(source, [value, is_derived]);
						else continue;
					}
					sources.push(source);
				}
				if (is_earlier) for (const [effect, deferred] of this.async_deriveds) {
					const d = batch.async_deriveds.get(effect);
					if (d) deferred.promise.then(d.resolve);
				}
				if (!batch.#started) continue;
				var others = [...batch.current.keys()].filter((s) => !this.current.has(s));
				if (others.length === 0) {
					if (is_earlier) batch.discard();
				} else if (sources.length > 0) {
					if (is_earlier) for (const unskipped of this.#unskipped_branches) batch.unskip_effect(unskipped, (e) => {
						if ((e.f & 4194320) !== 0) batch.schedule(e);
						else batch.#defer_effects([e]);
					});
					batch.activate();
					var marked = new Set();
					var checked = new Map();
					for (var source of sources) mark_effects(source, others, marked, checked);
					checked = new Map();
					var current_unequal = [...batch.current.keys()].filter((c) => this.current.has(c) ? this.current.get(c)[0] !== c.v : true);
					if (current_unequal.length > 0) {
						for (const effect of this.#new_effects) if ((effect.f & 155648) === 0 && depends_on(effect, current_unequal, checked)) if ((effect.f & 4194320) !== 0) {
							set_signal_status(effect, DIRTY);
							batch.schedule(effect);
						} else batch.#dirty_effects.add(effect);
					}
					if (batch.#roots.length > 0 && !batch.#decrement_queued) {
						batch.apply();
						for (var root of batch.#roots) batch.#traverse(root, [], []);
						batch.#roots = [];
					}
					batch.deactivate();
				}
			}
		}
		increment(blocking, effect) {
			this.#pending += 1;
			if (blocking) {
				let blocking_pending_count = this.#blocking_pending.get(effect) ?? 0;
				this.#blocking_pending.set(effect, blocking_pending_count + 1);
			}
		}
		decrement(blocking, effect) {
			this.#pending -= 1;
			if (blocking) {
				let blocking_pending_count = this.#blocking_pending.get(effect) ?? 0;
				if (blocking_pending_count === 1) this.#blocking_pending.delete(effect);
				else this.#blocking_pending.set(effect, blocking_pending_count - 1);
			}
			if (this.#decrement_queued) return;
			this.#decrement_queued = true;
			queue_micro_task(() => {
				this.#decrement_queued = false;
				if (this.linked) this.flush();
			});
		}
		transfer_effects(dirty_effects, maybe_dirty_effects) {
			for (const e of dirty_effects) this.#dirty_effects.add(e);
			for (const e of maybe_dirty_effects) this.#maybe_dirty_effects.add(e);
			dirty_effects.clear();
			maybe_dirty_effects.clear();
		}
		oncommit(fn) {
			this.#commit_callbacks.add(fn);
		}
		ondiscard(fn) {
			this.#discard_callbacks.add(fn);
		}
		on_fork_commit(fn) {
			this.#fork_commit_callbacks.add(fn);
		}
		run_fork_commit_callbacks() {
			for (const fn of this.#fork_commit_callbacks) fn(this);
			this.#fork_commit_callbacks.clear();
		}
		settled() {
			return (this.#deferred ??= deferred()).promise;
		}
		static ensure() {
			if (current_batch === null) {
				const batch = current_batch = new Batch();
				batch.#link();
				if (!is_processing && !is_flushing_sync) queue_micro_task(() => {
					if (!batch.#started) batch.flush();
				});
			}
			return current_batch;
		}
		apply() {
			if (!async_mode_flag || !this.is_fork && this.#prev === null && this.#next === null) {
				batch_values = null;
				return;
			}
			batch_values = new Map();
			for (const [source, [value]] of this.current) batch_values.set(source, value);
			for (let batch = first_batch; batch !== null; batch = batch.#next) {
				if (batch === this || batch.is_fork) continue;
				var intersects = false;
				if (batch.id < this.id) for (const [source, [, is_derived]] of batch.current) {
					if (is_derived) continue;
					if (this.current.has(source)) {
						intersects = true;
						break;
					}
				}
				if (!intersects) {
					for (const [source, previous] of batch.previous) if (!batch_values.has(source)) batch_values.set(source, previous);
				}
			}
		}
		schedule(effect) {
			last_scheduled_effect = effect;
			if (effect.b?.is_pending && (effect.f & 16777228) !== 0 && (effect.f & 32768) === 0) {
				effect.b.defer_effect(effect);
				return;
			}
			var e = effect;
			while (e.parent !== null) {
				e = e.parent;
				var flags = e.f;
				if (collected_effects !== null && e === active_effect) {
					if (async_mode_flag) return;
					if ((active_reaction === null || (active_reaction.f & 2) === 0) && !legacy_is_updating_store) return;
				}
				if ((flags & 96) !== 0) {
					if ((flags & 1024) === 0) return;
					e.f ^= CLEAN;
				}
			}
			this.#roots.push(e);
		}
		#link() {
			if (last_batch === null) first_batch = last_batch = this;
			else {
				last_batch.#next = this;
				this.#prev = last_batch;
			}
			last_batch = this;
		}
		#unlink() {
			var prev = this.#prev;
			var next = this.#next;
			if (prev === null) first_batch = next;
			else prev.#next = next;
			if (next === null) last_batch = prev;
			else next.#prev = prev;
			this.linked = false;
		}
	};
	function flushSync(fn) {
		var was_flushing_sync = is_flushing_sync;
		is_flushing_sync = true;
		try {
			var result;
			if (fn) {
				if (current_batch !== null && !current_batch.is_fork) current_batch.flush();
				result = fn();
			}
			while (true) {
				flush_tasks();
				if (current_batch === null) return result;
				current_batch.flush();
			}
		} finally {
			is_flushing_sync = was_flushing_sync;
		}
	}
	function infinite_loop_guard() {
		try {
			effect_update_depth_exceeded();
		} catch (error) {
			invoke_error_boundary(error, last_scheduled_effect);
		}
	}
	var eager_block_effects = null;
	function flush_queued_effects(effects) {
		var length = effects.length;
		if (length === 0) return;
		var i = 0;
		while (i < length) {
			var effect = effects[i++];
			if ((effect.f & 24576) === 0 && is_dirty(effect)) {
				eager_block_effects = new Set();
				update_effect(effect);
				if (effect.deps === null && effect.first === null && effect.nodes === null && effect.teardown === null && effect.ac === null) unlink_effect(effect);
				if (eager_block_effects?.size > 0) {
					old_values.clear();
					for (const e of eager_block_effects) {
						if ((e.f & 24576) !== 0) continue;
						const ordered_effects = [e];
						let ancestor = e.parent;
						while (ancestor !== null) {
							if (eager_block_effects.has(ancestor)) {
								eager_block_effects.delete(ancestor);
								ordered_effects.push(ancestor);
							}
							ancestor = ancestor.parent;
						}
						for (let j = ordered_effects.length - 1; j >= 0; j--) {
							const e = ordered_effects[j];
							if ((e.f & 24576) !== 0) continue;
							update_effect(e);
						}
					}
					eager_block_effects.clear();
				}
			}
		}
		eager_block_effects = null;
	}
	function mark_effects(value, sources, marked, checked) {
		if (marked.has(value)) return;
		marked.add(value);
		if (value.reactions !== null) for (const reaction of value.reactions) {
			const flags = reaction.f;
			if ((flags & 2) !== 0) mark_effects(reaction, sources, marked, checked);
			else if ((flags & 4194320) !== 0 && (flags & 2048) === 0 && depends_on(reaction, sources, checked)) {
				set_signal_status(reaction, DIRTY);
				schedule_effect(reaction);
			}
		}
	}
	function depends_on(reaction, sources, checked) {
		const depends = checked.get(reaction);
		if (depends !== void 0) return depends;
		if (reaction.deps !== null) for (const dep of reaction.deps) {
			if (includes.call(sources, dep)) return true;
			if ((dep.f & 2) !== 0 && depends_on(dep, sources, checked)) {
				checked.set(dep, true);
				return true;
			}
		}
		checked.set(reaction, false);
		return false;
	}
	function schedule_effect(effect) {
		current_batch.schedule(effect);
	}
	function reset_branch(effect, tracked) {
		if ((effect.f & 32) !== 0 && (effect.f & 1024) !== 0) return;
		if ((effect.f & 2048) !== 0) tracked.d.push(effect);
		else if ((effect.f & 4096) !== 0) tracked.m.push(effect);
		set_signal_status(effect, CLEAN);
		var e = effect.first;
		while (e !== null) {
			reset_branch(e, tracked);
			e = e.next;
		}
	}
	function reset_all(effect) {
		set_signal_status(effect, CLEAN);
		var e = effect.first;
		while (e !== null) {
			reset_all(e);
			e = e.next;
		}
	}
	function createSubscriber(start) {
		let subscribers = 0;
		let version = source(0);
		let stop;
		return () => {
			if (effect_tracking()) {
				get(version);
				render_effect(() => {
					if (subscribers === 0) stop = untrack(() => start(() => increment(version)));
					subscribers += 1;
					return () => {
						queue_micro_task(() => {
							subscribers -= 1;
							if (subscribers === 0) {
								stop?.();
								stop = void 0;
								increment(version);
							}
						});
					};
				});
			}
		};
	}
	var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
	function boundary(node, props, children, transform_error) {
		new Boundary(node, props, children, transform_error);
	}
	var Boundary = class {
		parent;
		is_pending = false;
		transform_error;
		#anchor;
		#hydrate_open = hydrating ? hydrate_node : null;
		#props;
		#children;
		#effect;
		#main_effect = null;
		#pending_effect = null;
		#failed_effect = null;
		#offscreen_fragment = null;
		#local_pending_count = 0;
		#pending_count = 0;
		#pending_count_update_queued = false;
		#dirty_effects = new Set();
		#maybe_dirty_effects = new Set();
		#effect_pending = null;
		#effect_pending_subscriber = createSubscriber(() => {
			this.#effect_pending = source(this.#local_pending_count);
			return () => {
				this.#effect_pending = null;
			};
		});
		constructor(node, props, children, transform_error) {
			this.#anchor = node;
			this.#props = props;
			this.#children = (anchor) => {
				var effect = active_effect;
				effect.b = this;
				effect.f |= 128;
				children(anchor);
			};
			this.parent = active_effect.b;
			this.transform_error = transform_error ?? this.parent?.transform_error ?? ((e) => e);
			this.#effect = block(() => {
				if (hydrating) {
					const comment = this.#hydrate_open;
					hydrate_next();
					const server_rendered_pending = comment.data === "[!";
					if (comment.data.startsWith("[?")) {
						const serialized_error = JSON.parse(comment.data.slice(2));
						this.#hydrate_failed_content(serialized_error);
					} else if (server_rendered_pending) this.#hydrate_pending_content();
					else this.#hydrate_resolved_content();
				} else this.#render();
			}, flags);
			if (hydrating) this.#anchor = hydrate_node;
		}
		#hydrate_resolved_content() {
			try {
				this.#main_effect = branch(() => this.#children(this.#anchor));
			} catch (error) {
				this.error(error);
			}
		}
		#hydrate_failed_content(error) {
			const failed = this.#props.failed;
			if (!failed) return;
			this.#failed_effect = branch(() => {
				failed(this.#anchor, () => error, () => () => {});
			});
		}
		#hydrate_pending_content() {
			const pending = this.#props.pending;
			if (!pending) return;
			this.is_pending = true;
			this.#pending_effect = branch(() => pending(this.#anchor));
			queue_micro_task(() => {
				var fragment = this.#offscreen_fragment = document.createDocumentFragment();
				var anchor = create_text();
				fragment.append(anchor);
				this.#main_effect = this.#run(() => {
					return branch(() => this.#children(anchor));
				});
				if (this.#pending_count === 0) {
					this.#anchor.before(fragment);
					this.#offscreen_fragment = null;
					pause_effect(this.#pending_effect, () => {
						this.#pending_effect = null;
					});
					this.#resolve(current_batch);
				}
			});
		}
		#render() {
			try {
				this.is_pending = this.has_pending_snippet();
				this.#pending_count = 0;
				this.#local_pending_count = 0;
				this.#main_effect = branch(() => {
					this.#children(this.#anchor);
				});
				if (this.#pending_count > 0) {
					var fragment = this.#offscreen_fragment = document.createDocumentFragment();
					move_effect(this.#main_effect, fragment);
					const pending = this.#props.pending;
					this.#pending_effect = branch(() => pending(this.#anchor));
				} else this.#resolve(current_batch);
			} catch (error) {
				this.error(error);
			}
		}
		#resolve(batch) {
			this.is_pending = false;
			batch.transfer_effects(this.#dirty_effects, this.#maybe_dirty_effects);
		}
		defer_effect(effect) {
			defer_effect(effect, this.#dirty_effects, this.#maybe_dirty_effects);
		}
		is_rendered() {
			return !this.is_pending && (!this.parent || this.parent.is_rendered());
		}
		has_pending_snippet() {
			return !!this.#props.pending;
		}
		#run(fn) {
			var previous_effect = active_effect;
			var previous_reaction = active_reaction;
			var previous_ctx = component_context;
			set_active_effect(this.#effect);
			set_active_reaction(this.#effect);
			set_component_context(this.#effect.ctx);
			try {
				Batch.ensure();
				return fn();
			} catch (e) {
				handle_error(e);
				return null;
			} finally {
				set_active_effect(previous_effect);
				set_active_reaction(previous_reaction);
				set_component_context(previous_ctx);
			}
		}
		#update_pending_count(d, batch) {
			if (!this.has_pending_snippet()) {
				if (this.parent) this.parent.#update_pending_count(d, batch);
				return;
			}
			this.#pending_count += d;
			if (this.#pending_count === 0) {
				this.#resolve(batch);
				if (this.#pending_effect) pause_effect(this.#pending_effect, () => {
					this.#pending_effect = null;
				});
				if (this.#offscreen_fragment) {
					this.#anchor.before(this.#offscreen_fragment);
					this.#offscreen_fragment = null;
				}
			}
		}
		update_pending_count(d, batch) {
			this.#update_pending_count(d, batch);
			this.#local_pending_count += d;
			if (!this.#effect_pending || this.#pending_count_update_queued) return;
			this.#pending_count_update_queued = true;
			queue_micro_task(() => {
				this.#pending_count_update_queued = false;
				if (this.#effect_pending) internal_set(this.#effect_pending, this.#local_pending_count);
			});
		}
		get_effect_pending() {
			this.#effect_pending_subscriber();
			return get(this.#effect_pending);
		}
		error(error) {
			if (!this.#props.onerror && !this.#props.failed) throw error;
			if (current_batch?.is_fork) {
				if (this.#main_effect) current_batch.skip_effect(this.#main_effect);
				if (this.#pending_effect) current_batch.skip_effect(this.#pending_effect);
				if (this.#failed_effect) current_batch.skip_effect(this.#failed_effect);
				current_batch.on_fork_commit(() => {
					this.#handle_error(error);
				});
			} else this.#handle_error(error);
		}
		#handle_error(error) {
			if (this.#main_effect) {
				destroy_effect(this.#main_effect);
				this.#main_effect = null;
			}
			if (this.#pending_effect) {
				destroy_effect(this.#pending_effect);
				this.#pending_effect = null;
			}
			if (this.#failed_effect) {
				destroy_effect(this.#failed_effect);
				this.#failed_effect = null;
			}
			if (hydrating) {
				set_hydrate_node(this.#hydrate_open);
				next();
				set_hydrate_node(skip_nodes());
			}
			var onerror = this.#props.onerror;
			let failed = this.#props.failed;
			var did_reset = false;
			var calling_on_error = false;
			const reset = () => {
				if (did_reset) {
					svelte_boundary_reset_noop();
					return;
				}
				did_reset = true;
				if (calling_on_error) svelte_boundary_reset_onerror();
				if (this.#failed_effect !== null) pause_effect(this.#failed_effect, () => {
					this.#failed_effect = null;
				});
				this.#run(() => {
					this.#render();
				});
			};
			const handle_error_result = (transformed_error) => {
				try {
					calling_on_error = true;
					onerror?.(transformed_error, reset);
					calling_on_error = false;
				} catch (error) {
					invoke_error_boundary(error, this.#effect && this.#effect.parent);
				}
				if (failed) this.#failed_effect = this.#run(() => {
					try {
						return branch(() => {
							var effect = active_effect;
							effect.b = this;
							effect.f |= 128;
							failed(this.#anchor, () => transformed_error, () => reset);
						});
					} catch (error) {
						invoke_error_boundary(error, this.#effect.parent);
						return null;
					}
				});
			};
			queue_micro_task(() => {
				var result;
				try {
					result = this.transform_error(error);
				} catch (e) {
					invoke_error_boundary(e, this.#effect && this.#effect.parent);
					return;
				}
				if (result !== null && typeof result === "object" && typeof result.then === "function") result.then(handle_error_result, (e) => invoke_error_boundary(e, this.#effect && this.#effect.parent));
				else handle_error_result(result);
			});
		}
	};
	function flatten(blockers, sync, async, fn) {
		const d = is_runes() ? derived : derived_safe_equal;
		var pending = blockers.filter((b) => !b.settled);
		if (async.length === 0 && pending.length === 0) {
			fn(sync.map(d));
			return;
		}
		var parent = active_effect;
		var restore = capture();
		var blocker_promise = pending.length === 1 ? pending[0].promise : pending.length > 1 ? Promise.all(pending.map((b) => b.promise)) : null;
		function finish(values) {
			if ((parent.f & 16384) !== 0) return;
			restore();
			try {
				fn(values);
			} catch (error) {
				invoke_error_boundary(error, parent);
			}
			unset_context();
		}
		var decrement_pending = increment_pending();
		if (async.length === 0) {
			blocker_promise.then(() => finish(sync.map(d))).finally(decrement_pending);
			return;
		}
		function run() {
			Promise.all(async.map((expression) => async_derived(expression))).then((result) => finish([...sync.map(d), ...result])).catch((error) => invoke_error_boundary(error, parent)).finally(decrement_pending);
		}
		if (blocker_promise) blocker_promise.then(() => {
			restore();
			run();
			unset_context();
		});
		else run();
	}
	function capture() {
		var previous_effect = active_effect;
		var previous_reaction = active_reaction;
		var previous_component_context = component_context;
		var previous_batch = current_batch;
		return function restore(activate_batch = true) {
			set_active_effect(previous_effect);
			set_active_reaction(previous_reaction);
			set_component_context(previous_component_context);
			if (activate_batch && (previous_effect.f & 16384) === 0) {
				previous_batch?.activate();
				previous_batch?.apply();
			}
		};
	}
	function unset_context(deactivate_batch = true) {
		set_active_effect(null);
		set_active_reaction(null);
		set_component_context(null);
		if (deactivate_batch) current_batch?.deactivate();
	}
	function increment_pending() {
		var effect = active_effect;
		var boundary = effect.b;
		var batch = current_batch;
		var blocking = boundary.is_rendered();
		boundary.update_pending_count(1, batch);
		batch.increment(blocking, effect);
		return () => {
			boundary.update_pending_count(-1, batch);
			batch.decrement(blocking, effect);
		};
	}
	function derived(fn) {
		var flags = 2 | DIRTY;
		if (active_effect !== null) active_effect.f |= EFFECT_PRESERVED;
		return {
			ctx: component_context,
			deps: null,
			effects: null,
			equals,
			f: flags,
			fn,
			reactions: null,
			rv: 0,
			v: UNINITIALIZED,
			wv: 0,
			parent: active_effect,
			ac: null
		};
	}
	var OBSOLETE = Symbol("obsolete");
	function async_derived(fn, label, location) {
		let parent = active_effect;
		if (parent === null) async_derived_orphan();
		var promise = void 0;
		var signal = source(UNINITIALIZED);
		var should_suspend = !active_reaction;
		var deferreds = new Set();
		async_effect(() => {
			var effect = active_effect;
			var d = deferred();
			promise = d.promise;
			try {
				Promise.resolve(fn()).then(d.resolve, (e) => {
					if (e !== STALE_REACTION) d.reject(e);
				}).finally(unset_context);
			} catch (error) {
				d.reject(error);
				unset_context();
			}
			var batch = current_batch;
			if (should_suspend) {
				if ((effect.f & 32768) !== 0) var decrement_pending = increment_pending();
				if (parent.b.is_rendered()) batch.async_deriveds.get(effect)?.reject(OBSOLETE);
				else for (const d of deferreds.values()) d.reject(OBSOLETE);
				deferreds.add(d);
				batch.async_deriveds.set(effect, d);
			}
			const handler = (value, error = void 0) => {
				decrement_pending?.();
				deferreds.delete(d);
				if (error === OBSOLETE) return;
				batch.activate();
				if (error) {
					signal.f |= ERROR_VALUE;
					internal_set(signal, error);
				} else {
					if ((signal.f & 8388608) !== 0) signal.f ^= ERROR_VALUE;
					internal_set(signal, value);
				}
				batch.deactivate();
			};
			d.promise.then(handler, (e) => handler(null, e || "unknown"));
		});
		teardown(() => {
			for (const d of deferreds) d.reject(OBSOLETE);
		});
		return new Promise((fulfil) => {
			function next(p) {
				function go() {
					if (p === promise) fulfil(signal);
					else next(promise);
				}
				p.then(go, go);
			}
			next(promise);
		});
	}
	function user_derived(fn) {
		const d = derived(fn);
		if (!async_mode_flag) push_reaction_value(d);
		return d;
	}
	function derived_safe_equal(fn) {
		const signal = derived(fn);
		signal.equals = safe_equals;
		return signal;
	}
	function destroy_derived_effects(derived) {
		var effects = derived.effects;
		if (effects !== null) {
			derived.effects = null;
			for (var i = 0; i < effects.length; i += 1) destroy_effect(effects[i]);
		}
	}
	function execute_derived(derived) {
		var value;
		var prev_active_effect = active_effect;
		var parent = derived.parent;
		if (!is_destroying_effect && parent !== null && derived.v !== UNINITIALIZED && (parent.f & 24576) !== 0) {
			derived_inert();
			return derived.v;
		}
		set_active_effect(parent);
		try {
			derived.f &= ~WAS_MARKED;
			destroy_derived_effects(derived);
			value = update_reaction(derived);
		} finally {
			set_active_effect(prev_active_effect);
		}
		return value;
	}
	function update_derived(derived) {
		var value = execute_derived(derived);
		if (!derived.equals(value)) {
			derived.wv = increment_write_version();
			if (!current_batch?.is_fork || derived.deps === null) {
				if (current_batch !== null) {
					current_batch.capture(derived, value, true);
					previous_batch?.capture(derived, value, true);
				} else derived.v = value;
				if (derived.deps === null) {
					set_signal_status(derived, CLEAN);
					return;
				}
			}
		}
		if (is_destroying_effect) return;
		if (batch_values !== null) {
			if (effect_tracking() || current_batch?.is_fork) batch_values.set(derived, value);
		} else update_derived_status(derived);
	}
	function freeze_derived_effects(derived) {
		if (derived.effects === null) return;
		for (const e of derived.effects) if (e.teardown || e.ac) {
			e.teardown?.();
			e.ac?.abort(STALE_REACTION);
			if (e.fn !== null) e.teardown = noop;
			e.ac = null;
			remove_reactions(e, 0);
			destroy_effect_children(e);
		}
	}
	function unfreeze_derived_effects(derived) {
		if (derived.effects === null) return;
		for (const e of derived.effects) if (e.teardown && e.fn !== null) update_effect(e);
	}
	var eager_effects = new Set();
	var old_values = new Map();
	var eager_effects_deferred = false;
	function source(v, stack) {
		return {
			f: 0,
			v,
			reactions: null,
			equals,
			rv: 0,
			wv: 0
		};
	}
	function state$1(v, stack) {
		const s = source(v, stack);
		push_reaction_value(s);
		return s;
	}
	function mutable_source(initial_value, immutable = false, trackable = true) {
		const s = source(initial_value);
		if (!immutable) s.equals = safe_equals;
		if (legacy_mode_flag && trackable && component_context !== null && component_context.l !== null) (component_context.l.s ??= []).push(s);
		return s;
	}
	function set(source, value, should_proxy = false) {
		if (active_reaction !== null && (!untracking || (active_reaction.f & 131072) !== 0) && is_runes() && (active_reaction.f & 4325394) !== 0 && (current_sources === null || !includes.call(current_sources, source))) state_unsafe_mutation();
		return internal_set(source, should_proxy ? proxy(value) : value, legacy_updates);
	}
	function internal_set(source, value, updated_during_traversal = null) {
		if (!source.equals(value)) {
			old_values.set(source, is_destroying_effect ? value : source.v);
			var batch = Batch.ensure();
			batch.capture(source, value);
			if ((source.f & 2) !== 0) {
				const derived = source;
				if ((source.f & 2048) !== 0) execute_derived(derived);
				if (batch_values === null) update_derived_status(derived);
			}
			source.wv = increment_write_version();
			mark_reactions(source, DIRTY, updated_during_traversal);
			if (is_runes() && active_effect !== null && (active_effect.f & 1024) !== 0 && (active_effect.f & 96) === 0) if (untracked_writes === null) set_untracked_writes([source]);
			else untracked_writes.push(source);
			if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) flush_eager_effects();
		}
		return value;
	}
	function flush_eager_effects() {
		eager_effects_deferred = false;
		for (const effect of eager_effects) {
			if ((effect.f & 1024) !== 0) set_signal_status(effect, MAYBE_DIRTY);
			let dirty;
			try {
				dirty = is_dirty(effect);
			} catch {
				dirty = true;
			}
			if (dirty) update_effect(effect);
		}
		eager_effects.clear();
	}
	function increment(source) {
		set(source, source.v + 1);
	}
	function mark_reactions(signal, status, updated_during_traversal) {
		var reactions = signal.reactions;
		if (reactions === null) return;
		var runes = is_runes();
		var length = reactions.length;
		for (var i = 0; i < length; i++) {
			var reaction = reactions[i];
			var flags = reaction.f;
			if (!runes && reaction === active_effect) continue;
			var not_dirty = (flags & DIRTY) === 0;
			if (not_dirty) set_signal_status(reaction, status);
			if ((flags & 131072) !== 0) eager_effects.add(reaction);
			else if ((flags & 2) !== 0) {
				var derived = reaction;
				batch_values?.delete(derived);
				if ((flags & 65536) === 0) {
					if (flags & 512 && (active_effect === null || (active_effect.f & 2097152) === 0)) reaction.f |= WAS_MARKED;
					mark_reactions(derived, MAYBE_DIRTY, updated_during_traversal);
				}
			} else if (not_dirty) {
				var effect = reaction;
				if ((flags & 16) !== 0 && eager_block_effects !== null) eager_block_effects.add(effect);
				if (updated_during_traversal !== null) updated_during_traversal.push(effect);
				else schedule_effect(effect);
			}
		}
	}
	function proxy(value) {
		if (typeof value !== "object" || value === null || STATE_SYMBOL in value) return value;
		const prototype = get_prototype_of(value);
		if (prototype !== object_prototype && prototype !== array_prototype) return value;
		var sources = new Map();
		var is_proxied_array = is_array(value);
		var version = state$1(0);
		var stack = null;
		var parent_version = update_version;
		var with_parent = (fn) => {
			if (update_version === parent_version) return fn();
			var reaction = active_reaction;
			var version = update_version;
			set_active_reaction(null);
			set_update_version(parent_version);
			var result = fn();
			set_active_reaction(reaction);
			set_update_version(version);
			return result;
		};
		if (is_proxied_array) sources.set("length", state$1(value.length, stack));
		return new Proxy(value, {
			defineProperty(_, prop, descriptor) {
				if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) state_descriptors_fixed();
				var s = sources.get(prop);
				if (s === void 0) with_parent(() => {
					var s = state$1(descriptor.value, stack);
					sources.set(prop, s);
					return s;
				});
				else set(s, descriptor.value, true);
				return true;
			},
			deleteProperty(target, prop) {
				var s = sources.get(prop);
				if (s === void 0) {
					if (prop in target) {
						const s = with_parent(() => state$1(UNINITIALIZED, stack));
						sources.set(prop, s);
						increment(version);
					}
				} else {
					set(s, UNINITIALIZED);
					increment(version);
				}
				return true;
			},
			get(target, prop, receiver) {
				if (prop === STATE_SYMBOL) return value;
				var s = sources.get(prop);
				var exists = prop in target;
				if (s === void 0 && (!exists || get_descriptor(target, prop)?.writable)) {
					s = with_parent(() => {
						return state$1(proxy(exists ? target[prop] : UNINITIALIZED), stack);
					});
					sources.set(prop, s);
				}
				if (s !== void 0) {
					var v = get(s);
					return v === UNINITIALIZED ? void 0 : v;
				}
				return Reflect.get(target, prop, receiver);
			},
			getOwnPropertyDescriptor(target, prop) {
				var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
				if (descriptor && "value" in descriptor) {
					var s = sources.get(prop);
					if (s) descriptor.value = get(s);
				} else if (descriptor === void 0) {
					var source = sources.get(prop);
					var value = source?.v;
					if (source !== void 0 && value !== UNINITIALIZED) return {
						enumerable: true,
						configurable: true,
						value,
						writable: true
					};
				}
				return descriptor;
			},
			has(target, prop) {
				if (prop === STATE_SYMBOL) return true;
				var s = sources.get(prop);
				var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop);
				if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop)?.writable)) {
					if (s === void 0) {
						s = with_parent(() => {
							return state$1(has ? proxy(target[prop]) : UNINITIALIZED, stack);
						});
						sources.set(prop, s);
					}
					if (get(s) === UNINITIALIZED) return false;
				}
				return has;
			},
			set(target, prop, value, receiver) {
				var s = sources.get(prop);
				var has = prop in target;
				if (is_proxied_array && prop === "length") for (var i = value; i < s.v; i += 1) {
					var other_s = sources.get(i + "");
					if (other_s !== void 0) set(other_s, UNINITIALIZED);
					else if (i in target) {
						other_s = with_parent(() => state$1(UNINITIALIZED, stack));
						sources.set(i + "", other_s);
					}
				}
				if (s === void 0) {
					if (!has || get_descriptor(target, prop)?.writable) {
						s = with_parent(() => state$1(void 0, stack));
						set(s, proxy(value));
						sources.set(prop, s);
					}
				} else {
					has = s.v !== UNINITIALIZED;
					var p = with_parent(() => proxy(value));
					set(s, p);
				}
				var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
				if (descriptor?.set) descriptor.set.call(receiver, value);
				if (!has) {
					if (is_proxied_array && typeof prop === "string") {
						var ls = sources.get("length");
						var n = Number(prop);
						if (Number.isInteger(n) && n >= ls.v) set(ls, n + 1);
					}
					increment(version);
				}
				return true;
			},
			ownKeys(target) {
				get(version);
				var own_keys = Reflect.ownKeys(target).filter((key) => {
					var source = sources.get(key);
					return source === void 0 || source.v !== UNINITIALIZED;
				});
				for (var [key, source] of sources) if (source.v !== UNINITIALIZED && !(key in target)) own_keys.push(key);
				return own_keys;
			},
			setPrototypeOf() {
				state_prototype_fixed();
			}
		});
	}
	var $window;
	var $document;
	var is_firefox;
	var first_child_getter;
	var next_sibling_getter;
	function init_operations() {
		if ($window !== void 0) return;
		$window = window;
		$document = document;
		is_firefox = /Firefox/.test(navigator.userAgent);
		var element_prototype = Element.prototype;
		var node_prototype = Node.prototype;
		var text_prototype = Text.prototype;
		first_child_getter = get_descriptor(node_prototype, "firstChild").get;
		next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
		if (is_extensible(element_prototype)) {
			element_prototype[CLASS_CACHE] = void 0;
			element_prototype[ATTRIBUTES_CACHE] = null;
			element_prototype[STYLE_CACHE] = void 0;
			element_prototype.__e = void 0;
		}
		if (is_extensible(text_prototype)) text_prototype[TEXT_CACHE] = void 0;
	}
	function create_text(value = "") {
		return document.createTextNode(value);
	}
	function get_first_child(node) {
		return first_child_getter.call(node);
	}
	function get_next_sibling(node) {
		return next_sibling_getter.call(node);
	}
	function child(node, is_text) {
		if (!hydrating) return get_first_child(node);
		var child = get_first_child(hydrate_node);
		if (child === null) child = hydrate_node.appendChild(create_text());
		else if (is_text && child.nodeType !== 3) {
			var text = create_text();
			child?.before(text);
			set_hydrate_node(text);
			return text;
		}
		if (is_text) merge_text_nodes(child);
		set_hydrate_node(child);
		return child;
	}
	function first_child(node, is_text = false) {
		if (!hydrating) {
			var first = get_first_child(node);
			if (first instanceof Comment && first.data === "") return get_next_sibling(first);
			return first;
		}
		if (is_text) {
			if (hydrate_node?.nodeType !== 3) {
				var text = create_text();
				hydrate_node?.before(text);
				set_hydrate_node(text);
				return text;
			}
			merge_text_nodes(hydrate_node);
		}
		return hydrate_node;
	}
	function sibling(node, count = 1, is_text = false) {
		let next_sibling = hydrating ? hydrate_node : node;
		var last_sibling;
		while (count--) {
			last_sibling = next_sibling;
			next_sibling = get_next_sibling(next_sibling);
		}
		if (!hydrating) return next_sibling;
		if (is_text) {
			if (next_sibling?.nodeType !== 3) {
				var text = create_text();
				if (next_sibling === null) last_sibling?.after(text);
				else next_sibling.before(text);
				set_hydrate_node(text);
				return text;
			}
			merge_text_nodes(next_sibling);
		}
		set_hydrate_node(next_sibling);
		return next_sibling;
	}
	function clear_text_content(node) {
		node.textContent = "";
	}
	function should_defer_append() {
		if (!async_mode_flag) return false;
		if (eager_block_effects !== null) return false;
		return (active_effect.f & REACTION_RAN) !== 0;
	}
	function create_element(tag, namespace, is) {
		let options = is ? { is } : void 0;
		return document.createElementNS(namespace ?? "http://www.w3.org/1999/xhtml", tag, options);
	}
	function merge_text_nodes(text) {
		if (text.nodeValue.length < 65536) return;
		let next = text.nextSibling;
		while (next !== null && next.nodeType === 3) {
			next.remove();
			text.nodeValue += next.nodeValue;
			next = text.nextSibling;
		}
	}
	var listening_to_form_reset = false;
	function add_form_reset_listener() {
		if (!listening_to_form_reset) {
			listening_to_form_reset = true;
			document.addEventListener("reset", (evt) => {
				Promise.resolve().then(() => {
					if (!evt.defaultPrevented) for (const e of evt.target.elements) e[FORM_RESET_HANDLER]?.();
				});
			}, { capture: true });
		}
	}
	function without_reactive_context(fn) {
		var previous_reaction = active_reaction;
		var previous_effect = active_effect;
		set_active_reaction(null);
		set_active_effect(null);
		try {
			return fn();
		} finally {
			set_active_reaction(previous_reaction);
			set_active_effect(previous_effect);
		}
	}
	function listen_to_event_and_reset_event(element, event, handler, on_reset = handler) {
		element.addEventListener(event, () => without_reactive_context(handler));
		const prev = element[FORM_RESET_HANDLER];
		if (prev) element[FORM_RESET_HANDLER] = () => {
			prev();
			on_reset(true);
		};
		else element[FORM_RESET_HANDLER] = () => on_reset(true);
		add_form_reset_listener();
	}
	function validate_effect(rune) {
		if (active_effect === null) {
			if (active_reaction === null) effect_orphan(rune);
			effect_in_unowned_derived();
		}
		if (is_destroying_effect) effect_in_teardown(rune);
	}
	function push_effect(effect, parent_effect) {
		var parent_last = parent_effect.last;
		if (parent_last === null) parent_effect.last = parent_effect.first = effect;
		else {
			parent_last.next = effect;
			effect.prev = parent_last;
			parent_effect.last = effect;
		}
	}
	function create_effect(type, fn) {
		var parent = active_effect;
		if (parent !== null && (parent.f & 8192) !== 0) type |= INERT;
		var effect = {
			ctx: component_context,
			deps: null,
			nodes: null,
			f: type | DIRTY | 512,
			first: null,
			fn,
			last: null,
			next: null,
			parent,
			b: parent && parent.b,
			prev: null,
			teardown: null,
			wv: 0,
			ac: null
		};
		current_batch?.register_created_effect(effect);
		var e = effect;
		if ((type & 4) !== 0) if (collected_effects !== null) collected_effects.push(effect);
		else Batch.ensure().schedule(effect);
		else if (fn !== null) {
			try {
				update_effect(effect);
			} catch (e) {
				destroy_effect(effect);
				throw e;
			}
			if (e.deps === null && e.teardown === null && e.nodes === null && e.first === e.last && (e.f & 524288) === 0) {
				e = e.first;
				if ((type & 16) !== 0 && (type & 65536) !== 0 && e !== null) e.f |= EFFECT_TRANSPARENT;
			}
		}
		if (e !== null) {
			e.parent = parent;
			if (parent !== null) push_effect(e, parent);
			if (active_reaction !== null && (active_reaction.f & 2) !== 0 && (type & 64) === 0) {
				var derived = active_reaction;
				(derived.effects ??= []).push(e);
			}
		}
		return effect;
	}
	function effect_tracking() {
		return active_reaction !== null && !untracking;
	}
	function teardown(fn) {
		const effect = create_effect(8, null);
		set_signal_status(effect, CLEAN);
		effect.teardown = fn;
		return effect;
	}
	function user_effect(fn) {
		validate_effect("$effect");
		var flags = active_effect.f;
		if (!active_reaction && (flags & 32) !== 0 && (flags & 32768) === 0) {
			var context = component_context;
			(context.e ??= []).push(fn);
		} else return create_user_effect(fn);
	}
	function create_user_effect(fn) {
		return create_effect(4 | USER_EFFECT, fn);
	}
	function user_pre_effect(fn) {
		validate_effect("$effect.pre");
		return create_effect(8 | USER_EFFECT, fn);
	}
	function component_root(fn) {
		Batch.ensure();
		const effect = create_effect(64 | EFFECT_PRESERVED, fn);
		return (options = {}) => {
			return new Promise((fulfil) => {
				if (options.outro) pause_effect(effect, () => {
					destroy_effect(effect);
					fulfil(void 0);
				});
				else {
					destroy_effect(effect);
					fulfil(void 0);
				}
			});
		};
	}
	function effect(fn) {
		return create_effect(4, fn);
	}
	function async_effect(fn) {
		return create_effect(ASYNC | EFFECT_PRESERVED, fn);
	}
	function render_effect(fn, flags = 0) {
		return create_effect(8 | flags, fn);
	}
	function template_effect(fn, sync = [], async = [], blockers = []) {
		flatten(blockers, sync, async, (values) => {
			create_effect(8, () => fn(...values.map(get)));
		});
	}
	function deferred_template_effect(fn, sync = [], async = [], blockers = []) {
		flatten(blockers, sync, async, (values) => {
			create_effect(4, () => fn(...values.map(get)));
		});
	}
	function block(fn, flags = 0) {
		return create_effect(16 | flags, fn);
	}
	function managed(fn, flags = 0) {
		return create_effect(MANAGED_EFFECT | flags, fn);
	}
	function branch(fn) {
		return create_effect(32 | EFFECT_PRESERVED, fn);
	}
	function execute_effect_teardown(effect) {
		var teardown = effect.teardown;
		if (teardown !== null) {
			const previously_destroying_effect = is_destroying_effect;
			const previous_reaction = active_reaction;
			set_is_destroying_effect(true);
			set_active_reaction(null);
			try {
				teardown.call(null);
			} finally {
				set_is_destroying_effect(previously_destroying_effect);
				set_active_reaction(previous_reaction);
			}
		}
	}
	function destroy_effect_children(signal, remove_dom = false) {
		var effect = signal.first;
		signal.first = signal.last = null;
		while (effect !== null) {
			const controller = effect.ac;
			if (controller !== null) without_reactive_context(() => {
				controller.abort(STALE_REACTION);
			});
			var next = effect.next;
			if ((effect.f & 64) !== 0) effect.parent = null;
			else destroy_effect(effect, remove_dom);
			effect = next;
		}
	}
	function destroy_block_effect_children(signal) {
		var effect = signal.first;
		while (effect !== null) {
			var next = effect.next;
			if ((effect.f & 32) === 0) destroy_effect(effect);
			effect = next;
		}
	}
	function destroy_effect(effect, remove_dom = true) {
		var removed = false;
		if ((remove_dom || (effect.f & 262144) !== 0) && effect.nodes !== null && effect.nodes.end !== null) {
			remove_effect_dom(effect.nodes.start, effect.nodes.end);
			removed = true;
		}
		set_signal_status(effect, DESTROYING);
		destroy_effect_children(effect, remove_dom && !removed);
		remove_reactions(effect, 0);
		var transitions = effect.nodes && effect.nodes.t;
		if (transitions !== null) for (const transition of transitions) transition.stop();
		execute_effect_teardown(effect);
		effect.f ^= DESTROYING;
		effect.f |= DESTROYED;
		var parent = effect.parent;
		if (parent !== null && parent.first !== null) unlink_effect(effect);
		effect.next = effect.prev = effect.teardown = effect.ctx = effect.deps = effect.fn = effect.nodes = effect.ac = effect.b = null;
	}
	function remove_effect_dom(node, end) {
		while (node !== null) {
			var next = node === end ? null : get_next_sibling(node);
			node.remove();
			node = next;
		}
	}
	function unlink_effect(effect) {
		var parent = effect.parent;
		var prev = effect.prev;
		var next = effect.next;
		if (prev !== null) prev.next = next;
		if (next !== null) next.prev = prev;
		if (parent !== null) {
			if (parent.first === effect) parent.first = next;
			if (parent.last === effect) parent.last = prev;
		}
	}
	function pause_effect(effect, callback, destroy = true) {
		var transitions = [];
		pause_children(effect, transitions, true);
		var fn = () => {
			if (destroy) destroy_effect(effect);
			if (callback) callback();
		};
		var remaining = transitions.length;
		if (remaining > 0) {
			var check = () => --remaining || fn();
			for (var transition of transitions) transition.out(check);
		} else fn();
	}
	function pause_children(effect, transitions, local) {
		if ((effect.f & 8192) !== 0) return;
		effect.f ^= INERT;
		var t = effect.nodes && effect.nodes.t;
		if (t !== null) {
			for (const transition of t) if (transition.is_global || local) transitions.push(transition);
		}
		var child = effect.first;
		while (child !== null) {
			var sibling = child.next;
			if ((child.f & 64) === 0) {
				var transparent = (child.f & 65536) !== 0 || (child.f & 32) !== 0 && (effect.f & 16) !== 0;
				pause_children(child, transitions, transparent ? local : false);
			}
			child = sibling;
		}
	}
	function resume_effect(effect) {
		resume_children(effect, true);
	}
	function resume_children(effect, local) {
		if ((effect.f & 8192) === 0) return;
		effect.f ^= INERT;
		if ((effect.f & 1024) === 0) {
			set_signal_status(effect, DIRTY);
			Batch.ensure().schedule(effect);
		}
		var child = effect.first;
		while (child !== null) {
			var sibling = child.next;
			var transparent = (child.f & 65536) !== 0 || (child.f & 32) !== 0;
			resume_children(child, transparent ? local : false);
			child = sibling;
		}
		var t = effect.nodes && effect.nodes.t;
		if (t !== null) {
			for (const transition of t) if (transition.is_global || local) transition.in();
		}
	}
	function move_effect(effect, fragment) {
		if (!effect.nodes) return;
		var node = effect.nodes.start;
		var end = effect.nodes.end;
		while (node !== null) {
			var next = node === end ? null : get_next_sibling(node);
			fragment.append(node);
			node = next;
		}
	}
	var captured_signals = null;
	var is_updating_effect = false;
	var is_destroying_effect = false;
	function set_is_destroying_effect(value) {
		is_destroying_effect = value;
	}
	var active_reaction = null;
	var untracking = false;
	function set_active_reaction(reaction) {
		active_reaction = reaction;
	}
	var active_effect = null;
	function set_active_effect(effect) {
		active_effect = effect;
	}
	var current_sources = null;
	function push_reaction_value(value) {
		if (active_reaction !== null && (!async_mode_flag || (active_reaction.f & 2) !== 0)) if (current_sources === null) current_sources = [value];
		else current_sources.push(value);
	}
	var new_deps = null;
	var skipped_deps = 0;
	var untracked_writes = null;
	function set_untracked_writes(value) {
		untracked_writes = value;
	}
	var write_version = 1;
	var read_version = 0;
	var update_version = read_version;
	function set_update_version(value) {
		update_version = value;
	}
	function increment_write_version() {
		return ++write_version;
	}
	function is_dirty(reaction) {
		var flags = reaction.f;
		if ((flags & 2048) !== 0) return true;
		if (flags & 2) reaction.f &= ~WAS_MARKED;
		if ((flags & 4096) !== 0) {
			var dependencies = reaction.deps;
			var length = dependencies.length;
			for (var i = 0; i < length; i++) {
				var dependency = dependencies[i];
				if (is_dirty(dependency)) update_derived(dependency);
				if (dependency.wv > reaction.wv) return true;
			}
			if ((flags & 512) !== 0 && batch_values === null) set_signal_status(reaction, CLEAN);
		}
		return false;
	}
	function schedule_possible_effect_self_invalidation(signal, effect, root = true) {
		var reactions = signal.reactions;
		if (reactions === null) return;
		if (!async_mode_flag && current_sources !== null && includes.call(current_sources, signal)) return;
		for (var i = 0; i < reactions.length; i++) {
			var reaction = reactions[i];
			if ((reaction.f & 2) !== 0) schedule_possible_effect_self_invalidation(reaction, effect, false);
			else if (effect === reaction) {
				if (root) set_signal_status(reaction, DIRTY);
				else if ((reaction.f & 1024) !== 0) set_signal_status(reaction, MAYBE_DIRTY);
				schedule_effect(reaction);
			}
		}
	}
	function update_reaction(reaction) {
		var previous_deps = new_deps;
		var previous_skipped_deps = skipped_deps;
		var previous_untracked_writes = untracked_writes;
		var previous_reaction = active_reaction;
		var previous_sources = current_sources;
		var previous_component_context = component_context;
		var previous_untracking = untracking;
		var previous_update_version = update_version;
		var flags = reaction.f;
		new_deps = null;
		skipped_deps = 0;
		untracked_writes = null;
		active_reaction = (flags & 96) === 0 ? reaction : null;
		current_sources = null;
		set_component_context(reaction.ctx);
		untracking = false;
		update_version = ++read_version;
		if (reaction.ac !== null) {
			without_reactive_context(() => {
				reaction.ac.abort(STALE_REACTION);
			});
			reaction.ac = null;
		}
		try {
			reaction.f |= REACTION_IS_UPDATING;
			var fn = reaction.fn;
			var result = fn();
			reaction.f |= REACTION_RAN;
			var deps = reaction.deps;
			var is_fork = current_batch?.is_fork;
			if (new_deps !== null) {
				var i;
				if (!is_fork) remove_reactions(reaction, skipped_deps);
				if (deps !== null && skipped_deps > 0) {
					deps.length = skipped_deps + new_deps.length;
					for (i = 0; i < new_deps.length; i++) deps[skipped_deps + i] = new_deps[i];
				} else reaction.deps = deps = new_deps;
				if (effect_tracking() && (reaction.f & 512) !== 0) for (i = skipped_deps; i < deps.length; i++) (deps[i].reactions ??= []).push(reaction);
			} else if (!is_fork && deps !== null && skipped_deps < deps.length) {
				remove_reactions(reaction, skipped_deps);
				deps.length = skipped_deps;
			}
			if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & 6146) === 0) for (i = 0; i < untracked_writes.length; i++) schedule_possible_effect_self_invalidation(untracked_writes[i], reaction);
			if (previous_reaction !== null && previous_reaction !== reaction) {
				read_version++;
				if (previous_reaction.deps !== null) for (let i = 0; i < previous_skipped_deps; i += 1) previous_reaction.deps[i].rv = read_version;
				if (previous_deps !== null) for (const dep of previous_deps) dep.rv = read_version;
				if (untracked_writes !== null) if (previous_untracked_writes === null) previous_untracked_writes = untracked_writes;
				else previous_untracked_writes.push(...untracked_writes);
			}
			if ((reaction.f & 8388608) !== 0) reaction.f ^= ERROR_VALUE;
			return result;
		} catch (error) {
			return handle_error(error);
		} finally {
			reaction.f ^= REACTION_IS_UPDATING;
			new_deps = previous_deps;
			skipped_deps = previous_skipped_deps;
			untracked_writes = previous_untracked_writes;
			active_reaction = previous_reaction;
			current_sources = previous_sources;
			set_component_context(previous_component_context);
			untracking = previous_untracking;
			update_version = previous_update_version;
		}
	}
	function remove_reaction(signal, dependency) {
		let reactions = dependency.reactions;
		if (reactions !== null) {
			var index = index_of.call(reactions, signal);
			if (index !== -1) {
				var new_length = reactions.length - 1;
				if (new_length === 0) reactions = dependency.reactions = null;
				else {
					reactions[index] = reactions[new_length];
					reactions.pop();
				}
			}
		}
		if (reactions === null && (dependency.f & 2) !== 0 && (new_deps === null || !includes.call(new_deps, dependency))) {
			var derived = dependency;
			if ((derived.f & 512) !== 0) {
				derived.f ^= 512;
				derived.f &= ~WAS_MARKED;
			}
			if (derived.v !== UNINITIALIZED) update_derived_status(derived);
			freeze_derived_effects(derived);
			remove_reactions(derived, 0);
		}
	}
	function remove_reactions(signal, start_index) {
		var dependencies = signal.deps;
		if (dependencies === null) return;
		for (var i = start_index; i < dependencies.length; i++) remove_reaction(signal, dependencies[i]);
	}
	function update_effect(effect) {
		var flags = effect.f;
		if ((flags & 16384) !== 0) return;
		set_signal_status(effect, CLEAN);
		var previous_effect = active_effect;
		var was_updating_effect = is_updating_effect;
		active_effect = effect;
		is_updating_effect = true;
		try {
			if ((flags & 16777232) !== 0) destroy_block_effect_children(effect);
			else destroy_effect_children(effect);
			execute_effect_teardown(effect);
			var teardown = update_reaction(effect);
			effect.teardown = typeof teardown === "function" ? teardown : null;
			effect.wv = write_version;
		} finally {
			is_updating_effect = was_updating_effect;
			active_effect = previous_effect;
		}
	}
	async function tick() {
		if (async_mode_flag) return new Promise((f) => {
			requestAnimationFrame(() => f());
			setTimeout(() => f());
		});
		await Promise.resolve();
		flushSync();
	}
	function get(signal) {
		var is_derived = (signal.f & 2) !== 0;
		captured_signals?.add(signal);
		if (active_reaction !== null && !untracking) {
			if (!(active_effect !== null && (active_effect.f & 16384) !== 0) && (current_sources === null || !includes.call(current_sources, signal))) {
				var deps = active_reaction.deps;
				if ((active_reaction.f & 2097152) !== 0) {
					if (signal.rv < read_version) {
						signal.rv = read_version;
						if (new_deps === null && deps !== null && deps[skipped_deps] === signal) skipped_deps++;
						else if (new_deps === null) new_deps = [signal];
						else new_deps.push(signal);
					}
				} else {
					active_reaction.deps ??= [];
					if (!includes.call(active_reaction.deps, signal)) active_reaction.deps.push(signal);
					var reactions = signal.reactions;
					if (reactions === null) signal.reactions = [active_reaction];
					else if (!includes.call(reactions, active_reaction)) reactions.push(active_reaction);
				}
			}
		}
		if (is_destroying_effect && old_values.has(signal)) return old_values.get(signal);
		if (is_derived) {
			var derived = signal;
			if (is_destroying_effect) {
				var value = derived.v;
				if ((derived.f & 1024) === 0 && derived.reactions !== null || depends_on_old_values(derived)) value = execute_derived(derived);
				old_values.set(derived, value);
				return value;
			}
			var should_connect = (derived.f & 512) === 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & 512) !== 0);
			var is_new = (derived.f & REACTION_RAN) === 0;
			if (is_dirty(derived)) {
				if (should_connect) derived.f |= 512;
				update_derived(derived);
			}
			if (should_connect && !is_new) {
				unfreeze_derived_effects(derived);
				reconnect(derived);
			}
		}
		if (batch_values?.has(signal)) return batch_values.get(signal);
		if ((signal.f & 8388608) !== 0) throw signal.v;
		return signal.v;
	}
	function reconnect(derived) {
		derived.f |= 512;
		if (derived.deps === null) return;
		for (const dep of derived.deps) {
			(dep.reactions ??= []).push(derived);
			if ((dep.f & 2) !== 0 && (dep.f & 512) === 0) {
				unfreeze_derived_effects(dep);
				reconnect(dep);
			}
		}
	}
	function depends_on_old_values(derived) {
		if (derived.v === UNINITIALIZED) return true;
		if (derived.deps === null) return false;
		for (const dep of derived.deps) {
			if (old_values.has(dep)) return true;
			if ((dep.f & 2) !== 0 && depends_on_old_values(dep)) return true;
		}
		return false;
	}
	function untrack(fn) {
		var previous_untracking = untracking;
		try {
			untracking = true;
			return fn();
		} finally {
			untracking = previous_untracking;
		}
	}
	function deep_read_state(value) {
		if (typeof value !== "object" || !value || value instanceof EventTarget) return;
		if (STATE_SYMBOL in value) deep_read(value);
		else if (!Array.isArray(value)) for (let key in value) {
			const prop = value[key];
			if (typeof prop === "object" && prop && STATE_SYMBOL in prop) deep_read(prop);
		}
	}
	function deep_read(value, visited = new Set()) {
		if (typeof value === "object" && value !== null && !(value instanceof EventTarget) && !visited.has(value)) {
			visited.add(value);
			if (value instanceof Date) value.getTime();
			for (let key in value) try {
				deep_read(value[key], visited);
			} catch (e) {}
			const proto = get_prototype_of(value);
			if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
				const descriptors = get_descriptors(proto);
				for (let key in descriptors) {
					const get = descriptors[key].get;
					if (get) try {
						get.call(value);
					} catch (e) {}
				}
			}
		}
	}
	var PASSIVE_EVENTS = ["touchstart", "touchmove"];
	function is_passive_event(name) {
		return PASSIVE_EVENTS.includes(name);
	}
	var event_symbol = Symbol("events");
	var all_registered_events = new Set();
	var root_event_handles = new Set();
	function replay_events(dom) {
		if (!hydrating) return;
		dom.removeAttribute("onload");
		dom.removeAttribute("onerror");
		const event = dom.__e;
		if (event !== void 0) {
			dom.__e = void 0;
			queueMicrotask(() => {
				if (dom.isConnected) dom.dispatchEvent(event);
			});
		}
	}
	function create_event(event_name, dom, handler, options = {}) {
		function target_handler(event) {
			if (!options.capture) handle_event_propagation.call(dom, event);
			if (!event.cancelBubble) return without_reactive_context(() => {
				return handler?.call(this, event);
			});
		}
		if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") queue_micro_task(() => {
			dom.addEventListener(event_name, target_handler, options);
		});
		else dom.addEventListener(event_name, target_handler, options);
		return target_handler;
	}
	function on(element, type, handler, options = {}) {
		var target_handler = create_event(type, element, handler, options);
		return () => {
			element.removeEventListener(type, target_handler, options);
		};
	}
	function event(event_name, dom, handler, capture, passive) {
		var options = {
			capture,
			passive
		};
		var target_handler = create_event(event_name, dom, handler, options);
		if (dom === document.body || dom === window || dom === document || dom instanceof HTMLMediaElement) teardown(() => {
			dom.removeEventListener(event_name, target_handler, options);
		});
	}
	function delegated(event_name, element, handler) {
		(element[event_symbol] ??= {})[event_name] = handler;
	}
	function delegate(events) {
		for (var i = 0; i < events.length; i++) all_registered_events.add(events[i]);
		for (var fn of root_event_handles) fn(events);
	}
	var last_propagated_event = null;
	function handle_event_propagation(event) {
		var handler_element = this;
		var owner_document = handler_element.ownerDocument;
		var event_name = event.type;
		var path = event.composedPath?.() || [];
		var current_target = path[0] || event.target;
		last_propagated_event = event;
		var path_idx = 0;
		var handled_at = last_propagated_event === event && event[event_symbol];
		if (handled_at) {
			var at_idx = path.indexOf(handled_at);
			if (at_idx !== -1 && (handler_element === document || handler_element === window)) {
				event[event_symbol] = handler_element;
				return;
			}
			var handler_idx = path.indexOf(handler_element);
			if (handler_idx === -1) return;
			if (at_idx <= handler_idx) path_idx = at_idx;
		}
		current_target = path[path_idx] || event.target;
		if (current_target === handler_element) return;
		define_property(event, "currentTarget", {
			configurable: true,
			get() {
				return current_target || owner_document;
			}
		});
		var previous_reaction = active_reaction;
		var previous_effect = active_effect;
		set_active_reaction(null);
		set_active_effect(null);
		try {
			var throw_error;
			var other_errors = [];
			while (current_target !== null) {
				var parent_element = current_target.assignedSlot || current_target.parentNode || current_target.host || null;
				try {
					var delegated = current_target[event_symbol]?.[event_name];
					if (delegated != null && (!current_target.disabled || event.target === current_target)) delegated.call(current_target, event);
				} catch (error) {
					if (throw_error) other_errors.push(error);
					else throw_error = error;
				}
				if (event.cancelBubble || parent_element === handler_element || parent_element === null) break;
				current_target = parent_element;
			}
			if (throw_error) {
				for (let error of other_errors) queueMicrotask(() => {
					throw error;
				});
				throw throw_error;
			}
		} finally {
			event[event_symbol] = handler_element;
			delete event.currentTarget;
			set_active_reaction(previous_reaction);
			set_active_effect(previous_effect);
		}
	}
	var policy = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (html) => {
		return html;
	} });
	function create_trusted_html(html) {
		return policy?.createHTML(html) ?? html;
	}
	function create_fragment_from_html(html) {
		var elem = create_element("template");
		elem.innerHTML = create_trusted_html(html.replaceAll("<!>", "<!---->"));
		return elem.content;
	}
	function assign_nodes(start, end) {
		var effect = active_effect;
		if (effect.nodes === null) effect.nodes = {
			start,
			end,
			a: null,
			t: null
		};
	}
	function from_html(content, flags) {
		var is_fragment = (flags & 1) !== 0;
		var use_import_node = (flags & 2) !== 0;
		var node;
		var has_start = !content.startsWith("<!>");
		return () => {
			if (hydrating) {
				assign_nodes(hydrate_node, null);
				return hydrate_node;
			}
			if (node === void 0) {
				node = create_fragment_from_html(has_start ? content : "<!>" + content);
				if (!is_fragment) node = get_first_child(node);
			}
			var clone = use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true);
			if (is_fragment) {
				var start = get_first_child(clone);
				var end = clone.lastChild;
				assign_nodes(start, end);
			} else assign_nodes(clone, clone);
			return clone;
		};
	}
	function from_namespace(content, flags, ns = "svg") {
		var has_start = !content.startsWith("<!>");
		var is_fragment = (flags & 1) !== 0;
		var wrapped = `<${ns}>${has_start ? content : "<!>" + content}</${ns}>`;
		var node;
		return () => {
			if (hydrating) {
				assign_nodes(hydrate_node, null);
				return hydrate_node;
			}
			if (!node) {
				var root = get_first_child(create_fragment_from_html(wrapped));
				if (is_fragment) {
					node = document.createDocumentFragment();
					while (get_first_child(root)) node.appendChild(get_first_child(root));
				} else node = get_first_child(root);
			}
			var clone = node.cloneNode(true);
			if (is_fragment) {
				var start = get_first_child(clone);
				var end = clone.lastChild;
				assign_nodes(start, end);
			} else assign_nodes(clone, clone);
			return clone;
		};
	}
	function from_svg(content, flags) {
		return from_namespace(content, flags, "svg");
	}
	function text(value = "") {
		if (!hydrating) {
			var t = create_text(value + "");
			assign_nodes(t, t);
			return t;
		}
		var node = hydrate_node;
		if (node.nodeType !== 3) {
			node.before(node = create_text());
			set_hydrate_node(node);
		} else merge_text_nodes(node);
		assign_nodes(node, node);
		return node;
	}
	function comment() {
		if (hydrating) {
			assign_nodes(hydrate_node, null);
			return hydrate_node;
		}
		var frag = document.createDocumentFragment();
		var start = document.createComment("");
		var anchor = create_text();
		frag.append(start, anchor);
		assign_nodes(start, anchor);
		return frag;
	}
	function append(anchor, dom) {
		if (hydrating) {
			var effect = active_effect;
			if ((effect.f & 32768) === 0 || effect.nodes.end === null) effect.nodes.end = hydrate_node;
			hydrate_next();
			return;
		}
		if (anchor === null) return;
		anchor.before(dom);
	}
	var should_intro = true;
	function set_text(text, value) {
		var str = value == null ? "" : typeof value === "object" ? `${value}` : value;
		if (str !== (text[TEXT_CACHE] ??= text.nodeValue)) {
			text[TEXT_CACHE] = str;
			text.nodeValue = `${str}`;
		}
	}
	function mount(component, options) {
		return _mount(component, options);
	}
	var listeners = new Map();
	function _mount(Component, { target, anchor, props = {}, events, context, intro = true, transformError }) {
		init_operations();
		var component = void 0;
		var unmount = component_root(() => {
			var anchor_node = anchor ?? target.appendChild(create_text());
			boundary(anchor_node, { pending: () => {} }, (anchor_node) => {
				push({});
				var ctx = component_context;
				if (context) ctx.c = context;
				if (events) props.$$events = events;
				if (hydrating) assign_nodes(anchor_node, null);
				should_intro = intro;
				component = Component(anchor_node, props) || {};
				should_intro = true;
				if (hydrating) {
					active_effect.nodes.end = hydrate_node;
					if (hydrate_node === null || hydrate_node.nodeType !== 8 || hydrate_node.data !== "]") {
						hydration_mismatch();
						throw HYDRATION_ERROR;
					}
				}
				pop();
			}, transformError);
			var registered_events = new Set();
			var event_handle = (events) => {
				for (var i = 0; i < events.length; i++) {
					var event_name = events[i];
					if (registered_events.has(event_name)) continue;
					registered_events.add(event_name);
					var passive = is_passive_event(event_name);
					for (const node of [target, document]) {
						var counts = listeners.get(node);
						if (counts === void 0) {
							counts = new Map();
							listeners.set(node, counts);
						}
						var count = counts.get(event_name);
						if (count === void 0) {
							node.addEventListener(event_name, handle_event_propagation, { passive });
							counts.set(event_name, 1);
						} else counts.set(event_name, count + 1);
					}
				}
			};
			event_handle(array_from(all_registered_events));
			root_event_handles.add(event_handle);
			return () => {
				for (var event_name of registered_events) for (const node of [target, document]) {
					var counts = listeners.get(node);
					var count = counts.get(event_name);
					if (--count == 0) {
						node.removeEventListener(event_name, handle_event_propagation);
						counts.delete(event_name);
						if (counts.size === 0) listeners.delete(node);
					} else counts.set(event_name, count);
				}
				root_event_handles.delete(event_handle);
				if (anchor_node !== anchor) anchor_node.parentNode?.removeChild(anchor_node);
			};
		});
		mounted_components.set(component, unmount);
		return component;
	}
	var mounted_components = new WeakMap();
	var BranchManager = class {
		anchor;
		#batches = new Map();
		#onscreen = new Map();
		#offscreen = new Map();
		#outroing = new Set();
		#transition = true;
		constructor(anchor, transition = true) {
			this.anchor = anchor;
			this.#transition = transition;
		}
		#commit = (batch) => {
			if (!this.#batches.has(batch)) return;
			var key = this.#batches.get(batch);
			var onscreen = this.#onscreen.get(key);
			if (onscreen) {
				resume_effect(onscreen);
				this.#outroing.delete(key);
			} else {
				var offscreen = this.#offscreen.get(key);
				if (offscreen) {
					this.#onscreen.set(key, offscreen.effect);
					this.#offscreen.delete(key);
					offscreen.fragment.lastChild.remove();
					this.anchor.before(offscreen.fragment);
					onscreen = offscreen.effect;
				}
			}
			for (const [b, k] of this.#batches) {
				this.#batches.delete(b);
				if (b === batch) break;
				const offscreen = this.#offscreen.get(k);
				if (offscreen) {
					destroy_effect(offscreen.effect);
					this.#offscreen.delete(k);
				}
			}
			for (const [k, effect] of this.#onscreen) {
				if (k === key || this.#outroing.has(k)) continue;
				const on_destroy = () => {
					if (Array.from(this.#batches.values()).includes(k)) {
						var fragment = document.createDocumentFragment();
						move_effect(effect, fragment);
						fragment.append(create_text());
						this.#offscreen.set(k, {
							effect,
							fragment
						});
					} else destroy_effect(effect);
					this.#outroing.delete(k);
					this.#onscreen.delete(k);
				};
				if (this.#transition || !onscreen) {
					this.#outroing.add(k);
					pause_effect(effect, on_destroy, false);
				} else on_destroy();
			}
		};
		#discard = (batch) => {
			this.#batches.delete(batch);
			const keys = Array.from(this.#batches.values());
			for (const [k, branch] of this.#offscreen) if (!keys.includes(k)) {
				destroy_effect(branch.effect);
				this.#offscreen.delete(k);
			}
		};
		ensure(key, fn) {
			var batch = current_batch;
			var defer = should_defer_append();
			if (fn && !this.#onscreen.has(key) && !this.#offscreen.has(key)) if (defer) {
				var fragment = document.createDocumentFragment();
				var target = create_text();
				fragment.append(target);
				this.#offscreen.set(key, {
					effect: branch(() => fn(target)),
					fragment
				});
			} else this.#onscreen.set(key, branch(() => fn(this.anchor)));
			this.#batches.set(batch, key);
			if (defer) {
				for (const [k, effect] of this.#onscreen) if (k === key) batch.unskip_effect(effect);
				else batch.skip_effect(effect);
				for (const [k, branch] of this.#offscreen) if (k === key) batch.unskip_effect(branch.effect);
				else batch.skip_effect(branch.effect);
				batch.oncommit(this.#commit);
				batch.ondiscard(this.#discard);
			} else {
				if (hydrating) this.anchor = hydrate_node;
				this.#commit(batch);
			}
		}
	};
	var PENDING = 0;
	var THEN = 1;
	var CATCH = 2;
	function await_block(node, get_input, pending_fn, then_fn, catch_fn) {
		if (hydrating) hydrate_next();
		var runes = is_runes();
		var v = UNINITIALIZED;
		var value = runes ? source(v) : mutable_source(v, false, false);
		var error = runes ? source(v) : mutable_source(v, false, false);
		var branches = new BranchManager(node);
		block(() => {
			var batch = current_batch;
			var input = get_input();
			var destroyed = false;
			let mismatch = hydrating && is_promise(input) === (node.data === "[!");
			if (mismatch) {
				set_hydrate_node(skip_nodes());
				set_hydrating(false);
			}
			if (is_promise(input)) {
				var restore = capture();
				var resolved = false;
				const resolve = (fn) => {
					if (destroyed) return;
					resolved = true;
					restore(false);
					if (current_batch === batch) batch.deactivate();
					Batch.ensure();
					try {
						fn();
					} finally {
						unset_context(false);
						if (!is_flushing_sync) flushSync();
					}
				};
				input.then((v) => {
					resolve(() => {
						internal_set(value, v);
						branches.ensure(THEN, then_fn && ((target) => then_fn(target, value)));
					});
				}, (e) => {
					resolve(() => {
						internal_set(error, e);
						branches.ensure(CATCH, catch_fn && ((target) => catch_fn(target, error)));
						if (!catch_fn) throw error.v;
					});
				});
				if (hydrating) branches.ensure(PENDING, pending_fn);
				else queue_micro_task(() => {
					if (!resolved) resolve(() => {
						branches.ensure(PENDING, pending_fn);
					});
				});
			} else {
				internal_set(value, input);
				branches.ensure(THEN, then_fn && ((target) => then_fn(target, value)));
			}
			if (mismatch) set_hydrating(true);
			return () => {
				destroyed = true;
			};
		});
	}
	function if_block(node, fn, elseif = false) {
		var marker;
		if (hydrating) {
			marker = hydrate_node;
			hydrate_next();
		}
		var branches = new BranchManager(node);
		var flags = elseif ? EFFECT_TRANSPARENT : 0;
		function update_branch(key, fn) {
			if (hydrating) {
				var data = read_hydration_instruction(marker);
				if (key !== parseInt(data.substring(1))) {
					var anchor = skip_nodes();
					set_hydrate_node(anchor);
					branches.anchor = anchor;
					set_hydrating(false);
					branches.ensure(key, fn);
					set_hydrating(true);
					return;
				}
			}
			branches.ensure(key, fn);
		}
		block(() => {
			var has_branch = false;
			fn((fn, key = 0) => {
				has_branch = true;
				update_branch(key, fn);
			});
			if (!has_branch) update_branch(-1, null);
		}, flags);
	}
	function index(_, i) {
		return i;
	}
	function pause_effects(state, to_destroy, controlled_anchor) {
		var transitions = [];
		var length = to_destroy.length;
		var group;
		var remaining = to_destroy.length;
		for (var i = 0; i < length; i++) {
			let effect = to_destroy[i];
			pause_effect(effect, () => {
				if (group) {
					group.pending.delete(effect);
					group.done.add(effect);
					if (group.pending.size === 0) {
						var groups = state.outrogroups;
						destroy_effects(state, array_from(group.done));
						groups.delete(group);
						if (groups.size === 0) state.outrogroups = null;
					}
				} else remaining -= 1;
			}, false);
		}
		if (remaining === 0) {
			var fast_path = transitions.length === 0 && controlled_anchor !== null;
			if (fast_path) {
				var anchor = controlled_anchor;
				var parent_node = anchor.parentNode;
				clear_text_content(parent_node);
				parent_node.append(anchor);
				state.items.clear();
			}
			destroy_effects(state, to_destroy, !fast_path);
		} else {
			group = {
				pending: new Set(to_destroy),
				done: new Set()
			};
			(state.outrogroups ??= new Set()).add(group);
		}
	}
	function destroy_effects(state, to_destroy, remove_dom = true) {
		var preserved_effects;
		if (state.pending.size > 0) {
			preserved_effects = new Set();
			for (const keys of state.pending.values()) for (const key of keys) preserved_effects.add(state.items.get(key).e);
		}
		for (var i = 0; i < to_destroy.length; i++) {
			var e = to_destroy[i];
			if (preserved_effects?.has(e)) {
				e.f |= EFFECT_OFFSCREEN;
				move_effect(e, document.createDocumentFragment());
			} else destroy_effect(to_destroy[i], remove_dom);
		}
	}
	var offscreen_anchor;
	function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
		var anchor = node;
		var items = new Map();
		if ((flags & 4) !== 0) {
			var parent_node = node;
			anchor = hydrating ? set_hydrate_node(get_first_child(parent_node)) : parent_node.appendChild(create_text());
		}
		if (hydrating) hydrate_next();
		var fallback = null;
		var each_array = derived_safe_equal(() => {
			var collection = get_collection();
			return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
		});
		var array;
		var pending = new Map();
		var first_run = true;
		function commit(batch) {
			if ((state.effect.f & 16384) !== 0) return;
			state.pending.delete(batch);
			state.fallback = fallback;
			reconcile(state, array, anchor, flags, get_key);
			if (fallback !== null) if (array.length === 0) if ((fallback.f & 33554432) === 0) resume_effect(fallback);
			else {
				fallback.f ^= EFFECT_OFFSCREEN;
				move(fallback, null, anchor);
			}
			else pause_effect(fallback, () => {
				fallback = null;
			});
		}
		function discard(batch) {
			state.pending.delete(batch);
		}
		var state = {
			effect: block(() => {
				array = get(each_array);
				var length = array.length;
				let mismatch = false;
				if (hydrating) {
					if (read_hydration_instruction(anchor) === "[!" !== (length === 0)) {
						anchor = skip_nodes();
						set_hydrate_node(anchor);
						set_hydrating(false);
						mismatch = true;
					}
				}
				var keys = new Set();
				var batch = current_batch;
				var defer = should_defer_append();
				for (var index = 0; index < length; index += 1) {
					if (hydrating && hydrate_node.nodeType === 8 && hydrate_node.data === "]") {
						anchor = hydrate_node;
						mismatch = true;
						set_hydrating(false);
					}
					var value = array[index];
					var key = get_key(value, index);
					var item = first_run ? null : items.get(key);
					if (item) {
						if (item.v) internal_set(item.v, value);
						if (item.i) internal_set(item.i, index);
						if (defer) batch.unskip_effect(item.e);
					} else {
						item = create_item(items, first_run ? anchor : offscreen_anchor ??= create_text(), value, key, index, render_fn, flags, get_collection);
						if (!first_run) item.e.f |= EFFECT_OFFSCREEN;
						items.set(key, item);
					}
					keys.add(key);
				}
				if (length === 0 && fallback_fn && !fallback) if (first_run) fallback = branch(() => fallback_fn(anchor));
				else {
					fallback = branch(() => fallback_fn(offscreen_anchor ??= create_text()));
					fallback.f |= EFFECT_OFFSCREEN;
				}
				if (length > keys.size) each_key_duplicate("", "", "");
				if (hydrating && length > 0) set_hydrate_node(skip_nodes());
				if (!first_run) {
					pending.set(batch, keys);
					if (defer) {
						for (const [key, item] of items) if (!keys.has(key)) batch.skip_effect(item.e);
						batch.oncommit(commit);
						batch.ondiscard(discard);
					} else commit(batch);
				}
				if (mismatch) set_hydrating(true);
				get(each_array);
			}),
			flags,
			items,
			pending,
			outrogroups: null,
			fallback
		};
		first_run = false;
		if (hydrating) anchor = hydrate_node;
	}
	function skip_to_branch(effect) {
		while (effect !== null && (effect.f & 32) === 0) effect = effect.next;
		return effect;
	}
	function reconcile(state, array, anchor, flags, get_key) {
		var is_animated = (flags & 8) !== 0;
		var length = array.length;
		var items = state.items;
		var current = skip_to_branch(state.effect.first);
		var seen;
		var prev = null;
		var to_animate;
		var matched = [];
		var stashed = [];
		var value;
		var key;
		var effect;
		var i;
		if (is_animated) for (i = 0; i < length; i += 1) {
			value = array[i];
			key = get_key(value, i);
			effect = items.get(key).e;
			if ((effect.f & 33554432) === 0) {
				effect.nodes?.a?.measure();
				(to_animate ??= new Set()).add(effect);
			}
		}
		for (i = 0; i < length; i += 1) {
			value = array[i];
			key = get_key(value, i);
			effect = items.get(key).e;
			if (state.outrogroups !== null) for (const group of state.outrogroups) {
				group.pending.delete(effect);
				group.done.delete(effect);
			}
			if ((effect.f & 8192) !== 0) {
				resume_effect(effect);
				if (is_animated) {
					effect.nodes?.a?.unfix();
					(to_animate ??= new Set()).delete(effect);
				}
			}
			if ((effect.f & 33554432) !== 0) {
				effect.f ^= EFFECT_OFFSCREEN;
				if (effect === current) move(effect, null, anchor);
				else {
					var next = prev ? prev.next : current;
					if (effect === state.effect.last) state.effect.last = effect.prev;
					if (effect.prev) effect.prev.next = effect.next;
					if (effect.next) effect.next.prev = effect.prev;
					link(state, prev, effect);
					link(state, effect, next);
					move(effect, next, anchor);
					prev = effect;
					matched = [];
					stashed = [];
					current = skip_to_branch(prev.next);
					continue;
				}
			}
			if (effect !== current) {
				if (seen !== void 0 && seen.has(effect)) {
					if (matched.length < stashed.length) {
						var start = stashed[0];
						var j;
						prev = start.prev;
						var a = matched[0];
						var b = matched[matched.length - 1];
						for (j = 0; j < matched.length; j += 1) move(matched[j], start, anchor);
						for (j = 0; j < stashed.length; j += 1) seen.delete(stashed[j]);
						link(state, a.prev, b.next);
						link(state, prev, a);
						link(state, b, start);
						current = start;
						prev = b;
						i -= 1;
						matched = [];
						stashed = [];
					} else {
						seen.delete(effect);
						move(effect, current, anchor);
						link(state, effect.prev, effect.next);
						link(state, effect, prev === null ? state.effect.first : prev.next);
						link(state, prev, effect);
						prev = effect;
					}
					continue;
				}
				matched = [];
				stashed = [];
				while (current !== null && current !== effect) {
					(seen ??= new Set()).add(current);
					stashed.push(current);
					current = skip_to_branch(current.next);
				}
				if (current === null) continue;
			}
			if ((effect.f & 33554432) === 0) matched.push(effect);
			prev = effect;
			current = skip_to_branch(effect.next);
		}
		if (state.outrogroups !== null) {
			for (const group of state.outrogroups) if (group.pending.size === 0) {
				destroy_effects(state, array_from(group.done));
				state.outrogroups?.delete(group);
			}
			if (state.outrogroups.size === 0) state.outrogroups = null;
		}
		if (current !== null || seen !== void 0) {
			var to_destroy = [];
			if (seen !== void 0) {
				for (effect of seen) if ((effect.f & 8192) === 0) to_destroy.push(effect);
			}
			while (current !== null) {
				if ((current.f & 8192) === 0 && current !== state.fallback) to_destroy.push(current);
				current = skip_to_branch(current.next);
			}
			var destroy_length = to_destroy.length;
			if (destroy_length > 0) {
				var controlled_anchor = (flags & 4) !== 0 && length === 0 ? anchor : null;
				if (is_animated) {
					for (i = 0; i < destroy_length; i += 1) to_destroy[i].nodes?.a?.measure();
					for (i = 0; i < destroy_length; i += 1) to_destroy[i].nodes?.a?.fix();
				}
				pause_effects(state, to_destroy, controlled_anchor);
			}
		}
		if (is_animated) queue_micro_task(() => {
			if (to_animate === void 0) return;
			for (effect of to_animate) effect.nodes?.a?.apply();
		});
	}
	function create_item(items, anchor, value, key, index, render_fn, flags, get_collection) {
		var v = (flags & 1) !== 0 ? (flags & 16) === 0 ? mutable_source(value, false, false) : source(value) : null;
		var i = (flags & 2) !== 0 ? source(index) : null;
		return {
			v,
			i,
			e: branch(() => {
				render_fn(anchor, v ?? value, i ?? index, get_collection);
				return () => {
					items.delete(key);
				};
			})
		};
	}
	function move(effect, next, anchor) {
		if (!effect.nodes) return;
		var node = effect.nodes.start;
		var end = effect.nodes.end;
		var dest = next && (next.f & 33554432) === 0 ? next.nodes.start : anchor;
		while (node !== null) {
			var next_node = get_next_sibling(node);
			dest.before(node);
			if (node === end) return;
			node = next_node;
		}
	}
	function link(state, prev, next) {
		if (prev === null) state.effect.first = next;
		else prev.next = next;
		if (next === null) state.effect.last = prev;
		else next.prev = prev;
	}
	function html(node, get_value, is_controlled = false, svg = false, mathml = false, skip_warning = false) {
		var anchor = node;
		var value = "";
		if (is_controlled) {
			var parent_node = node;
			if (hydrating) anchor = set_hydrate_node(get_first_child(parent_node));
		}
		template_effect(() => {
			var effect = active_effect;
			if (value === (value = get_value() ?? "")) {
				if (hydrating) hydrate_next();
				return;
			}
			if (is_controlled && !hydrating) {
				effect.nodes = null;
				parent_node.innerHTML = value;
				if (value !== "") assign_nodes(get_first_child(parent_node), parent_node.lastChild);
				return;
			}
			if (effect.nodes !== null) {
				remove_effect_dom(effect.nodes.start, effect.nodes.end);
				effect.nodes = null;
			}
			if (value === "") return;
			if (hydrating) {
				hydrate_node.data;
				var next = hydrate_next();
				var last = next;
				while (next !== null && (next.nodeType !== 8 || next.data !== "")) {
					last = next;
					next = get_next_sibling(next);
				}
				if (next === null) {
					hydration_mismatch();
					throw HYDRATION_ERROR;
				}
				assign_nodes(hydrate_node, last);
				anchor = set_hydrate_node(next);
				return;
			}
			var wrapper = create_element(svg ? "svg" : mathml ? "math" : "template", svg ? NAMESPACE_SVG : mathml ? NAMESPACE_MATHML : void 0);
			wrapper.innerHTML = value;
			var node = svg || mathml ? wrapper : wrapper.content;
			assign_nodes(get_first_child(node), node.lastChild);
			if (svg || mathml) while (get_first_child(node)) anchor.before(get_first_child(node));
			else anchor.before(node);
		});
	}
	function snippet(node, get_snippet, ...args) {
		var branches = new BranchManager(node);
		block(() => {
			const snippet = get_snippet() ?? null;
			branches.ensure(snippet, snippet && ((anchor) => snippet(anchor, ...args)));
		}, EFFECT_TRANSPARENT);
	}
	var now = () => performance.now();
	var raf = {
		tick: (_) => requestAnimationFrame(_),
		now: () => now(),
		tasks: new Set()
	};
	function run_tasks() {
		const now = raf.now();
		raf.tasks.forEach((task) => {
			if (!task.c(now)) {
				raf.tasks.delete(task);
				task.f();
			}
		});
		if (raf.tasks.size !== 0) raf.tick(run_tasks);
	}
	function loop(callback) {
		let task;
		if (raf.tasks.size === 0) raf.tick(run_tasks);
		return {
			promise: new Promise((fulfill) => {
				raf.tasks.add(task = {
					c: callback,
					f: fulfill
				});
			}),
			abort() {
				raf.tasks.delete(task);
			}
		};
	}
	function dispatch_event(element, type) {
		without_reactive_context(() => {
			element.dispatchEvent(new CustomEvent(type));
		});
	}
	function css_property_to_camelcase(style) {
		if (style === "float") return "cssFloat";
		if (style === "offset") return "cssOffset";
		if (style.startsWith("--")) return style;
		const parts = style.split("-");
		if (parts.length === 1) return parts[0];
		return parts[0] + parts.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join("");
	}
	function css_to_keyframe(css) {
		const keyframe = {};
		const parts = css.split(";");
		for (const part of parts) {
			const [property, value] = part.split(":");
			if (!property || value === void 0) break;
			const formatted_property = css_property_to_camelcase(property.trim());
			keyframe[formatted_property] = value.trim();
		}
		return keyframe;
	}
	var linear$1 = (t) => t;
	function transition(flags, element, get_fn, get_params) {
		var is_intro = (flags & 1) !== 0;
		var is_outro = (flags & 2) !== 0;
		var is_both = is_intro && is_outro;
		var is_global = (flags & 4) !== 0;
		var direction = is_both ? "both" : is_intro ? "in" : "out";
		var current_options;
		var inert = element.inert;
		var overflow = element.style.overflow;
		var intro;
		var outro;
		function get_options() {
			return without_reactive_context(() => {
				return current_options ??= get_fn()(element, get_params?.() ?? {}, { direction });
			});
		}
		var transition = {
			is_global,
			in() {
				element.inert = inert;
				if (!is_intro) {
					outro?.abort();
					outro?.reset?.();
					return;
				}
				if (!is_outro) intro?.abort();
				intro = animate(element, get_options(), outro, 1, () => {
					dispatch_event(element, "introstart");
				}, () => {
					dispatch_event(element, "introend");
					intro?.abort();
					intro = current_options = void 0;
					element.style.overflow = overflow;
				});
			},
			out(fn) {
				if (!is_outro) {
					fn?.();
					current_options = void 0;
					return;
				}
				element.inert = true;
				outro = animate(element, get_options(), intro, 0, () => {
					dispatch_event(element, "outrostart");
				}, () => {
					dispatch_event(element, "outroend");
					fn?.();
				});
			},
			stop: () => {
				intro?.abort();
				outro?.abort();
			}
		};
		var e = active_effect;
		(e.nodes.t ??= []).push(transition);
		if (is_intro && should_intro) {
			var run = is_global;
			if (!run) {
				var block = e.parent;
				while (block && (block.f & 65536) !== 0) while (block = block.parent) if ((block.f & 16) !== 0) break;
				run = !block || (block.f & 32768) !== 0;
			}
			if (run) effect(() => {
				untrack(() => transition.in());
			});
		}
	}
	function animate(element, options, counterpart, t2, on_begin, on_finish) {
		var is_intro = t2 === 1;
		if (is_function(options)) {
			var a;
			var aborted = false;
			queue_micro_task(() => {
				if (aborted) return;
				a = animate(element, options({ direction: is_intro ? "in" : "out" }), counterpart, t2, on_begin, on_finish);
			});
			return {
				abort: () => {
					aborted = true;
					a?.abort();
				},
				deactivate: () => a.deactivate(),
				reset: () => a.reset(),
				t: () => a.t()
			};
		}
		counterpart?.deactivate();
		if (!options?.duration && !options?.delay) {
			on_begin();
			on_finish();
			return {
				abort: noop,
				deactivate: noop,
				reset: noop,
				t: () => t2
			};
		}
		const { delay = 0, css, tick, easing = linear$1 } = options;
		var keyframes = [];
		if (is_intro && counterpart === void 0) {
			if (tick) tick(0, 1);
			if (css) {
				var styles = css_to_keyframe(css(0, 1));
				keyframes.push(styles, styles);
			}
		}
		var get_t = () => 1 - t2;
		var animation = element.animate(keyframes, {
			duration: delay,
			fill: "forwards"
		});
		animation.onfinish = () => {
			animation.cancel();
			on_begin();
			var t1 = counterpart?.t() ?? 1 - t2;
			counterpart?.abort();
			var delta = t2 - t1;
			var duration = options.duration * Math.abs(delta);
			var keyframes = [];
			if (duration > 0) {
				var needs_overflow_hidden = false;
				if (css) {
					var n = Math.ceil(duration / (1e3 / 60));
					for (var i = 0; i <= n; i += 1) {
						var t = t1 + delta * easing(i / n);
						var styles = css_to_keyframe(css(t, 1 - t));
						keyframes.push(styles);
						needs_overflow_hidden ||= styles.overflow === "hidden";
					}
				}
				if (needs_overflow_hidden) element.style.overflow = "hidden";
				get_t = () => {
					var time = animation.currentTime;
					return t1 + delta * easing(time / duration);
				};
				if (tick) loop(() => {
					if (animation.playState !== "running") return false;
					var t = get_t();
					tick(t, 1 - t);
					return true;
				});
			}
			animation = element.animate(keyframes, {
				duration,
				fill: "forwards"
			});
			animation.onfinish = () => {
				get_t = () => t2;
				tick?.(t2, 1 - t2);
				on_finish();
			};
		};
		return {
			abort: () => {
				if (animation) {
					animation.cancel();
					animation.effect = null;
					animation.onfinish = noop;
				}
			},
			deactivate: () => {
				on_finish = noop;
			},
			reset: () => {
				if (t2 === 0) tick?.(1, 0);
			},
			t: () => get_t()
		};
	}
	function head(hash, render_fn) {
		let previous_hydrate_node = null;
		let was_hydrating = hydrating;
		var anchor;
		if (hydrating) {
			previous_hydrate_node = hydrate_node;
			var head_anchor = get_first_child(document.head);
			while (head_anchor !== null && (head_anchor.nodeType !== 8 || head_anchor.data !== hash)) head_anchor = get_next_sibling(head_anchor);
			if (head_anchor === null) set_hydrating(false);
			else {
				var start = get_next_sibling(head_anchor);
				head_anchor.remove();
				set_hydrate_node(start);
			}
		}
		if (!hydrating) anchor = document.head.appendChild(create_text());
		try {
			block(() => {
				var e = branch(() => render_fn(anchor));
				e.f |= HEAD_EFFECT;
			});
		} finally {
			if (was_hydrating) {
				set_hydrating(true);
				set_hydrate_node(previous_hydrate_node);
			}
		}
	}
	function attach(node, get_fn) {
		var fn = void 0;
		var e;
		managed(() => {
			if (fn !== (fn = get_fn())) {
				if (e) {
					destroy_effect(e);
					e = null;
				}
				if (fn) e = branch(() => {
					effect(() => fn(node));
				});
			}
		});
	}
	function r(e) {
		var t, f, n = "";
		if ("string" == typeof e || "number" == typeof e) n += e;
		else if ("object" == typeof e) if (Array.isArray(e)) {
			var o = e.length;
			for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
		} else for (f in e) e[f] && (n && (n += " "), n += f);
		return n;
	}
	function clsx$1() {
		for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
		return n;
	}
	function clsx(value) {
		if (typeof value === "object") return clsx$1(value);
		else return value ?? "";
	}
	var whitespace = [..." 	\n\r\f\xA0\v﻿"];
	function to_class(value, hash, directives) {
		var classname = value == null ? "" : "" + value;
		if (hash) classname = classname ? classname + " " + hash : hash;
		if (directives) {
			for (var key of Object.keys(directives)) if (directives[key]) classname = classname ? classname + " " + key : key;
			else if (classname.length) {
				var len = key.length;
				var a = 0;
				while ((a = classname.indexOf(key, a)) >= 0) {
					var b = a + len;
					if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
					else a = b;
				}
			}
		}
		return classname === "" ? null : classname;
	}
	function append_styles(styles, important = false) {
		var separator = important ? " !important;" : ";";
		var css = "";
		for (var key of Object.keys(styles)) {
			var value = styles[key];
			if (value != null && value !== "") css += " " + key + ": " + value + separator;
		}
		return css;
	}
	function to_css_name(name) {
		if (name[0] !== "-" || name[1] !== "-") return name.toLowerCase();
		return name;
	}
	function to_style(value, styles) {
		if (styles) {
			var new_style = "";
			var normal_styles;
			var important_styles;
			if (Array.isArray(styles)) {
				normal_styles = styles[0];
				important_styles = styles[1];
			} else normal_styles = styles;
			if (value) {
				value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
				var in_str = false;
				var in_apo = 0;
				var in_comment = false;
				var reserved_names = [];
				if (normal_styles) reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
				if (important_styles) reserved_names.push(...Object.keys(important_styles).map(to_css_name));
				var start_index = 0;
				var name_index = -1;
				const len = value.length;
				for (var i = 0; i < len; i++) {
					var c = value[i];
					if (in_comment) {
						if (c === "/" && value[i - 1] === "*") in_comment = false;
					} else if (in_str) {
						if (in_str === c) in_str = false;
					} else if (c === "/" && value[i + 1] === "*") in_comment = true;
					else if (c === "\"" || c === "'") in_str = c;
					else if (c === "(") in_apo++;
					else if (c === ")") in_apo--;
					if (!in_comment && in_str === false && in_apo === 0) {
						if (c === ":" && name_index === -1) name_index = i;
						else if (c === ";" || i === len - 1) {
							if (name_index !== -1) {
								var name = to_css_name(value.substring(start_index, name_index).trim());
								if (!reserved_names.includes(name)) {
									if (c !== ";") i++;
									var property = value.substring(start_index, i).trim();
									new_style += " " + property + ";";
								}
							}
							start_index = i + 1;
							name_index = -1;
						}
					}
				}
			}
			if (normal_styles) new_style += append_styles(normal_styles);
			if (important_styles) new_style += append_styles(important_styles, true);
			new_style = new_style.trim();
			return new_style === "" ? null : new_style;
		}
		return value == null ? null : String(value);
	}
	function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
		var prev = dom[CLASS_CACHE];
		if (hydrating || prev !== value || prev === void 0) {
			var next_class_name = to_class(value, hash, next_classes);
			if (!hydrating || next_class_name !== dom.getAttribute("class")) if (next_class_name == null) dom.removeAttribute("class");
			else if (is_html) dom.className = next_class_name;
			else dom.setAttribute("class", next_class_name);
			dom[CLASS_CACHE] = value;
		} else if (next_classes && prev_classes !== next_classes) for (var key in next_classes) {
			var is_present = !!next_classes[key];
			if (prev_classes == null || is_present !== !!prev_classes[key]) dom.classList.toggle(key, is_present);
		}
		return next_classes;
	}
	function update_styles(dom, prev = {}, next, priority) {
		for (var key in next) {
			var value = next[key];
			if (prev[key] !== value) if (next[key] == null) dom.style.removeProperty(key);
			else dom.style.setProperty(key, value, priority);
		}
	}
	function set_style(dom, value, prev_styles, next_styles) {
		var prev = dom[STYLE_CACHE];
		if (hydrating || prev !== value) {
			var next_style_attr = to_style(value, next_styles);
			if (!hydrating || next_style_attr !== dom.getAttribute("style")) if (next_style_attr == null) dom.removeAttribute("style");
			else dom.style.cssText = next_style_attr;
			dom[STYLE_CACHE] = value;
		} else if (next_styles) if (Array.isArray(next_styles)) {
			update_styles(dom, prev_styles?.[0], next_styles[0]);
			update_styles(dom, prev_styles?.[1], next_styles[1], "important");
		} else update_styles(dom, prev_styles, next_styles);
		return next_styles;
	}
	var IS_CUSTOM_ELEMENT = Symbol("is custom element");
	var IS_HTML = Symbol("is html");
	var LINK_TAG = IS_XHTML ? "link" : "LINK";
	function remove_input_defaults(input) {
		if (!hydrating) return;
		var already_removed = false;
		var remove_defaults = () => {
			if (already_removed) return;
			already_removed = true;
			if (input.hasAttribute("value")) {
				var value = input.value;
				set_attribute(input, "value", null);
				input.value = value;
			}
			if (input.hasAttribute("checked")) {
				var checked = input.checked;
				set_attribute(input, "checked", null);
				input.checked = checked;
			}
		};
		input[FORM_RESET_HANDLER] = remove_defaults;
		queue_micro_task(remove_defaults);
		add_form_reset_listener();
	}
	function set_attribute(element, attribute, value, skip_warning) {
		var attributes = get_attributes(element);
		if (hydrating) {
			attributes[attribute] = element.getAttribute(attribute);
			if (attribute === "src" || attribute === "srcset" || attribute === "href" && element.nodeName === LINK_TAG) {
				if (!skip_warning);
				return;
			}
		}
		if (attributes[attribute] === (attributes[attribute] = value)) return;
		if (attribute === "loading") element[LOADING_ATTR_SYMBOL] = value;
		if (value == null) element.removeAttribute(attribute);
		else if (typeof value !== "string" && get_setters(element).includes(attribute)) element[attribute] = value;
		else element.setAttribute(attribute, value);
	}
	function get_attributes(element) {
		return element[ATTRIBUTES_CACHE] ??= {
			[IS_CUSTOM_ELEMENT]: element.nodeName.includes("-"),
			[IS_HTML]: element.namespaceURI === NAMESPACE_HTML
		};
	}
	var setters_cache = new Map();
	function get_setters(element) {
		var cache_key = element.getAttribute("is") || element.nodeName;
		var setters = setters_cache.get(cache_key);
		if (setters) return setters;
		setters_cache.set(cache_key, setters = []);
		var descriptors;
		var proto = element;
		var element_proto = Element.prototype;
		while (element_proto !== proto) {
			descriptors = get_descriptors(proto);
			for (var key in descriptors) if (descriptors[key].set && key !== "innerHTML" && key !== "textContent" && key !== "innerText") setters.push(key);
			proto = get_prototype_of(proto);
		}
		return setters;
	}
	function bind_value(input, get, set = get) {
		var batches = new WeakSet();
		listen_to_event_and_reset_event(input, "input", async (is_reset) => {
			var value = is_reset ? input.defaultValue : input.value;
			value = is_numberlike_input(input) ? to_number(value) : value;
			set(value);
			if (current_batch !== null) batches.add(current_batch);
			await tick();
			if (value !== (value = get())) {
				var start = input.selectionStart;
				var end = input.selectionEnd;
				var length = input.value.length;
				input.value = value ?? "";
				if (end !== null) {
					var new_length = input.value.length;
					if (start === end && end === length && new_length > length) {
						input.selectionStart = new_length;
						input.selectionEnd = new_length;
					} else {
						input.selectionStart = start;
						input.selectionEnd = Math.min(end, new_length);
					}
				}
			}
		});
		if (hydrating && input.defaultValue !== input.value || untrack(get) == null && input.value) {
			set(is_numberlike_input(input) ? to_number(input.value) : input.value);
			if (current_batch !== null) batches.add(current_batch);
		}
		render_effect(() => {
			var value = get();
			if (input === document.activeElement) {
				var batch = async_mode_flag ? previous_batch : current_batch;
				if (batches.has(batch)) return;
			}
			if (is_numberlike_input(input) && value === to_number(input.value)) return;
			if (input.type === "date" && !value && !input.value) return;
			if (value !== input.value) input.value = value ?? "";
		});
	}
	function bind_checked(input, get, set = get) {
		listen_to_event_and_reset_event(input, "change", (is_reset) => {
			set(is_reset ? input.defaultChecked : input.checked);
		});
		if (hydrating && input.defaultChecked !== input.checked || untrack(get) == null) set(input.checked);
		render_effect(() => {
			var value = get();
			input.checked = Boolean(value);
		});
	}
	function is_numberlike_input(input) {
		var type = input.type;
		return type === "number" || type === "range";
	}
	function to_number(value) {
		return value === "" ? null : +value;
	}
	var resize_observer_border_box = new class ResizeObserverSingleton {
		#listeners = new WeakMap();
		#observer;
		#options;
		static entries = new WeakMap();
		constructor(options) {
			this.#options = options;
		}
		observe(element, listener) {
			var listeners = this.#listeners.get(element) || new Set();
			listeners.add(listener);
			this.#listeners.set(element, listeners);
			this.#getObserver().observe(element, this.#options);
			return () => {
				var listeners = this.#listeners.get(element);
				listeners.delete(listener);
				if (listeners.size === 0) {
					this.#listeners.delete(element);
					this.#observer.unobserve(element);
				}
			};
		}
		#getObserver() {
			return this.#observer ?? (this.#observer = new ResizeObserver((entries) => {
				for (var entry of entries) {
					ResizeObserverSingleton.entries.set(entry.target, entry);
					for (var listener of this.#listeners.get(entry.target) || []) listener(entry);
				}
			}));
		}
	}({ box: "border-box" });
	function bind_element_size(element, type, set) {
		var unsub = resize_observer_border_box.observe(element, () => set(element[type]));
		effect(() => {
			untrack(() => set(element[type]));
			return unsub;
		});
	}
	function is_bound_this(bound_value, element_or_component) {
		return bound_value === element_or_component || bound_value?.[STATE_SYMBOL] === element_or_component;
	}
	function bind_this(element_or_component = {}, update, get_value, get_parts) {
		var component_effect = component_context.r;
		var parent = active_effect;
		effect(() => {
			var old_parts;
			var parts;
			render_effect(() => {
				old_parts = parts;
				parts = get_parts?.() || [];
				untrack(() => {
					if (!is_bound_this(get_value(...parts), element_or_component)) {
						update(element_or_component, ...parts);
						if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) update(null, ...old_parts);
					}
				});
			});
			return () => {
				let p = parent;
				while (p !== component_effect && p.parent !== null && p.parent.f & 33554432) p = p.parent;
				const teardown = () => {
					if (parts && is_bound_this(get_value(...parts), element_or_component)) update(null, ...parts);
				};
				const original_teardown = p.teardown;
				p.teardown = () => {
					teardown();
					original_teardown?.();
				};
			};
		});
		return element_or_component;
	}
	function init(immutable = false) {
		const context = component_context;
		const callbacks = context.l.u;
		if (!callbacks) return;
		let props = () => deep_read_state(context.s);
		if (immutable) {
			let version = 0;
			let prev = {};
			const d = derived(() => {
				let changed = false;
				const props = context.s;
				for (const key in props) if (props[key] !== prev[key]) {
					prev[key] = props[key];
					changed = true;
				}
				if (changed) version++;
				return version;
			});
			props = () => get(d);
		}
		if (callbacks.b.length) user_pre_effect(() => {
			observe_all(context, props);
			run_all(callbacks.b);
		});
		user_effect(() => {
			const fns = untrack(() => callbacks.m.map(run));
			return () => {
				for (const fn of fns) if (typeof fn === "function") fn();
			};
		});
		if (callbacks.a.length) user_effect(() => {
			observe_all(context, props);
			run_all(callbacks.a);
		});
	}
	function observe_all(context, props) {
		if (context.l.s) for (const signal of context.l.s) get(signal);
		props();
	}
	function reactive_import(fn) {
		var s = source(0);
		return function() {
			if (arguments.length === 1) {
				set(s, get(s) + 1);
				return arguments[0];
			} else {
				get(s);
				return fn();
			}
		};
	}
	function prop(props, key, flags, fallback) {
		var runes = !legacy_mode_flag || (flags & 2) !== 0;
		var bindable = (flags & 8) !== 0;
		var lazy = (flags & 16) !== 0;
		var fallback_value = fallback;
		var fallback_dirty = true;
		var fallback_signal = void 0;
		var get_fallback = () => {
			if (lazy && runes) {
				fallback_signal ??= derived(fallback);
				return get(fallback_signal);
			}
			if (fallback_dirty) {
				fallback_dirty = false;
				fallback_value = lazy ? untrack(fallback) : fallback;
			}
			return fallback_value;
		};
		let setter;
		if (bindable) {
			var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
			setter = get_descriptor(props, key)?.set ?? (is_entry_props && key in props ? (v) => props[key] = v : void 0);
		}
		var initial_value;
		var is_store_sub = false;
		if (bindable) [initial_value, is_store_sub] = capture_store_binding(() => props[key]);
		else initial_value = props[key];
		if (initial_value === void 0 && fallback !== void 0) {
			initial_value = get_fallback();
			if (setter) {
				if (runes) props_invalid_value(key);
				setter(initial_value);
			}
		}
		var getter;
		if (runes) getter = () => {
			var value = props[key];
			if (value === void 0) return get_fallback();
			fallback_dirty = true;
			return value;
		};
		else getter = () => {
			var value = props[key];
			if (value !== void 0) fallback_value = void 0;
			return value === void 0 ? fallback_value : value;
		};
		if (runes && (flags & 4) === 0) return getter;
		if (setter) {
			var legacy_parent = props.$$legacy;
			return (function(value, mutation) {
				if (arguments.length > 0) {
					if (!runes || !mutation || legacy_parent || is_store_sub) setter(mutation ? getter() : value);
					return value;
				}
				return getter();
			});
		}
		var overridden = false;
		var d = ((flags & 1) !== 0 ? derived : derived_safe_equal)(() => {
			overridden = false;
			return getter();
		});
		if (bindable) get(d);
		var parent_effect = active_effect;
		return (function(value, mutation) {
			if (arguments.length > 0) {
				const new_value = mutation ? get(d) : runes && bindable ? proxy(value) : value;
				set(d, new_value);
				overridden = true;
				if (fallback_value !== void 0) fallback_value = new_value;
				return value;
			}
			if (is_destroying_effect && overridden || (parent_effect.f & 16384) !== 0) return d.v;
			return get(d);
		});
	}
	function onMount(fn) {
		if (component_context === null) lifecycle_outside_component("onMount");
		if (legacy_mode_flag && component_context.l !== null) init_update_callbacks(component_context).m.push(fn);
		else user_effect(() => {
			const cleanup = untrack(fn);
			if (typeof cleanup === "function") return cleanup;
		});
	}
	function onDestroy(fn) {
		if (component_context === null) lifecycle_outside_component("onDestroy");
		onMount(() => () => untrack(fn));
	}
	function init_update_callbacks(context) {
		var l = context.l;
		return l.u ??= {
			a: [],
			b: [],
			m: []
		};
	}
	if (typeof window !== "undefined") ((window.__svelte ??= {}).v ??= new Set()).add("5");
	function cubicOut(t) {
		const f = t - 1;
		return f * f * f + 1;
	}
	function quadInOut(t) {
		t /= .5;
		if (t < 1) return .5 * t * t;
		t--;
		return -.5 * (t * (t - 2) - 1);
	}
	var LINKS_KEY = "performer-links";
	var defaultLinks = [
		{
			label: "Pornolab",
			url: "http://pornolab.net/forum/tracker.php?search_id=&nm={q}"
		},
		{
			label: "Simpcity",
			url: "https://simpcity.su/search/1/?page=99&o=date&q={q}"
		},
		{
			label: "MissAV",
			url: "https://missav.ws/en/search/{q}"
		},
		{
			label: "Bunkr",
			url: "https://bunkr-albums.io/?search={q}"
		}
	];
	function generateId(link) {
		const performerLink = { ...link };
		performerLink.id = crypto.randomUUID();
		return performerLink;
	}
	function stripId(link) {
		const performerLink = { ...link };
		delete performerLink.id;
		return performerLink;
	}
	function savePerformerLinks() {
		const stored = store.performerLinks.map(stripId);
		localStorage.setItem(LINKS_KEY, JSON.stringify(stored));
	}
	function loadPerformerLinks() {
		try {
			const stored = localStorage.getItem(LINKS_KEY);
			if (stored === null) return defaultLinks.map(generateId);
			return JSON.parse(stored).map(generateId);
		} catch {
			return defaultLinks.map(generateId);
		}
	}
	function addPerformerLink() {
		store.performerLinks.push(generateId({
			label: "",
			url: ""
		}));
		savePerformerLinks();
	}
	function removePerformerLink(index) {
		if (index < 0 || index >= store.performerLinks.length) return;
		store.performerLinks.splice(index, 1);
		savePerformerLinks();
	}
	function updatePerformerLink(index, data) {
		if (index < 0 || index >= store.performerLinks.length) return;
		const link = store.performerLinks[index];
		if (link) Object.assign(link, data);
		savePerformerLinks();
	}
	function getLinkUrl(link, query) {
		const linkUrl = link.url;
		if (!query || !linkUrl.includes("{q}")) return linkUrl;
		return linkUrl.replace("{q}", encodeURIComponent(query));
	}
	function getFaviconUrl(url) {
		try {
			return `https://www.google.com/s2/favicons?domain=${new URL(url).host}&sz=64`;
		} catch {
			return "https://www.google.com/s2/favicons?domain=invalid&sz=64";
		}
	}
	function restorePerformerLinks() {
		localStorage.removeItem(LINKS_KEY);
		for (let i = 0; i < defaultLinks.length; i++) {
			const defaultSite = defaultLinks[i];
			if (i < store.performerLinks.length) {
				const existingLink = store.performerLinks[i];
				if (existingLink?.label !== defaultSite?.label || existingLink?.url !== defaultSite?.url) {
					if (existingLink) Object.assign(existingLink, defaultSite);
				}
			} else if (defaultSite) store.performerLinks.push(generateId(defaultSite));
		}
		if (store.performerLinks.length > defaultLinks.length) store.performerLinks.splice(defaultLinks.length);
		savePerformerLinks();
	}
	var store = proxy({
		readyStateComplete: false,
		showSettings: false,
		options: {
			Title: [],
			Images: [],
			Download: [],
			Shortcuts: [],
			Developer: []
		},
		performerLinks: [],
		resizeWidth: 100,
		dropdown: null,
		openDropdown(event, item, classList) {
			if (this.dropdown) this.closeDropdown();
			else this.dropdown = {
				item,
				classList,
				clientX: event.clientX,
				clientY: event.clientY,
				currentTarget: event.currentTarget
			};
		},
		closeDropdown() {
			if (this.dropdown) {
				const currentTarget = this.dropdown.currentTarget;
				const classList = this.dropdown.classList;
				if (currentTarget && classList) currentTarget.classList.remove(...classList);
				this.dropdown = null;
			}
		},
		upgradeImgData: {},
		downloadState: "idle",
		ultraImages: null,
		ultraPost: null,
		imgRefs: [],
		showFileList: false,
		fileListData: null,
		columnCount: 1,
		toggleFileList() {
			this.showFileList = !this.showFileList;
		},
		documentHidden: false,
		get transition() {
			return {
				duration: this.readyStateComplete !== false && !this.documentHidden ? 180 : 0,
				easing: quadInOut
			};
		},
		get favIcons() {
			return Object.fromEntries(this.performerLinks.filter((link) => link.url).map((link) => [link.url, getFaviconUrl(link.url)]));
		}
	});
	function handleUser(element) {
		if (!element) return;
		const name = element?.textContent;
		const link = element.getAttribute("href");
		if (name && link && link?.includes("viewprofile")) return {
			name,
			link
		};
	}
	function handleTheme(element) {
		if (!element) return;
		return {
			element: element.closest("a"),
			darkmode: element.classList.contains("fa-sun")
		};
	}
	function handleTimes(element) {
		if (!element) return;
		const part = element?.textContent?.split(" ")[0];
		if (!part) return;
		const parsed = parseInt(part);
		if (isNaN(parsed)) return;
		return parsed;
	}
	function handleImages(postImgs) {
		const images = [];
		if (!postImgs) return images;
		postImgs.forEach((varElement) => {
			const src = varElement.getAttribute("title");
			if (src) {
				const href = varElement.closest("a")?.href;
				images.push({
					id: crypto.randomUUID(),
					href,
					src
				});
			}
		});
		return images;
	}
	function handlePosts(posts) {
		if (posts) return Array.from(posts).map((msg) => {
			const row = msg?.closest("tbody");
			const nickEl = row?.querySelector(".nick");
			const dateEl = row?.querySelector(".small");
			const avatarImg = row?.querySelector(".avatar img");
			const profileLink = row?.querySelector("a.txtb[href*=\"viewprofile\"]");
			return {
				nick: nickEl?.textContent,
				date: dateEl?.textContent,
				avatar: avatarImg?.getAttribute("src"),
				link: profileLink?.getAttribute("href"),
				message: msg
			};
		});
		return [];
	}
	function handleDate(dateString) {
		if (!dateString) return null;
		const ruMonthMap = {
			Янв: "Jan",
			Фев: "Feb",
			Мар: "Mar",
			Апр: "Apr",
			Май: "May",
			Июн: "Jun",
			Июл: "Jul",
			Авг: "Aug",
			Сен: "Sep",
			Окт: "Oct",
			Ноя: "Nov",
			Дек: "Dec"
		};
		const match = dateString.match(/(\d{2})-([А-Яа-я]{3})-(\d{2}) (\d{2}:\d{2}:\d{2})/);
		if (!match) return null;
		const [, day, ruMonth, shortYear, time] = match;
		if (!ruMonth || !shortYear) return null;
		const isoString = `${day} ${ruMonthMap[ruMonth]} ${2e3 + parseInt(shortYear, 10)} ${time}`;
		return new Date(isoString);
	}
	function handleRelativeDate(dateLike) {
		if (dateLike === null) return "";
		const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
		const divisions = [
			{
				amount: 60,
				name: "seconds"
			},
			{
				amount: 60,
				name: "minutes"
			},
			{
				amount: 24,
				name: "hours"
			},
			{
				amount: 7,
				name: "days"
			},
			{
				amount: 4.34524,
				name: "weeks"
			},
			{
				amount: 12,
				name: "months"
			},
			{
				amount: Infinity,
				name: "years"
			}
		];
		let delta = (new Date(dateLike).getTime() - Date.now()) / 1e3;
		for (const { amount, name } of divisions) {
			if (Math.abs(delta) < amount) return rtf.format(Math.round(delta), name);
			delta /= amount;
		}
		return "";
	}
	function handleThankList(element) {
		if (!element) return new Set();
		const userIds = new Set();
		element.querySelectorAll("u").forEach((uElement) => {
			const uid = uElement.textContent;
			if (uid) userIds.add(uid);
		});
		return userIds;
	}
	function handleTitle(topicEl) {
		const text = topicEl?.textContent?.trim();
		if (!text) return null;
		const tags = extractTags(text);
		const parsed = text.replace(TAG_RE, "").trim();
		return {
			original: text,
			parsed,
			searchTerms: extractSearchTerms(parsed),
			tags
		};
	}
	function extractTags(text) {
		const all = [...text.matchAll(TAG_RE)].flatMap((m) => m[1]?.split(",") ?? []).map((t) => t.trim()).filter(Boolean);
		return [...new Set(all)];
	}
	function extractSearchTerms(text) {
		const terms = [];
		let cursor = 0;
		const splitOnSeparators = (fragment) => fragment.trim() ? fragment.split(SEP_RE).map((s) => s.trim()).filter(Boolean) : [];
		for (const match of text.matchAll(BRACKETS_RE)) {
			terms.push(...splitOnSeparators(text.slice(cursor, match.index)));
			const inner = match[1] ?? match[2] ?? "";
			terms.push(...splitOnSeparators(inner));
			cursor = match.index + match[0].length;
		}
		terms.push(...splitOnSeparators(text.slice(cursor)));
		return terms.filter((t, i) => terms.indexOf(t) === i);
	}
	var TAG_RE = /\[([^\]]+)]/g;
	var BRACKETS_RE = /\(([^)]+)\)|\{([^}]+)\}/g;
	var SEP_RE = new RegExp([
		",",
		"|",
		"/",
		"&",
		"-",
		"—",
		"–",
		"aka"
	].map((str) => {
		const escaped = str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
		switch (str) {
			case "-":
			case "—":
			case "–":
			case "/":
			case "aka": return `(?<=\\s)${escaped}(?=\\s)`;
			default: return escaped;
		}
	}).join("|"), "g");
	function handleData() {
		const sel = Object.fromEntries(Object.entries({
			title: "a#topic-title",
			images: "#topic_main > tbody:nth-of-type(2) div.sp-wrap var.postImg",
			user: "div.topmenu td a",
			messages: "div.topmenu a.new-pm-link",
			theme: "div.topmenu .fas.fa-sun, div.topmenu .fas.fa-moon",
			seeders: "span.seed > b",
			leechers: "b.leech > b",
			size: "#tor-reged tr:nth-of-type(5) td:last-of-type",
			date: "div.post_head a.small",
			times: "td.borderless.bCenter.pad_8 > b",
			link: "a.dl-stub.dl-link",
			thank: "input#thx-btn",
			list: "div.thx-list",
			pagination: "table#pagination",
			logo: "img.site-logo",
			forumline: "table.forumline.message"
		}).map(([key, value]) => [key, document.querySelectorAll(value)]));
		return {
			title: handleTitle(sel?.["title"]?.[0]),
			posts: [],
			images: handleImages(sel["images"]),
			user: handleUser(sel?.["user"]?.[0]),
			messages: sel["messages"]?.[0],
			theme: handleTheme(sel["theme"]?.[0]),
			torrent: {
				seeders: sel?.["seeders"]?.[0]?.textContent,
				leechers: sel?.["leechers"]?.[0]?.textContent?.trim(),
				size: sel?.["size"]?.[0]?.textContent,
				date: handleDate(sel?.["date"]?.[0]?.textContent),
				times: handleTimes(sel?.["times"]?.[2]),
				link: sel?.["link"]?.[0]?.href
			},
			thank: {
				element: sel?.["thank"]?.[0],
				list: handleThankList(sel?.["list"]?.[0])
			},
			pagination: sel?.["pagination"]?.[0],
			logo: sel?.["logo"]?.[0]?.src,
			forumline: sel?.["forumline"]?.[0]
		};
	}
	var data = proxy({});
	var _GM_xmlhttpRequest = typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0;
	function GM_fetch(method, url, responseType, headers, data) {
		return new Promise((resolve, reject) => {
			_GM_xmlhttpRequest({
				method,
				url,
				responseType,
				headers,
				data,
				timeout: 5e3,
				onload: (response) => resolve(response),
				onerror: () => reject(new Error(`GM_fetch failed: ${url}`)),
				ontimeout: () => reject(new Error(`GM_fetch timed out: ${url}`))
			});
		});
	}
	var KEY$1 = "resolved-urls";
	var cache = JSON.parse(sessionStorage.getItem(KEY$1) || "{}");
	function getCache$1(url) {
		return cache[url];
	}
	function setCache$1(url, src) {
		cache[url] = src;
		sessionStorage.setItem(KEY$1, JSON.stringify(cache));
	}
	function clearCache() {
		Object.keys(cache).forEach((key) => delete cache[key]);
		sessionStorage.removeItem(KEY$1);
	}
	async function getBlob(url) {
		if (getSettings("proxyCache")) return "https://corsproxy.io/?url=" + encodeURIComponent(url);
		const { response } = await GM_fetch("GET", url, "blob");
		return URL.createObjectURL(response);
	}
	var OPTIONS_KEY = "user-settings";
	var defaultOptions = {
		Title: [
			{
				label: "Parse title",
				key: "parseTitle",
				value: true
			},
			{
				label: "Show tags",
				key: "showTags",
				value: true
			},
			{
				label: "Performer links",
				key: "performerLinks",
				value: true
			}
		],
		Images: [
			{
				label: "Upgrade images",
				key: "upgradeImages",
				value: true
			},
			{
				label: "Last image first",
				key: "lastImageFirst",
				value: true
			},
			{
				label: "Drag to resize",
				key: "dragResize",
				value: true
			}
		],
		Download: [
			{
				label: "Floating download button",
				key: "floatingDownload",
				value: false
			},
			{
				label: "Send to <a href=\"https://github.com/valpackett/transmitter\" target=\"_blank\">Transmitter</a>",
				key: "sendToTransmitter",
				value: false
			},
			{
				label: "Auto-expand file list",
				key: "expandFiles",
				value: false
			}
		],
		Shortcuts: [
			{
				label: "Navigate with number keys",
				key: "numKeys",
				value: true,
				description: "[1, 2, 3, 4]"
			},
			{
				label: "Anchor images",
				key: "spaceImageAnchor",
				value: true,
				description: "[Space, Shift + Space]"
			},
			{
				label: "Download torrent",
				key: "dKeyToDownload",
				value: false,
				description: "[d]"
			}
		],
		Network: [
			{
				label: "Cache resolved urls",
				key: "cacheImages",
				value: true
			},
			{
				label: "Limit concurrent upgrades",
				key: "limitConcurrent",
				value: true
			},
			{
				label: "CorsProxy.io",
				key: "proxyCache",
				value: false,
				description: "cache hotlinked"
			}
		],
		Developer: [
			{
				label: "Toggle settings",
				key: "sKeySettings",
				value: false,
				description: "[s]"
			},
			{
				label: "Debug upgrade",
				key: "debugImgs",
				value: false
			},
			{
				label: "Incognito",
				key: "incognito",
				value: false
			}
		]
	};
	function loadOptions() {
		const options = structuredClone(defaultOptions);
		const stored = localStorage.getItem(OPTIONS_KEY);
		if (stored) try {
			const saved = JSON.parse(stored);
			Object.values(options).flat().forEach((opt) => {
				const value = saved[opt.key];
				if (value !== void 0) opt.value = value;
			});
		} catch (error) {
			console.warn(`Failed to load ${OPTIONS_KEY} from localStorage:`, error);
		}
		return options;
	}
	function saveOptions() {
		const options = Object.values(store.options).flat();
		const json = Object.fromEntries(options.map((opt) => [opt.key, opt.value]));
		localStorage.setItem(OPTIONS_KEY, JSON.stringify(json));
	}
	function updateOption(key, value) {
		const option = Object.values(store.options).flat().find((opt) => opt.key === key);
		if (option) option.value = value;
		saveOptions();
	}
	function restoreOptions() {
		Object.entries(defaultOptions).forEach(([groupKey, groupSettings]) => {
			groupSettings.forEach((defaultSetting) => {
				const currentOpt = store.options[groupKey]?.find((opt) => opt.key === defaultSetting.key);
				if (currentOpt) currentOpt.value = defaultSetting.value;
			});
		});
		localStorage.removeItem(OPTIONS_KEY);
		saveOptions();
	}
	var DEFAULT_WIDTH = 100;
	var RESIZE_KEY = "images-resize-width";
	function loadResize() {
		try {
			const stored = localStorage.getItem(RESIZE_KEY);
			if (stored) return parseInt(stored);
		} catch (error) {
			console.warn(`Failed to load ${RESIZE_KEY} from localStorage:`, error);
		}
		return DEFAULT_WIDTH;
	}
	function saveResize(value) {
		try {
			localStorage.setItem(RESIZE_KEY, value.toString());
		} catch (error) {
			console.warn(`Failed to save ${RESIZE_KEY} to localStorage:`, error);
		}
	}
	function restoreResize() {
		localStorage.setItem(RESIZE_KEY, DEFAULT_WIDTH.toString());
		store.resizeWidth = DEFAULT_WIDTH;
	}
	var DEFAULT_COUNT = 1;
	var COLUMN_COUNT_KEY = "grid-size-width";
	function loadColumnCount() {
		try {
			const stored = localStorage.getItem(COLUMN_COUNT_KEY);
			if (stored) return parseInt(stored);
		} catch (error) {
			console.warn(`Failed to load ${COLUMN_COUNT_KEY} from localStorage:`, error);
		}
		return DEFAULT_COUNT;
	}
	function saveColumnCount(value) {
		try {
			localStorage.setItem(COLUMN_COUNT_KEY, value.toString());
		} catch (error) {
			console.warn(`Failed to save ${COLUMN_COUNT_KEY} to localStorage:`, error);
		}
	}
	function restoreColumnCount() {
		localStorage.setItem(COLUMN_COUNT_KEY, DEFAULT_COUNT.toString());
		store.columnCount = DEFAULT_COUNT;
	}
	var parser$4 = new DOMParser();
	var decoder = new TextDecoder("windows-1251");
	var regex = /\b\d+[pk]\b/gi;
	async function getRelated(title) {
		const query = stripResolution(title);
		const cache = getCache();
		if (cache[query]) return cache[query];
		const elements = await handleSearch(query);
		const results = [];
		elements.forEach((element) => {
			if (element instanceof HTMLAnchorElement && element.href && element.textContent) {
				const resolution = getResolution(element.textContent);
				if (resolution) results.push({
					href: element.href,
					textContent: element.textContent,
					resolution
				});
			}
		});
		cache[query] = results;
		setCache(cache);
		return results;
	}
	async function handleSearch(searchQuery) {
		const headers = { "Content-Type": "application/x-www-form-urlencoded" };
		const body = `max=1&to=1&nm=${encodeURIComponent(searchQuery)}`;
		const buffer = await (await fetch("/forum/tracker.php", {
			method: "POST",
			headers,
			body
		})).arrayBuffer();
		const result = decoder.decode(buffer);
		const doc = parser$4.parseFromString(result, "text/html");
		if (doc.querySelector(".info_msg_wrap")) return [];
		const related = doc.querySelectorAll(".med.tLink.bold");
		return Array.from(related);
	}
	function stripResolution(title) {
		return title.replace(regex, "").replace(/ ,/g, "").replace(/\s*,\s*(?=\])/g, "").replace(/\[\]/g, "");
	}
	function getResolution(title) {
		return title.match(regex)?.[0];
	}
	var CACHE_KEY = "related-cache";
	function getCache() {
		const cached = sessionStorage.getItem(CACHE_KEY);
		return cached ? JSON.parse(cached) : {};
	}
	function setCache(cache) {
		sessionStorage.setItem(CACHE_KEY, JSON.stringify(cache));
	}
	function restoreRelated() {
		sessionStorage.removeItem(CACHE_KEY);
	}
	var SETTINGS_KEY = "show-settings";
	function getSettings(key) {
		return Object.values(store.options).flat().find((opt) => opt.key === key)?.value || false;
	}
	function loadShowSettings() {
		const stored = localStorage.getItem(SETTINGS_KEY);
		if (stored === null) return false;
		try {
			return JSON.parse(stored);
		} catch (error) {
			console.warn(`Failed to parse settings from localStorage:`, stored, error);
			return false;
		}
	}
	function saveShowSettings(value) {
		try {
			localStorage.setItem(SETTINGS_KEY, JSON.stringify(value));
		} catch (error) {
			console.warn(`Failed to save ${SETTINGS_KEY} to localStorage:`, error);
		}
	}
	function toggleShowSettings(event) {
		event.preventDefault();
		store.showSettings = !store.showSettings;
		saveShowSettings(store.showSettings);
	}
	function restoreDefaultSettings() {
		if (!confirm("Are you sure you want to restore all settings to default?")) return;
		restoreOptions();
		restorePerformerLinks();
		restoreResize();
		restoreRelated();
		restoreColumnCount();
		clearCache();
	}
	var SYNC_TRIGGER_KEY = "sync-trigger";
	function syncSettings() {
		localStorage.setItem(SYNC_TRIGGER_KEY, Date.now().toString());
	}
	function onstorage(event) {
		if (event.key !== SYNC_TRIGGER_KEY) return;
		const optionsValue = localStorage.getItem(OPTIONS_KEY);
		if (optionsValue) {
			const saved = JSON.parse(optionsValue);
			Object.values(store.options).flat().forEach((setting) => {
				if (setting.key in saved) setting.value = saved[setting.key];
			});
			saveOptions();
		}
		const resizeValue = localStorage.getItem(RESIZE_KEY);
		if (resizeValue) store.resizeWidth = parseInt(resizeValue);
		if (localStorage.getItem("performer-links")) {
			store.performerLinks.length = 0;
			store.performerLinks.push(...loadPerformerLinks());
		}
		store.showSettings = false;
	}
	function exportSettings() {
		const performerLinks = store.performerLinks.map(stripId);
		const options = Object.values(store.options).flat();
		const optionsJson = Object.fromEntries(options.map((opt) => [opt.key, opt.value]));
		const fileContent = `// Paste this into browser console

localStorage.setItem("${OPTIONS_KEY}", JSON.stringify(${JSON.stringify(optionsJson, null, 2)}));

localStorage.setItem("${LINKS_KEY}", JSON.stringify(${JSON.stringify(performerLinks, null, 2)}));

localStorage.setItem("${RESIZE_KEY}", "${store.resizeWidth || "100"}");

localStorage.setItem("${COLUMN_COUNT_KEY}", "${store.columnCount || "1"}");

location.reload();
`;
		const blob = new Blob([fileContent], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = Object.assign(document.createElement("a"), {
			href: url,
			download: `data-${new Date().toISOString().split("T")[0]}.txt`
		});
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}
	var KEY = "userscript-disabled";
	function userscriptDisabled() {
		const stored = sessionStorage.getItem(KEY);
		return stored === null ? false : stored === "true";
	}
	function setUserscript(value) {
		sessionStorage.setItem(KEY, JSON.stringify(value));
		location.reload();
	}
	function appendUserscriptEnableButton() {
		console.warn("userscript disabled");
		const button = document.createElement("button");
		Object.assign(button, {
			textContent: "Enable Pornolab Ultra",
			onclick: () => setUserscript(false)
		});
		Object.assign(button.style, {
			position: "fixed",
			top: "0.75rem",
			right: "0.75rem",
			zIndex: "9999"
		});
		document.querySelector("#pl-speedbar-a")?.parentElement?.appendChild(button);
	}
	function prependContentSecurityPolicy() {
		const meta = document.createElement("meta");
		meta.httpEquiv = "Content-Security-Policy";
		meta.content = `
    default-src 'self';
    img-src 'self' http: https: data: blob:;
    style-src 'unsafe-inline';
    font-src 'self'
      https://static.pornolab.net/templates/default/webfonts/fa-solid-900.woff2;
    script-src 'unsafe-inline'
      https://static.pornolab.net/js/main.js
      https://static.pornolab.net/js/jquery.pack.js;
  `;
		document.head.prepend(meta);
		return document.head.contains(meta);
	}
	function forumDisabled(app) {
		const p = document.querySelector("body > div > p");
		const disabledText = "Форум временно отключен";
		if (!p?.textContent?.includes(disabledText)) return false;
		const translations = {
			[disabledText]: "Forum is temporarily disabled",
			"Последние новости вы можете узнать в": "You can find out the latest news on",
			твиттере: "Twitter"
		};
		app.remove();
		let html = p.innerHTML;
		for (const [russian, english] of Object.entries(translations)) html = html.replace(russian, english);
		p.innerHTML = html;
		return true;
	}
	enable_legacy_mode_flag();
	function state(state) {
		store.downloadState = state;
	}
	async function handleDownload(event) {
		event.preventDefault();
		if (store.downloadState === "downloading") return;
		if (!data.torrent?.link) return state("error");
		try {
			store.downloadState = "downloading";
			if (!getSettings("sendToTransmitter")) {
				window.location.assign(data.torrent.link);
				return state("success");
			}
			const url = "http://transmitter.web-extension/" + encodeURIComponent(data.torrent.link);
			const page = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { background-color: ${getComputedStyle(document.documentElement).getPropertyValue("--main-bg")}; }
            img { display: none; }
          </style>
        </head>
        <body>
          <img src="${url}" onload="window.close()" onerror="window.close()">
        </body>
      </html>
    `;
			window.open(URL.createObjectURL(new Blob([page], { type: "text/html" })), "_blank", "noopener");
			state("success");
		} catch (err) {
			console.error("Error downloading torrent:", err);
			state("error");
		}
	}
	var $$_import_store = reactive_import(() => store);
	function Events($$anchor, $$props) {
		push($$props, false);
		function handleReadyStateChange() {
			if (document.readyState === "complete") $$_import_store($$_import_store().readyStateComplete = true);
		}
		onMount(() => {
			handleReadyStateChange();
			if ($$_import_store().readyStateComplete) return;
			return on(document, "readystatechange", handleReadyStateChange);
		});
		function onkeydown(event) {
			const target = event.target;
			if (target.isContentEditable || target instanceof HTMLInputElement && target.type === "text" || event.ctrlKey || event.metaKey || event.altKey) return;
			switch (event.code) {
				case "Space":
					handleSpace(event);
					break;
				case "KeyS":
					handleKeyS(event);
					break;
				case "KeyD":
					handleKeyD(event);
					break;
				case "Escape":
					handleEscape();
					break;
				case "Digit1":
				case "Digit2":
				case "Digit3":
				case "Digit4":
					if (!getSettings("numKeys")) return;
					event.preventDefault();
					digitHandlers[event.code]();
					break;
				default: return;
			}
		}
		const digitHandlers = {
			Digit1: handleDigit1,
			Digit2: handleDigit2,
			Digit3: handleDigit3,
			Digit4: handleDigit4
		};
		function handleSpace(event) {
			if (!getSettings("spaceImageAnchor") || !$$_import_store().imgRefs.length || !$$_import_store().ultraImages || $$_import_store().columnCount !== 1) return;
			const scrollY = window.scrollY;
			const containerTop = $$_import_store().ultraImages.offsetTop;
			const containerBottom = containerTop + $$_import_store().ultraImages.offsetHeight;
			if (containerTop >= scrollY + window.innerHeight || containerBottom <= scrollY) return;
			let filteredImgRefs = [...$$_import_store().imgRefs].filter((el) => el.dataset["broken"] !== "true");
			if (filteredImgRefs.length === 0) return;
			if (scrollY < containerTop) {
				if (!event.shiftKey) {
					event.preventDefault();
					filteredImgRefs[0]?.scrollIntoView({ block: "start" });
				}
				return;
			}
			const backward = event.shiftKey;
			const threshold = scrollY + (backward ? -10 : 10);
			if (backward) {
				for (const img of filteredImgRefs.slice().reverse()) if (scrollY + img.getBoundingClientRect().top < threshold) {
					event.preventDefault();
					img.scrollIntoView({ block: "start" });
					return;
				}
			} else for (const img of filteredImgRefs) if (scrollY + img.getBoundingClientRect().top > threshold) {
				event.preventDefault();
				img.scrollIntoView({ block: "start" });
				return;
			}
		}
		function handleKeyD(event) {
			if (!getSettings("dKeyToDownload")) return;
			event.preventDefault();
			handleDownload(event);
		}
		function handleEscape() {
			if ($$_import_store().dropdown !== null) $$_import_store().closeDropdown();
			else if ($$_import_store().showSettings) {
				$$_import_store($$_import_store().showSettings = false);
				saveShowSettings($$_import_store().showSettings);
			}
		}
		function handleKeyS(event) {
			if (!getSettings("sKeySettings")) return;
			if (!$$_import_store().showSettings) window.scrollTo({ top: 0 });
			toggleShowSettings(event);
		}
		function handleDigit1() {
			window.scrollTo({ top: 0 });
		}
		function handleDigit2() {
			$$_import_store().ultraImages?.scrollIntoView({ block: "start" });
		}
		function handleDigit3() {
			$$_import_store().ultraPost?.scrollIntoView({ block: "start" });
		}
		function handleDigit4() {
			window.scrollTo({ top: document.body.scrollHeight });
		}
		function onvisibilitychange() {
			$$_import_store($$_import_store().documentHidden = document.hidden);
		}
		init();
		event("keydown", $window, onkeydown);
		event("storage", $window, function(...$$args) {
			onstorage?.apply(this, $$args);
		});
		event("visibilitychange", $document, onvisibilitychange);
		pop();
	}
	var Item$2 = ($$anchor, title = noop, content = noop) => {
		var div = root_1$13();
		snippet(child(div), content);
		reset(div);
		template_effect(() => set_attribute(div, "title", title()));
		append($$anchor, div);
	};
	var Messages = ($$anchor) => {
		const href = user_derived(() => "/forum/privmsg.php?folder=inbox");
		var a_2 = root_6$6();
		set_attribute(a_2, "href", get(href));
		var i = child(a_2);
		reset(a_2);
		template_effect(() => set_class(i, 1, clsx([
			"fas",
			"fa-envelope",
			data.messages && "unread"
		]), "svelte-zne36e"));
		append($$anchor, a_2);
	};
	var Settings$1 = ($$anchor) => {
		var fragment_2 = root_10$2();
		var a_4 = first_child(fragment_2);
		var a_5 = sibling(a_4, 2);
		delegated("click", a_4, function(...$$args) {
			toggleShowSettings?.apply(this, $$args);
		});
		delegated("click", a_5, function(...$$args) {
			toggleShowSettings?.apply(this, $$args);
		});
		append($$anchor, fragment_2);
	};
	var root_1$13 = from_html(`<div class="item svelte-zne36e"><!></div>`);
	var root_4$5 = from_html(`<a>Profile</a>`);
	var root_5$6 = from_html(`<a href="/">Login</a>`);
	var root_6$6 = from_html(`<a aria-label="inbox"><i></i></a>`);
	var root_8$1 = from_html(`<span class="themeIcon svelte-zne36e"></span>`);
	var root_9$1 = from_html(`<a href="/" aria-label="placeholder"><i></i></a>`);
	var root_10$2 = from_html(`<a href="#settings"><img src="https://github.com/clangmoyai/plab-ultra/raw/main/src/assets/logo64.png" class="ultra-logo svelte-zne36e" alt="logo"/></a> <a href="#settings">Settings</a>`, 1);
	var root_11$1 = from_html(`<a href="#disable">Disable</a>`);
	var root$6 = from_html(`<div id="x-header"><div class="logo svelte-zne36e"><a href="/forum/index.php"><img alt=""/></a></div> <div class="align-right svelte-zne36e"><div class="container svelte-zne36e"><div class="links svelte-zne36e"><!> <!> <!> <!> <!> <!></div> <div class="search svelte-zne36e"><input type="text" name="search" placeholder="Search…" class="svelte-zne36e"/> <button class="svelte-zne36e">»</button></div></div></div></div>`);
	function Header($$anchor, $$props) {
		push($$props, true);
		const Profile = ($$anchor) => {
			var fragment = comment();
			var node_1 = first_child(fragment);
			var consequent = ($$anchor) => {
				append($$anchor, text("Profile"));
			};
			var consequent_1 = ($$anchor) => {
				var a = root_4$5();
				template_effect(() => {
					set_attribute(a, "href", data.user.link);
					set_attribute(a, "title", data.user?.name);
				});
				append($$anchor, a);
			};
			var alternate = ($$anchor) => {
				append($$anchor, root_5$6());
			};
			if_block(node_1, ($$render) => {
				if (get(incognito)) $$render(consequent);
				else if (data.user?.link) $$render(consequent_1, 1);
				else $$render(alternate, -1);
			});
			append($$anchor, fragment);
		};
		const Theme = ($$anchor) => {
			var fragment_1 = comment();
			var node_2 = first_child(fragment_1);
			var consequent_2 = ($$anchor) => {
				var span = root_8$1();
				attach(span, () => appendThemeButton(data.theme.element));
				append($$anchor, span);
			};
			var alternate_1 = ($$anchor) => {
				const darkMode = user_derived(() => data.theme?.darkmode);
				var a_3 = root_9$1();
				var i_1 = child(a_3);
				reset(a_3);
				template_effect(() => set_class(i_1, 1, clsx([
					"fas",
					get(darkMode) && "fa-sun",
					!get(darkMode) && "fa-moon"
				])));
				append($$anchor, a_3);
			};
			if_block(node_2, ($$render) => {
				if (data.theme?.element) $$render(consequent_2);
				else $$render(alternate_1, -1);
			});
			append($$anchor, fragment_1);
		};
		const Disable = ($$anchor) => {
			var a_6 = root_11$1();
			delegated("click", a_6, disableUserscript);
			append($$anchor, a_6);
		};
		let incognito = user_derived(() => getSettings("incognito"));
		let floatingDownload = user_derived(() => getSettings("floatingDownload"));
		let messagesTitle = user_derived(() => data.messages ? "Unread" : "Messages");
		let searchQuery = state$1("");
		function disableUserscript(event) {
			event.preventDefault();
			setUserscript(true);
		}
		function handleSearch() {
			const url = "/forum/tracker.php?search_id=&nm=";
			window.location.href = `${url}${encodeURIComponent(get(searchQuery))}`;
		}
		function appendThemeButton(themeElement) {
			return (element) => {
				if (!(themeElement instanceof HTMLAnchorElement)) return;
				element.appendChild(themeElement);
				return () => {
					themeElement.remove();
				};
			};
		}
		var div_1 = root$6();
		let classes;
		var div_2 = child(div_1);
		var a_8 = child(div_2);
		var img = child(a_8);
		let classes_1;
		reset(a_8);
		reset(div_2);
		var div_3 = sibling(div_2, 2);
		var div_4 = child(div_3);
		var div_5 = child(div_4);
		var node_3 = child(div_5);
		Item$2(node_3, () => "Profile", () => Profile);
		var node_4 = sibling(node_3, 2);
		Item$2(node_4, () => get(messagesTitle), () => Messages);
		var node_5 = sibling(node_4, 2);
		Item$2(node_5, () => "Theme", () => Theme);
		var node_6 = sibling(node_5, 2);
		Item$2(node_6, () => "Settings", () => Settings$1);
		var node_7 = sibling(node_6, 2);
		if_block(node_7, ($$render) => {});
		Item$2(sibling(node_7, 2), () => "Disable", () => Disable);
		reset(div_5);
		var div_6 = sibling(div_5, 2);
		var input = child(div_6);
		remove_input_defaults(input);
		var button = sibling(input, 2);
		reset(div_6);
		reset(div_4);
		reset(div_3);
		reset(div_1);
		template_effect(() => {
			classes = set_class(div_1, 1, "svelte-zne36e", null, classes, { floatingDownload: get(floatingDownload) });
			set_attribute(img, "src", data.logo);
			classes_1 = set_class(img, 1, "svelte-zne36e", null, classes_1, { incognito: get(incognito) });
		});
		event("keypress", input, (event) => {
			if (event.key === "Enter") handleSearch();
		});
		bind_value(input, () => get(searchQuery), ($$value) => set(searchQuery, $$value));
		delegated("click", button, handleSearch);
		append($$anchor, div_1);
		pop();
	}
	delegate(["click"]);
	var root_3$6 = from_html(`<span class="description svelte-1emp0k3"> </span>`);
	var root_2$6 = from_html(`<label><input type="checkbox" class="svelte-1emp0k3"/> <span class="svelte-1emp0k3"><!> <!></span></label>`);
	var root_1$12 = from_html(`<div class="column svelte-1emp0k3"><h2 class="svelte-1emp0k3"> </h2> <!></div>`);
	var root$5 = from_html(`<div class="container svelte-1emp0k3"></div>`);
	function Options($$anchor, $$props) {
		push($$props, true);
		let parseTitle = user_derived(() => getSettings("parseTitle"));
		function onchange(event) {
			const checkbox = event.target;
			if (!checkbox) return;
			if (checkbox.id === "expandFiles" && store.showFileList !== checkbox.checked) store.toggleFileList();
			if (checkbox.id === "cacheImages" && !checkbox.checked) clearCache();
			saveOptions();
		}
		var div = root$5();
		each(div, 21, () => Object.entries(store.options), ([title, items]) => title, ($$anchor, $$item) => {
			var $$array = user_derived(() => to_array(get($$item), 2));
			let title = () => get($$array)[0];
			let items = () => get($$array)[1];
			var div_1 = root_1$12();
			var h2 = child(div_1);
			var text = child(h2, true);
			reset(h2);
			each(sibling(h2, 2), 17, items, (item) => item.key, ($$anchor, item, $$index) => {
				const disabled = user_derived(() => !get(parseTitle) && (get(item).key === "performerLinks" || get(item).key === "showTags") || get(item).key === "spaceImageAnchor" && store.columnCount !== 1);
				var label = root_2$6();
				let classes;
				var input = child(label);
				remove_input_defaults(input);
				var span = sibling(input, 2);
				var node_1 = child(span);
				html(node_1, () => get(item).label);
				var node_2 = sibling(node_1, 2);
				var consequent = ($$anchor) => {
					var span_1 = root_3$6();
					var text_1 = child(span_1, true);
					reset(span_1);
					template_effect(() => set_text(text_1, get(item).description));
					append($$anchor, span_1);
				};
				if_block(node_2, ($$render) => {
					if (get(item).description) $$render(consequent);
				});
				reset(span);
				reset(label);
				template_effect(() => {
					classes = set_class(label, 1, "svelte-1emp0k3", null, classes, { disabled: get(disabled) });
					set_attribute(input, "id", get(item).key);
					input.disabled = get(disabled);
				});
				delegated("change", input, onchange);
				delegated("click", input, (event) => {
					event.currentTarget?.blur();
				});
				bind_checked(input, () => get(item).value, ($$value) => get(item).value = $$value);
				append($$anchor, label);
			});
			reset(div_1);
			template_effect(() => set_text(text, title()));
			append($$anchor, div_1);
		});
		reset(div);
		append($$anchor, div);
		pop();
	}
	delegate(["change", "click"]);
	var linear = (x) => x;
	function cubic_out(t) {
		const f = t - 1;
		return f * f * f + 1;
	}
	function fade(node, { delay = 0, duration = 400, easing = linear } = {}) {
		const o = +getComputedStyle(node).opacity;
		return {
			delay,
			duration,
			easing,
			css: (t) => `opacity: ${t * o}`
		};
	}
	function slide(node, { delay = 0, duration = 400, easing = cubic_out, axis = "y" } = {}) {
		const style = getComputedStyle(node);
		const opacity = +style.opacity;
		const primary_property = axis === "y" ? "height" : "width";
		const primary_property_value = parseFloat(style[primary_property]);
		const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
		const capitalized_secondary_properties = secondary_properties.map((e) => `${e[0].toUpperCase()}${e.slice(1)}`);
		const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
		const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
		const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
		const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
		const border_width_start_value = parseFloat(style[`border${capitalized_secondary_properties[0]}Width`]);
		const border_width_end_value = parseFloat(style[`border${capitalized_secondary_properties[1]}Width`]);
		return {
			delay,
			duration,
			easing,
			css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;min-${primary_property}: 0`
		};
	}
	function scale(node, { delay = 0, duration = 400, easing = cubic_out, start = 0, opacity = 0 } = {}) {
		const style = getComputedStyle(node);
		const target_opacity = +style.opacity;
		const transform = style.transform === "none" ? "" : style.transform;
		const sd = 1 - start;
		const od = target_opacity * (1 - opacity);
		return {
			delay,
			duration,
			easing,
			css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
		};
	}
	var root_1$11 = from_html(`<span><!></span>`);
	var root_2$5 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="svelte-1obhcw8"><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39l8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33Z" class="svelte-1obhcw8"></path></svg>`);
	var root$4 = from_html(`<button class="svelte-1obhcw8"><!></button>`);
	function Checkmark($$anchor, $$props) {
		push($$props, true);
		const DURATION = 1e3;
		let clicked = state$1(false);
		let timeout = null;
		let clientWidth = state$1(0);
		let clientHeight = state$1(0);
		let opts = user_derived(() => ({
			...store.transition,
			start: .6
		}));
		function onclick() {
			$$props.onclick?.();
			handleTransition();
		}
		function handleTransition() {
			set(clicked, true);
			if (timeout) clearTimeout(timeout);
			timeout = setTimeout(() => {
				set(clicked, false);
				timeout = null;
			}, DURATION);
		}
		onDestroy(() => {
			if (timeout) clearTimeout(timeout);
		});
		var button = root$4();
		let styles;
		var node = child(button);
		var consequent = ($$anchor) => {
			var span = root_1$11();
			snippet(child(span), () => $$props.children);
			reset(span);
			transition(3, span, () => scale, () => get(opts));
			bind_element_size(span, "clientWidth", ($$value) => set(clientWidth, $$value));
			bind_element_size(span, "clientHeight", ($$value) => set(clientHeight, $$value));
			append($$anchor, span);
		};
		var alternate = ($$anchor) => {
			var svg = root_2$5();
			var path = child(svg);
			reset(svg);
			transition(3, path, () => scale, () => get(opts));
			append($$anchor, svg);
		};
		if_block(node, ($$render) => {
			if (!get(clicked)) $$render(consequent);
			else $$render(alternate, -1);
		});
		reset(button);
		template_effect(() => {
			set_attribute(button, "title", $$props.title);
			button.disabled = $$props.disabled;
			styles = set_style(button, "", styles, {
				width: `${get(clientWidth) ?? ""}px`,
				height: `${get(clientHeight) ?? ""}px`
			});
		});
		delegated("click", button, onclick);
		append($$anchor, button);
		pop();
	}
	delegate(["click"]);
	var root$3 = from_html(`<div class="container svelte-1hugea"><!> <div class="align-right svelte-1hugea"><!> <!> <!></div></div>`);
	function Actions($$anchor, $$props) {
		push($$props, true);
		let parseTitle = user_derived(() => getSettings("parseTitle"));
		let performerLinks = user_derived(() => getSettings("performerLinks"));
		var div = root$3();
		var node = child(div);
		{
			let $0 = user_derived(() => !get(parseTitle) || !get(performerLinks));
			Checkmark(node, {
				get onclick() {
					return addPerformerLink;
				},
				title: "Add performer link",
				get disabled() {
					return get($0);
				},
				children: ($$anchor, $$slotProps) => {
					next();
					append($$anchor, text("Add link"));
				},
				$$slots: { default: true }
			});
		}
		var div_1 = sibling(node, 2);
		var node_1 = child(div_1);
		Checkmark(node_1, {
			get onclick() {
				return syncSettings;
			},
			title: "Sync settings to other tabs",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Sync"));
			},
			$$slots: { default: true }
		});
		var node_2 = sibling(node_1, 2);
		Checkmark(node_2, {
			get onclick() {
				return restoreDefaultSettings;
			},
			title: "Restore all settings to default",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Restore"));
			},
			$$slots: { default: true }
		});
		Checkmark(sibling(node_2, 2), {
			get onclick() {
				return exportSettings;
			},
			title: "Export settings as text file",
			children: ($$anchor, $$slotProps) => {
				next();
				append($$anchor, text("Export"));
			},
			$$slots: { default: true }
		});
		reset(div_1);
		reset(div);
		append($$anchor, div);
		pop();
	}
	function slideFade(node, { delay = 0, duration = 400, easing = cubicOut, axis = "y" } = {}) {
		const style = getComputedStyle(node);
		const opacity = +style.opacity;
		const primary_property = axis === "y" ? "height" : "width";
		const primary_property_value = parseFloat(style[primary_property]);
		const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
		const capitalized_secondary_properties = secondary_properties.map((e) => `${e[0].toUpperCase()}${e.slice(1)}`);
		const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
		const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
		const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
		const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
		const border_width_start_value = parseFloat(style[`border${capitalized_secondary_properties[0]}Width`]);
		const border_width_end_value = parseFloat(style[`border${capitalized_secondary_properties[1]}Width`]);
		return {
			delay,
			duration,
			easing,
			css: (t) => `overflow: hidden;opacity: ${t * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;min-${primary_property}: 0`
		};
	}
	var Favicon = ($$anchor, link = noop) => {
		const src = user_derived(() => getFaviconUrl(link().url));
		var fragment = comment();
		var node = first_child(fragment);
		var consequent = ($$anchor) => {
			var img = root_2$4();
			template_effect(() => {
				set_attribute(img, "src", get(src));
				set_attribute(img, "alt", link().label);
			});
			append($$anchor, img);
		};
		if_block(node, ($$render) => {
			if (get(src)) $$render(consequent);
		});
		append($$anchor, fragment);
	};
	var Remove = ($$anchor, index = noop) => {
		var button = root_4$4();
		delegated("click", button, () => removePerformerLink(index()));
		append($$anchor, button);
	};
	var root_2$4 = from_html(`<img class="svelte-kvmnko"/>`);
	var root_3$5 = from_html(`<input type="text" class="svelte-kvmnko"/>`);
	var root_4$4 = from_html(`<button title="Remove link" class="svelte-kvmnko">×</button>`);
	var root_6$5 = from_html(`<div class="item svelte-kvmnko"><!> <!> <!> <!></div>`);
	var root_5$5 = from_html(`<div class="container svelte-kvmnko"></div>`);
	function Links($$anchor, $$props) {
		push($$props, true);
		const Input = ($$anchor, key = noop, link = noop, index = noop) => {
			var input = root_3$5();
			remove_input_defaults(input);
			template_effect(() => {
				set_attribute(input, "name", placeholders[key()]);
				set_attribute(input, "placeholder", placeholders[key()]);
			});
			delegated("input", input, () => updatePerformerLink(index(), { [key()]: link()[key()] }));
			bind_value(input, () => link()[key()], ($$value) => link()[key()] = $$value);
			append($$anchor, input);
		};
		const placeholders = {
			id: "ID",
			label: "Label",
			url: "URL"
		};
		let parseTitle = user_derived(() => getSettings("parseTitle"));
		let performerLinks = user_derived(() => getSettings("performerLinks"));
		var fragment_1 = comment();
		var node_1 = first_child(fragment_1);
		var consequent_1 = ($$anchor) => {
			var div = root_5$5();
			each(div, 23, () => store.performerLinks, (link) => link.id, ($$anchor, link, index) => {
				var div_1 = root_6$5();
				var node_2 = child(div_1);
				Favicon(node_2, () => get(link));
				var node_3 = sibling(node_2, 2);
				Input(node_3, () => "label", () => get(link), () => get(index));
				var node_4 = sibling(node_3, 2);
				Input(node_4, () => "url", () => get(link), () => get(index));
				Remove(sibling(node_4, 2), () => get(index));
				reset(div_1);
				transition(3, div_1, () => slideFade, () => store.transition);
				append($$anchor, div_1);
			});
			reset(div);
			transition(3, div, () => slideFade, () => store.transition);
			append($$anchor, div);
		};
		if_block(node_1, ($$render) => {
			if (get(parseTitle) && get(performerLinks) && store.performerLinks?.length) $$render(consequent_1);
		});
		append($$anchor, fragment_1);
		pop();
	}
	delegate(["input", "click"]);
	var root_1$10 = from_html(`<div class="svelte-1kxfd5y"><button class="svelte-1kxfd5y">×</button> <!> <!> <!></div>`);
	function Settings($$anchor, $$props) {
		push($$props, false);
		init();
		var fragment = comment();
		var node = first_child(fragment);
		var consequent = ($$anchor) => {
			var div = root_1$10();
			var button = child(div);
			var node_1 = sibling(button, 2);
			Options(node_1, {});
			var node_2 = sibling(node_1, 2);
			Links(node_2, {});
			Actions(sibling(node_2, 2), {});
			reset(div);
			delegated("click", button, function(...$$args) {
				toggleShowSettings?.apply(this, $$args);
			});
			transition(3, div, () => slideFade, () => store.transition);
			append($$anchor, div);
		};
		if_block(node, ($$render) => {
			if (store.showSettings) $$render(consequent);
		});
		append($$anchor, fragment);
		pop();
	}
	delegate(["click"]);
	var root_1$9 = from_html(`<div class="svelte-wvkwp9"><button class="ic--sharp-download svelte-wvkwp9" title="Download" aria-label="Download"></button></div>`);
	function Float($$anchor, $$props) {
		push($$props, true);
		let floatingDownload = user_derived(() => getSettings("floatingDownload"));
		var fragment = comment();
		var node = first_child(fragment);
		var consequent = ($$anchor) => {
			var div = root_1$9();
			var button = child(div);
			reset(div);
			delegated("click", button, function(...$$args) {
				handleDownload?.apply(this, $$args);
			});
			transition(1, div, () => fade, () => store.transition);
			append($$anchor, div);
		};
		if_block(node, ($$render) => {
			if (get(floatingDownload)) $$render(consequent);
		});
		append($$anchor, fragment);
		pop();
	}
	delegate(["click"]);
	var root_3$4 = from_html(`<link rel="prefetch" as="image"/>`);
	var root_6$4 = from_html(`<a class="svelte-vtocc6"><img class="svelte-vtocc6"/> </a>`);
	var root_4$3 = from_html(`<div role="tooltip" class="container svelte-vtocc6"><div class="indicator svelte-vtocc6"></div> <div class="items svelte-vtocc6"></div></div>`);
	function Dropdown$1($$anchor, $$props) {
		push($$props, true);
		let top = state$1(0);
		let left = state$1(0);
		let container = state$1(null);
		let currentTarget = user_derived(() => store.dropdown?.currentTarget);
		user_effect(() => {
			if (!store.dropdown?.clientX || !store.dropdown?.clientY || !get(currentTarget)) return;
			const rect = getClickedRect(store.dropdown.clientX, store.dropdown.clientY);
			if (!rect) return;
			set(top, rect.bottom + window.scrollY);
			set(left, store.dropdown.clientX + window.scrollX);
			if (store.dropdown?.classList) get(currentTarget).classList.add(...store.dropdown.classList);
			return on(get(currentTarget), "pointerleave", onpointerleave);
		});
		function getClickedRect(clientX, clientY) {
			const rects = get(currentTarget).getClientRects();
			if (!rects.length) return null;
			let clickedRect = null;
			for (let i = 0; i < rects.length; i++) {
				const rect = rects[i];
				if (rect && clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
					clickedRect = rect;
					break;
				}
			}
			return clickedRect;
		}
		function onpointerleave(event) {
			const related = event.relatedTarget;
			if (get(currentTarget)?.contains(related) || get(container)?.contains(related)) return;
			store.closeDropdown();
		}
		function onclickcapture() {
			store.closeDropdown();
		}
		var fragment_2 = comment();
		head("vtocc6", ($$anchor) => {
			var fragment = comment();
			each(first_child(fragment), 17, () => store.performerLinks, (link) => link.id, ($$anchor, link) => {
				var fragment_1 = comment();
				var node_1 = first_child(fragment_1);
				var consequent = ($$anchor) => {
					var link_1 = root_3$4();
					template_effect(() => set_attribute(link_1, "href", store.favIcons[get(link).url]));
					append($$anchor, link_1);
				};
				if_block(node_1, ($$render) => {
					if (get(link).url && store.favIcons[get(link).url]) $$render(consequent);
				});
				append($$anchor, fragment_1);
			});
			append($$anchor, fragment);
		});
		var node_2 = first_child(fragment_2);
		var consequent_2 = ($$anchor) => {
			var div = root_4$3();
			let styles;
			var div_1 = sibling(child(div), 2);
			each(div_1, 21, () => store.performerLinks, (link) => link.id, ($$anchor, link) => {
				var fragment_3 = comment();
				var node_3 = first_child(fragment_3);
				var consequent_1 = ($$anchor) => {
					var a = root_6$4();
					var img = child(a);
					var text = sibling(img);
					reset(a);
					template_effect(($0) => {
						set_attribute(a, "href", $0);
						set_attribute(img, "src", store.favIcons[get(link).url]);
						set_attribute(img, "alt", get(link).label);
						set_text(text, ` ${get(link).label ?? ""}`);
					}, [() => getLinkUrl(get(link), store.dropdown.item)]);
					event("click", a, onclickcapture, true);
					append($$anchor, a);
				};
				if_block(node_3, ($$render) => {
					if (get(link).label && get(link).url && store.favIcons[get(link).url] && store.dropdown?.item) $$render(consequent_1);
				});
				append($$anchor, fragment_3);
			});
			reset(div_1);
			reset(div);
			bind_this(div, ($$value) => set(container, $$value), () => get(container));
			template_effect(() => styles = set_style(div, "", styles, {
				top: `${get(top) ?? ""}px`,
				left: `${get(left) ?? ""}px`
			}));
			event("pointerleave", div, onpointerleave);
			transition(2, div, () => fade, () => store.transition);
			append($$anchor, div);
		};
		if_block(node_2, ($$render) => {
			if (store.dropdown) $$render(consequent_2);
		});
		append($$anchor, fragment_2);
		pop();
	}
	var Dropdown = ($$anchor, item = noop) => {
		var span = root_3$3();
		var text = child(span, true);
		reset(span);
		template_effect(() => set_text(text, item()));
		delegated("click", span, (event) => store.openDropdown(event, item(), ["title-item--hover"]));
		append($$anchor, span);
	};
	var Placholder = ($$anchor) => {
		const items = user_derived(() => ["Performer", "Title"]);
		var fragment_1 = comment();
		each(first_child(fragment_1), 17, () => get(items), index, ($$anchor, item, i) => {
			next();
			var fragment_2 = root_5$4();
			var text_1 = first_child(fragment_2);
			text_1.nodeValue = `${i > 0 ? " - " : ""} `;
			Dropdown(sibling(text_1), () => get(item));
			append($$anchor, fragment_2);
		});
		append($$anchor, fragment_1);
	};
	var root_3$3 = from_html(`<span class="title-item svelte-1gft3h5"> </span>`);
	var root_5$4 = from_html(` <!>`, 1);
	var root_9 = from_html(`<a class="title-item svelte-1gft3h5"> </a>`);
	var root_10$1 = from_html(`<a class="title-item svelte-1gft3h5"> </a>`);
	var root_13$1 = from_html(`<h1 id="x-title" class="svelte-1gft3h5"><!></h1>`);
	var root_14$1 = from_html(`<h1 id="x-title" class="svelte-1gft3h5"> </h1>`);
	var root_15 = from_html(`<h1 id="x-title" class="svelte-1gft3h5"><!></h1>`);
	var root_16 = from_html(`<h1 id="x-title" class="svelte-1gft3h5"><a class="original-title svelte-1gft3h5"> </a></h1>`);
	function Title($$anchor, $$props) {
		push($$props, true);
		const ParsedTitle = ($$anchor, searchTerms = noop) => {
			const validLinks = user_derived(() => store.performerLinks.filter((link) => link.url && link.label));
			var fragment_3 = comment();
			each(first_child(fragment_3), 17, () => get(items), index, ($$anchor, item) => {
				var fragment_4 = comment();
				var node_4 = first_child(fragment_4);
				var consequent_4 = ($$anchor) => {
					var fragment_5 = comment();
					var node_5 = first_child(fragment_5);
					var consequent_1 = ($$anchor) => {
						var a_1 = root_9();
						var text_2 = child(a_1, true);
						reset(a_1);
						template_effect(($0) => {
							set_attribute(a_1, "href", `/forum/tracker.php?nm=${$0 ?? ""}`);
							set_text(text_2, get(item));
						}, [() => encodeURIComponent(get(item))]);
						append($$anchor, a_1);
					};
					var consequent_2 = ($$anchor) => {
						var a_2 = root_10$1();
						var text_3 = child(a_2, true);
						reset(a_2);
						template_effect(($0) => {
							set_attribute(a_2, "href", $0);
							set_text(text_3, get(item));
						}, [() => getLinkUrl(store.performerLinks[0], get(item))]);
						append($$anchor, a_2);
					};
					var consequent_3 = ($$anchor) => {
						Dropdown($$anchor, () => get(item));
					};
					if_block(node_5, ($$render) => {
						if (get(validLinks).length === 0 || !get(performerLinks)) $$render(consequent_1);
						else if (get(validLinks).length === 1 && store.performerLinks[0]) $$render(consequent_2, 1);
						else if (get(validLinks).length > 1) $$render(consequent_3, 2);
					});
					append($$anchor, fragment_5);
				};
				var d = user_derived(() => get(item) && searchTerms().includes(get(item)));
				var alternate = ($$anchor) => {
					var text_4 = text();
					template_effect(() => set_text(text_4, get(item)));
					append($$anchor, text_4);
				};
				if_block(node_4, ($$render) => {
					if (get(d)) $$render(consequent_4);
					else $$render(alternate, -1);
				});
				append($$anchor, fragment_4);
			});
			append($$anchor, fragment_3);
		};
		let incognito = user_derived(() => getSettings("incognito"));
		let parseTitle = user_derived(() => getSettings("parseTitle"));
		let performerLinks = user_derived(() => getSettings("performerLinks"));
		let title = user_derived(() => data.title?.parsed);
		let searchTerms = user_derived(() => data.title?.searchTerms);
		let original = user_derived(() => data.title?.original);
		let firstTag = user_derived(() => {
			const tag = data.title?.tags?.[0];
			if (get(searchTerms)?.length === 0 && tag) return tag;
		});
		let items = user_derived(() => {
			if (!get(title) || !get(searchTerms)?.length) return [get(title)];
			const sortedTerms = [...get(searchTerms)].sort((a, b) => b.length - a.length);
			const parts = [];
			let remaining = get(title);
			while (remaining) {
				let foundMatch = null;
				let foundIndex = remaining.length;
				for (const term of sortedTerms) {
					const index = remaining.indexOf(term);
					if (index !== -1 && index < foundIndex) {
						foundMatch = term;
						foundIndex = index;
					}
				}
				if (foundMatch) {
					if (foundIndex > 0) parts.push(remaining.slice(0, foundIndex));
					parts.push(foundMatch);
					remaining = remaining.slice(foundIndex + foundMatch.length);
				} else {
					parts.push(remaining);
					break;
				}
			}
			return parts.filter((part) => part !== "");
		});
		let documentTitle = user_derived(() => {
			if (get(parseTitle)) {
				if (get(firstTag)) return get(firstTag);
				else if (get(title)) return get(title);
			}
			return data.title?.original || document.title;
		});
		var fragment_8 = comment();
		head("1gft3h5", ($$anchor) => {
			var fragment = comment();
			var node = first_child(fragment);
			var consequent = ($$anchor) => {
				deferred_template_effect(() => {
					$document.title = get(documentTitle) ?? "";
				});
			};
			if_block(node, ($$render) => {
				if (get(documentTitle)) $$render(consequent);
			});
			append($$anchor, fragment);
		});
		var node_6 = first_child(fragment_8);
		var consequent_5 = ($$anchor) => {
			var h1 = root_13$1();
			Placholder(child(h1));
			reset(h1);
			append($$anchor, h1);
		};
		var consequent_6 = ($$anchor) => {
			var h1_1 = root_14$1();
			var text_5 = child(h1_1, true);
			reset(h1_1);
			template_effect(() => set_text(text_5, get(firstTag)));
			append($$anchor, h1_1);
		};
		var consequent_7 = ($$anchor) => {
			var h1_2 = root_15();
			ParsedTitle(child(h1_2), () => get(searchTerms));
			reset(h1_2);
			append($$anchor, h1_2);
		};
		var consequent_8 = ($$anchor) => {
			var h1_3 = root_16();
			var a_3 = child(h1_3);
			var text_6 = child(a_3, true);
			reset(a_3);
			reset(h1_3);
			template_effect(($0) => {
				set_attribute(a_3, "href", `/forum/tracker.php?nm=${$0 ?? ""}`);
				set_text(text_6, get(original));
			}, [() => encodeURIComponent(get(original))]);
			append($$anchor, h1_3);
		};
		if_block(node_6, ($$render) => {
			if (get(incognito)) $$render(consequent_5);
			else if (get(firstTag)) $$render(consequent_6, 1);
			else if (get(parseTitle) && get(title) && get(searchTerms)) $$render(consequent_7, 2);
			else if (get(original)) $$render(consequent_8, 3);
		});
		append($$anchor, fragment_8);
		pop();
	}
	delegate(["click"]);
	var root_1$8 = from_html(`<button class="item svelte-1ai34w7" aria-label="thank"></button>`);
	function Thank($$anchor, $$props) {
		push($$props, true);
		let observer;
		let clicked = state$1(false);
		let success = state$1(false);
		let disabled = user_derived(() => {
			if (get(success)) return true;
			if (!data.thank?.list) return false;
			const userLink = data.user?.link;
			if (!userLink) return false;
			const userId = new URL(userLink, location.href).searchParams.get("u");
			if (!userId) return false;
			return data.thank?.list.has(userId);
		});
		let title = user_derived(() => {
			if (get(disabled)) return "Already thanked";
		});
		function handleValue(value) {
			if (data.thank?.element && data.thank?.element instanceof HTMLInputElement) data.thank.element.value = "Thanks: " + value;
		}
		function handleElement(thank) {
			return (element) => {
				if (thank) for (const attr of [
					"title",
					"style",
					"class"
				]) thank.removeAttribute(attr);
				if (get(disabled)) handleValue("Given");
				else if (get(clicked) && !get(disabled)) handleValue("Loading...");
				else handleValue("Give");
				element.appendChild(thank);
				return () => thank.remove();
			};
		}
		function onclick(event) {
			if (get(disabled) || get(clicked)) return;
			set(clicked, true);
			observer?.disconnect();
			const currentTarget = event.currentTarget;
			const callback = (mutationList, observer) => {
				for (const mutation of mutationList) {
					if (mutation.type !== "childList") continue;
					mutation.addedNodes.forEach((node) => {
						if (node instanceof HTMLHeadingElement) {
							node.remove();
							set(success, true);
							observer.disconnect();
						}
					});
				}
			};
			observer = new MutationObserver(callback);
			observer.observe(currentTarget, { childList: true });
		}
		onDestroy(() => observer?.disconnect());
		var fragment = comment();
		var node_1 = first_child(fragment);
		var consequent = ($$anchor) => {
			var button = root_1$8();
			attach(button, () => handleElement(data.thank.element));
			template_effect(() => {
				set_attribute(button, "title", get(title));
				button.disabled = get(disabled);
			});
			delegated("click", button, onclick);
			append($$anchor, button);
		};
		if_block(node_1, ($$render) => {
			if (data.thank?.element) $$render(consequent);
		});
		append($$anchor, fragment);
		pop();
	}
	delegate(["click"]);
	var Item$1 = ($$anchor, title = noop, data = noop) => {
		var fragment = comment();
		var node = first_child(fragment);
		var consequent = ($$anchor) => {
			var div = root_2$3();
			var span = child(div);
			var text = child(span);
			reset(span);
			var span_1 = sibling(span, 2);
			var text_1 = child(span_1, true);
			reset(span_1);
			reset(div);
			template_effect(($0) => {
				set_text(text, `${title() ?? ""}:`);
				set_class(span_1, 1, $0, "svelte-cjprq");
				set_text(text_1, data());
			}, [() => clsx(title().toLowerCase())]);
			append($$anchor, div);
		};
		var alternate = ($$anchor) => {
			Error$1($$anchor, title);
		};
		if_block(node, ($$render) => {
			if (data()) $$render(consequent);
			else $$render(alternate, -1);
		});
		append($$anchor, fragment);
	};
	var Error$1 = ($$anchor, title = noop) => {
		var div_1 = root_4$2();
		var span_2 = child(div_1);
		var text_2 = child(span_2);
		reset(span_2);
		next(2);
		reset(div_1);
		template_effect(() => set_text(text_2, `${title() ?? ""}:`));
		append($$anchor, div_1);
	};
	var root_2$3 = from_html(`<div class="item svelte-cjprq"><span class="title"> </span> <span> </span></div>`);
	var root_4$2 = from_html(`<div class="item svelte-cjprq"><span class="title"> </span> <span class="error svelte-cjprq">N/A</span></div>`);
	var root_6$3 = from_html(`<button class="item svelte-cjprq"><span class="title">Date:</span> <!></button>`);
	var root_13 = from_html(`<span class="item svelte-cjprq"><!></span>`);
	var root_20 = from_html(`<a id="dl-link">.torrent</a>`);
	var root_17 = from_html(`<button class="item svelte-cjprq"><span class="title">Download:</span> <!></button>`);
	var root_25 = from_html(`<span><a> </a> </span>`);
	var root_24 = from_html(`<div class="item svelte-cjprq"><span class="title">Related:</span> <!></div>`);
	var root_5$3 = from_html(`<div id="x-stats" class="svelte-cjprq"><!> <!> <!> <!> <button class="item svelte-cjprq"><span class="title">Files:</span> <!></button> <!> <!> <!> <!></div>`);
	function Stats($$anchor, $$props) {
		push($$props, true);
		let showFullDate = state$1(false);
		let expandFiles = user_derived(() => getSettings("expandFiles"));
		let fileListState = state$1("idle");
		onMount(() => {
			if (get(expandFiles)) store.toggleFileList();
		});
		user_effect(() => {
			if (!store.showFileList) set(fileListState, "idle");
			if (store.fileListData && get(fileListState) === "loading") set(fileListState, "loaded");
		});
		function handleDateClick() {
			set(showFullDate, !get(showFullDate));
		}
		function handleFileListClick() {
			if (store.showFileList) set(fileListState, "idle");
			else set(fileListState, "loading");
			store.toggleFileList();
		}
		var fragment_2 = comment();
		var node_1 = first_child(fragment_2);
		var consequent_12 = ($$anchor) => {
			var div_2 = root_5$3();
			var node_2 = child(div_2);
			Item$1(node_2, () => "Seeders", () => data.torrent?.seeders || "0");
			var node_3 = sibling(node_2, 2);
			Item$1(node_3, () => "Leechers", () => data.torrent?.leechers || "0");
			var node_4 = sibling(node_3, 2);
			Item$1(node_4, () => "Size", () => data.torrent?.size);
			var node_5 = sibling(node_4, 2);
			var consequent_2 = ($$anchor) => {
				var button = root_6$3();
				var node_6 = sibling(child(button), 2);
				var consequent_1 = ($$anchor) => {
					var text_3 = text();
					template_effect(($0) => set_text(text_3, $0), [() => handleRelativeDate(data.torrent.date)]);
					append($$anchor, text_3);
				};
				var alternate_1 = ($$anchor) => {
					var text_4 = text();
					template_effect(($0) => set_text(text_4, $0), [() => data.torrent.date?.toLocaleString()]);
					append($$anchor, text_4);
				};
				if_block(node_6, ($$render) => {
					if (!get(showFullDate)) $$render(consequent_1);
					else $$render(alternate_1, -1);
				});
				reset(button);
				delegated("click", button, handleDateClick);
				append($$anchor, button);
			};
			var alternate_2 = ($$anchor) => {
				Error$1($$anchor, () => "Date");
			};
			if_block(node_5, ($$render) => {
				if (data.torrent?.date) $$render(consequent_2);
				else $$render(alternate_2, -1);
			});
			var button_1 = sibling(node_5, 2);
			var node_7 = sibling(child(button_1), 2);
			var consequent_3 = ($$anchor) => {
				append($$anchor, text("Loading..."));
			};
			var consequent_4 = ($$anchor) => {
				append($$anchor, text("Hide"));
			};
			var alternate_3 = ($$anchor) => {
				append($$anchor, text("Show"));
			};
			if_block(node_7, ($$render) => {
				if (get(fileListState) === "loading") $$render(consequent_3);
				else if (store.showFileList) $$render(consequent_4, 1);
				else $$render(alternate_3, -1);
			});
			reset(button_1);
			var node_8 = sibling(button_1, 2);
			var consequent_5 = ($$anchor) => {
				var span_3 = root_13();
				Thank(child(span_3), {});
				reset(span_3);
				append($$anchor, span_3);
			};
			var alternate_4 = ($$anchor) => {
				Error$1($$anchor, () => "Thanks");
			};
			if_block(node_8, ($$render) => {
				if (data.thank?.element && data.thank?.list) $$render(consequent_5);
				else $$render(alternate_4, -1);
			});
			var node_10 = sibling(node_8, 2);
			var consequent_6 = ($$anchor) => {
				const format = user_derived(() => new Intl.NumberFormat("en-US").format(data.torrent.times));
				Item$1($$anchor, () => "Downloads", () => get(format));
			};
			var alternate_5 = ($$anchor) => {
				Error$1($$anchor, () => "Downloads");
			};
			if_block(node_10, ($$render) => {
				if (data.torrent?.times != null) $$render(consequent_6);
				else $$render(alternate_5, -1);
			});
			var node_11 = sibling(node_10, 2);
			var consequent_9 = ($$anchor) => {
				var button_2 = root_17();
				button_2.disabled = false;
				var node_12 = sibling(child(button_2), 2);
				var alternate_6 = ($$anchor) => {
					var a = root_20();
					template_effect(() => set_attribute(a, "href", data.torrent.link));
					append($$anchor, a);
				};
				if_block(node_12, ($$render) => {
					$$render(alternate_6, -1);
				});
				reset(button_2);
				delegated("click", button_2, function(...$$args) {
					handleDownload?.apply(this, $$args);
				});
				append($$anchor, button_2);
			};
			var alternate_7 = ($$anchor) => {
				Error$1($$anchor, () => "Download");
			};
			if_block(node_11, ($$render) => {
				if (data.torrent?.link) $$render(consequent_9);
				else $$render(alternate_7, -1);
			});
			var node_13 = sibling(node_11, 2);
			var consequent_11 = ($$anchor) => {
				const max = user_derived(() => 5);
				var fragment_10 = comment();
				await_block(first_child(fragment_10), () => getRelated(data.title.original), null, ($$anchor, related) => {
					const results = user_derived(() => get(related).filter((result) => result.textContent !== data.title?.original));
					var fragment_11 = comment();
					var node_15 = first_child(fragment_11);
					var consequent_10 = ($$anchor) => {
						var div_3 = root_24();
						each(sibling(child(div_3), 2), 17, () => get(results), index, ($$anchor, result, i) => {
							var span_4 = root_25();
							var a_1 = child(span_4);
							var text_10 = child(a_1, true);
							reset(a_1);
							var text_11 = sibling(a_1);
							reset(span_4);
							template_effect(() => {
								set_attribute(a_1, "href", get(result).href);
								set_text(text_10, get(result).resolution);
								set_text(text_11, ` ${i < get(results).length - 1 ? ", " : ""}`);
							});
							append($$anchor, span_4);
						});
						reset(div_3);
						append($$anchor, div_3);
					};
					if_block(node_15, ($$render) => {
						if (get(results).length > 0 && get(results).length < get(max)) $$render(consequent_10);
					});
					append($$anchor, fragment_11);
				});
				append($$anchor, fragment_10);
			};
			if_block(node_13, ($$render) => {
				if (data.title?.original) $$render(consequent_11);
			});
			reset(div_2);
			template_effect(() => button_1.disabled = get(fileListState) === "loading");
			delegated("click", button_1, handleFileListClick);
			append($$anchor, div_2);
		};
		if_block(node_1, ($$render) => {
			if (data.user && !data.forumline) $$render(consequent_12);
		});
		append($$anchor, fragment_2);
		pop();
	}
	delegate(["click"]);
	var root_3$2 = from_html(`<a> </a>`);
	var root_5$2 = from_html(`<a> </a>`);
	var root_6$2 = from_html(`<span> </span>`);
	var root_1$7 = from_html(`<div id="x-tags" class="svelte-ttnt4a"></div>`);
	function Tags($$anchor, $$props) {
		push($$props, true);
		let parseTitle = user_derived(() => getSettings("parseTitle"));
		let showTags = user_derived(() => getSettings("showTags"));
		let performerLinks = user_derived(() => getSettings("performerLinks"));
		let derivedTags = user_derived(() => {
			if (getSettings("incognito")) return [
				"tag1",
				"tag2",
				"tag3",
				"tag4",
				"tag5"
			];
			const tags = data?.title?.tags || [];
			return [...new Set(tags)];
		});
		function resTag(tag) {
			return /\b(?:\d{3,}p|\d+k)\b/i.test(tag);
		}
		var fragment = comment();
		var node = first_child(fragment);
		var consequent_3 = ($$anchor) => {
			var div = root_1$7();
			each(div, 21, () => get(derivedTags), index, ($$anchor, item) => {
				const classList = user_derived(() => ["tag-item", resTag(get(item)) && "tag-res"]);
				var fragment_1 = comment();
				var node_1 = first_child(fragment_1);
				var consequent = ($$anchor) => {
					var a = root_3$2();
					var text = child(a, true);
					reset(a);
					template_effect(($0) => {
						set_class(a, 1, clsx(get(classList)), "svelte-ttnt4a");
						set_attribute(a, "href", `/forum/tracker.php?nm=${$0 ?? ""}`);
						set_text(text, get(item));
					}, [() => encodeURIComponent(get(item))]);
					append($$anchor, a);
				};
				var consequent_2 = ($$anchor) => {
					const link = user_derived(() => store.performerLinks[0]);
					var fragment_2 = comment();
					var node_2 = first_child(fragment_2);
					var consequent_1 = ($$anchor) => {
						var a_1 = root_5$2();
						var text_1 = child(a_1, true);
						reset(a_1);
						template_effect(($0) => {
							set_class(a_1, 1, clsx(get(classList)), "svelte-ttnt4a");
							set_attribute(a_1, "href", $0);
							set_text(text_1, get(item));
						}, [() => getLinkUrl(get(link), get(item))]);
						append($$anchor, a_1);
					};
					if_block(node_2, ($$render) => {
						if (get(link)) $$render(consequent_1);
					});
					append($$anchor, fragment_2);
				};
				var alternate = ($$anchor) => {
					var span = root_6$2();
					var text_2 = child(span, true);
					reset(span);
					template_effect(() => {
						set_class(span, 1, clsx(get(classList)), "svelte-ttnt4a");
						set_text(text_2, get(item));
					});
					delegated("click", span, (event) => store.openDropdown(event, get(item), ["tag-item--hover"]));
					append($$anchor, span);
				};
				if_block(node_1, ($$render) => {
					if (!get(performerLinks)) $$render(consequent);
					else if (store.performerLinks.length === 1) $$render(consequent_2, 1);
					else $$render(alternate, -1);
				});
				append($$anchor, fragment_1);
			});
			reset(div);
			transition(3, div, () => slideFade, () => store.transition);
			append($$anchor, div);
		};
		if_block(node, ($$render) => {
			if (get(parseTitle) && get(showTags) && get(derivedTags)?.length) $$render(consequent_3);
		});
		append($$anchor, fragment);
		pop();
	}
	delegate(["click"]);
	var root_1$6 = from_html(`<div class="filelist svelte-1xito9"></div>`);
	function FileList($$anchor, $$props) {
		push($$props, true);
		function humanSize(bytes) {
			if (bytes <= 0) return "0 B";
			const units = [
				"B",
				"KB",
				"MB",
				"GB",
				"TB",
				"PB",
				"EB",
				"ZB",
				"YB"
			];
			const rounders = [
				1,
				1,
				1,
				100,
				1e3,
				1e3,
				1e3,
				1e3,
				1e3
			];
			const idx = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
			let value = bytes / Math.pow(1024, idx);
			const factor = rounders[idx];
			if (!factor) return null;
			value = Math.round((value + Number.EPSILON) * factor) / factor;
			return `${value} ${units[idx]}`;
		}
		async function getFileList() {
			const t = new URL(location.href).searchParams.get("t");
			if (!t) {
				console.error("Missing \"t\" parameter");
				return;
			}
			try {
				const res = await fetch("viewtorrent.php", {
					method: "POST",
					headers: { "Content-Type": "application/x-www-form-urlencoded" },
					body: new URLSearchParams({ t }).toString()
				});
				if (!res.ok) {
					console.error(`Server error: ${res.status}`);
					return;
				}
				const raw = await res.text();
				const doc = new DOMParser().parseFromString(raw, "text/html");
				doc.querySelectorAll("li.collapsable").forEach((li) => {
					let dirSize = 0;
					li.querySelectorAll("i").forEach((i) => {
						dirSize += parseInt(i.textContent?.trim() || "0", 10);
					});
					const spanB = li.querySelector("span.b");
					if (spanB) {
						const s = doc.createElement("s");
						s.textContent = humanSize(dirSize);
						spanB.append(" · ", s);
					}
				});
				doc.querySelectorAll("i").forEach((i) => {
					i.textContent = humanSize(parseInt(i.textContent?.trim() || "0", 10));
				});
				store.fileListData = doc.body.innerHTML;
			} catch (err) {
				console.error("Failed to fetch/transform torrent filelist:", err);
			}
		}
		user_effect(() => {
			if (!store.fileListData && store.showFileList) getFileList();
		});
		var fragment = comment();
		var node = first_child(fragment);
		var consequent = ($$anchor) => {
			var div = root_1$6();
			html(div, () => store.fileListData, true);
			reset(div);
			transition(3, div, () => slideFade, () => store.transition);
			append($$anchor, div);
		};
		if_block(node, ($$render) => {
			if (store.fileListData && store.showFileList) $$render(consequent);
		});
		append($$anchor, fragment);
		pop();
	}
	var parser$3 = new DOMParser();
	async function generic(href, selector, headers) {
		const { response, responseText, finalUrl } = await GM_fetch("GET", href, "blob", headers);
		if (response.type.startsWith("image/")) return finalUrl;
		const src = parser$3.parseFromString(responseText, "text/html").querySelector(selector)?.getAttribute("src");
		if (!src) throw new Error(`image not found: ${href}`);
		return new URL(src, href).href;
	}
	async function imagebam(href, selector) {
		return generic(href, selector, { Cookie: "nsfw_inter=1" });
	}
	async function imagenimage(href, src) {
		const match = src?.match(/(https:\/\/img\d+\.imagenimage\.com\/)th\/(.+)\.jpg/);
		if (!src || !match) return await getBlob(await generic(href, "#left > a > img"));
		const domain = match[1];
		const path = match[2];
		const linkMatch = href.match(/https:\/\/imagenimage\.com\/(.+)/);
		if (!linkMatch) throw new Error(`Invalid URL: ${href}`);
		return await getBlob(`${domain}i/${path}.jpg/${linkMatch[1]}`);
	}
	async function imagetwist(href, src) {
		let imgSrc;
		if (src && src.includes("/th/")) {
			const extRegex = /\.([\w]{2,4})(\?|$)/;
			const hrefExt = href.match(extRegex)?.[1];
			imgSrc = src.replace("/th/", "/i/");
			if (hrefExt) imgSrc = imgSrc.replace(extRegex, `.${hrefExt}$2`);
			const response = await GM_fetch("HEAD", imgSrc, "text");
			if (!/content-length:\s*8183/i.test(response.responseHeaders)) return await getBlob(imgSrc);
		}
		imgSrc = await generic(href, "img.pic");
		if (!imgSrc) throw new Error(`image not found: ${href}`);
		return await getBlob(imgSrc);
	}
	async function imagevenue(href, selector) {
		try {
			return await generic(href, selector);
		} catch {
			return generic(href, selector);
		}
	}
	async function imgbase(href, src) {
		if (!src) return href;
		return src.replace("-thumb.", ".");
	}
	async function imgbox(href) {
		if (href.includes("thumbs")) return href.replace("thumbs", "images").replace("_t.", "_o.");
		return generic(href, "#img");
	}
	var parser$2 = new DOMParser();
	async function imgbum(href) {
		const { responseText } = await GM_fetch("GET", href, "text");
		const imgSrc = ((parser$2.parseFromString(responseText, "text/html").querySelector("table > tbody > tr > td > img")?.getAttribute("onclick"))?.match(/\/\*mshow\('([^']+)'\);\*\//))?.[1];
		if (!imgSrc) throw new Error(`image not found: ${href}`);
		return new URL(imgSrc, href).href;
	}
	async function imgdrive(href, src) {
		if (!src) return href;
		const imgSrc = src.replace("/small/", "/big/");
		if (src.includes("imgwallet.com")) return imgSrc;
		return await getBlob(imgSrc);
	}
	async function imgfrost(href, src) {
		if (!src) return Promise.resolve(href);
		const parsed = new URL(src);
		parsed.hostname = "prcf.imgsourmaf.sbs";
		parsed.pathname = parsed.pathname.replace("/small/small_", "/big/");
		const { response, finalUrl } = await GM_fetch("GET", parsed.href, "blob", { Referer: "https://imgair.net" });
		if (!response.type.startsWith("image/")) throw new Error(`Expected image but got ${response.type} from ${finalUrl}`);
		return finalUrl;
	}
	async function piccash(href, src) {
		let imgSrc;
		if (src && src.includes("img_thumb")) imgSrc = src;
		else imgSrc = href;
		return imgSrc.replace("http://", "https://").replace("/img_thumb/", "/img_full/").replace("-thumb.", ".");
	}
	var parser$1 = new DOMParser();
	async function picforall(href) {
		const { responseText } = await GM_fetch("GET", href, "text");
		const imgSrc = ((parser$1.parseFromString(responseText, "text/html").querySelector("#pay_thumb_img img")?.getAttribute("onclick"))?.match(/mshow\('([^']+)'\)/))?.[1];
		if (!imgSrc) throw new Error(`image not found: ${href}`);
		return imgSrc;
	}
	async function picshick(href, src) {
		if (!src || !src.includes("/th/") || !href.includes("/")) return await getBlob(await generic(href, "img.pic"));
		const fileName = href.substring(href.lastIndexOf("/") + 1);
		const extension = fileName.substring(fileName.lastIndexOf(".") + 1);
		const parts = src.split("/");
		const albumId = parts[parts.length - 2];
		const thumbFile = parts[parts.length - 1];
		if (!thumbFile) throw Error(`parsing image: ${href}`);
		const imageId = thumbFile.substring(0, thumbFile.lastIndexOf("."));
		return await getBlob(`${src.substring(0, src.indexOf("/th/"))}${`/i/${albumId}/${imageId}.${extension}/${fileName}`}`);
	}
	async function turboimagehost(href) {
		const { response, responseText, finalUrl } = await GM_fetch("GET", href, "blob", { Referer: href });
		if (response.type.startsWith("image/")) return finalUrl;
		const match = responseText.match(/"og:image" content="([^"]+)"/);
		if (match && match[1]) return new URL(match[1], href).href;
		return generic(href, "#imageid");
	}
	var parser = new DOMParser();
	async function imx(href) {
		const body = new URLSearchParams();
		body.append("imgContinue", "Continue to image ... ");
		const response = await GM_fetch("POST", href, "text", { "Content-Type": "application/x-www-form-urlencoded" }, body.toString());
		const imgSrc = parser.parseFromString(response.responseText, "text/html").querySelector("img.centred");
		if (!imgSrc) throw new Error(`image not found: ${href}`);
		return imgSrc.src;
	}
	async function imgxxt(href) {
		return (await generic(href, "#image-viewer-container > img")).replace(".md.", ".");
	}
	var HANDLERS = {
		"fastpic.": (href) => generic(href, "#imglink > img.image.img-fluid"),
		"imagebam.com": (href) => imagebam(href, "img.main-image"),
		"imageban.ru": (href) => generic(href, "#img_main"),
		"imagenimage.com": (href, src) => imagenimage(href, src),
		"imagetwist.com": (href, src) => imagetwist(href, src),
		"picturelol.com": (href, src) => imagetwist(href, src),
		"vipr.im": (href, src) => imagetwist(href, src),
		"imagevenue.com": (href) => imagevenue(href, "#main-image"),
		"imgbase.ru": (href, src) => imgbase(href, src),
		"picclick.ru": (href, src) => imgbase(href, src),
		"adult-images.ru": (href, src) => imgbase(href, src),
		"payforpic.ru": (href, src) => imgbase(href, src),
		"xxxpicture.de": (href, src) => imgbase(href, src),
		"imgbum.de": (href, src) => imgbase(href, src),
		"adultimages.de": (href, src) => imgbase(href, src),
		"picforall.eu": (href, src) => imgbase(href, src),
		"pornoimages.de": (href, src) => imgbase(href, src),
		"imgbox.com": (href) => imgbox(href),
		"imgbum.ru": (href) => imgbum(href),
		"imgdrive.net": (href, src) => imgdrive(href, src),
		"imgadult.com": (href, src) => imgdrive(href, src),
		"imgwallet.com": (href, src) => imgdrive(href, src),
		"imgfrost.net": (href, src) => imgfrost(href, src),
		"imgblaze.net": (href, src) => imgfrost(href, src),
		"imagefly.cc": (href, src) => imgfrost(href, src),
		"piccash.net": (href, src) => piccash(href, src),
		"picforall.ru": (href) => picforall(href),
		"imgclick.ru": (href) => picforall(href),
		"freescreens.ru": (href) => picforall(href),
		"picshick.com": (href, src) => picshick(href, src),
		"turboimagehost.com": (href) => turboimagehost(href),
		"imx.to": (href) => imx(href),
		"imgxxt.in": (href) => imgxxt(href)
	};
	function updateStatus(imageId, data) {
		store.upgradeImgData[imageId] = {
			...store.upgradeImgData[imageId],
			...data
		};
	}
	async function upgradeImg(img) {
		if (!img) return;
		if (!img.id) return console.error("Image is missing id");
		const anchor = img.closest("a");
		if (!anchor || !anchor.getAttribute("href")) return updateStatus(img.id, {
			status: "error",
			error: `Image anchor with id ${img.id} is missing href`
		});
		updateStatus(img.id, { status: "loading" });
		if (getSettings("cacheImages")) {
			const cached = getCache$1(anchor.href);
			if (cached) {
				if (img.complete && img.naturalHeight !== 0) updateStatus(img.id, {
					status: "cached",
					resolved: cached
				});
				else {
					on(img, "load", () => {
						updateStatus(img.id, {
							status: "cached",
							resolved: cached
						});
					}, { once: true });
					on(img, "error", () => {
						updateStatus(img.id, {
							status: "error",
							error: `Failed to load cached image: ${cached}`
						});
					}, { once: true });
				}
				img.src = cached;
				return;
			}
		}
		const entry = Object.entries(HANDLERS).find(([domain]) => anchor.href.includes(domain));
		if (!entry) return updateStatus(img.id, {
			status: "error",
			error: `No handler for ${new URL(anchor.href).hostname}`
		});
		const [, handler] = entry;
		try {
			const src = await handler(anchor.href, img.src);
			if (src.startsWith("blob:")) {
				on(img, "load", () => {
					URL.revokeObjectURL(src);
					updateStatus(img.id, {
						status: "resolved",
						resolved: src
					});
				}, { once: true });
				on(img, "error", () => {
					URL.revokeObjectURL(src);
					updateStatus(img.id, {
						status: "error",
						error: `Failed to load blob`
					});
				}, { once: true });
			} else {
				on(img, "load", () => {
					setCache$1(anchor.href, src);
					updateStatus(img.id, {
						status: "resolved",
						resolved: src
					});
				}, { once: true });
				on(img, "error", () => {
					updateStatus(img.id, {
						status: "error",
						error: `Failed to load image from: ${src}`
					});
				}, { once: true });
			}
			updateStatus(img.id, { resolved: src });
			img.src = src;
		} catch (error) {
			return updateStatus(img.id, {
				error: String(error),
				status: "error"
			});
		}
	}
	function onIntersect(entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				observer.unobserve(entry.target);
				upgradeImg(entry.target);
			}
		});
	}
	var observed = new WeakSet();
	var observer = new IntersectionObserver(onIntersect, { rootMargin: `${getSettings("limitConcurrent") ? "200%" : "1000%"} 0%` });
	async function observeImg(imgRefs) {
		const unobserved = imgRefs.filter((img) => {
			return !observed.has(img) && img instanceof HTMLImageElement;
		});
		if (!unobserved.length) return;
		unobserved.forEach((img) => {
			observed.add(img);
			observer.observe(img);
		});
	}
	var root$2 = from_html(`<div role="img"><!></div>`);
	function Resize($$anchor, $$props) {
		push($$props, true);
		let clicked = prop($$props, "clicked", 15), resized = prop($$props, "resized", 15);
		let dragResize = user_derived(() => getSettings("dragResize"));
		let clientX = state$1(0);
		let prevResizeWidth = state$1(0);
		let draggedEl = state$1(null);
		let draggedElCenter = state$1(0);
		let fitColumnCount = state$1(proxy(store.columnCount));
		function getElementCenter(element) {
			const rect = element.getBoundingClientRect();
			return rect.top + rect.height / 2;
		}
		function clamp(value, min = 20, max = 100) {
			return Math.min(max, Math.max(min, value));
		}
		function onpointerdown(event) {
			if (!get(dragResize) || !(event.target instanceof HTMLImageElement)) return;
			if (event.button !== 0) return;
			event.preventDefault();
			set(draggedEl, event.target, true);
			set(draggedElCenter, getElementCenter(get(draggedEl)), true);
			clicked(true);
			set(clientX, event.clientX, true);
			set(prevResizeWidth, store.resizeWidth, true);
		}
		async function onpointermove(event) {
			if (!get(dragResize) || !clicked()) return;
			if (!resized()) resized(event.clientX - get(clientX) !== 0);
			else if (resized() && $$props.containerWidth) {
				const deltaPercent = (event.clientX - get(clientX)) / $$props.containerWidth * 100;
				let newWidth = get(prevResizeWidth) + deltaPercent;
				let clampedWidth = clamp(newWidth);
				if (clampedWidth !== newWidth) {
					set(prevResizeWidth, clampedWidth, true);
					set(clientX, event.clientX, true);
				}
				store.resizeWidth = Math.round(clampedWidth * 10) / 10;
				requestAnimationFrame(() => {
					if (!get(draggedEl)) return;
					const deltaY = getElementCenter(get(draggedEl)) - get(draggedElCenter);
					window.scrollTo(0, window.scrollY + deltaY);
				});
			}
		}
		function onpointerup() {
			if (clicked() && resized()) saveResize(store.resizeWidth);
			clicked(false);
			resized(false);
			set(clientX, 0);
			set(prevResizeWidth, 0);
		}
		function waitForImages(containerEl) {
			const images = containerEl.querySelectorAll("img");
			return Promise.all(Array.from(images).map((img) => img.complete ? Promise.resolve() : new Promise((resolve) => {
				img.onload = img.onerror = resolve;
			})));
		}
		function getpopulatedColumns(containerEl) {
			const marker = document.createElement("span");
			marker.style.cssText = "position: absolute; visibility: hidden; height: 1px;";
			containerEl.appendChild(marker);
			const markerRect = marker.getBoundingClientRect();
			const containerRect = containerEl.getBoundingClientRect();
			const columnWidth = containerRect.width / parseFloat(getComputedStyle(containerEl).columnCount);
			const actualColumns = Math.floor((markerRect.left - containerRect.left) / columnWidth) + 1;
			containerEl.removeChild(marker);
			return actualColumns;
		}
		user_effect(() => {
			set(fitColumnCount, store.columnCount, true);
			if (store.columnCount === 1) return;
			const containerEl = store.ultraImages?.querySelector("[style*=\"column-count\"]");
			if (containerEl) waitForImages(containerEl).then(() => {
				requestAnimationFrame(() => {
					const populatedColumns = getpopulatedColumns(containerEl);
					if (populatedColumns < store.columnCount) set(fitColumnCount, populatedColumns, true);
				});
			});
		});
		var div = root$2();
		event("pointermove", $document, onpointermove);
		event("pointerup", $document, onpointerup);
		let classes;
		let styles;
		snippet(child(div), () => $$props.children);
		reset(div);
		template_effect(() => {
			classes = set_class(div, 1, "svelte-x5vner", null, classes, { dragging: clicked() && resized() });
			styles = set_style(div, "", styles, {
				width: `${(get(dragResize) ? store.resizeWidth : 100) ?? ""}%`,
				"column-count": get(fitColumnCount)
			});
		});
		delegated("pointerdown", div, onpointerdown);
		append($$anchor, div);
		pop();
	}
	delegate(["pointerdown"]);
	var root_1$5 = from_html(`<div class="loader svelte-bb97q4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-bb97q4"><path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity="0.5" class="svelte-bb97q4"></path><path class="animate svelte-bb97q4" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"></path></svg></div>`);
	function Loader($$anchor, $$props) {
		push($$props, true);
		var fragment = comment();
		var node = first_child(fragment);
		var consequent = ($$anchor) => {
			var div = root_1$5();
			transition(3, div, () => fade, () => store.transition);
			append($$anchor, div);
		};
		if_block(node, ($$render) => {
			if ($$props.loading) $$render(consequent);
		});
		append($$anchor, fragment);
		pop();
	}
	var Item = ($$anchor, key = noop, value = noop, error = noop) => {
		var p = root_1$4();
		var strong = child(p);
		var text = child(strong, true);
		reset(strong);
		var node = sibling(strong, 2);
		var consequent = ($$anchor) => {
			var a = root_2$2();
			var text_1 = child(a, true);
			reset(a);
			template_effect(() => {
				set_attribute(a, "href", value());
				set_text(text_1, value());
			});
			append($$anchor, a);
		};
		var d = user_derived(() => value() && value().startsWith("http"));
		var consequent_1 = ($$anchor) => {
			append($$anchor, root_3$1());
		};
		var alternate = ($$anchor) => {
			var fragment = root_4$1();
			var text_2 = first_child(fragment);
			var node_1 = sibling(text_2);
			var consequent_2 = ($$anchor) => {
				var span_1 = root_5$1();
				var text_3 = child(span_1, true);
				reset(span_1);
				template_effect(() => set_text(text_3, error()));
				append($$anchor, span_1);
			};
			if_block(node_1, ($$render) => {
				if (value() === "error" && error()) $$render(consequent_2);
			});
			template_effect(() => set_text(text_2, `${value() ?? ""} `));
			append($$anchor, fragment);
		};
		if_block(node, ($$render) => {
			if (get(d)) $$render(consequent);
			else if (value() === void 0) $$render(consequent_1, 1);
			else $$render(alternate, -1);
		});
		reset(p);
		template_effect(() => {
			set_attribute(p, "data-key", key());
			set_text(text, key());
		});
		append($$anchor, p);
	};
	var root_2$2 = from_html(`<a class="svelte-swtc1e"> </a>`);
	var root_3$1 = from_html(`<span class="error svelte-swtc1e">null</span>`);
	var root_5$1 = from_html(`<span class="error svelte-swtc1e"> </span>`);
	var root_4$1 = from_html(` <!>`, 1);
	var root_1$4 = from_html(`<p class="svelte-swtc1e"><strong> </strong>: <!></p>`);
	var root_6$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="svelte-swtc1e"><path d="M17 9H7V7h10m0 6H7v-2h10m-3 6H7v-2h7M12 3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m7 0h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" class="svelte-swtc1e"></path></svg>`);
	var root$1 = from_html(`<div class="debug svelte-swtc1e"><!> <!> <!> <!> <div class="copy svelte-swtc1e"><!></div></div>`);
	function Debug($$anchor, $$props) {
		push($$props, true);
		let data = user_derived(() => store.upgradeImgData?.[$$props.img.id] || {});
		async function copyToClipboard(data) {
			try {
				const dataWithoutId = Object.fromEntries(Object.entries(data).filter(([key]) => key !== "id"));
				await navigator.clipboard.writeText(JSON.stringify(dataWithoutId, null, 2));
			} catch (err) {
				console.error("Failed to copy debug:", err);
			}
		}
		var div = root$1();
		var node_2 = child(div);
		Item(node_2, () => "status", () => get(data).status, () => get(data).error);
		var node_3 = sibling(node_2, 2);
		Item(node_3, () => "href", () => $$props.img.href);
		var node_4 = sibling(node_3, 2);
		Item(node_4, () => "src", () => $$props.img.src);
		var node_5 = sibling(node_4, 2);
		Item(node_5, () => "resolved", () => get(data).resolved);
		var div_1 = sibling(node_5, 2);
		Checkmark(child(div_1), {
			onclick: () => copyToClipboard({
				id: $$props.img.id,
				href: $$props.img.href,
				src: $$props.img.src,
				status: get(data).status,
				resolved: get(data).resolved,
				error: get(data).error
			}),
			title: "Copy to clipboard",
			children: ($$anchor, $$slotProps) => {
				append($$anchor, root_6$1());
			},
			$$slots: { default: true }
		});
		reset(div_1);
		reset(div);
		transition(3, div, () => slide, () => store.transition);
		append($$anchor, div);
		pop();
	}
	var root_1$3 = from_html(`<div class="slider svelte-1bzlgy6"><input type="range" min="1" max="5" step="1" class="svelte-1bzlgy6"/> <span class="value svelte-1bzlgy6" title="Max columns"><span class="text svelte-1bzlgy6"> </span></span></div>`);
	var root = from_html(`<div role="img" class="image-columns svelte-1bzlgy6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-1bzlgy6"><path d="M22 9.999V20a1 1 0 0 1-1 1h-8V9.999zm-11 6V21H3a1 1 0 0 1-1-1v-4.001zM11 3v10.999H2V4a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3.999h-9V3z"></path></svg> <!></div>`);
	function Columns($$anchor, $$props) {
		push($$props, true);
		let open = state$1(false);
		function onpointerenter() {
			set(open, true);
		}
		function onpointerleave() {
			set(open, false);
		}
		function onchange() {
			saveColumnCount(store.columnCount);
		}
		var div = root();
		var node = sibling(child(div), 2);
		var consequent = ($$anchor) => {
			const opts = user_derived(() => ({
				...store.transition,
				axis: "x"
			}));
			var div_1 = root_1$3();
			var input = child(div_1);
			remove_input_defaults(input);
			var span = sibling(input, 2);
			var span_1 = child(span);
			var text = child(span_1, true);
			reset(span_1);
			reset(span);
			reset(div_1);
			template_effect(() => set_text(text, store.columnCount));
			delegated("change", input, onchange);
			bind_value(input, () => store.columnCount, ($$value) => store.columnCount = $$value);
			transition(3, div_1, () => slideFade, () => get(opts));
			append($$anchor, div_1);
		};
		if_block(node, ($$render) => {
			if (get(open)) $$render(consequent);
		});
		reset(div);
		event("pointerenter", div, onpointerenter);
		event("pointerleave", div, onpointerleave);
		append($$anchor, div);
		pop();
	}
	delegate(["change"]);
	var root_2$1 = from_html(`<div class="container svelte-27jg01"><!> <a target="_blank"><img/> <!></a></div>`);
	var root_5 = from_html(`<div id="x-images"><!> <!></div>`);
	function Images_1($$anchor, $$props) {
		push($$props, true);
		const Images = ($$anchor, images = noop) => {
			var fragment = comment();
			each(first_child(fragment), 19, images, (img) => img.id, ($$anchor, img, i) => {
				const gif = user_derived(() => get(img)?.src?.toLowerCase()?.includes(".gif"));
				const loading = user_derived(() => get(img)?.href ? "eager" : "lazy");
				var div = root_2$1();
				let styles;
				var node_1 = child(div);
				var consequent = ($$anchor) => {
					Debug($$anchor, { get img() {
						return get(img);
					} });
				};
				if_block(node_1, ($$render) => {
					if (get(debugImgs)) $$render(consequent);
				});
				var a = sibling(node_1, 2);
				let classes;
				var img_1 = child(a);
				let classes_1;
				bind_this(img_1, ($$value, i) => store.imgRefs[i] = $$value, (i) => store?.imgRefs?.[i], () => [get(i)]);
				var node_2 = sibling(img_1, 2);
				var consequent_1 = ($$anchor) => {
					const statusLoading = user_derived(() => store.upgradeImgData?.[get(img).id]?.status === "loading");
					{
						let $0 = user_derived(() => get(upgradeImages) && get(statusLoading));
						Loader($$anchor, { get loading() {
							return get($0);
						} });
					}
				};
				if_block(node_2, ($$render) => {
					if (!get(gif)) $$render(consequent_1);
				});
				reset(a);
				reset(div);
				template_effect(($0) => {
					set_attribute(div, "data-id", get(img).id);
					styles = set_style(div, "", styles, $0);
					set_attribute(a, "href", get(img)?.href);
					classes = set_class(a, 1, "svelte-27jg01", null, classes, { gif: get(gif) });
					set_attribute(img_1, "loading", get(loading));
					set_attribute(img_1, "id", get(img).id);
					set_attribute(img_1, "src", get(img)?.src);
					set_attribute(img_1, "alt", get(img)?.src);
					classes_1 = set_class(img_1, 1, "svelte-27jg01", null, classes_1, {
						incognito: get(incognito),
						gif: get(gif)
					});
				}, [() => ({ order: handleOrder(get(i)) })]);
				event("error", img_1, onerror);
				replay_events(img_1);
				append($$anchor, div);
			});
			append($$anchor, fragment);
		};
		let clicked = state$1(false);
		let resized = state$1(false);
		let containerWidth = state$1(0);
		let upgradeImages = user_derived(() => getSettings("upgradeImages"));
		let incognito = user_derived(() => getSettings("incognito"));
		let lastImageFirst = user_derived(() => getSettings("lastImageFirst"));
		let debugImgs = user_derived(() => getSettings("debugImgs"));
		function onerror(event) {
			const img = event.currentTarget;
			img.dataset["broken"] = "true";
		}
		function handleOrder(index) {
			if (data.images && get(lastImageFirst)) {
				if (index === data.images.length - 1) return -1;
			}
		}
		user_effect(() => {
			if (get(upgradeImages) && store.imgRefs.length) observeImg(store.imgRefs);
			return () => observer.disconnect();
		});
		let images = user_derived(() => {
			const images = data.images || [];
			if (!get(lastImageFirst) || images.length <= 1) return images;
			const reordered = images.slice();
			reordered.unshift(reordered.pop());
			return reordered;
		});
		var fragment_3 = comment();
		var node_3 = first_child(fragment_3);
		var consequent_2 = ($$anchor) => {
			var div_1 = root_5();
			let classes_2;
			var node_4 = child(div_1);
			Columns(node_4, {});
			Resize(sibling(node_4, 2), {
				get containerWidth() {
					return get(containerWidth);
				},
				get clicked() {
					return get(clicked);
				},
				set clicked($$value) {
					set(clicked, $$value, true);
				},
				get resized() {
					return get(resized);
				},
				set resized($$value) {
					set(resized, $$value, true);
				},
				children: ($$anchor, $$slotProps) => {
					Images($$anchor, () => get(images));
				},
				$$slots: { default: true }
			});
			reset(div_1);
			bind_this(div_1, ($$value) => store.ultraImages = $$value, () => store?.ultraImages);
			template_effect(() => classes_2 = set_class(div_1, 1, "section svelte-27jg01", null, classes_2, { dragging: get(clicked) && get(resized) }));
			bind_element_size(div_1, "offsetWidth", ($$value) => set(containerWidth, $$value));
			append($$anchor, div_1);
		};
		if_block(node_3, ($$render) => {
			if (data.images && data.images.length) $$render(consequent_2);
		});
		append($$anchor, fragment_3);
		pop();
	}
	var Incognito = ($$anchor) => {
		var div = root_1$2();
		var a = sibling(child(div));
		set_style(a, "", {}, { cursor: "pointer" });
		reset(div);
		delegated("click", a, (event) => {
			event.preventDefault();
			updateOption("incognito", false);
		});
		append($$anchor, div);
	};
	var Forumline = ($$anchor, forumline = noop) => {
		const infoHeader = user_derived(() => forumline()?.querySelector("th")?.textContent);
		const infoBody = user_derived(() => forumline()?.querySelector("td")?.innerHTML);
		const errorMessages = user_derived(() => ({
			"Тема находится в мусорке": "The topic is in the trash",
			"Тема не найдена": "Topic not found",
			"Раздача ожидает проверки": "Distribution is awaiting moderator approval<br /><br />Viewing is currently unavailable"
		}));
		const currentError = user_derived(() => Object.keys(get(errorMessages)).find((key) => forumline()?.textContent?.includes(key)));
		var div_1 = root_2();
		var node = child(div_1);
		var consequent = ($$anchor) => {
			var fragment = root_3();
			var p = sibling(first_child(fragment), 4);
			set_style(p, "", {}, { "text-align": "center" });
			html(p, () => get(errorMessages)[get(currentError)], true);
			reset(p);
			next(4);
			append($$anchor, fragment);
		};
		var consequent_1 = ($$anchor) => {
			var fragment_1 = root_4();
			var h3 = first_child(fragment_1);
			var text = child(h3, true);
			reset(h3);
			html(sibling(h3, 2), () => get(infoBody));
			template_effect(() => set_text(text, get(infoHeader)));
			append($$anchor, fragment_1);
		};
		var alternate = ($$anchor) => {
			var fragment_2 = comment();
			html(first_child(fragment_2), () => forumline()?.innerHTML);
			append($$anchor, fragment_2);
		};
		if_block(node, ($$render) => {
			if (get(currentError)) $$render(consequent);
			else if (get(infoHeader) && get(infoBody)) $$render(consequent_1, 1);
			else $$render(alternate, -1);
		});
		reset(div_1);
		append($$anchor, div_1);
	};
	var Avatar = ($$anchor, avatar = noop, nick = noop, link = noop) => {
		var a_1 = root_6();
		var node_3 = child(a_1);
		var consequent_2 = ($$anchor) => {
			var img = root_7();
			template_effect(() => {
				set_attribute(img, "src", avatar());
				set_attribute(img, "alt", nick());
			});
			append($$anchor, img);
		};
		var alternate_1 = ($$anchor) => {
			append($$anchor, root_8());
		};
		if_block(node_3, ($$render) => {
			if (avatar()) $$render(consequent_2);
			else $$render(alternate_1, -1);
		});
		reset(a_1);
		template_effect(() => set_attribute(a_1, "href", link()));
		append($$anchor, a_1);
	};
	var Nick = ($$anchor, nick = noop, link = noop) => {
		var fragment_3 = comment();
		var node_4 = first_child(fragment_3);
		var consequent_4 = ($$anchor) => {
			const content = user_derived(() => nick() === "Гость" ? "Guest" : nick());
			var span = root_10();
			var node_5 = child(span);
			var consequent_3 = ($$anchor) => {
				var a_2 = root_11();
				var text_1 = child(a_2, true);
				reset(a_2);
				template_effect(() => {
					set_attribute(a_2, "href", link());
					set_text(text_1, get(content));
				});
				append($$anchor, a_2);
			};
			var alternate_2 = ($$anchor) => {
				var text_2 = text();
				template_effect(() => set_text(text_2, get(content)));
				append($$anchor, text_2);
			};
			if_block(node_5, ($$render) => {
				if (link()) $$render(consequent_3);
				else $$render(alternate_2, -1);
			});
			reset(span);
			append($$anchor, span);
		};
		if_block(node_4, ($$render) => {
			if (nick()) $$render(consequent_4);
		});
		append($$anchor, fragment_3);
	};
	var root_1$2 = from_html(`<div>Post not rendered... <a href="#incognito" class="svelte-wfy26x">turn off incognito</a></div>`);
	var root_3 = from_html(`<h3>Information</h3> <br/> <p></p> <br/> <a href="/forum/index.php" class="svelte-wfy26x">Return to home page</a>`, 1);
	var root_4 = from_html(`<h3> </h3> <!>`, 1);
	var root_2 = from_html(`<div class="forumline svelte-wfy26x"><!></div>`);
	var root_7 = from_html(`<img class="svelte-wfy26x"/>`);
	var root_8 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-wfy26x"><path fill="currentcolor" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"></path></svg>`);
	var root_6 = from_html(`<a class="no-avatar svelte-wfy26x"><!></a>`);
	var root_11 = from_html(`<a class="svelte-wfy26x"> </a>`);
	var root_10 = from_html(`<span class="nick svelte-wfy26x"><!></span>`);
	var root_14 = from_html(`<button class="date svelte-wfy26x"><!></button>`);
	var root_21 = from_html(`<div class="post svelte-wfy26x"><div class="avatar svelte-wfy26x"><!></div> <div class="content svelte-wfy26x"><div class="header svelte-wfy26x"><!> <!></div> <div class="message svelte-wfy26x"></div></div></div>`);
	var root_18 = from_html(`<div id="x-post"><!></div>`);
	function Post($$anchor, $$props) {
		push($$props, true);
		const Date = ($$anchor, date = noop, i = noop) => {
			var fragment_5 = comment();
			var node_6 = first_child(fragment_5);
			var consequent_6 = ($$anchor) => {
				const paredDate = user_derived(() => handleDate(date()));
				var button = root_14();
				var node_7 = child(button);
				var consequent_5 = ($$anchor) => {
					var text_3 = text();
					template_effect(($0) => set_text(text_3, $0), [() => get(paredDate)?.toLocaleString()]);
					append($$anchor, text_3);
				};
				var alternate_3 = ($$anchor) => {
					var text_4 = text();
					template_effect(($0) => set_text(text_4, $0), [() => handleRelativeDate(get(paredDate))]);
					append($$anchor, text_4);
				};
				if_block(node_7, ($$render) => {
					if (showFullDate[i()]) $$render(consequent_5);
					else $$render(alternate_3, -1);
				});
				reset(button);
				delegated("click", button, () => toggleFullDate(i()));
				append($$anchor, button);
			};
			if_block(node_6, ($$render) => {
				if (date()) $$render(consequent_6);
			});
			append($$anchor, fragment_5);
		};
		let incognito = user_derived(() => getSettings("incognito"));
		let showFullDate = proxy({});
		function toggleFullDate(index) {
			showFullDate[index] = !showFullDate[index];
		}
		function insertPost(message) {
			return (element) => {
				element.appendChild(message);
				return () => message.remove();
			};
		}
		var fragment_8 = comment();
		var node_8 = first_child(fragment_8);
		var consequent_7 = ($$anchor) => {
			Incognito($$anchor);
		};
		var alternate_4 = ($$anchor) => {
			var div_2 = root_18();
			let classes;
			var node_9 = child(div_2);
			var consequent_8 = ($$anchor) => {
				Forumline($$anchor, () => data.forumline);
			};
			var consequent_9 = ($$anchor) => {
				var fragment_11 = comment();
				each(first_child(fragment_11), 17, () => data.posts, index, ($$anchor, $$item, i) => {
					let nick = () => get($$item).nick;
					let link = () => get($$item).link;
					let avatar = () => get($$item).avatar;
					let date = () => get($$item).date;
					let message = () => get($$item).message;
					var div_3 = root_21();
					var div_4 = child(div_3);
					Avatar(child(div_4), avatar, nick, link);
					reset(div_4);
					var div_5 = sibling(div_4, 2);
					var div_6 = child(div_5);
					var node_12 = child(div_6);
					Nick(node_12, nick, link);
					Date(sibling(node_12, 2), date, () => i);
					reset(div_6);
					attach(sibling(div_6, 2), () => insertPost(message()));
					reset(div_5);
					reset(div_3);
					append($$anchor, div_3);
				});
				append($$anchor, fragment_11);
			};
			if_block(node_9, ($$render) => {
				if (data.forumline) $$render(consequent_8);
				else if (data.posts && data.posts?.length) $$render(consequent_9, 1);
			});
			reset(div_2);
			bind_this(div_2, ($$value) => store.ultraPost = $$value, () => store?.ultraPost);
			template_effect(() => classes = set_class(div_2, 1, "svelte-wfy26x", null, classes, { section: data.forumline || data.posts?.length }));
			append($$anchor, div_2);
		};
		if_block(node_8, ($$render) => {
			if (get(incognito)) $$render(consequent_7);
			else $$render(alternate_4, -1);
		});
		append($$anchor, fragment_8);
		pop();
	}
	delegate(["click"]);
	var root_1$1 = from_html(`<div id="ultra-pagination" class="svelte-dlb7of"><!></div>`);
	function Pagination($$anchor, $$props) {
		push($$props, true);
		const parser = new DOMParser();
		const translations = {
			Страница: "Page",
			Страницы: "Pages",
			из: "of",
			"Пред.": "Prev",
			"След.": "Next"
		};
		const regex = /Страница|Страницы|из|Пред\.|След\./g;
		let content = user_derived(() => {
			if (!data.pagination?.innerHTML) return "";
			const doc = parser.parseFromString(data.pagination.innerHTML, "text/html");
			const pageSelect = doc.querySelector("a.menu-root");
			if (pageSelect) pageSelect.replaceWith(doc.createTextNode("Pages"));
			return doc.body.innerHTML.replace(regex, (match) => translations[match] ?? match).replace(/Pages\s+:/, "Pages:");
		});
		var fragment = comment();
		var node = first_child(fragment);
		var consequent_1 = ($$anchor) => {
			var div = root_1$1();
			var node_1 = child(div);
			var consequent = ($$anchor) => {
				var fragment_1 = comment();
				html(first_child(fragment_1), () => get(content));
				append($$anchor, fragment_1);
			};
			if_block(node_1, ($$render) => {
				if (data.pagination) $$render(consequent);
			});
			reset(div);
			append($$anchor, div);
		};
		if_block(node, ($$render) => {
			if (data?.pagination) $$render(consequent_1);
		});
		append($$anchor, fragment);
		pop();
	}
	var root_1 = from_html(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
	function App($$anchor, $$props) {
		push($$props, true);
		let app = prop($$props, "app", 7);
		let firstPage = state$1(true);
		if (document.readyState === "loading") on(document, "DOMContentLoaded", parseDOM, { once: true });
		else parseDOM();
		function parseDOM() {
			if (forumDisabled(app())) return;
			if (Object.keys(data).length === 0) {
				Object.assign(data, handleData());
				store.showSettings = loadShowSettings();
				store.options = loadOptions();
				store.performerLinks = loadPerformerLinks();
				store.resizeWidth = loadResize();
				store.columnCount = loadColumnCount();
				const startParam = new URLSearchParams(location.search).get("start");
				set(firstPage, startParam === null || Number(startParam) === 0, true);
				setTimeout(() => {
					data.posts = handlePosts(document.querySelectorAll("#topic_main div.post-user-message"));
					Array.from(document.body.children).forEach((child) => {
						if (child !== app()) child.remove();
					});
					app().style.height = "auto";
				}, 0);
			}
		}
		user_effect(() => {
			const darkMode = Boolean(data.theme?.darkmode);
			document.documentElement.dataset["theme"] = darkMode ? "dark" : "light";
			sessionStorage.setItem("dark-mode", darkMode.toString());
		});
		var fragment = comment();
		var node = first_child(fragment);
		var consequent_1 = ($$anchor) => {
			var fragment_1 = root_1();
			var node_1 = first_child(fragment_1);
			Events(node_1, {});
			var node_2 = sibling(node_1, 2);
			Header(node_2, {});
			var node_3 = sibling(node_2, 2);
			Settings(node_3, {});
			var node_4 = sibling(node_3, 2);
			Float(node_4, {});
			var node_5 = sibling(node_4, 2);
			Dropdown$1(node_5, {});
			var node_6 = sibling(node_5, 2);
			Title(node_6, {});
			var node_7 = sibling(node_6, 2);
			var consequent = ($$anchor) => {
				Stats($$anchor, {});
			};
			var alternate = ($$anchor) => {
				Pagination($$anchor, {});
			};
			if_block(node_7, ($$render) => {
				if (get(firstPage)) $$render(consequent);
				else $$render(alternate, -1);
			});
			var node_8 = sibling(node_7, 2);
			Tags(node_8, {});
			var node_9 = sibling(node_8, 2);
			FileList(node_9, {});
			var node_10 = sibling(node_9, 2);
			Images_1(node_10, {});
			var node_11 = sibling(node_10, 2);
			Post(node_11, {});
			Pagination(sibling(node_11, 2), {});
			append($$anchor, fragment_1);
		};
		var d = user_derived(() => Object.keys(data).length !== 0);
		if_block(node, ($$render) => {
			if (get(d)) $$render(consequent_1);
		});
		append($$anchor, fragment);
		pop();
	}
	_css("html{--border-radius-large:8px;--border-radius-small:4px;--tag-color:#fff;--content-margin:1rem;--highlighted:#b46300}html[data-theme=dark]{--main-bg:#121212;--post-bg:#282828;--post-date-color:#87b3df;--post-border-color:#555;--post-odd-bg:#373737;--link-color:#9cceff;--tag-bg:#323232;--search-color:#fff;--overlay-bg:#202020bf;--input-bg:#1c1b1b;--incognito-filter:brightness(0);--button-color:#284a86;--seed-color:#33b933;--leech-color:#ff5454}html[data-theme=light]{--main-bg:#fff;--post-bg:#efefef;--post-date-color:#345da4;--post-border-color:#cacaca;--post-odd-bg:#e3e3e3;--link-color:#345da4;--tag-bg:var(--link-color);--search-color:#000;--overlay-bg:#ffffffbf;--input-bg:#fafafa;--incognito-filter:brightness(0) invert(1);--button-color:#4677cc;--seed-color:#060;--leech-color:#900}#ultra{background-color:var(--main-bg);flex-direction:column;padding:1.5rem 2.5rem;font-family:system-ui;display:flex}#ultra .section{background-color:var(--post-bg);border-radius:var(--border-radius-large);border:1px solid var(--post-border-color);overflow:hidden}#ultra img{filter:unset}body{min-width:unset!important}");
	if (userscriptDisabled()) if (document.readyState === "loading") on(document, "DOMContentLoaded", appendUserscriptEnableButton, { once: true });
	else appendUserscriptEnableButton();
	else {
		const cachedTheme = sessionStorage.getItem("dark-mode");
		if (cachedTheme !== null) document.documentElement.dataset["theme"] = cachedTheme === "true" ? "dark" : "light";
		let CSP = false;
		if (document.head) CSP = prependContentSecurityPolicy();
		if (document.body) {
			mountApp();
			const body_container = document.getElementById("body_container");
			if (body_container) body_container.style.display = "none";
		} else {
			const targetNode = document.documentElement;
			const config = {
				childList: true,
				subtree: true
			};
			const callback = (mutationList, observer) => {
				for (const mutation of mutationList) if (mutation.type === "childList") for (const node of mutation.addedNodes) {
					if (node.nodeName === "HEAD" && !CSP) CSP = prependContentSecurityPolicy();
					if (node.nodeName === "BODY") mountApp();
					if (node instanceof HTMLElement && node.id === "body_container") {
						node.style.display = "none";
						observer.disconnect();
					}
				}
			};
			new MutationObserver(callback).observe(targetNode, config);
		}
		function mountApp() {
			const app = document.createElement("div");
			app.id = "ultra";
			app.style.height = "100vh";
			document.body.prepend(app);
			mount(App, {
				target: app,
				props: { app }
			});
		}
	}
})();
