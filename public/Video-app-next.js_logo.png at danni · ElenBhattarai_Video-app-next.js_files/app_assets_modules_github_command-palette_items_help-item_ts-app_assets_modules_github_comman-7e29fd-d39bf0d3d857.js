"use strict";(()=>{var S=Object.defineProperty;var f=(y,v)=>S(y,"name",{value:v,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-7e29fd"],{2846:(y,v,a)=>{a.d(v,{i:()=>t});var p=a(35803),m=a(23207),h=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var s=n>1?void 0:n?r(i,c):i,d=o.length-1,u;d>=0;d--)(u=o[d])&&(s=(n?u(i,c,s):u(s))||s);return n&&s&&h(i,c,s),s},"__decorateClass");let t=f(class extends m.b{static build(o,i){const c=new t;return c.providerId=o,c.provider=i,c}connectedCallback(){this.setAttribute("data-targets","command-palette.clientDefinedProviderElements")}},"ClientDefinedProviderElement");l([p.Lj],t.prototype,"providerId",2),t=l([p.Ih],t)},64465:(y,v,a)=>{a.d(v,{Z:()=>T,o:()=>O});var p=a(35803),m=a(2846),h=a(39200),r=a(85678),l=a(80829),t=a(80425),o=a(3447),i=a(72017),c=Object.defineProperty,n=Object.getOwnPropertyDescriptor,s=f((e,_,g,P)=>{for(var I=P>1?void 0:P?n(_,g):_,M=e.length-1,D;M>=0;M--)(D=e[M])&&(I=(P?D(_,g,I):D(I))||I);return P&&I&&c(_,g,I),I},"__decorateClass");const d=f(()=>navigator.platform.match(/Mac/),"isMac"),u=d()?"metaKey":"ctrlKey",E=d()?"Meta":"Control",O=f(e=>e instanceof KeyboardEvent?e[u]:!1,"isPlatformMetaKey"),C=450;let T=f(class extends HTMLElement{constructor(){super(...arguments),this.everActivated=!1,this.activated=!1,this.error=!1,this.query=new l.A("",""),this.setupComplete=!1,this.sessionId="",this.returnTo="",this.userId="",this.activationHotkey="Mod+k,Mod+Alt+k",this.commandModeHotkey="Mod+Shift+k,Control+K"}setup(){this.modes=Array.from(this.querySelectorAll("command-palette-mode")),this.defaultMode=this.querySelector(".js-command-palette-default-mode"),this.commandPaletteInput=this.querySelector("command-palette-input"),this.groups=this.querySelectorAll("command-palette-item-group"),new ResizeObserver(g=>{for(const P of g)this.commandPaletteInput.scopeElement.smallDisplay=P.contentRect.width<C}).observe(this),this.defaultOpen&&(this.manualToggle(!0),this.clearReturnToParams()),window.commandPalette=this,this.setupComplete=!0;const _=new Event("command-palette-ready",{bubbles:!0,cancelable:!0});this.dispatchEvent(_)}connectedCallback(){this.setupComplete||this.setup()}clear(e=!0){this.clearProviderCaches(),this.pageStack.reset(),e&&this.resetInput()}clearCommands(e=!0){return this.everActivated&&(this.clearCommandProviderCaches(),e&&this.resetInput()),Promise.resolve()}resetInput(){this.commandPaletteInput.inputValue=""}activate(){this.sessionId=this.generateSessionId(),this.commandPaletteInput.scopeElement.smallDisplay=this.offsetWidth<C,this.commandPaletteInput.focus(),this.setActiveModeElement(),this.setQuery(),this.toggleTips(),this.pageStack.commandPaletteActivated(),this.dispatchEvent(new CustomEvent("command-palette-activated",{detail:{previouslyActivated:this.everActivated}})),this.activated=!0,this.everActivated=!0,(0,i.j)("session_initiated")}deactivate(){this.activated=!1,this.pageStack.unbindListeners(),this.clear(),this.previouslyActiveElement&&this.previouslyActiveElement.focus(),(0,i.j)("session_terminated")}generateSessionId(){return(0,t.k)(`${Date.now()}_${this.userId}_${this.query.path}`).toString()}manualToggle(e){const _=this.closest("details");e?_.open=!0:_.removeAttribute("open")}dismiss(){this.manualToggle(!1),this.clear()}get secondaryActivationHotkey(){const e=this.activationHotkey.split(",");return e.length>1?e[e.length-1]:""}get platformActivationHotkey(){return this.platformHotkey(this.activationHotkey)}get platformSecondaryActivationHotkey(){return this.platformHotkey(this.secondaryActivationHotkey)}get platformCommandModeHotkey(){return this.platformHotkey(this.commandModeHotkey)}platformHotkey(e){if(e==="none")return"";let _=e;if(d())_=_.replace(/Mod\+Alt/g,"Alt+Mod");else if(_.includes("Shift")){const g=_.charAt(_.length-1);_+=`,${_.replace(`Shift+${g}`,g.toUpperCase())}`}return _.replace(/Mod/g,E)}onInput(){!this.everActivated||(this.commandPaletteInput.typeahead="",this.setActiveModeElement(),this.setQuery(),this.toggleTips(),this.updateOverlay())}updateOverlay(){const e=this.getMode();this.commandPaletteInput.overlay=e;for(const _ of this.groups)_.renderElement(e);if(e&&this.getTextWithoutMode()===""){const _=this.getModeElement().placeholder||"";this.commandPaletteInput.showModePlaceholder(_)}else this.commandPaletteInput.showModePlaceholder("")}itemsUpdated(e){if(!(e instanceof CustomEvent))return;const g=e.detail.items.filter(D=>D.group!==h.O.footerGroupId),P=g.filter(D=>!D.group||!h.O.helpGroupIds.includes(D.group)),I=g.length>P.length,M=P.length===0&&this.activated;P.length>0?this.toggleEmptyState(!1,I):M&&(this.toggleEmptyState(!0,I),this.toggleTips()),this.toggleErrorTips()}loadingStateChanged(e){e instanceof CustomEvent&&(this.commandPaletteInput.loading=e.detail.loading)}pageFetchError(e){e instanceof CustomEvent&&(this.error=!0,this.toggleErrorTips())}selectedItemChanged(e){if(!(e instanceof CustomEvent))return;const _=e.detail.item,g=e.detail.isDefaultSelection;this.updateTypeahead(_,g)}setActiveModeElement(){const e=this.commandPaletteInput.inputValue.substring(0,1),_=this.modes.filter(g=>g.active(this.query.scope,e)).find(g=>g.character()===e);this.activeMode=_||this.defaultMode,this.pageStack.currentMode=this.activeMode.character()}setQuery(){this.query=new l.A(this.getTextWithoutMode().trimStart(),this.getMode(),{scope:this.commandPaletteInput.scope,subjectId:this.pageStack.defaultScopeId,subjectType:this.pageStack.defaultScopeType,returnTo:this.returnTo}),this.pageStack.currentQueryText=this.getTextWithoutMode().trimStart()}getModeElement(){return this.activeMode}getMode(){return this.getModeElement()?.character()}getTextWithoutMode(){if(!this.commandPaletteInput)return"";const e=this.commandPaletteInput.inputValue,_=this.getMode();return _&&e.startsWith(_)?e.substring(1):e}get selectedItem(){return this.pageStack.currentPage.selectedItem}onSelect(e){this.selectedItem?this.selectedItem.item.select(this):e.preventDefault()}autocomplete(e){(0,i.j)("autocompleted",e);const _=this.commandPaletteInput;e.typeahead!==void 0?_.inputValue=_.overlay+e.typeahead:_.inputValue=_.overlay+e.title}setScope(e){(0,i.j)("scoped");const _=e||this.commandPaletteInput.scope;for(const g of _.tokens){const P=g===_.tokens[_.tokens.length-1],I=new r.j({title:g.value,scopeId:g.id,scopeType:g.type});this.pageStack.push(I,!P)}this.commandPaletteInput.inputValue=""}onDescope(){this.toggleEmptyState(!1,!1),this.pageStack.pop(),this.toggleTips()}onInputClear(){this.pageStack.clear()}onKeydown(e){e.key==="Enter"&&this.selectedItem?(this.selectedItem?.activate(this,e),e.preventDefault(),e.stopPropagation()):e.key==="ArrowDown"?(this.navigateToItem(1),e.preventDefault(),e.stopPropagation()):e.key==="ArrowUp"?(this.navigateToItem(-1),e.preventDefault(),e.stopPropagation()):this.isCopyEvent(e)&&this.selectedItem&&(this.selectedItem.copy(this),e.preventDefault(),e.stopPropagation())}close(e){if(e instanceof KeyboardEvent&&e.key!=="Enter")return;document.querySelector(".command-palette-details-dialog").toggle(!1),e.stopImmediatePropagation(),e.preventDefault()}navigateToItem(e){this.pageStack.navigate(e)}toggleTips(){const e=this.modeTips.filter(g=>g.available(this.query)),_=e[Math.floor(Math.random()*e.length)];for(const g of this.modeTips)g.hidden=_!==g;this.pageStack.hasVisibleTip=!!_,this.pageStack.currentPage.recomputeStyles()}toggleEmptyState(e,_){for(const g of this.emptyStateElements)g.toggle(this.query,e);if(!_&&e){const g=this.serverDefinedProviderElements.find(P=>P.type==="help");g&&this.pageStack.currentPage.fetch([g.provider],{isEmpty:!0})}}toggleErrorTips(){for(const e of this.errorStateTips)e.toggle(this.query,!1,this.error)}updateInputScope(e){e instanceof CustomEvent&&(this.commandPaletteInput.scope=this.pageStack.scope,this.setQuery())}updateTypeahead(e,_=!1){this.getTextWithoutMode()===""&&(!e||_)?this.commandPaletteInput.typeahead="":e&&(this.commandPaletteInput.typeahead=e.typeahead??e.title??"")}isCopyEvent(e){return this.commandPaletteInput.textSelected()?!1:d()?e.metaKey&&e.key==="c":e.ctrlKey&&e.key==="c"}setQueryScope(){this.query.scope=this.commandPaletteInput.scope}get providerElements(){return[...this.serverDefinedProviderElements,...this.clientDefinedProviderElements]}get commandsProviderElements(){return this.providerElements.filter(e=>e.provider?.hasCommands)}clearProviderCaches(){for(const e of this.providerElements)e.provider?.clearCache()}clearCommandProviderCaches(){for(const e of this.commandsProviderElements)e.provider?.clearCache()}registerProvider(e,_){const g=this.querySelector(`client-defined-provider[data-provider-id="${e}"]`);g&&g.remove();const P=m.i.build(e,_);this.appendChild(P)}pushPage(e,_=!1){_&&this.pageStack.clear(!1),this.pageStack.push(e),this.resetInput()}get tipElements(){const e=this.querySelectorAll("command-palette-tip");return Array.from(e)}get modeTips(){return this.tipElements.filter(e=>!e.onEmpty&&!e.onError)}get emptyStateElements(){return this.tipElements.filter(e=>e.onEmpty)}get errorStateTips(){return this.tipElements.filter(e=>e.onError)}get placeholder(){return this.getAttribute("placeholder")||""}get defaultOpen(){return this.getAttribute("data-default-open")!==null}clearReturnToParams(){const e=new URLSearchParams(location.search);e.delete("command_palette_open"),e.delete("command_query"),e.delete("command_mode"),e.delete("clear_command_scope"),history.replaceState(null,"",`?${e}${location.hash}`)}displayFlash(e,_,g=5e3){const P=document.querySelector(".js-command-palette-toasts");if(!P)return;const I=P.querySelectorAll(".Toast");for(const b of I)b.hidden=!0;const M=P.querySelector(`.Toast.Toast--${e}`);if(!M)return;const D=M.querySelector(".Toast-content");D.textContent=_,M.hidden=!1,setTimeout(()=>{M.hidden=!0},g)}},"CommandPalette");T.tagName="command-palette",s([p.Lj],T.prototype,"returnTo",2),s([p.Lj],T.prototype,"userId",2),s([p.Lj],T.prototype,"activationHotkey",2),s([p.Lj],T.prototype,"commandModeHotkey",2),s([p.fA],T.prototype,"pageStack",2),s([p.GO],T.prototype,"clientDefinedProviderElements",2),s([p.GO],T.prototype,"serverDefinedProviderElements",2),s([(0,o.D)(250)],T.prototype,"clearCommands",1),T=s([p.Ih],T)},39200:(y,v,a)=>{a.d(v,{O:()=>t});var p=a(35803),m=a(38772),h=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var s=n>1?void 0:n?r(i,c):i,d=o.length-1,u;d>=0;d--)(u=o[d])&&(s=(n?u(i,c,s):u(s))||s);return n&&s&&h(i,c,s),s},"__decorateClass");let t=f(class extends HTMLElement{constructor(){super(...arguments),this.groupLimits="",this.defaultPriority=0,this.skipTemplate=!1}connectedCallback(){this.classList.add("py-2","border-top"),this.setAttribute("hidden","true"),this.skipTemplate||this.renderElement(""),this.skipTemplate=!0}prepareForNewItems(){this.list.innerHTML="",this.setAttribute("hidden","true"),this.classList.contains("border-top")||this.classList.add("border-top")}hasItem(o){return this.list.querySelectorAll(`[data-item-id="${o.id}"]`).length>0}renderElement(o){const i=f(()=>this.hasTitle?m.dy`
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              ${this.groupTitle}
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              ${o?"":this.groupHint}
            </span>
          </div>
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `:m.dy`
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `,"groupTemplate");(0,m.sY)(i(),this)}push(o){this.removeAttribute("hidden"),this.topGroup&&this.atLimit?o.itemId!==this.firstItem.itemId&&this.replaceTopGroupItem(o):this.list.append(o)}replaceTopGroupItem(o){this.list.replaceChild(o,this.firstItem)}groupLimitForScope(){const o=this.closest("command-palette");if(o){const i=o.query.scope.type;return JSON.parse(this.groupLimits)[i]}}get limit(){const o=this.groupLimitForScope();return this.topGroup?1:this.isModeActive()?50:o||t.defaultGroupLimit}get atLimit(){return this.list.children.length>=this.limit}parsedGroupLimits(){return this.groupLimits?JSON.parse(this.groupLimits):{}}limitForScopeType(o){const c=this.parsedGroupLimits()[o];return this.topGroup?1:this.isModeActive()?t.activeModeLimit:c||c===0?c:t.defaultGroupLimit}atLimitForScopeType(o){return this.list.children.length>=this.limitForScopeType(o)}isModeActive(){const o=this.closest("command-palette");return o?o.getMode():!1}get topGroup(){return this.groupId===t.topGroupId}get hasTitle(){return this.groupId!==t.footerGroupId&&this.groupId!==t.defaultGroupId}get itemNodes(){return this.list.querySelectorAll("command-palette-item")}get firstItem(){return this.itemNodes[0]}get lastItem(){return this.itemNodes[this.itemNodes.length-1]}},"CommandPaletteItemGroupElement");t.defaultGroupLimit=5,t.activeModeLimit=50,t.topGroupId="top",t.defaultGroupId="default",t.footerGroupId="footer",t.helpGroupIds=["modes_help","filters_help"],t.commandGroupIds=["commands"],t.topGroupScoreThreshold=9,l([p.Lj],t.prototype,"groupTitle",2),l([p.Lj],t.prototype,"groupHint",2),l([p.Lj],t.prototype,"groupId",2),l([p.Lj],t.prototype,"groupLimits",2),l([p.Lj],t.prototype,"defaultPriority",2),l([p.Lj],t.prototype,"skipTemplate",2),l([p.fA],t.prototype,"list",2),l([p.fA],t.prototype,"header",2),t=l([p.Ih],t)},47779:(y,v,a)=>{a.d(v,{v:()=>n});var p=a(35803),m=a(38772),h=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((s,d,u,E)=>{for(var O=E>1?void 0:E?r(d,u):d,C=s.length-1,T;C>=0;C--)(T=s[C])&&(O=(E?T(d,u,O):T(O))||O);return E&&O&&h(d,u,O),O},"__decorateClass");const t=14,o=20,i=20,c=55;let n=f(class extends HTMLElement{constructor(){super(...arguments),this.smallDisplay=!1}connectedCallback(){this.classList.add("d-inline-flex")}get lastToken(){return this.tokens[this.tokens.length-1]}get text(){return this.tokens.map(s=>s.text).join("/")}get id(){return this.lastToken?this.lastToken.id:n.emptyScope.id}get type(){return this.lastToken?this.lastToken.type:n.emptyScope.type}get scope(){return this.hasScope()?{text:this.text,type:this.type,id:this.id,tokens:this.tokens}:n.emptyScope}set scope(s){this.renderTokens(s.tokens)}renderTokens(s){this.clearScope();let d=0,u=s.length;const E=this.smallDisplay?t:i,O=this.smallDisplay?o:c;for(let e=s.length-1;e>=0&&!(d+Math.min(s[e].text.length,E)+5>O);e--)d+=Math.min(s[e].text.length,E)+5,u=e;const C=f(e=>m.dy`${e.map(T)}`,"tokensTemplate"),T=f((e,_)=>{const g=e.text.length>E?`${e.text.substring(0,E-3)}...`:e.text;return m.dy`
        <command-palette-token
          data-text="${e.text}"
          data-id="${e.id}"
          data-type="${e.type}"
          data-value="${e.value}"
          data-targets="command-palette-scope.tokens"
          hidden="${_<u}"
          class="color-fg-default text-semibold"
          style="white-space:nowrap;line-height:20px;"
          >${g}<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        </command-palette-token>
      `},"tokenTemplate");(0,m.sY)(C(s),this),this.hidden=!this.hasScope(),u!==0&&(this.placeholder.hidden=!1)}removeToken(){this.lastToken&&(this.lastRemovedToken=this.lastToken,this.lastToken.remove(),this.renderTokens(this.tokens))}hasScope(){return this.tokens.length>0&&this.type&&this.id&&this.text}clearScope(){for(const s of this.tokens)s.remove();this.placeholder.hidden=!0}attributeChangedCallback(s,d,u){!this.isConnected||s==="data-small-display"&&d!==u&&this.renderTokens(this.tokens)}},"CommandPaletteScopeElement");n.emptyScope={type:"",text:"",id:"",tokens:[]},n.observedAttributes=["data-small-display"],l([p.Lj],n.prototype,"smallDisplay",2),l([p.fA],n.prototype,"placeholder",2),l([p.GO],n.prototype,"tokens",2),n=l([p.Ih],n)},76168:(y,v,a)=>{a.d(v,{z:()=>h});function p(r){const l=document.createElement("pre");return l.style.width="1px",l.style.height="1px",l.style.position="fixed",l.style.top="5px",l.textContent=r,l}f(p,"createNode");function m(r){if("clipboard"in navigator)return navigator.clipboard.writeText(r.textContent||"");const l=getSelection();if(l==null)return Promise.reject(new Error);l.removeAllRanges();const t=document.createRange();return t.selectNodeContents(r),l.addRange(t),document.execCommand("copy"),l.removeAllRanges(),Promise.resolve()}f(m,"copyNode");function h(r){if("clipboard"in navigator)return navigator.clipboard.writeText(r);const l=document.body;if(!l)return Promise.reject(new Error);const t=p(r);return l.appendChild(t),m(t),l.removeChild(t),Promise.resolve()}f(h,"copyText")},81072:(y,v,a)=>{a.d(v,{i:()=>t});var p=a(64465),m=a(4220),h=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var s=n>1?void 0:n?r(i,c):i,d=o.length-1,u;d>=0;d--)(u=o[d])&&(s=(n?u(i,c,s):u(s))||s);return n&&s&&h(i,c,s),s},"__decorateClass");let t=f(class extends m.g{activate(o,i){i instanceof PointerEvent?super.activate(o,i):i instanceof KeyboardEvent&&this.activateLinkBehavior(o,i,(0,p.o)(i))}get key(){return this.title}},"AccessPolicyItem");t=l([m.O],t)},68313:(y,v,a)=>{a.d(v,{d:()=>t});var p=a(4220),m=a(88513),h=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var s=n>1?void 0:n?r(i,c):i,d=o.length-1,u;d>=0;d--)(u=o[d])&&(s=(n?u(i,c,s):u(s))||s);return n&&s&&h(i,c,s),s},"__decorateClass");let t=f(class extends p.g{constructor(o){super(o),this.typeahead=o.title,this.group="commands"}get action(){return this._action}async activate(o){super.activate(o);const i=o.getAttribute("data-commands-path");if(!i)return;const c=o.query.params();c.set("command",this.action.id),o.commandPaletteInput.loading=!0;const n=await(0,m.Q)(i,{method:"POST",body:c});if(o.commandPaletteInput.loading=!1,n.ok){const s=await n.json();this.handleResponse(o,s.action,s.arguments)}else o.displayFlash("error","Failed to run command")}handleResponse(o,i,c){switch(i){case"displayFlash":o.displayFlash(c.type,c.message),o.dismiss();break}}},"CommandItem");t=l([p.O],t)},96753:(y,v,a)=>{a.d(v,{Z:()=>t});var p=a(4220),m=a(76168),h=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var s=n>1?void 0:n?r(i,c):i,d=o.length-1,u;d>=0;d--)(u=o[d])&&(s=(n?u(i,c,s):u(s))||s);return n&&s&&h(i,c,s),s},"__decorateClass");let t=f(class extends p.g{constructor(o){super(o),this.priority=11,this.score=1,this.typeahead=o.title,this.group="commands"}get action(){return this._action}async activate(o){super.activate(o);try{await(0,m.z)(this.action.text),o.displayFlash("success",this.action.message),o.dismiss()}catch{o.displayFlash("error","Copy failed")}}},"CopyableItem");t=l([p.O],t)},8665:(y,v,a)=>{a.d(v,{B:()=>l});var p=a(4220),m=Object.defineProperty,h=Object.getOwnPropertyDescriptor,r=f((t,o,i,c)=>{for(var n=c>1?void 0:c?h(o,i):o,s=t.length-1,d;s>=0;s--)(d=t[s])&&(n=(c?d(o,i,n):d(n))||n);return c&&n&&m(o,i,n),n},"__decorateClass");let l=f(class extends p.g{constructor(t){super(t),this.persistentHint=t.persistentHint}static from(t){return new l({title:t.title,typeahead:"",priority:-10-t.index,score:-10,group:t.group,action:{type:"help",description:"",prefix:t.prefix},persistentHint:t.persistentHint})}activate(t,o){t.commandPaletteInput.inputValue=this.action.prefix+t.getTextWithoutMode()}autocomplete(t){t.commandPaletteInput.inputValue=this.action.prefix+t.getTextWithoutMode()}calculateScore(t){return 0}get action(){return this._action}},"HelpItem");l=r([p.O],l)},98810:(y,v,a)=>{a.d(v,{s:()=>t});var p=a(64465),m=a(4220),h=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var s=n>1?void 0:n?r(i,c):i,d=o.length-1,u;d>=0;d--)(u=o[d])&&(s=(n?u(i,c,s):u(s))||s);return n&&s&&h(i,c,s),s},"__decorateClass");let t=f(class extends m.g{static from(o){return new t({title:o.title,typeahead:o.title,priority:1,score:1,group:o.group,action:{type:"jump_to",description:"",path:o.path},icon:{type:"octicon",id:o.icon}})}activate(o,i){i instanceof PointerEvent?super.activate(o,i):i instanceof KeyboardEvent&&this.activateLinkBehavior(o,i,(0,p.o)(i))}copy(o){super.copy(o);const i=new URL(this.action.path,window.location.origin);return this.copyToClipboardAndAnnounce(i.toString()),i.toString()}get key(){return`${super.key}/${this.action.path}`}get action(){return this._action}},"JumpToItem");t=l([m.O],t)},28760:(y,v,a)=>{a.d(v,{V:()=>t});var p=a(98810),m=a(4220),h=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var s=n>1?void 0:n?r(i,c):i,d=o.length-1,u;d>=0;d--)(u=o[d])&&(s=(n?u(i,c,s):u(s))||s);return n&&s&&h(i,c,s),s},"__decorateClass");let t=f(class extends p.s{},"JumpToOrgItem");t=l([m.O],t)},3991:(y,v,a)=>{a.d(v,{W:()=>t});var p=a(98810),m=a(4220),h=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var s=n>1?void 0:n?r(i,c):i,d=o.length-1,u;d>=0;d--)(u=o[d])&&(s=(n?u(i,c,s):u(s))||s);return n&&s&&h(i,c,s),s},"__decorateClass");let t=f(class extends p.s{},"JumpToTeamItem");t=l([m.O],t)},77417:(y,v,a)=>{a.d(v,{U:()=>m});var p=a(33241);class m extends p.ck{constructor(r,l){super({title:l.title??r.title,subtitle:l.subtitle??r.subtitle,typeahead:l.title??r.title,priority:l.priority??r.priority,group:l.group??r.group,icon:{type:l.iconType??r.iconType,id:l.icon??r.icon},hint:"Run command"}),this.command=r}get path(){}copy(r){}activate(r){this.command.run(r),this.command.dismissAfterRun&&r.dismiss()}isApplicable(r){return this.command.isApplicable(r)}select(r){this.command.select?this.command.select(r):r.autocomplete(this)}}f(m,"MainWindowCommandItem")},31411:(y,v,a)=>{a.d(v,{K:()=>o});var p=a(4220),m=a(39200),h=a(98810),r=Object.defineProperty,l=Object.getOwnPropertyDescriptor,t=f((i,c,n,s)=>{for(var d=s>1?void 0:s?l(c,n):c,u=i.length-1,E;u>=0;u--)(E=i[u])&&(d=(s?E(c,n,d):E(d))||d);return s&&d&&r(c,n,d),d},"__decorateClass");let o=f(class extends h.s{constructor(i){super(i),this.titleScope=i.titleScope}static create(i){let c,n;const s=[...i.scope.tokens];for(;s.length>0&&!this.searchableScopeTypes.includes(s[s.length-1].type);)s.pop();let d;if(s.length>0?d=s[s.length-1]:d=void 0,d&&d.type==="repository"){const u=s.map(E=>E.text).join("/");c=`in ${u}`,n=`/${u}/search?q=${i.text}`}else if(d&&d.type==="owner"){const u=`org:${d.text} ${i.text}`;c=`in ${d.text}`,n=`/search?q=${u}`}else c="across all of GitHub",n=`/search?q=${i.text}`;return new o({title:`Search ${i.text}${c}`,typeahead:"",priority:-10,score:-10,group:m.O.footerGroupId,action:{type:"jump_to",description:"",path:n},icon:{type:"octicon",id:"search-color-fg-muted"},titleScope:c})}autocomplete(i){}calculateScore(i){return 0}},"SearchLinkItem");o.searchableScopeTypes=["owner","repository"],o=t([p.O],o)},4220:(y,v,a)=>{a.d(v,{O:()=>h,g:()=>l});var p=a(33241),m=a(39200);function h(t){l.register(t)}f(h,"serverDefinedItem");const r=f(class extends p.ck{constructor(t){super(t),this.position="",this.score=t.score,this.scope=t.scope,this.matchFields=t.match_fields,this._action=t.action}static register(t){this.itemClasses[t.itemType]=t}static get itemType(){return this.buildItemType(this.name)}static buildItemType(t){return t.replace(/([A-Z]($|[a-z]))/g,"_$1").replace(/(^_|_Item$)/g,"").toLowerCase()}static build(t){const o=this.itemClasses[t.action.type];if(o)return new o(t);throw new Error(`No item handler for ${t.action.type}`)}get action(){return this._action}get key(){return`${this.action.type}/${this.title}/${this.group}`}get path(){return this.action.path||""}get itemType(){return r.buildItemType(this.constructor.name)}select(t){this.scope?t.setScope(this.scope):t.autocomplete(this)}activate(t,o){}activateLinkBehavior(t,o,i){this.element?.activateLinkBehavior(t,o,i)}copy(t){}copyToClipboardAndAnnounce(t,o){this.element?.copyToClipboardAndAnnounce(t,o)}},"_ServerDefinedItem");let l=r;l.itemClasses={},l.defaultData={title:"",score:1,priority:1,action:{type:"",path:""},icon:{type:"octicon",id:"dash-color-fg-muted"},group:m.O.defaultGroupId}},85678:(y,v,a)=>{a.d(v,{j:()=>p});class p{constructor(h){this.title=h.title,this.scopeId=h.scopeId,this.scopeType=h.scopeType}get providers(){const h=[];for(const r of this._providerElements)r.provider&&h.push(r.provider);return h}get _providerElements(){return[...this.serverDefinedProviderElements,...this.clientDefinedProviderElements]}get serverDefinedProviderElements(){const h=document.querySelectorAll("server-defined-provider");return Array.from(h)}get clientDefinedProviderElements(){const h=document.querySelectorAll("client-defined-provider");return Array.from(h)}}f(p,"GlobalProvidersPage")},23207:(y,v,a)=>{a.d(v,{b:()=>p});class p extends HTMLElement{async fetchWithDebounce(h,r){return this.provider?(this._lastFetchQuery=h,await this.delay(this.provider.debounce),this._lastFetchQuery!==h?{results:[]}:this.provider.fetch(h,r)):{results:[]}}delay(h){return new Promise(r=>setTimeout(r,h))}}f(p,"ProviderElement")},78078:(y,v,a)=>{a.d(v,{B:()=>m});var p=a(33241);class m extends p.BX{fuzzyFilter(r,l,t=0){if(l.isBlank())return r;const o=[];for(const i of r)i.calculateScore(l.text)>t&&o.push(i);return o}}f(m,"ProviderBase")},78584:(y,v,a)=>{a.d(v,{j:()=>m});var p=a(78078);class m extends p.B{constructor(r){super(),this.element=r}get type(){return this.element.type}get modes(){return this.element.modes}get debounce(){return this.element.debounce}get scopeTypes(){return this.element.scopeTypes}get src(){return this.element.src}get hasWildCard(){return this.element.hasWildCard}get hasCommands(){return this.element.hasCommands}fetch(r,l){throw new Error("Method not implemented.")}enabledFor(r){throw new Error("Method not implemented.")}clearCache(){throw new Error("Method not implemented.")}}f(m,"ServerDefinedProvider")},80829:(y,v,a)=>{a.d(v,{A:()=>m});var p=a(47779);class m{constructor(r,l,{scope:t,subjectId:o,subjectType:i,returnTo:c}={}){this.queryText=r,this.queryMode=l,this.scope=t??p.v.emptyScope,this.subjectId=o,this.subjectType=i,this.returnTo=c}get text(){return this.queryText}get mode(){return this.queryMode}get path(){return this.buildPath(this)}buildPath(r,l=r.text){return`scope:${r.scope.type}-${r.scope.id}/mode:${r.mode}/query:${l}`}clearScope(){this.scope=p.v.emptyScope}hasScope(){return this.scope.id!==p.v.emptyScope.id}isBlank(){return this.text.trim().length===0}isPresent(){return!this.isBlank()}immutableCopy(){const r=this.text,l=this.mode,t={...this.scope};return new m(r,l,{scope:t,subjectId:this.subjectId,subjectType:this.subjectType,returnTo:this.returnTo})}hasSameScope(r){return this.scope.id===r.scope.id}params(){const r=new URLSearchParams;return this.isPresent()&&r.set("q",this.text),this.hasScope()&&r.set("scope",this.scope.id),this.mode&&r.set("mode",this.mode),this.returnTo&&r.set("return_to",this.returnTo),this.subjectId&&r.set("subject",this.subjectId),r}}f(m,"Query")},72017:(y,v,a)=>{a.d(v,{j:()=>i});var p=a(81072),m=a(68313),h=a(96753),r=a(98810),l=a(77417),t=a(4220),o=a(30481);function i(n,s){const d=document.querySelector("command-palette");let u="";s&&(s.group==="commands"||s.group==="global_commands")&&(u=s.title);const E={command_palette_session_id:d.sessionId,command_palette_scope:d.query.scope.type,command_palette_mode:d.getMode(),command_palette_title:u,command_palette_position:s?.position,command_palette_score:s?.score,command_palette_group:s?.group,command_palette_item_type:s instanceof t.g?s?.itemType:s?.constructor.name};let O;n==="activate"?O=c(s):O=n,(0,o.q)(`command_palette_${O}`,E)}f(i,"sendTrackingEvent");function c(n){return n instanceof p.i?"access_policy_executed":n instanceof m.d||n instanceof l.U||n instanceof h.Z?"command_executed":n instanceof r.s?n.element?.newTabOpened?"jump_to_new_tab":"jump_to":"activate"}f(c,"activateTrackingEventType")},49815:(y,v,a)=>{a.d(v,{$:()=>t,c:()=>r});var p=a(15205);const m=(0,p.Z)(h);function h(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}f(h,"enabledFeatures");const r=(0,p.Z)(l);function l(o){return m().indexOf(o)!==-1}f(l,"isEnabled");const t={isFeatureEnabled:r}},30481:(y,v,a)=>{a.d(v,{Y:()=>o,q:()=>i});var p=a(88149),m=a(86058);const h="dimension_";let r;const l=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{const c=(0,p.n)("octolytics");delete c.baseContext,r=new m.R(c)}catch{}function t(c){const n=(0,p.n)("octolytics").baseContext||{};if(n){delete n.app_id,delete n.event_url,delete n.host;for(const u in n)u.startsWith(h)&&(n[u.replace(h,"")]=n[u],delete n[u])}const s=document.querySelector("meta[name=visitor-payload]");if(s){const u=JSON.parse(atob(s.content));Object.assign(n,u)}const d=new URLSearchParams(window.location.search);for(const[u,E]of d)l.includes(u.toLowerCase())&&(n[u]=E);return Object.assign(n,c)}f(t,"extendBaseContext");function o(c){r?.sendPageView(t(c))}f(o,"sendPageView");function i(c,n={}){const s=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,d=s?{service:s}:{};for(const[u,E]of Object.entries(n))E!=null&&(d[u]=`${E}`);r?.sendEvent(c||"unknown",t(d))}f(i,"sendEvent")},88513:(y,v,a)=>{a.d(v,{Q:()=>p,v:()=>m});function p(h,r={}){if(h.match(/^https?:/))throw new Error("Can not make cross-origin requests from verifiedFetch");const l={...r.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(h,{...r,headers:l})}f(p,"verifiedFetch");function m(h,r){const t={...r?.headers??{},Accept:"application/json","Content-Type":"application/json"},o=r?.body?JSON.stringify(r.body):void 0;return p(h,{...r,body:o,headers:t})}f(m,"verifiedFetchJSON")}}]);})();

//# sourceMappingURL=app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-7e29fd-0d02c95e950c.js.map