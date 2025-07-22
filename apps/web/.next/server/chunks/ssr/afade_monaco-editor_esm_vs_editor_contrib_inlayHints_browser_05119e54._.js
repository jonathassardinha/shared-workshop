module.exports = {

"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "InlayHintAnchor": ()=>InlayHintAnchor,
    "InlayHintItem": ()=>InlayHintItem,
    "InlayHintsFragments": ()=>InlayHintsFragments,
    "asCommandLink": ()=>asCommandLink
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/network.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class InlayHintAnchor {
    constructor(range, direction){
        this.range = range;
        this.direction = direction;
    }
}
class InlayHintItem {
    constructor(hint, anchor, provider){
        this.hint = hint;
        this.anchor = anchor;
        this.provider = provider;
        this._isResolved = false;
    }
    with(delta) {
        const result = new InlayHintItem(this.hint, delta.anchor, this.provider);
        result._isResolved = this._isResolved;
        result._currentResolve = this._currentResolve;
        return result;
    }
    async resolve(token) {
        if (typeof this.provider.resolveInlayHint !== 'function') {
            return;
        }
        if (this._currentResolve) {
            // wait for an active resolve operation and try again
            // when that's done.
            await this._currentResolve;
            if (token.isCancellationRequested) {
                return;
            }
            return this.resolve(token);
        }
        if (!this._isResolved) {
            this._currentResolve = this._doResolve(token).finally(()=>this._currentResolve = undefined);
        }
        await this._currentResolve;
    }
    async _doResolve(token) {
        try {
            const newHint = await Promise.resolve(this.provider.resolveInlayHint(this.hint, token));
            this.hint.tooltip = newHint?.tooltip ?? this.hint.tooltip;
            this.hint.label = newHint?.label ?? this.hint.label;
            this.hint.textEdits = newHint?.textEdits ?? this.hint.textEdits;
            this._isResolved = true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onUnexpectedExternalError"])(err);
            this._isResolved = false;
        }
    }
}
class InlayHintsFragments {
    static{
        this._emptyInlayHintList = Object.freeze({
            dispose () {},
            hints: []
        });
    }
    static async create(registry, model, ranges, token) {
        const data = [];
        const promises = registry.ordered(model).reverse().map((provider)=>ranges.map(async (range)=>{
                try {
                    const result = await provider.provideInlayHints(model, range, token);
                    if (result?.hints.length || provider.onDidChangeInlayHints) {
                        data.push([
                            result ?? InlayHintsFragments._emptyInlayHintList,
                            provider
                        ]);
                    }
                } catch (err) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onUnexpectedExternalError"])(err);
                }
            }));
        await Promise.all(promises.flat());
        if (token.isCancellationRequested || model.isDisposed()) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancellationError"]();
        }
        return new InlayHintsFragments(ranges, data, model);
    }
    constructor(ranges, data, model){
        this._disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this.ranges = ranges;
        this.provider = new Set();
        const items = [];
        for (const [list, provider] of data){
            this._disposables.add(list);
            this.provider.add(provider);
            for (const hint of list.hints){
                // compute the range to which the item should be attached to
                const position = model.validatePosition(hint.position);
                let direction = 'before';
                const wordRange = InlayHintsFragments._getRangeAtPosition(model, position);
                let range;
                if (wordRange.getStartPosition().isBefore(position)) {
                    range = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(wordRange.getStartPosition(), position);
                    direction = 'after';
                } else {
                    range = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(position, wordRange.getEndPosition());
                    direction = 'before';
                }
                items.push(new InlayHintItem(hint, new InlayHintAnchor(range, direction), provider));
            }
        }
        this.items = items.sort((a, b)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].compare(a.hint.position, b.hint.position));
    }
    dispose() {
        this._disposables.dispose();
    }
    static _getRangeAtPosition(model, position) {
        const line = position.lineNumber;
        const word = model.getWordAtPosition(position);
        if (word) {
            // always prefer the word range
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](line, word.startColumn, line, word.endColumn);
        }
        model.tokenization.tokenizeIfCheap(line);
        const tokens = model.tokenization.getLineTokens(line);
        const offset = position.column - 1;
        const idx = tokens.findTokenIndexAtOffset(offset);
        let start = tokens.getStartOffset(idx);
        let end = tokens.getEndOffset(idx);
        if (end - start === 1) {
            // single character token, when at its end try leading/trailing token instead
            if (start === offset && idx > 1) {
                // leading token
                start = tokens.getStartOffset(idx - 1);
                end = tokens.getEndOffset(idx - 1);
            } else if (end === offset && idx < tokens.getCount() - 1) {
                // trailing token
                start = tokens.getStartOffset(idx + 1);
                end = tokens.getEndOffset(idx + 1);
            }
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](line, start + 1, line, end + 1);
    }
}
function asCommandLink(command) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URI"].from({
        scheme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Schemas"].command,
        path: command.id,
        query: command.arguments && encodeURIComponent(JSON.stringify(command.arguments))
    }).toString();
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsLocations.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "goToDefinitionWithLocation": ()=>goToDefinitionWithLocation,
    "showGoToContextMenu": ()=>showGoToContextMenu
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/uuid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToCommands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToCommands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/peekView/browser/peekView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js [app-ssr] (ecmascript)");
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
async function showGoToContextMenu(accessor, editor, anchor, part) {
    const resolverService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ITextModelService"]);
    const contextMenuService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IContextMenuService"]);
    const commandService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICommandService"]);
    const instaService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IInstantiationService"]);
    const notificationService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INotificationService"]);
    await part.item.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancellationToken"].None);
    if (!part.part.location) {
        return;
    }
    const location = part.part.location;
    const menuActions = [];
    // from all registered (not active) context menu actions select those
    // that are a symbol navigation actions
    const filter = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuRegistry"].getMenuItems(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].EditorContext).map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isIMenuItem"])(item) ? item.command.id : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uuid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUuid"])()));
    for (const delegate of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToCommands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SymbolNavigationAction"].all()){
        if (filter.has(delegate.desc.id)) {
            menuActions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"](delegate.desc.id, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuItemAction"].label(delegate.desc, {
                renderShortTitle: true
            }), undefined, true, async ()=>{
                const ref = await resolverService.createModelReference(location.uri);
                try {
                    const symbolAnchor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToCommands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SymbolNavigationAnchor"](ref.object.textEditorModel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].getStartPosition(location.range));
                    const range = part.item.anchor.range;
                    await instaService.invokeFunction(delegate.runEditorCommand.bind(delegate), editor, symbolAnchor, range);
                } finally{
                    ref.dispose();
                }
            }));
        }
    }
    if (part.part.command) {
        const { command } = part.part;
        menuActions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"]());
        menuActions.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"](command.id, command.title, undefined, true, async ()=>{
            try {
                await commandService.executeCommand(command.id, ...command.arguments ?? []);
            } catch (err) {
                notificationService.notify({
                    severity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Severity"].Error,
                    source: part.item.provider.displayName,
                    message: err
                });
            }
        }));
    }
    // show context menu
    const useShadowDOM = editor.getOption(128 /* EditorOption.useShadowDOM */ );
    contextMenuService.showContextMenu({
        domForShadowRoot: useShadowDOM ? editor.getDomNode() ?? undefined : undefined,
        getAnchor: ()=>{
            const box = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](anchor);
            return {
                x: box.left,
                y: box.top + box.height + 8
            };
        },
        getActions: ()=>menuActions,
        onHide: ()=>{
            editor.focus();
        },
        autoSelectFirstItem: true
    });
}
async function goToDefinitionWithLocation(accessor, event, editor, location) {
    const resolverService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ITextModelService"]);
    const ref = await resolverService.createModelReference(location.uri);
    await editor.invokeWithinContext(async (accessor)=>{
        const openToSide = event.hasSideBySideModifier;
        const contextKeyService = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IContextKeyService"]);
        const isInPeek = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$peekView$2f$browser$2f$peekView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PeekContext"].inPeekEditor.getValue(contextKeyService);
        const canPeek = !openToSide && editor.getOption(89 /* EditorOption.definitionLinkOpensInPeek */ ) && !isInPeek;
        const action = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToCommands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefinitionAction"]({
            openToSide,
            openInPeek: canPeek,
            muteMessage: true
        }, {
            title: {
                value: '',
                original: ''
            },
            id: '',
            precondition: undefined
        });
        return action.run(accessor, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$goToCommands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SymbolNavigationAnchor"](ref.object.textEditorModel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].getStartPosition(location.range)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].lift(location.range));
    });
    ref.dispose();
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsController.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "InlayHintsController": ()=>InlayHintsController,
    "RenderedInlayHintLabelPart": ()=>RenderedInlayHintLabelPart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/async.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/map.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/editorDom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$stableEditorScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/stableEditorScroll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$config$2f$editorOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/editOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/languages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatureDebounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$link$2f$clickLinkGesture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/clickLinkGesture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsLocations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsLocations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colorRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/theme/common/colors/editorColors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js [app-ssr] (ecmascript)");
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
var InlayHintsController_1;
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
// --- hint caching service (per session)
class InlayHintsCache {
    constructor(){
        this._entries = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LRUCache"](50);
    }
    get(model) {
        const key = InlayHintsCache._key(model);
        return this._entries.get(key);
    }
    set(model, value) {
        const key = InlayHintsCache._key(model);
        this._entries.set(key, value);
    }
    static _key(model) {
        return `${model.uri.toString()}/${model.getVersionId()}`;
    }
}
const IInlayHintsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecorator"])('IInlayHintsCache');
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$extensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerSingleton"])(IInlayHintsCache, InlayHintsCache, 1 /* InstantiationType.Delayed */ );
class RenderedInlayHintLabelPart {
    constructor(item, index){
        this.item = item;
        this.index = index;
    }
    get part() {
        const label = this.item.hint.label;
        if (typeof label === 'string') {
            return {
                label
            };
        } else {
            return label[this.index];
        }
    }
}
class ActiveInlayHintInfo {
    constructor(part, hasTriggerModifier){
        this.part = part;
        this.hasTriggerModifier = hasTriggerModifier;
    }
}
// --- controller
let InlayHintsController = class InlayHintsController {
    static{
        InlayHintsController_1 = this;
    }
    static{
        this.ID = 'editor.contrib.InlayHints';
    }
    static{
        this._MAX_DECORATORS = 1500;
    }
    static{
        this._MAX_LABEL_LEN = 43;
    }
    static get(editor) {
        return editor.getContribution(InlayHintsController_1.ID) ?? undefined;
    }
    constructor(_editor, _languageFeaturesService, _featureDebounce, _inlayHintsCache, _commandService, _notificationService, _instaService){
        this._editor = _editor;
        this._languageFeaturesService = _languageFeaturesService;
        this._inlayHintsCache = _inlayHintsCache;
        this._commandService = _commandService;
        this._notificationService = _notificationService;
        this._instaService = _instaService;
        this._disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._sessionDisposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._decorationsMetadata = new Map();
        this._ruleFactory = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorDom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicCssRules"](this._editor);
        this._activeRenderMode = 0 /* RenderMode.Normal */ ;
        this._debounceInfo = _featureDebounce.for(_languageFeaturesService.inlayHintsProvider, 'InlayHint', {
            min: 25
        });
        this._disposables.add(_languageFeaturesService.inlayHintsProvider.onDidChange(()=>this._update()));
        this._disposables.add(_editor.onDidChangeModel(()=>this._update()));
        this._disposables.add(_editor.onDidChangeModelLanguage(()=>this._update()));
        this._disposables.add(_editor.onDidChangeConfiguration((e)=>{
            if (e.hasChanged(142 /* EditorOption.inlayHints */ )) {
                this._update();
            }
        }));
        this._update();
    }
    dispose() {
        this._sessionDisposables.dispose();
        this._removeAllDecorations();
        this._disposables.dispose();
    }
    _update() {
        this._sessionDisposables.clear();
        this._removeAllDecorations();
        const options = this._editor.getOption(142 /* EditorOption.inlayHints */ );
        if (options.enabled === 'off') {
            return;
        }
        const model = this._editor.getModel();
        if (!model || !this._languageFeaturesService.inlayHintsProvider.has(model)) {
            return;
        }
        if (options.enabled === 'on') {
            // different "on" modes: always
            this._activeRenderMode = 0 /* RenderMode.Normal */ ;
        } else {
            // different "on" modes: offUnlessPressed, or onUnlessPressed
            let defaultMode;
            let altMode;
            if (options.enabled === 'onUnlessPressed') {
                defaultMode = 0 /* RenderMode.Normal */ ;
                altMode = 1 /* RenderMode.Invisible */ ;
            } else {
                defaultMode = 1 /* RenderMode.Invisible */ ;
                altMode = 0 /* RenderMode.Normal */ ;
            }
            this._activeRenderMode = defaultMode;
            this._sessionDisposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModifierKeyEmitter"].getInstance().event((e)=>{
                if (!this._editor.hasModel()) {
                    return;
                }
                const newRenderMode = e.altKey && e.ctrlKey && !(e.shiftKey || e.metaKey) ? altMode : defaultMode;
                if (newRenderMode !== this._activeRenderMode) {
                    this._activeRenderMode = newRenderMode;
                    const model = this._editor.getModel();
                    const copies = this._copyInlayHintsWithCurrentAnchor(model);
                    this._updateHintsDecorators([
                        model.getFullModelRange()
                    ], copies);
                    scheduler.schedule(0);
                }
            }));
        }
        // iff possible, quickly update from cache
        const cached = this._inlayHintsCache.get(model);
        if (cached) {
            this._updateHintsDecorators([
                model.getFullModelRange()
            ], cached);
        }
        this._sessionDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            // cache items when switching files etc
            if (!model.isDisposed()) {
                this._cacheHintsForFastRestore(model);
            }
        }));
        let cts;
        const watchedProviders = new Set();
        const scheduler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RunOnceScheduler"](async ()=>{
            const t1 = Date.now();
            cts?.dispose(true);
            cts = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
            const listener = model.onWillDispose(()=>cts?.cancel());
            try {
                const myToken = cts.token;
                const inlayHints = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlayHintsFragments"].create(this._languageFeaturesService.inlayHintsProvider, model, this._getHintsRanges(), myToken);
                scheduler.delay = this._debounceInfo.update(model, Date.now() - t1);
                if (myToken.isCancellationRequested) {
                    inlayHints.dispose();
                    return;
                }
                // listen to provider changes
                for (const provider of inlayHints.provider){
                    if (typeof provider.onDidChangeInlayHints === 'function' && !watchedProviders.has(provider)) {
                        watchedProviders.add(provider);
                        this._sessionDisposables.add(provider.onDidChangeInlayHints(()=>{
                            if (!scheduler.isScheduled()) {
                                scheduler.schedule();
                            }
                        }));
                    }
                }
                this._sessionDisposables.add(inlayHints);
                this._updateHintsDecorators(inlayHints.ranges, inlayHints.items);
                this._cacheHintsForFastRestore(model);
            } catch (err) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onUnexpectedError"])(err);
            } finally{
                cts.dispose();
                listener.dispose();
            }
        }, this._debounceInfo.get(model));
        this._sessionDisposables.add(scheduler);
        this._sessionDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDisposable"])(()=>cts?.dispose(true)));
        scheduler.schedule(0);
        this._sessionDisposables.add(this._editor.onDidScrollChange((e)=>{
            // update when scroll position changes
            // uses scrollTopChanged has weak heuristic to differenatiate between scrolling due to
            // typing or due to "actual" scrolling
            if (e.scrollTopChanged || !scheduler.isScheduled()) {
                scheduler.schedule();
            }
        }));
        this._sessionDisposables.add(this._editor.onDidChangeModelContent((e)=>{
            cts?.cancel();
            // update less aggressive when typing
            const delay = Math.max(scheduler.delay, 1250);
            scheduler.schedule(delay);
        }));
        // mouse gestures
        this._sessionDisposables.add(this._installDblClickGesture(()=>scheduler.schedule(0)));
        this._sessionDisposables.add(this._installLinkGesture());
        this._sessionDisposables.add(this._installContextMenu());
    }
    _installLinkGesture() {
        const store = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DisposableStore"]();
        const gesture = store.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$gotoSymbol$2f$browser$2f$link$2f$clickLinkGesture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClickLinkGesture"](this._editor));
        // let removeHighlight = () => { };
        const sessionStore = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DisposableStore"]();
        store.add(sessionStore);
        store.add(gesture.onMouseMoveOrRelevantKeyDown((e)=>{
            const [mouseEvent] = e;
            const labelPart = this._getInlayHintLabelPart(mouseEvent);
            const model = this._editor.getModel();
            if (!labelPart || !model) {
                sessionStore.clear();
                return;
            }
            // resolve the item
            const cts = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
            sessionStore.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDisposable"])(()=>cts.dispose(true)));
            labelPart.item.resolve(cts.token);
            // render link => when the modifier is pressed and when there is a command or location
            this._activeInlayHintPart = labelPart.part.command || labelPart.part.location ? new ActiveInlayHintInfo(labelPart, mouseEvent.hasTriggerModifier) : undefined;
            const lineNumber = model.validatePosition(labelPart.item.hint.position).lineNumber;
            const range = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](lineNumber, 1, lineNumber, model.getLineMaxColumn(lineNumber));
            const lineHints = this._getInlineHintsForRange(range);
            this._updateHintsDecorators([
                range
            ], lineHints);
            sessionStore.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
                this._activeInlayHintPart = undefined;
                this._updateHintsDecorators([
                    range
                ], lineHints);
            }));
        }));
        store.add(gesture.onCancel(()=>sessionStore.clear()));
        store.add(gesture.onExecute(async (e)=>{
            const label = this._getInlayHintLabelPart(e);
            if (label) {
                const part = label.part;
                if (part.location) {
                    // location -> execute go to def
                    this._instaService.invokeFunction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsLocations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["goToDefinitionWithLocation"], e, this._editor, part.location);
                } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].is(part.command)) {
                    // command -> execute it
                    await this._invokeCommand(part.command, label.item);
                }
            }
        }));
        return store;
    }
    _getInlineHintsForRange(range) {
        const lineHints = new Set();
        for (const data of this._decorationsMetadata.values()){
            if (range.containsRange(data.item.anchor.range)) {
                lineHints.add(data.item);
            }
        }
        return Array.from(lineHints);
    }
    _installDblClickGesture(updateInlayHints) {
        return this._editor.onMouseUp(async (e)=>{
            if (e.event.detail !== 2) {
                return;
            }
            const part = this._getInlayHintLabelPart(e);
            if (!part) {
                return;
            }
            e.event.preventDefault();
            await part.item.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancellationToken"].None);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonEmptyArray"])(part.item.hint.textEdits)) {
                const edits = part.item.hint.textEdits.map((edit)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].lift(edit.range), edit.text));
                this._editor.executeEdits('inlayHint.default', edits);
                updateInlayHints();
            }
        });
    }
    _installContextMenu() {
        return this._editor.onContextMenu(async (e)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHTMLElement"])(e.event.target)) {
                return;
            }
            const part = this._getInlayHintLabelPart(e);
            if (part) {
                await this._instaService.invokeFunction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsLocations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showGoToContextMenu"], this._editor, e.event.target, part);
            }
        });
    }
    _getInlayHintLabelPart(e) {
        if (e.target.type !== 6 /* MouseTargetType.CONTENT_TEXT */ ) {
            return undefined;
        }
        const options = e.target.detail.injectedText?.options;
        if (options instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModelDecorationInjectedTextOptions"] && options?.attachedData instanceof RenderedInlayHintLabelPart) {
            return options.attachedData;
        }
        return undefined;
    }
    async _invokeCommand(command, item) {
        try {
            await this._commandService.executeCommand(command.id, ...command.arguments ?? []);
        } catch (err) {
            this._notificationService.notify({
                severity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Severity"].Error,
                source: item.provider.displayName,
                message: err
            });
        }
    }
    _cacheHintsForFastRestore(model) {
        const hints = this._copyInlayHintsWithCurrentAnchor(model);
        this._inlayHintsCache.set(model, hints);
    }
    // return inlay hints but with an anchor that reflects "updates"
    // that happened after receiving them, e.g adding new lines before a hint
    _copyInlayHintsWithCurrentAnchor(model) {
        const items = new Map();
        for (const [id, obj] of this._decorationsMetadata){
            if (items.has(obj.item)) {
                continue;
            }
            const range = model.getDecorationRange(id);
            if (range) {
                // update range with whatever the editor has tweaked it to
                const anchor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlayHintAnchor"](range, obj.item.anchor.direction);
                const copy = obj.item.with({
                    anchor
                });
                items.set(obj.item, copy);
            }
        }
        return Array.from(items.values());
    }
    _getHintsRanges() {
        const extra = 30;
        const model = this._editor.getModel();
        const visibleRanges = this._editor.getVisibleRangesPlusViewportAboveBelow();
        const result = [];
        for (const range of visibleRanges.sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].compareRangesUsingStarts)){
            const extendedRange = model.validateRange(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](range.startLineNumber - extra, range.startColumn, range.endLineNumber + extra, range.endColumn));
            if (result.length === 0 || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].areIntersectingOrTouching(result[result.length - 1], extendedRange)) {
                result.push(extendedRange);
            } else {
                result[result.length - 1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].plusRange(result[result.length - 1], extendedRange);
            }
        }
        return result;
    }
    _updateHintsDecorators(ranges, items) {
        // utils to collect/create injected text decorations
        const newDecorationsData = [];
        const addInjectedText = (item, ref, content, cursorStops, attachedData)=>{
            const opts = {
                content,
                inlineClassNameAffectsLetterSpacing: true,
                inlineClassName: ref.className,
                cursorStops,
                attachedData
            };
            newDecorationsData.push({
                item,
                classNameRef: ref,
                decoration: {
                    range: item.anchor.range,
                    options: {
                        // className: "rangeHighlight", // DEBUG highlight to see to what range a hint is attached
                        description: 'InlayHint',
                        showIfCollapsed: item.anchor.range.isEmpty(),
                        collapseOnReplaceEdit: !item.anchor.range.isEmpty(),
                        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */ ,
                        [item.anchor.direction]: this._activeRenderMode === 0 /* RenderMode.Normal */  ? opts : undefined
                    }
                }
            });
        };
        const addInjectedWhitespace = (item, isLast)=>{
            const marginRule = this._ruleFactory.createClassNameRef({
                width: `${fontSize / 3 | 0}px`,
                display: 'inline-block'
            });
            addInjectedText(item, marginRule, '\u200a', isLast ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedTextCursorStops"].Right : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedTextCursorStops"].None);
        };
        //
        const { fontSize, fontFamily, padding, isUniform } = this._getLayoutInfo();
        const fontFamilyVar = '--code-editorInlayHintsFontFamily';
        this._editor.getContainerDomNode().style.setProperty(fontFamilyVar, fontFamily);
        let currentLineInfo = {
            line: 0,
            totalLen: 0
        };
        for (const item of items){
            if (currentLineInfo.line !== item.anchor.range.startLineNumber) {
                currentLineInfo = {
                    line: item.anchor.range.startLineNumber,
                    totalLen: 0
                };
            }
            if (currentLineInfo.totalLen > InlayHintsController_1._MAX_LABEL_LEN) {
                continue;
            }
            // whitespace leading the actual label
            if (item.hint.paddingLeft) {
                addInjectedWhitespace(item, false);
            }
            // the label with its parts
            const parts = typeof item.hint.label === 'string' ? [
                {
                    label: item.hint.label
                }
            ] : item.hint.label;
            for(let i = 0; i < parts.length; i++){
                const part = parts[i];
                const isFirst = i === 0;
                const isLast = i === parts.length - 1;
                const cssProperties = {
                    fontSize: `${fontSize}px`,
                    fontFamily: `var(${fontFamilyVar}), ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$config$2f$editorOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EDITOR_FONT_DEFAULTS"].fontFamily}`,
                    verticalAlign: isUniform ? 'baseline' : 'middle',
                    unicodeBidi: 'isolate'
                };
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonEmptyArray"])(item.hint.textEdits)) {
                    cssProperties.cursor = 'default';
                }
                this._fillInColors(cssProperties, item.hint);
                if ((part.command || part.location) && this._activeInlayHintPart?.part.item === item && this._activeInlayHintPart.part.index === i) {
                    // active link!
                    cssProperties.textDecoration = 'underline';
                    if (this._activeInlayHintPart.hasTriggerModifier) {
                        cssProperties.color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeColorFromId"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editorActiveLinkForeground"]);
                        cssProperties.cursor = 'pointer';
                    }
                }
                if (padding) {
                    if (isFirst && isLast) {
                        // only element
                        cssProperties.padding = `1px ${Math.max(1, fontSize / 4) | 0}px`;
                        cssProperties.borderRadius = `${fontSize / 4 | 0}px`;
                    } else if (isFirst) {
                        // first element
                        cssProperties.padding = `1px 0 1px ${Math.max(1, fontSize / 4) | 0}px`;
                        cssProperties.borderRadius = `${fontSize / 4 | 0}px 0 0 ${fontSize / 4 | 0}px`;
                    } else if (isLast) {
                        // last element
                        cssProperties.padding = `1px ${Math.max(1, fontSize / 4) | 0}px 1px 0`;
                        cssProperties.borderRadius = `0 ${fontSize / 4 | 0}px ${fontSize / 4 | 0}px 0`;
                    } else {
                        cssProperties.padding = `1px 0 1px 0`;
                    }
                }
                let textlabel = part.label;
                currentLineInfo.totalLen += textlabel.length;
                let tooLong = false;
                const over = currentLineInfo.totalLen - InlayHintsController_1._MAX_LABEL_LEN;
                if (over > 0) {
                    textlabel = textlabel.slice(0, -over) + '…';
                    tooLong = true;
                }
                addInjectedText(item, this._ruleFactory.createClassNameRef(cssProperties), fixSpace(textlabel), isLast && !item.hint.paddingRight ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedTextCursorStops"].Right : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedTextCursorStops"].None, new RenderedInlayHintLabelPart(item, i));
                if (tooLong) {
                    break;
                }
            }
            // whitespace trailing the actual label
            if (item.hint.paddingRight) {
                addInjectedWhitespace(item, true);
            }
            if (newDecorationsData.length > InlayHintsController_1._MAX_DECORATORS) {
                break;
            }
        }
        // collect all decoration ids that are affected by the ranges
        // and only update those decorations
        const decorationIdsToReplace = [];
        for (const [id, metadata] of this._decorationsMetadata){
            const range = this._editor.getModel()?.getDecorationRange(id);
            if (range && ranges.some((r)=>r.containsRange(range))) {
                decorationIdsToReplace.push(id);
                metadata.classNameRef.dispose();
                this._decorationsMetadata.delete(id);
            }
        }
        const scrollState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$stableEditorScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StableEditorScrollState"].capture(this._editor);
        this._editor.changeDecorations((accessor)=>{
            const newDecorationIds = accessor.deltaDecorations(decorationIdsToReplace, newDecorationsData.map((d)=>d.decoration));
            for(let i = 0; i < newDecorationIds.length; i++){
                const data = newDecorationsData[i];
                this._decorationsMetadata.set(newDecorationIds[i], data);
            }
        });
        scrollState.restore(this._editor);
    }
    _fillInColors(props, hint) {
        if (hint.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlayHintKind"].Parameter) {
            props.backgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeColorFromId"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editorInlayHintParameterBackground"]);
            props.color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeColorFromId"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editorInlayHintParameterForeground"]);
        } else if (hint.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlayHintKind"].Type) {
            props.backgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeColorFromId"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editorInlayHintTypeBackground"]);
            props.color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeColorFromId"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editorInlayHintTypeForeground"]);
        } else {
            props.backgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeColorFromId"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editorInlayHintBackground"]);
            props.color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$themeService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeColorFromId"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$theme$2f$common$2f$colors$2f$editorColors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editorInlayHintForeground"]);
        }
    }
    _getLayoutInfo() {
        const options = this._editor.getOption(142 /* EditorOption.inlayHints */ );
        const padding = options.padding;
        const editorFontSize = this._editor.getOption(52 /* EditorOption.fontSize */ );
        const editorFontFamily = this._editor.getOption(49 /* EditorOption.fontFamily */ );
        let fontSize = options.fontSize;
        if (!fontSize || fontSize < 5 || fontSize > editorFontSize) {
            fontSize = editorFontSize;
        }
        const fontFamily = options.fontFamily || editorFontFamily;
        const isUniform = !padding && fontFamily === editorFontFamily && fontSize === editorFontSize;
        return {
            fontSize,
            fontFamily,
            padding,
            isUniform
        };
    }
    _removeAllDecorations() {
        this._editor.removeDecorations(Array.from(this._decorationsMetadata.keys()));
        for (const obj of this._decorationsMetadata.values()){
            obj.classNameRef.dispose();
        }
        this._decorationsMetadata.clear();
    }
};
InlayHintsController = InlayHintsController_1 = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatureDebounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageFeatureDebounceService"]),
    __param(3, IInlayHintsCache),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICommandService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$notification$2f$common$2f$notification$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INotificationService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IInstantiationService"])
], InlayHintsController);
;
// Prevents the view from potentially visible whitespace
function fixSpace(str) {
    const noBreakWhitespace = '\xa0';
    return str.replace(/[ \t]/g, noBreakWhitespace);
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandsRegistry"].registerCommand('_executeInlayHintProvider', async (accessor, ...args)=>{
    const [uri, range] = args;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertType"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URI"].isUri(uri));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertType"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].isIRange(range));
    const { inlayHintsProvider } = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]);
    const ref = await accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ITextModelService"]).createModelReference(uri);
    try {
        const model = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlayHintsFragments"].create(inlayHintsProvider, ref.object.textEditorModel, [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].lift(range)
        ], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancellationToken"].None);
        const result = model.items.map((i)=>i.hint);
        setTimeout(()=>model.dispose(), 0); // dispose after sending to ext host
        return result;
    } finally{
        ref.dispose();
    }
});
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsHover.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "InlayHintsHover": ()=>InlayHintsHover
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/async.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$getHover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/getHover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markdownHoverParticipant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/markdownHoverParticipant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/hover/browser/hover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-ssr] (ecmascript)");
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
class InlayHintsHoverAnchor extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HoverForeignElementAnchor"] {
    constructor(part, owner, initialMousePosX, initialMousePosY){
        super(10, owner, part.item.anchor.range, initialMousePosX, initialMousePosY, true);
        this.part = part;
    }
}
let InlayHintsHover = class InlayHintsHover extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markdownHoverParticipant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownHoverParticipant"] {
    constructor(editor, languageService, openerService, keybindingService, hoverService, configurationService, _resolverService, languageFeaturesService, commandService){
        super(editor, languageService, openerService, configurationService, languageFeaturesService, keybindingService, hoverService, commandService);
        this._resolverService = _resolverService;
        this.hoverOrdinal = 6;
    }
    suggestHoverAnchor(mouseEvent) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlayHintsController"].get(this._editor);
        if (!controller) {
            return null;
        }
        if (mouseEvent.target.type !== 6 /* MouseTargetType.CONTENT_TEXT */ ) {
            return null;
        }
        const options = mouseEvent.target.detail.injectedText?.options;
        if (!(options instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModelDecorationInjectedTextOptions"] && options.attachedData instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderedInlayHintLabelPart"])) {
            return null;
        }
        return new InlayHintsHoverAnchor(options.attachedData, this, mouseEvent.event.posx, mouseEvent.event.posy);
    }
    computeSync() {
        return [];
    }
    computeAsync(anchor, _lineDecorations, token) {
        if (!(anchor instanceof InlayHintsHoverAnchor)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AsyncIterableObject"].EMPTY;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AsyncIterableObject"](async (executor)=>{
            const { part } = anchor;
            await part.item.resolve(token);
            if (token.isCancellationRequested) {
                return;
            }
            // (1) Inlay Tooltip
            let itemTooltip;
            if (typeof part.item.hint.tooltip === 'string') {
                itemTooltip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownString"]().appendText(part.item.hint.tooltip);
            } else if (part.item.hint.tooltip) {
                itemTooltip = part.item.hint.tooltip;
            }
            if (itemTooltip) {
                executor.emitOne(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markdownHoverParticipant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownHover"](this, anchor.range, [
                    itemTooltip
                ], false, 0));
            }
            // (1.2) Inlay dbl-click gesture
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNonEmptyArray"])(part.item.hint.textEdits)) {
                executor.emitOne(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markdownHoverParticipant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownHover"](this, anchor.range, [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownString"]().appendText((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('hint.dbl', "Double-click to insert"))
                ], false, 10001));
            }
            // (2) Inlay Label Part Tooltip
            let partTooltip;
            if (typeof part.part.tooltip === 'string') {
                partTooltip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownString"]().appendText(part.part.tooltip);
            } else if (part.part.tooltip) {
                partTooltip = part.part.tooltip;
            }
            if (partTooltip) {
                executor.emitOne(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markdownHoverParticipant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownHover"](this, anchor.range, [
                    partTooltip
                ], false, 1));
            }
            // (2.2) Inlay Label Part Help Hover
            if (part.part.location || part.part.command) {
                let linkHint;
                const useMetaKey = this._editor.getOption(78 /* EditorOption.multiCursorModifier */ ) === 'altKey';
                const kb = useMetaKey ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMacintosh"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('links.navigate.kb.meta.mac', "cmd + click") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('links.navigate.kb.meta', "ctrl + click") : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMacintosh"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('links.navigate.kb.alt.mac', "option + click") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('links.navigate.kb.alt', "alt + click");
                if (part.part.location && part.part.command) {
                    linkHint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownString"]().appendText((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('hint.defAndCommand', 'Go to Definition ({0}), right click for more', kb));
                } else if (part.part.location) {
                    linkHint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownString"]().appendText((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('hint.def', 'Go to Definition ({0})', kb));
                } else if (part.part.command) {
                    linkHint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownString"](`[${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('hint.cmd', "Execute Command")}](${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asCommandLink"])(part.part.command)} "${part.part.command.title}") (${kb})`, {
                        isTrusted: true
                    });
                }
                if (linkHint) {
                    executor.emitOne(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markdownHoverParticipant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownHover"](this, anchor.range, [
                        linkHint
                    ], false, 10000));
                }
            }
            // (3) Inlay Label Part Location tooltip
            const iterable = await this._resolveInlayHintLabelPartHover(part, token);
            for await (const item of iterable){
                executor.emitOne(item);
            }
        });
    }
    async _resolveInlayHintLabelPartHover(part, token) {
        if (!part.part.location) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AsyncIterableObject"].EMPTY;
        }
        const { uri, range } = part.part.location;
        const ref = await this._resolverService.createModelReference(uri);
        try {
            const model = ref.object.textEditorModel;
            if (!this._languageFeaturesService.hoverProvider.has(model)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AsyncIterableObject"].EMPTY;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$getHover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHoverProviderResultsAsAsyncIterable"])(this._languageFeaturesService.hoverProvider, model, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](range.startLineNumber, range.startColumn), token).filter((item)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmptyMarkdownString"])(item.hover.contents)).map((item)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$markdownHoverParticipant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarkdownHover"](this, part.item.anchor.range, item.hover.contents, false, 2 + item.ordinal));
        } finally{
            ref.dispose();
        }
    }
};
InlayHintsHover = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$opener$2f$common$2f$opener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IOpenerService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$hover$2f$browser$2f$hover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IHoverService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IConfigurationService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$resolverService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ITextModelService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICommandService"])
], InlayHintsHover);
;
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsContribution.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsHover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsHover.js [app-ssr] (ecmascript)");
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorContribution"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlayHintsController"].ID, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlayHintsController"], 1 /* EditorContributionInstantiation.AfterFirstRender */ );
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$hover$2f$browser$2f$hoverTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HoverParticipantRegistry"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlayHints$2f$browser$2f$inlayHintsHover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlayHintsHover"]);
}),

};

//# sourceMappingURL=afade_monaco-editor_esm_vs_editor_contrib_inlayHints_browser_05119e54._.js.map