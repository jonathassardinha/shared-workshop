(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/renameWidget.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "CONTEXT_RENAME_INPUT_FOCUSED": ()=>CONTEXT_RENAME_INPUT_FOCUSED,
    "CONTEXT_RENAME_INPUT_VISIBLE": ()=>CONTEXT_RENAME_INPUT_VISIBLE,
    "RenameWidget": ()=>RenameWidget
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegate2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabels.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/codicons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$stopwatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/stopwatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$config$2f$domFontInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/config/domFontInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/languages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$log$2f$common$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/log/common/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/theme/browser/defaultStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/theme/common/colors/editorColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$inputColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/theme/common/colors/inputColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$quickpickColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/theme/common/colors/quickpickColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/** for debugging */ const _sticky = false;
const CONTEXT_RENAME_INPUT_VISIBLE = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('renameInputVisible', false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('renameInputVisible', "Whether the rename input widget is visible"));
const CONTEXT_RENAME_INPUT_FOCUSED = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawContextKey"]('renameInputFocused', false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('renameInputFocused', "Whether the rename input widget is focused"));
let RenameWidget = class RenameWidget {
    dispose() {
        this._disposables.dispose();
        this._editor.removeContentWidget(this);
    }
    getId() {
        return '__renameInputWidget';
    }
    getDomNode() {
        if (!this._domNode) {
            this._domNode = document.createElement('div');
            this._domNode.className = 'monaco-editor rename-box';
            this._domNode.appendChild(this._inputWithButton.domNode);
            this._renameCandidateListView = this._disposables.add(new RenameCandidateListView(this._domNode, {
                fontInfo: this._editor.getOption(50 /* EditorOption.fontInfo */ ),
                onFocusChange: (newSymbolName)=>{
                    this._inputWithButton.input.value = newSymbolName;
                    this._isEditingRenameCandidate = false; // @ulugbekna: reset
                },
                onSelectionChange: ()=>{
                    this._isEditingRenameCandidate = false; // @ulugbekna: because user picked a rename suggestion
                    this.acceptInput(false); // we don't allow preview with mouse click for now
                }
            }));
            this._disposables.add(this._inputWithButton.onDidInputChange(()=>{
                var _this__renameCandidateListView, _this__renameCandidateProvidersCts, _this__renameCandidateListView1;
                if (((_this__renameCandidateListView = this._renameCandidateListView) === null || _this__renameCandidateListView === void 0 ? void 0 : _this__renameCandidateListView.focusedCandidate) !== undefined) {
                    this._isEditingRenameCandidate = true;
                }
                var _this__timeBeforeFirstInputFieldEdit;
                (_this__timeBeforeFirstInputFieldEdit = this._timeBeforeFirstInputFieldEdit) !== null && _this__timeBeforeFirstInputFieldEdit !== void 0 ? _this__timeBeforeFirstInputFieldEdit : this._timeBeforeFirstInputFieldEdit = this._beforeFirstInputFieldEditSW.elapsed();
                if (((_this__renameCandidateProvidersCts = this._renameCandidateProvidersCts) === null || _this__renameCandidateProvidersCts === void 0 ? void 0 : _this__renameCandidateProvidersCts.token.isCancellationRequested) === false) {
                    this._renameCandidateProvidersCts.cancel();
                }
                (_this__renameCandidateListView1 = this._renameCandidateListView) === null || _this__renameCandidateListView1 === void 0 ? void 0 : _this__renameCandidateListView1.clearFocus();
            }));
            this._label = document.createElement('div');
            this._label.className = 'rename-label';
            this._domNode.appendChild(this._label);
            this._updateFont();
            this._updateStyles(this._themeService.getColorTheme());
        }
        return this._domNode;
    }
    _updateStyles(theme) {
        if (!this._domNode) {
            return;
        }
        const widgetShadowColor = theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["widgetShadow"]);
        const widgetBorderColor = theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["widgetBorder"]);
        var _theme_getColor;
        this._domNode.style.backgroundColor = String((_theme_getColor = theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editorWidgetBackground"])) !== null && _theme_getColor !== void 0 ? _theme_getColor : '');
        this._domNode.style.boxShadow = widgetShadowColor ? " 0 0 8px 2px ".concat(widgetShadowColor) : '';
        this._domNode.style.border = widgetBorderColor ? "1px solid ".concat(widgetBorderColor) : '';
        var _theme_getColor1;
        this._domNode.style.color = String((_theme_getColor1 = theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$inputColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputForeground"])) !== null && _theme_getColor1 !== void 0 ? _theme_getColor1 : '');
        const border = theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$inputColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBorder"]);
        var _theme_getColor2;
        this._inputWithButton.domNode.style.backgroundColor = String((_theme_getColor2 = theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$inputColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBackground"])) !== null && _theme_getColor2 !== void 0 ? _theme_getColor2 : '');
        var _theme_getColor3;
        this._inputWithButton.input.style.backgroundColor = String((_theme_getColor3 = theme.getColor(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$inputColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBackground"])) !== null && _theme_getColor3 !== void 0 ? _theme_getColor3 : '');
        this._inputWithButton.domNode.style.borderWidth = border ? '1px' : '0px';
        this._inputWithButton.domNode.style.borderStyle = border ? 'solid' : 'none';
        var _border_toString;
        this._inputWithButton.domNode.style.borderColor = (_border_toString = border === null || border === void 0 ? void 0 : border.toString()) !== null && _border_toString !== void 0 ? _border_toString : 'none';
    }
    _updateFont() {
        if (this._domNode === undefined) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(this._label !== undefined, 'RenameWidget#_updateFont: _label must not be undefined given _domNode is defined');
        this._editor.applyFontInfo(this._inputWithButton.input);
        const fontInfo = this._editor.getOption(50 /* EditorOption.fontInfo */ );
        this._label.style.fontSize = "".concat(this._computeLabelFontSize(fontInfo.fontSize), "px");
    }
    _computeLabelFontSize(editorFontSize) {
        return editorFontSize * 0.8;
    }
    getPosition() {
        if (!this._visible) {
            return null;
        }
        if (!this._editor.hasModel() || // @ulugbekna: shouldn't happen
        !this._editor.getDomNode() // @ulugbekna: can happen during tests based on suggestWidget's similar predicate check
        ) {
            return null;
        }
        const bodyBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientArea"](this.getDomNode().ownerDocument.body);
        const editorBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](this._editor.getDomNode());
        const cursorBoxTop = this._getTopForPosition();
        this._nPxAvailableAbove = cursorBoxTop + editorBox.top;
        this._nPxAvailableBelow = bodyBox.height - this._nPxAvailableAbove;
        const lineHeight = this._editor.getOption(67 /* EditorOption.lineHeight */ );
        const { totalHeight: candidateViewHeight } = RenameCandidateView.getLayoutInfo({
            lineHeight
        });
        const positionPreference = this._nPxAvailableBelow > candidateViewHeight * 6 /* approximate # of candidates to fit in (inclusive of rename input box & rename label) */  ? [
            2 /* ContentWidgetPositionPreference.BELOW */ ,
            1 /* ContentWidgetPositionPreference.ABOVE */ 
        ] : [
            1 /* ContentWidgetPositionPreference.ABOVE */ ,
            2 /* ContentWidgetPositionPreference.BELOW */ 
        ];
        return {
            position: this._position,
            preference: positionPreference
        };
    }
    beforeRender() {
        var _this__keybindingService_lookupKeybinding, _this__keybindingService_lookupKeybinding1;
        const [accept, preview] = this._acceptKeybindings;
        this._label.innerText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]({
            key: 'label',
            comment: [
                'placeholders are keybindings, e.g "F2 to Rename, Shift+F2 to Preview"'
            ]
        }, "{0} to Rename, {1} to Preview", (_this__keybindingService_lookupKeybinding = this._keybindingService.lookupKeybinding(accept)) === null || _this__keybindingService_lookupKeybinding === void 0 ? void 0 : _this__keybindingService_lookupKeybinding.getLabel(), (_this__keybindingService_lookupKeybinding1 = this._keybindingService.lookupKeybinding(preview)) === null || _this__keybindingService_lookupKeybinding1 === void 0 ? void 0 : _this__keybindingService_lookupKeybinding1.getLabel());
        this._domNode.style.minWidth = "200px"; // to prevent from widening when candidates come in
        return null;
    }
    afterRender(position) {
        // FIXME@ulugbekna: commenting trace log out until we start unmounting the widget from editor properly - https://github.com/microsoft/vscode/issues/226975
        // this._trace('invoking afterRender, position: ', position ? 'not null' : 'null');
        if (position === null) {
            // cancel rename when input widget isn't rendered anymore
            this.cancelInput(true, 'afterRender (because position is null)');
            return;
        }
        if (!this._editor.hasModel() || // shouldn't happen
        !this._editor.getDomNode() // can happen during tests based on suggestWidget's similar predicate check
        ) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(this._renameCandidateListView);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(this._nPxAvailableAbove !== undefined);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(this._nPxAvailableBelow !== undefined);
        const inputBoxHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalHeight"](this._inputWithButton.domNode);
        const labelHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalHeight"](this._label);
        let totalHeightAvailable;
        if (position === 2 /* ContentWidgetPositionPreference.BELOW */ ) {
            totalHeightAvailable = this._nPxAvailableBelow;
        } else {
            totalHeightAvailable = this._nPxAvailableAbove;
        }
        this._renameCandidateListView.layout({
            height: totalHeightAvailable - labelHeight - inputBoxHeight,
            width: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalWidth"](this._inputWithButton.domNode)
        });
    }
    acceptInput(wantsPreview) {
        var _this__currentAcceptInput, _this;
        this._trace("invoking acceptInput");
        (_this__currentAcceptInput = (_this = this)._currentAcceptInput) === null || _this__currentAcceptInput === void 0 ? void 0 : _this__currentAcceptInput.call(_this, wantsPreview);
    }
    cancelInput(focusEditor, caller) {
        var // this._trace(`invoking cancelInput, caller: ${caller}, _currentCancelInput: ${this._currentAcceptInput ? 'not undefined' : 'undefined'}`);
        _this__currentCancelInput, _this;
        (_this__currentCancelInput = (_this = this)._currentCancelInput) === null || _this__currentCancelInput === void 0 ? void 0 : _this__currentCancelInput.call(_this, focusEditor);
    }
    focusNextRenameSuggestion() {
        var _this__renameCandidateListView;
        if (!((_this__renameCandidateListView = this._renameCandidateListView) === null || _this__renameCandidateListView === void 0 ? void 0 : _this__renameCandidateListView.focusNext())) {
            this._inputWithButton.input.value = this._currentName;
        }
    }
    focusPreviousRenameSuggestion() {
        var _this__renameCandidateListView;
        if (!((_this__renameCandidateListView = this._renameCandidateListView) === null || _this__renameCandidateListView === void 0 ? void 0 : _this__renameCandidateListView.focusPrevious())) {
            this._inputWithButton.input.value = this._currentName;
        }
    }
    /**
     * @param requestRenameCandidates is `undefined` when there are no rename suggestion providers
     */ getInput(where, currentName, supportPreview, requestRenameCandidates, cts) {
        const { start: selectionStart, end: selectionEnd } = this._getSelection(where, currentName);
        this._renameCts = cts;
        const disposeOnDone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._nRenameSuggestionsInvocations = 0;
        this._hadAutomaticRenameSuggestionsInvocation = false;
        if (requestRenameCandidates === undefined) {
            this._inputWithButton.button.style.display = 'none';
        } else {
            this._inputWithButton.button.style.display = 'flex';
            this._requestRenameCandidatesOnce = requestRenameCandidates;
            this._requestRenameCandidates(currentName, false);
            disposeOnDone.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this._inputWithButton.button, 'click', ()=>this._requestRenameCandidates(currentName, true)));
            disposeOnDone.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this._inputWithButton.button, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
                const keyEvent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
                if (keyEvent.equals(3 /* KeyCode.Enter */ ) || keyEvent.equals(10 /* KeyCode.Space */ )) {
                    keyEvent.stopPropagation();
                    keyEvent.preventDefault();
                    this._requestRenameCandidates(currentName, true);
                }
            }));
        }
        this._isEditingRenameCandidate = false;
        this._domNode.classList.toggle('preview', supportPreview);
        this._position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"](where.startLineNumber, where.startColumn);
        this._currentName = currentName;
        this._inputWithButton.input.value = currentName;
        this._inputWithButton.input.setAttribute('selectionStart', selectionStart.toString());
        this._inputWithButton.input.setAttribute('selectionEnd', selectionEnd.toString());
        this._inputWithButton.input.size = Math.max((where.endColumn - where.startColumn) * 1.1, 20); // determines width
        this._beforeFirstInputFieldEditSW.reset();
        disposeOnDone.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            this._renameCts = undefined;
            cts.dispose(true);
        })); // @ulugbekna: this may result in `this.cancelInput` being called twice, but it should be safe since we set it to undefined after 1st call
        disposeOnDone.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            if (this._renameCandidateProvidersCts !== undefined) {
                this._renameCandidateProvidersCts.dispose(true);
                this._renameCandidateProvidersCts = undefined;
            }
        }));
        disposeOnDone.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>this._candidates.clear()));
        const inputResult = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeferredPromise"]();
        inputResult.p.finally(()=>{
            disposeOnDone.dispose();
            this._hide();
        });
        this._currentCancelInput = (focusEditor)=>{
            var // fixme session cleanup
            _this__renameCandidateListView;
            this._trace('invoking _currentCancelInput');
            this._currentAcceptInput = undefined;
            this._currentCancelInput = undefined;
            (_this__renameCandidateListView = this._renameCandidateListView) === null || _this__renameCandidateListView === void 0 ? void 0 : _this__renameCandidateListView.clearCandidates();
            inputResult.complete(focusEditor);
            return true;
        };
        this._currentAcceptInput = (wantsPreview)=>{
            this._trace('invoking _currentAcceptInput');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(this._renameCandidateListView !== undefined);
            const nRenameSuggestions = this._renameCandidateListView.nCandidates;
            let newName;
            let source;
            const focusedCandidate = this._renameCandidateListView.focusedCandidate;
            if (focusedCandidate !== undefined) {
                this._trace('using new name from renameSuggestion');
                newName = focusedCandidate;
                source = {
                    k: 'renameSuggestion'
                };
            } else {
                this._trace('using new name from inputField');
                newName = this._inputWithButton.input.value;
                source = this._isEditingRenameCandidate ? {
                    k: 'userEditedRenameSuggestion'
                } : {
                    k: 'inputField'
                };
            }
            if (newName === currentName || newName.trim().length === 0 /* is just whitespace */ ) {
                this.cancelInput(true, '_currentAcceptInput (because newName === value || newName.trim().length === 0)');
                return;
            }
            this._currentAcceptInput = undefined;
            this._currentCancelInput = undefined;
            this._renameCandidateListView.clearCandidates();
            // fixme session cleanup
            inputResult.complete({
                newName,
                wantsPreview: supportPreview && wantsPreview,
                stats: {
                    source,
                    nRenameSuggestions,
                    timeBeforeFirstInputFieldEdit: this._timeBeforeFirstInputFieldEdit,
                    nRenameSuggestionsInvocations: this._nRenameSuggestionsInvocations,
                    hadAutomaticRenameSuggestionsInvocation: this._hadAutomaticRenameSuggestionsInvocation
                }
            });
        };
        disposeOnDone.add(cts.token.onCancellationRequested(()=>this.cancelInput(true, 'cts.token.onCancellationRequested')));
        if ("TURBOPACK compile-time truthy", 1) {
            disposeOnDone.add(this._editor.onDidBlurEditorWidget(()=>{
                var _this__domNode;
                return this.cancelInput(!((_this__domNode = this._domNode) === null || _this__domNode === void 0 ? void 0 : _this__domNode.ownerDocument.hasFocus()), 'editor.onDidBlurEditorWidget');
            }));
        }
        this._show();
        return inputResult.p;
    }
    _requestRenameCandidates(currentName, isManuallyTriggered) {
        if (this._requestRenameCandidatesOnce === undefined) {
            return;
        }
        if (this._renameCandidateProvidersCts !== undefined) {
            this._renameCandidateProvidersCts.dispose(true);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(this._renameCts);
        if (this._inputWithButton.buttonState !== 'stop') {
            this._renameCandidateProvidersCts = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
            const triggerKind = isManuallyTriggered ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewSymbolNameTriggerKind"].Invoke : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewSymbolNameTriggerKind"].Automatic;
            const candidates = this._requestRenameCandidatesOnce(triggerKind, this._renameCandidateProvidersCts.token);
            if (candidates.length === 0) {
                this._inputWithButton.setSparkleButton();
                return;
            }
            if (!isManuallyTriggered) {
                this._hadAutomaticRenameSuggestionsInvocation = true;
            }
            this._nRenameSuggestionsInvocations += 1;
            this._inputWithButton.setStopButton();
            this._updateRenameCandidates(candidates, currentName, this._renameCts.token);
        }
    }
    /**
     * This allows selecting only part of the symbol name in the input field based on the selection in the editor
     */ _getSelection(where, currentName) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(this._editor.hasModel());
        const selection = this._editor.getSelection();
        let start = 0;
        let end = currentName.length;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isEmpty(selection) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].spansMultipleLines(selection) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].containsRange(where, selection)) {
            start = Math.max(0, selection.startColumn - where.startColumn);
            end = Math.min(where.endColumn, selection.endColumn) - where.startColumn;
        }
        return {
            start,
            end
        };
    }
    _show() {
        this._trace('invoking _show');
        this._editor.revealLineInCenterIfOutsideViewport(this._position.lineNumber, 0 /* ScrollType.Smooth */ );
        this._visible = true;
        this._visibleContextKey.set(true);
        this._editor.layoutContentWidget(this);
        // TODO@ulugbekna: could this be simply run in `afterRender`?
        setTimeout(()=>{
            this._inputWithButton.input.focus();
            this._inputWithButton.input.setSelectionRange(parseInt(this._inputWithButton.input.getAttribute('selectionStart')), parseInt(this._inputWithButton.input.getAttribute('selectionEnd')));
        }, 100);
    }
    async _updateRenameCandidates(candidates, currentName, token) {
        var _this = this;
        const trace = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return _this._trace('_updateRenameCandidates', ...args);
        };
        trace('start');
        const namesListResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raceCancellation"])(Promise.allSettled(candidates), token);
        this._inputWithButton.setSparkleButton();
        if (namesListResults === undefined) {
            trace('returning early - received updateRenameCandidates results - undefined');
            return;
        }
        const newNames = namesListResults.flatMap((namesListResult)=>namesListResult.status === 'fulfilled' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDefined"])(namesListResult.value) ? namesListResult.value : []);
        trace("received updateRenameCandidates results - total (unfiltered) ".concat(newNames.length, " candidates."));
        // deduplicate and filter out the current value
        const distinctNames = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distinct"](newNames, (v)=>v.newSymbolName);
        trace("distinct candidates - ".concat(distinctNames.length, " candidates."));
        const validDistinctNames = distinctNames.filter((param)=>{
            let { newSymbolName } = param;
            return newSymbolName.trim().length > 0 && newSymbolName !== this._inputWithButton.input.value && newSymbolName !== currentName && !this._candidates.has(newSymbolName);
        });
        trace("valid distinct candidates - ".concat(newNames.length, " candidates."));
        validDistinctNames.forEach((n)=>this._candidates.add(n.newSymbolName));
        if (validDistinctNames.length < 1) {
            trace('returning early - no valid distinct candidates');
            return;
        }
        // show the candidates
        trace('setting candidates');
        this._renameCandidateListView.setCandidates(validDistinctNames);
        // ask editor to re-layout given that the widget is now of a different size after rendering rename candidates
        trace('asking editor to re-layout');
        this._editor.layoutContentWidget(this);
    }
    _hide() {
        this._trace('invoked _hide');
        this._visible = false;
        this._visibleContextKey.reset();
        this._editor.layoutContentWidget(this);
    }
    _getTopForPosition() {
        const visibleRanges = this._editor.getVisibleRanges();
        let firstLineInViewport;
        if (visibleRanges.length > 0) {
            firstLineInViewport = visibleRanges[0].startLineNumber;
        } else {
            this._logService.warn('RenameWidget#_getTopForPosition: this should not happen - visibleRanges is empty');
            firstLineInViewport = Math.max(1, this._position.lineNumber - 5); // @ulugbekna: fallback to current line minus 5
        }
        return this._editor.getTopForLineNumber(this._position.lineNumber) - this._editor.getTopForLineNumber(firstLineInViewport);
    }
    _trace() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this._logService.trace('RenameWidget', ...args);
    }
    constructor(_editor, _acceptKeybindings, _themeService, _keybindingService, contextKeyService, _logService){
        this._editor = _editor;
        this._acceptKeybindings = _acceptKeybindings;
        this._themeService = _themeService;
        this._keybindingService = _keybindingService;
        this._logService = _logService;
        // implement IContentWidget
        this.allowEditorOverflow = true;
        this._disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._visibleContextKey = CONTEXT_RENAME_INPUT_VISIBLE.bindTo(contextKeyService);
        this._isEditingRenameCandidate = false;
        this._nRenameSuggestionsInvocations = 0;
        this._hadAutomaticRenameSuggestionsInvocation = false;
        this._candidates = new Set();
        this._beforeFirstInputFieldEditSW = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$stopwatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StopWatch"]();
        this._inputWithButton = new InputWithButton();
        this._disposables.add(this._inputWithButton);
        this._editor.addContentWidget(this);
        this._disposables.add(this._editor.onDidChangeConfiguration((e)=>{
            if (e.hasChanged(50 /* EditorOption.fontInfo */ )) {
                this._updateFont();
            }
        }));
        this._disposables.add(_themeService.onDidColorThemeChange(this._updateStyles, this));
    }
};
RenameWidget = __decorate([
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IThemeService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$log$2f$common$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILogService"])
], RenameWidget);
;
class RenameCandidateListView {
    dispose() {
        this._listWidget.dispose();
        this._disposables.dispose();
    }
    // height - max height allowed by parent element
    layout(param) {
        let { height, width } = param;
        this._availableHeight = height;
        this._minimumWidth = width;
    }
    setCandidates(candidates) {
        // insert candidates into list widget
        this._listWidget.splice(0, 0, candidates);
        // adjust list widget layout
        const height = this._pickListHeight(this._listWidget.length);
        const width = this._pickListWidth(candidates);
        this._listWidget.layout(height, width);
        // adjust list container layout
        this._listContainer.style.height = "".concat(height, "px");
        this._listContainer.style.width = "".concat(width, "px");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["status"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('renameSuggestionsReceivedAria', "Received {0} rename suggestions", candidates.length));
    }
    clearCandidates() {
        this._listContainer.style.height = '0px';
        this._listContainer.style.width = '0px';
        this._listWidget.splice(0, this._listWidget.length, []);
    }
    get nCandidates() {
        return this._listWidget.length;
    }
    get focusedCandidate() {
        if (this._listWidget.length === 0) {
            return;
        }
        const selectedElement = this._listWidget.getSelectedElements()[0];
        if (selectedElement !== undefined) {
            return selectedElement.newSymbolName;
        }
        const focusedElement = this._listWidget.getFocusedElements()[0];
        if (focusedElement !== undefined) {
            return focusedElement.newSymbolName;
        }
        return;
    }
    focusNext() {
        if (this._listWidget.length === 0) {
            return false;
        }
        const focusedIxs = this._listWidget.getFocus();
        if (focusedIxs.length === 0) {
            this._listWidget.focusFirst();
            this._listWidget.reveal(0);
            return true;
        } else {
            if (focusedIxs[0] === this._listWidget.length - 1) {
                this._listWidget.setFocus([]);
                this._listWidget.reveal(0); // @ulugbekna: without this, it seems like focused element is obstructed
                return false;
            } else {
                this._listWidget.focusNext();
                const focused = this._listWidget.getFocus()[0];
                this._listWidget.reveal(focused);
                return true;
            }
        }
    }
    /**
     * @returns true if focus is moved to previous element
     */ focusPrevious() {
        if (this._listWidget.length === 0) {
            return false;
        }
        const focusedIxs = this._listWidget.getFocus();
        if (focusedIxs.length === 0) {
            this._listWidget.focusLast();
            const focused = this._listWidget.getFocus()[0];
            this._listWidget.reveal(focused);
            return true;
        } else {
            if (focusedIxs[0] === 0) {
                this._listWidget.setFocus([]);
                return false;
            } else {
                this._listWidget.focusPrevious();
                const focused = this._listWidget.getFocus()[0];
                this._listWidget.reveal(focused);
                return true;
            }
        }
    }
    clearFocus() {
        this._listWidget.setFocus([]);
    }
    get _candidateViewHeight() {
        const { totalHeight } = RenameCandidateView.getLayoutInfo({
            lineHeight: this._lineHeight
        });
        return totalHeight;
    }
    _pickListHeight(nCandidates) {
        const heightToFitAllCandidates = this._candidateViewHeight * nCandidates;
        const MAX_N_CANDIDATES = 7; // @ulugbekna: max # of candidates we want to show at once
        const height = Math.min(heightToFitAllCandidates, this._availableHeight, this._candidateViewHeight * MAX_N_CANDIDATES);
        return height;
    }
    _pickListWidth(candidates) {
        const longestCandidateWidth = Math.ceil(Math.max(...candidates.map((c)=>c.newSymbolName.length)) * this._typicalHalfwidthCharacterWidth);
        const width = Math.max(this._minimumWidth, 4 /* padding */  + 16 /* sparkle icon */  + 5 /* margin-left */  + longestCandidateWidth + 10 /* (possibly visible) scrollbar width */  // TODO@ulugbekna: approximate calc - clean this up
        );
        return width;
    }
    static _createListWidget(container, candidateViewHeight, fontInfo) {
        const virtualDelegate = new class {
            getTemplateId(element) {
                return 'candidate';
            }
            getHeight(element) {
                return candidateViewHeight;
            }
        };
        const renderer = new class {
            renderTemplate(container) {
                return new RenameCandidateView(container, fontInfo);
            }
            renderElement(candidate, index, templateData) {
                templateData.populate(candidate);
            }
            disposeTemplate(templateData) {
                templateData.dispose();
            }
            constructor(){
                this.templateId = 'candidate';
            }
        };
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"]('NewSymbolNameCandidates', container, virtualDelegate, [
            renderer
        ], {
            keyboardSupport: false,
            mouseSupport: true,
            multipleSelectionSupport: false
        });
    }
    // FIXME@ulugbekna: rewrite using event emitters
    constructor(parent, opts){
        this._disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._availableHeight = 0;
        this._minimumWidth = 0;
        this._lineHeight = opts.fontInfo.lineHeight;
        this._typicalHalfwidthCharacterWidth = opts.fontInfo.typicalHalfwidthCharacterWidth;
        this._listContainer = document.createElement('div');
        this._listContainer.className = 'rename-box rename-candidate-list-container';
        parent.appendChild(this._listContainer);
        this._listWidget = RenameCandidateListView._createListWidget(this._listContainer, this._candidateViewHeight, opts.fontInfo);
        this._listWidget.onDidChangeFocus((e)=>{
            if (e.elements.length === 1) {
                opts.onFocusChange(e.elements[0].newSymbolName);
            }
        }, this._disposables);
        this._listWidget.onDidChangeSelection((e)=>{
            if (e.elements.length === 1) {
                opts.onSelectionChange();
            }
        }, this._disposables);
        this._disposables.add(this._listWidget.onDidBlur((e)=>{
            this._listWidget.setFocus([]);
        }));
        this._listWidget.style((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$browser$2f$defaultStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getListStyles"])({
            listInactiveFocusForeground: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$quickpickColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quickInputListFocusForeground"],
            listInactiveFocusBackground: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$quickpickColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quickInputListFocusBackground"]
        }));
    }
}
class InputWithButton {
    get domNode() {
        if (!this._domNode) {
            this._domNode = document.createElement('div');
            this._domNode.className = 'rename-input-with-button';
            this._domNode.style.display = 'flex';
            this._domNode.style.flexDirection = 'row';
            this._domNode.style.alignItems = 'center';
            this._inputNode = document.createElement('input');
            this._inputNode.className = 'rename-input';
            this._inputNode.type = 'text';
            this._inputNode.style.border = 'none';
            this._inputNode.setAttribute('aria-label', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('renameAriaLabel', "Rename input. Type new name and press Enter to commit."));
            this._domNode.appendChild(this._inputNode);
            this._buttonNode = document.createElement('div');
            this._buttonNode.className = 'rename-suggestions-button';
            this._buttonNode.setAttribute('tabindex', '0');
            this._buttonGenHoverText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('generateRenameSuggestionsButton', "Generate new name suggestions");
            this._buttonCancelHoverText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('cancelRenameSuggestionsButton', "Cancel");
            this._buttonHover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLayerHoverDelegate"])().setupManagedHover((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('element'), this._buttonNode, this._buttonGenHoverText);
            this._disposables.add(this._buttonHover);
            this._domNode.appendChild(this._buttonNode);
            // notify if selection changes to cancel request to rename-suggestion providers
            this._disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.input, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].INPUT, ()=>this._onDidInputChange.fire()));
            this._disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.input, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
                const keyEvent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
                if (keyEvent.keyCode === 15 /* KeyCode.LeftArrow */  || keyEvent.keyCode === 17 /* KeyCode.RightArrow */ ) {
                    this._onDidInputChange.fire();
                }
            }));
            this._disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.input, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].CLICK, ()=>this._onDidInputChange.fire()));
            // focus "container" border instead of input box
            this._disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.input, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].FOCUS, ()=>{
                this.domNode.style.outlineWidth = '1px';
                this.domNode.style.outlineStyle = 'solid';
                this.domNode.style.outlineOffset = '-1px';
                this.domNode.style.outlineColor = 'var(--vscode-focusBorder)';
            }));
            this._disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.input, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].BLUR, ()=>{
                this.domNode.style.outline = 'none';
            }));
        }
        return this._domNode;
    }
    get input() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(this._inputNode);
        return this._inputNode;
    }
    get button() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(this._buttonNode);
        return this._buttonNode;
    }
    get buttonState() {
        return this._buttonState;
    }
    setSparkleButton() {
        var _this__buttonHover;
        this._buttonState = 'sparkle';
        var _this__sparkleIcon;
        (_this__sparkleIcon = this._sparkleIcon) !== null && _this__sparkleIcon !== void 0 ? _this__sparkleIcon : this._sparkleIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderIcon"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].sparkle);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNode"](this.button);
        this.button.appendChild(this._sparkleIcon);
        this.button.setAttribute('aria-label', 'Generating new name suggestions');
        (_this__buttonHover = this._buttonHover) === null || _this__buttonHover === void 0 ? void 0 : _this__buttonHover.update(this._buttonGenHoverText);
        this.input.focus();
    }
    setStopButton() {
        var _this__buttonHover;
        this._buttonState = 'stop';
        var _this__stopIcon;
        (_this__stopIcon = this._stopIcon) !== null && _this__stopIcon !== void 0 ? _this__stopIcon : this._stopIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderIcon"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].primitiveSquare);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNode"](this.button);
        this.button.appendChild(this._stopIcon);
        this.button.setAttribute('aria-label', 'Cancel generating new name suggestions');
        (_this__buttonHover = this._buttonHover) === null || _this__buttonHover === void 0 ? void 0 : _this__buttonHover.update(this._buttonCancelHoverText);
        this.input.focus();
    }
    dispose() {
        this._disposables.dispose();
    }
    constructor(){
        this._onDidInputChange = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onDidInputChange = this._onDidInputChange.event;
        this._disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    }
}
class RenameCandidateView {
    populate(value) {
        this._updateIcon(value);
        this._updateLabel(value);
    }
    _updateIcon(value) {
        var _value_tags;
        const isAIGenerated = !!((_value_tags = value.tags) === null || _value_tags === void 0 ? void 0 : _value_tags.includes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewSymbolNameTag"].AIGenerated));
        this._icon.style.display = isAIGenerated ? 'inherit' : 'none';
    }
    _updateLabel(value) {
        this._label.innerText = value.newSymbolName;
    }
    static getLayoutInfo(param) {
        let { lineHeight } = param;
        const totalHeight = lineHeight + RenameCandidateView._PADDING * 2 /* top & bottom padding */ ;
        return {
            totalHeight
        };
    }
    dispose() {}
    constructor(parent, fontInfo){
        this._domNode = document.createElement('div');
        this._domNode.className = 'rename-box rename-candidate';
        this._domNode.style.display = "flex";
        this._domNode.style.columnGap = "5px";
        this._domNode.style.alignItems = "center";
        this._domNode.style.height = "".concat(fontInfo.lineHeight, "px");
        this._domNode.style.padding = "".concat(RenameCandidateView._PADDING, "px");
        // @ulugbekna: needed to keep space when the `icon.style.display` is set to `none`
        const iconContainer = document.createElement('div');
        iconContainer.style.display = "flex";
        iconContainer.style.alignItems = "center";
        iconContainer.style.width = iconContainer.style.height = "".concat(fontInfo.lineHeight * 0.8, "px");
        this._domNode.appendChild(iconContainer);
        this._icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderIcon"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].sparkle);
        this._icon.style.display = "none";
        iconContainer.appendChild(this._icon);
        this._label = document.createElement('div');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$config$2f$domFontInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyFontInfo"](this._label, fontInfo);
        this._domNode.appendChild(this._label);
        parent.appendChild(this._domNode);
    }
}
RenameCandidateView._PADDING = 2;
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/rename.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "RenameAction": ()=>RenameAction,
    "rename": ()=>rename
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$bulkEditService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/services/bulkEditService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/languages.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$textResourceConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/services/textResourceConfiguration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$editorState$2f$browser$2f$editorState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/editorState/browser/editorState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$message$2f$browser$2f$messageController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/message/browser/messageController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$log$2f$common$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/log/common/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$progress$2f$common$2f$progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/progress/common/progress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$rename$2f$browser$2f$renameWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/renameWidget.js [app-client] (ecmascript)");
var _RenameController;
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
var RenameController_1;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class RenameSkeleton {
    hasProvider() {
        return this._providers.length > 0;
    }
    async resolveRenameLocation(token) {
        const rejects = [];
        for(this._providerRenameIdx = 0; this._providerRenameIdx < this._providers.length; this._providerRenameIdx++){
            const provider = this._providers[this._providerRenameIdx];
            if (!provider.resolveRenameLocation) {
                break;
            }
            const res = await provider.resolveRenameLocation(this.model, this.position, token);
            if (!res) {
                continue;
            }
            if (res.rejectReason) {
                rejects.push(res.rejectReason);
                continue;
            }
            return res;
        }
        // we are here when no provider prepared a location which means we can
        // just rely on the word under cursor and start with the first provider
        this._providerRenameIdx = 0;
        const word = this.model.getWordAtPosition(this.position);
        if (!word) {
            return {
                range: Range.fromPositions(this.position),
                text: '',
                rejectReason: rejects.length > 0 ? rejects.join('\n') : undefined
            };
        }
        return {
            range: new Range(this.position.lineNumber, word.startColumn, this.position.lineNumber, word.endColumn),
            text: word.word,
            rejectReason: rejects.length > 0 ? rejects.join('\n') : undefined
        };
    }
    async provideRenameEdits(newName, token) {
        return this._provideRenameEdits(newName, this._providerRenameIdx, [], token);
    }
    async _provideRenameEdits(newName, i, rejects, token) {
        const provider = this._providers[i];
        if (!provider) {
            return {
                edits: [],
                rejectReason: rejects.join('\n')
            };
        }
        const result = await provider.provideRenameEdits(this.model, this.position, newName, token);
        if (!result) {
            return this._provideRenameEdits(newName, i + 1, rejects.concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('no result', "No result.")), token);
        } else if (result.rejectReason) {
            return this._provideRenameEdits(newName, i + 1, rejects.concat(result.rejectReason), token);
        }
        return result;
    }
    constructor(model, position, registry){
        this.model = model;
        this.position = position;
        this._providerRenameIdx = 0;
        this._providers = registry.ordered(model);
    }
}
async function rename(registry, model, position, newName) {
    const skeleton = new RenameSkeleton(model, position, registry);
    const loc = await skeleton.resolveRenameLocation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    if (loc === null || loc === void 0 ? void 0 : loc.rejectReason) {
        return {
            edits: [],
            rejectReason: loc.rejectReason
        };
    }
    return skeleton.provideRenameEdits(newName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
}
// ---  register actions and commands
let RenameController = (_RenameController = class RenameController {
    static get(editor) {
        return editor.getContribution(RenameController_1.ID);
    }
    dispose() {
        this._disposableStore.dispose();
        this._cts.dispose(true);
    }
    async run() {
        const trace = this._logService.trace.bind(this._logService, '[rename]');
        // set up cancellation token to prevent reentrant rename, this
        // is the parent to the resolve- and rename-tokens
        this._cts.dispose(true);
        this._cts = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
        if (!this.editor.hasModel()) {
            trace('editor has no model');
            return undefined;
        }
        const position = this.editor.getPosition();
        const skeleton = new RenameSkeleton(this.editor.getModel(), position, this._languageFeaturesService.renameProvider);
        if (!skeleton.hasProvider()) {
            trace('skeleton has no provider');
            return undefined;
        }
        // part 1 - resolve rename location
        const cts1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$editorState$2f$browser$2f$editorState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorStateCancellationTokenSource"](this.editor, 4 /* CodeEditorStateFlag.Position */  | 1 /* CodeEditorStateFlag.Value */ , undefined, this._cts.token);
        let loc;
        try {
            trace('resolving rename location');
            const resolveLocationOperation = skeleton.resolveRenameLocation(cts1.token);
            this._progressService.showWhile(resolveLocationOperation, 250);
            loc = await resolveLocationOperation;
            trace('resolved rename location');
        } catch (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationError"]) {
                trace('resolve rename location cancelled', JSON.stringify(e, null, '\t'));
            } else {
                trace('resolve rename location failed', e instanceof Error ? e : JSON.stringify(e, null, '\t'));
                if (typeof e === 'string' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMarkdownString"])(e)) {
                    var _MessageController_get;
                    (_MessageController_get = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$message$2f$browser$2f$messageController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageController"].get(this.editor)) === null || _MessageController_get === void 0 ? void 0 : _MessageController_get.showMessage(e || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('resolveRenameLocationFailed', "An unknown error occurred while resolving rename location"), position);
                }
            }
            return undefined;
        } finally{
            cts1.dispose();
        }
        if (!loc) {
            trace('returning early - no loc');
            return undefined;
        }
        if (loc.rejectReason) {
            var _MessageController_get1;
            trace("returning early - rejected with reason: ".concat(loc.rejectReason), loc.rejectReason);
            (_MessageController_get1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$message$2f$browser$2f$messageController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageController"].get(this.editor)) === null || _MessageController_get1 === void 0 ? void 0 : _MessageController_get1.showMessage(loc.rejectReason, position);
            return undefined;
        }
        if (cts1.token.isCancellationRequested) {
            trace('returning early - cts1 cancelled');
            return undefined;
        }
        // part 2 - do rename at location
        const cts2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$editorState$2f$browser$2f$editorState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorStateCancellationTokenSource"](this.editor, 4 /* CodeEditorStateFlag.Position */  | 1 /* CodeEditorStateFlag.Value */ , loc.range, this._cts.token);
        const model = this.editor.getModel(); // @ulugbekna: assumes editor still has a model, otherwise, cts1 should've been cancelled
        const newSymbolNamesProviders = this._languageFeaturesService.newSymbolNamesProvider.all(model);
        const resolvedNewSymbolnamesProviders = await Promise.all(newSymbolNamesProviders.map(async (p)=>{
            var _ref;
            return [
                p,
                (_ref = await p.supportsAutomaticNewSymbolNamesTriggerKind) !== null && _ref !== void 0 ? _ref : false
            ];
        }));
        const requestRenameSuggestions = (triggerKind, cts)=>{
            let providers = resolvedNewSymbolnamesProviders.slice();
            if (triggerKind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewSymbolNameTriggerKind"].Automatic) {
                providers = providers.filter((param)=>{
                    let [_, supportsAutomatic] = param;
                    return supportsAutomatic;
                });
            }
            return providers.map((param)=>{
                let [p] = param;
                return p.provideNewSymbolNames(model, loc.range, triggerKind, cts);
            });
        };
        trace('creating rename input field and awaiting its result');
        const supportPreview = this._bulkEditService.hasPreviewHandler() && this._configService.getValue(this.editor.getModel().uri, 'editor.rename.enablePreview');
        const inputFieldResult = await this._renameWidget.getInput(loc.range, loc.text, supportPreview, newSymbolNamesProviders.length > 0 ? requestRenameSuggestions : undefined, cts2);
        trace('received response from rename input field');
        if (newSymbolNamesProviders.length > 0) {
            this._reportTelemetry(newSymbolNamesProviders.length, model.getLanguageId(), inputFieldResult);
        }
        // no result, only hint to focus the editor or not
        if (typeof inputFieldResult === 'boolean') {
            trace("returning early - rename input field response - ".concat(inputFieldResult));
            if (inputFieldResult) {
                this.editor.focus();
            }
            cts2.dispose();
            return undefined;
        }
        this.editor.focus();
        trace('requesting rename edits');
        const renameOperation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["raceCancellation"])(skeleton.provideRenameEdits(inputFieldResult.newName, cts2.token), cts2.token).then(async (renameResult)=>{
            if (!renameResult) {
                trace('returning early - no rename edits result');
                return;
            }
            if (!this.editor.hasModel()) {
                trace('returning early - no model after rename edits are provided');
                return;
            }
            if (renameResult.rejectReason) {
                trace("returning early - rejected with reason: ".concat(renameResult.rejectReason));
                this._notificationService.info(renameResult.rejectReason);
                return;
            }
            // collapse selection to active end
            this.editor.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].fromPositions(this.editor.getSelection().getPosition()));
            trace('applying edits');
            this._bulkEditService.apply(renameResult, {
                editor: this.editor,
                showPreview: inputFieldResult.wantsPreview,
                label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('label', "Renaming '{0}' to '{1}'", loc === null || loc === void 0 ? void 0 : loc.text, inputFieldResult.newName),
                code: 'undoredo.rename',
                quotableLabel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('quotableLabel', "Renaming {0} to {1}", loc === null || loc === void 0 ? void 0 : loc.text, inputFieldResult.newName),
                respectAutoSaveConfig: true
            }).then((result)=>{
                trace('edits applied');
                if (result.ariaSummary) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alert"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('aria', "Successfully renamed '{0}' to '{1}'. Summary: {2}", loc.text, inputFieldResult.newName, result.ariaSummary));
                }
            }).catch((err)=>{
                trace("error when applying edits ".concat(JSON.stringify(err, null, '\t')));
                this._notificationService.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('rename.failedApply', "Rename failed to apply edits"));
                this._logService.error(err);
            });
        }, (err)=>{
            trace('error when providing rename edits', JSON.stringify(err, null, '\t'));
            this._notificationService.error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('rename.failed', "Rename failed to compute edits"));
            this._logService.error(err);
        }).finally(()=>{
            cts2.dispose();
        });
        trace('returning rename operation');
        this._progressService.showWhile(renameOperation, 250);
        return renameOperation;
    }
    acceptRenameInput(wantsPreview) {
        this._renameWidget.acceptInput(wantsPreview);
    }
    cancelRenameInput() {
        this._renameWidget.cancelInput(true, 'cancelRenameInput command');
    }
    focusNextRenameSuggestion() {
        this._renameWidget.focusNextRenameSuggestion();
    }
    focusPreviousRenameSuggestion() {
        this._renameWidget.focusPreviousRenameSuggestion();
    }
    _reportTelemetry(nRenameSuggestionProviders, languageId, inputFieldResult) {
        const value = typeof inputFieldResult === 'boolean' ? {
            kind: 'cancelled',
            languageId,
            nRenameSuggestionProviders
        } : {
            kind: 'accepted',
            languageId,
            nRenameSuggestionProviders,
            source: inputFieldResult.stats.source.k,
            nRenameSuggestions: inputFieldResult.stats.nRenameSuggestions,
            timeBeforeFirstInputFieldEdit: inputFieldResult.stats.timeBeforeFirstInputFieldEdit,
            wantsPreview: inputFieldResult.wantsPreview,
            nRenameSuggestionsInvocations: inputFieldResult.stats.nRenameSuggestionsInvocations,
            hadAutomaticRenameSuggestionsInvocation: inputFieldResult.stats.hadAutomaticRenameSuggestionsInvocation
        };
        this._telemetryService.publicLog2('renameInvokedEvent', value);
    }
    constructor(editor, _instaService, _notificationService, _bulkEditService, _progressService, _logService, _configService, _languageFeaturesService, _telemetryService){
        this.editor = editor;
        this._instaService = _instaService;
        this._notificationService = _notificationService;
        this._bulkEditService = _bulkEditService;
        this._progressService = _progressService;
        this._logService = _logService;
        this._configService = _configService;
        this._languageFeaturesService = _languageFeaturesService;
        this._telemetryService = _telemetryService;
        this._disposableStore = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._cts = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
        this._renameWidget = this._disposableStore.add(this._instaService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$rename$2f$browser$2f$renameWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenameWidget"], this.editor, [
            'acceptRenameInput',
            'acceptRenameInputWithPreview'
        ]));
    }
}, RenameController_1 = _RenameController, _RenameController.ID = 'editor.contrib.renameController', _RenameController);
RenameController = RenameController_1 = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INotificationService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$bulkEditService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IBulkEditService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$progress$2f$common$2f$progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEditorProgressService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$log$2f$common$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILogService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$textResourceConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITextResourceConfigurationService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ITelemetryService"])
], RenameController);
class RenameAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorAction"] {
    runCommand(accessor, args) {
        const editorService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"]);
        const [uri, pos] = Array.isArray(args) && args || [
            undefined,
            undefined
        ];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URI"].isUri(uri) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].isIPosition(pos)) {
            return editorService.openCodeEditor({
                resource: uri
            }, editorService.getActiveCodeEditor()).then((editor)=>{
                if (!editor) {
                    return;
                }
                editor.setPosition(pos);
                editor.invokeWithinContext((accessor)=>{
                    this.reportTelemetry(accessor, editor);
                    return this.run(accessor, editor);
                });
            }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnexpectedError"]);
        }
        return super.runCommand(accessor, args);
    }
    run(accessor, editor) {
        const logService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$log$2f$common$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILogService"]);
        const controller = RenameController.get(editor);
        if (controller) {
            logService.trace('[RenameAction] got controller, running...');
            return controller.run();
        }
        logService.trace('[RenameAction] returning early - controller missing');
        return Promise.resolve();
    }
    constructor(){
        super({
            id: 'editor.action.rename',
            label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('rename.label', "Rename Symbol"),
            alias: 'Rename Symbol',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasRenameProvider),
            kbOpts: {
                kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus,
                primary: 60 /* KeyCode.F2 */ ,
                weight: 100 /* KeybindingWeight.EditorContrib */ 
            },
            contextMenuOpts: {
                group: '1_modification',
                order: 1.1
            }
        });
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorContribution"])(RenameController.ID, RenameController, 4 /* EditorContributionInstantiation.Lazy */ );
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorAction"])(RenameAction);
const RenameCommand = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorCommand"].bindToContribution(RenameController.get);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new RenameCommand({
    id: 'acceptRenameInput',
    precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$rename$2f$browser$2f$renameWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTEXT_RENAME_INPUT_VISIBLE"],
    handler: (x)=>x.acceptRenameInput(false),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */  + 99,
        kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].focus, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].not('isComposing')),
        primary: 3 /* KeyCode.Enter */ 
    }
}));
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new RenameCommand({
    id: 'acceptRenameInputWithPreview',
    precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$rename$2f$browser$2f$renameWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTEXT_RENAME_INPUT_VISIBLE"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].has('config.editor.rename.enablePreview')),
    handler: (x)=>x.acceptRenameInput(true),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */  + 99,
        kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].focus, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].not('isComposing')),
        primary: 2048 /* KeyMod.CtrlCmd */  + 3 /* KeyCode.Enter */ 
    }
}));
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new RenameCommand({
    id: 'cancelRenameInput',
    precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$rename$2f$browser$2f$renameWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTEXT_RENAME_INPUT_VISIBLE"],
    handler: (x)=>x.cancelRenameInput(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */  + 99,
        kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].focus,
        primary: 9 /* KeyCode.Escape */ ,
        secondary: [
            1024 /* KeyMod.Shift */  | 9 /* KeyCode.Escape */ 
        ]
    }
}));
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])(class FocusNextRenameSuggestion extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action2"] {
    run(accessor) {
        const currentEditor = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"]).getFocusedCodeEditor();
        if (!currentEditor) {
            return;
        }
        const controller = RenameController.get(currentEditor);
        if (!controller) {
            return;
        }
        controller.focusNextRenameSuggestion();
    }
    constructor(){
        super({
            id: 'focusNextRenameSuggestion',
            title: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"]('focusNextRenameSuggestion', "Focus Next Rename Suggestion")
            },
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$rename$2f$browser$2f$renameWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTEXT_RENAME_INPUT_VISIBLE"],
            keybinding: [
                {
                    primary: 18 /* KeyCode.DownArrow */ ,
                    weight: 100 /* KeybindingWeight.EditorContrib */  + 99
                }
            ]
        });
    }
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAction2"])(class FocusPreviousRenameSuggestion extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action2"] {
    run(accessor) {
        const currentEditor = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"]).getFocusedCodeEditor();
        if (!currentEditor) {
            return;
        }
        const controller = RenameController.get(currentEditor);
        if (!controller) {
            return;
        }
        controller.focusPreviousRenameSuggestion();
    }
    constructor(){
        super({
            id: 'focusPreviousRenameSuggestion',
            title: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize2"]('focusPreviousRenameSuggestion', "Focus Previous Rename Suggestion")
            },
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$rename$2f$browser$2f$renameWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTEXT_RENAME_INPUT_VISIBLE"],
            keybinding: [
                {
                    primary: 16 /* KeyCode.UpArrow */ ,
                    weight: 100 /* KeybindingWeight.EditorContrib */  + 99
                }
            ]
        });
    }
});
// ---- api bridge command
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executeDocumentRenameProvider', function(accessor, model, position) {
    for(var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        args[_key - 3] = arguments[_key];
    }
    const [newName] = args;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"])(typeof newName === 'string');
    const { renameProvider } = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    return rename(renameProvider, model, position, newName);
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerModelAndPositionCommand"])('_executePrepareRename', async function(accessor, model, position) {
    const { renameProvider } = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    const skeleton = new RenameSkeleton(model, position, renameProvider);
    const loc = await skeleton.resolveRenameLocation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    if (loc === null || loc === void 0 ? void 0 : loc.rejectReason) {
        throw new Error(loc.rejectReason);
    }
    return loc;
});
//todo@jrieken use editor options world
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$registry$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Registry"].as(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configurationRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extensions"].Configuration).registerConfiguration({
    id: 'editor',
    properties: {
        'editor.rename.enablePreview': {
            scope: 5 /* ConfigurationScope.LANGUAGE_OVERRIDABLE */ ,
            description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('enablePreview', "Enable/disable the ability to preview changes before renaming"),
            default: true,
            type: 'boolean'
        }
    }
});
}),
}]);

//# sourceMappingURL=afade_monaco-editor_esm_vs_editor_contrib_rename_browser_c8514f66._.js.map