module.exports = {

"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/commandIds.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "inlineEditAcceptId": ()=>inlineEditAcceptId,
    "inlineEditJumpBackId": ()=>inlineEditJumpBackId,
    "inlineEditJumpToId": ()=>inlineEditJumpToId,
    "inlineEditRejectId": ()=>inlineEditRejectId
});
const inlineEditAcceptId = 'editor.action.inlineEdit.accept';
const inlineEditRejectId = 'editor.action.inlineEdit.reject';
const inlineEditJumpToId = 'editor.action.inlineEdit.jumpTo';
const inlineEditJumpBackId = 'editor.action.inlineEdit.jumpBack';
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/ghostTextWidget.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "GhostTextWidget": ()=>GhostTextWidget,
    "INLINE_EDIT_DESCRIPTION": ()=>INLINE_EDIT_DESCRIPTION
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/derived.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$viewLayout$2f$lineDecorations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/lineDecorations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$registrations$2e$contribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditor/registrations.contribution.js [app-ssr] (ecmascript)");
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
const INLINE_EDIT_DESCRIPTION = 'inline-edit';
let GhostTextWidget = class GhostTextWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    constructor(editor, model, languageService){
        super();
        this.editor = editor;
        this.model = model;
        this.languageService = languageService;
        this.isDisposed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableValue"])(this, false);
        this.currentTextModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this, this.editor.onDidChangeModel, ()=>/** @description editor.model */ this.editor.getModel());
        this.uiState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            if (this.isDisposed.read(reader)) {
                return undefined;
            }
            const textModel = this.currentTextModel.read(reader);
            if (textModel !== this.model.targetTextModel.read(reader)) {
                return undefined;
            }
            const ghostText = this.model.ghostText.read(reader);
            if (!ghostText) {
                return undefined;
            }
            let range = this.model.range?.read(reader);
            //if range is empty, we want to remove it
            if (range && range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn) {
                range = undefined;
            }
            //check if both range and text are single line - in this case we want to do inline replacement
            //rather than replacing whole lines
            const isSingleLine = (range ? range.startLineNumber === range.endLineNumber : true) && ghostText.parts.length === 1 && ghostText.parts[0].lines.length === 1;
            //check if we're just removing code
            const isPureRemove = ghostText.parts.length === 1 && ghostText.parts[0].lines.every((l)=>l.length === 0);
            const inlineTexts = [];
            const additionalLines = [];
            function addToAdditionalLines(lines, className) {
                if (additionalLines.length > 0) {
                    const lastLine = additionalLines[additionalLines.length - 1];
                    if (className) {
                        lastLine.decorations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$viewLayout$2f$lineDecorations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineDecoration"](lastLine.content.length + 1, lastLine.content.length + 1 + lines[0].length, className, 0 /* InlineDecorationType.Regular */ ));
                    }
                    lastLine.content += lines[0];
                    lines = lines.slice(1);
                }
                for (const line of lines){
                    additionalLines.push({
                        content: line,
                        decorations: className ? [
                            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$viewLayout$2f$lineDecorations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineDecoration"](1, line.length + 1, className, 0 /* InlineDecorationType.Regular */ )
                        ] : []
                    });
                }
            }
            const textBufferLine = textModel.getLineContent(ghostText.lineNumber);
            let hiddenTextStartColumn = undefined;
            let lastIdx = 0;
            if (!isPureRemove && (isSingleLine || !range)) {
                for (const part of ghostText.parts){
                    let lines = part.lines;
                    //If remove range is set, we want to push all new liens to virtual area
                    if (range && !isSingleLine) {
                        addToAdditionalLines(lines, INLINE_EDIT_DESCRIPTION);
                        lines = [];
                    }
                    if (hiddenTextStartColumn === undefined) {
                        inlineTexts.push({
                            column: part.column,
                            text: lines[0],
                            preview: part.preview
                        });
                        lines = lines.slice(1);
                    } else {
                        addToAdditionalLines([
                            textBufferLine.substring(lastIdx, part.column - 1)
                        ], undefined);
                    }
                    if (lines.length > 0) {
                        addToAdditionalLines(lines, INLINE_EDIT_DESCRIPTION);
                        if (hiddenTextStartColumn === undefined && part.column <= textBufferLine.length) {
                            hiddenTextStartColumn = part.column;
                        }
                    }
                    lastIdx = part.column - 1;
                }
                if (hiddenTextStartColumn !== undefined) {
                    addToAdditionalLines([
                        textBufferLine.substring(lastIdx)
                    ], undefined);
                }
            }
            const hiddenRange = hiddenTextStartColumn !== undefined ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColumnRange"](hiddenTextStartColumn, textBufferLine.length + 1) : undefined;
            const lineNumber = isSingleLine || !range ? ghostText.lineNumber : range.endLineNumber - 1;
            return {
                inlineTexts,
                additionalLines,
                hiddenRange,
                lineNumber,
                additionalReservedLineCount: this.model.minReservedLineCount.read(reader),
                targetTextModel: textModel,
                range,
                isSingleLine,
                isPureRemove
            };
        });
        this.decorations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            const uiState = this.uiState.read(reader);
            if (!uiState) {
                return [];
            }
            const decorations = [];
            if (uiState.hiddenRange) {
                decorations.push({
                    range: uiState.hiddenRange.toRange(uiState.lineNumber),
                    options: {
                        inlineClassName: 'inline-edit-hidden',
                        description: 'inline-edit-hidden'
                    }
                });
            }
            if (uiState.range) {
                const ranges = [];
                if (uiState.isSingleLine) {
                    ranges.push(uiState.range);
                } else if (!uiState.isPureRemove) {
                    const lines = uiState.range.endLineNumber - uiState.range.startLineNumber;
                    for(let i = 0; i < lines; i++){
                        const line = uiState.range.startLineNumber + i;
                        const firstNonWhitespace = uiState.targetTextModel.getLineFirstNonWhitespaceColumn(line);
                        const lastNonWhitespace = uiState.targetTextModel.getLineLastNonWhitespaceColumn(line);
                        const range = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](line, firstNonWhitespace, line, lastNonWhitespace);
                        ranges.push(range);
                    }
                }
                for (const range of ranges){
                    decorations.push({
                        range,
                        options: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$registrations$2e$contribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffDeleteDecoration"]
                    });
                }
            }
            if (uiState.range && !uiState.isSingleLine && uiState.isPureRemove) {
                const r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](uiState.range.startLineNumber, 1, uiState.range.endLineNumber - 1, 1);
                decorations.push({
                    range: r,
                    options: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$registrations$2e$contribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffLineDeleteDecorationBackgroundWithIndicator"]
                });
            }
            for (const p of uiState.inlineTexts){
                decorations.push({
                    range: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].fromPositions(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](uiState.lineNumber, p.column)),
                    options: {
                        description: INLINE_EDIT_DESCRIPTION,
                        after: {
                            content: p.text,
                            inlineClassName: p.preview ? 'inline-edit-decoration-preview' : 'inline-edit-decoration',
                            cursorStops: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectedTextCursorStops"].Left
                        },
                        showIfCollapsed: true
                    }
                });
            }
            return decorations;
        });
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
            this.isDisposed.set(true, undefined);
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyObservableDecorations"])(this.editor, this.decorations));
    }
};
GhostTextWidget = __decorate([
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$language$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageService"])
], GhostTextWidget);
;
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/inlineEditHintsWidget.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "CustomizedMenuWorkbenchToolBar": ()=>CustomizedMenuWorkbenchToolBar,
    "InlineEditHintsContentWidget": ()=>InlineEditHintsContentWidget,
    "InlineEditHintsWidget": ()=>InlineEditHintsWidget
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$keybindingLabel$2f$keybindingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/keybindingLabel/keybindingLabel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/autorun.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/derived.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$menuEntryActionViewItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/actions/browser/menuEntryActionViewItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$toolbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/actions/browser/toolbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js [app-ssr] (ecmascript)");
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
var InlineEditHintsContentWidget_1;
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
let InlineEditHintsWidget = class InlineEditHintsWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    constructor(editor, model, instantiationService){
        super();
        this.editor = editor;
        this.model = model;
        this.instantiationService = instantiationService;
        this.alwaysShowToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this, this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(63 /* EditorOption.inlineEdit */ ).showToolbar === 'always');
        this.sessionPosition = undefined;
        this.position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            const ghostText = this.model.read(reader)?.model.ghostText.read(reader);
            if (!this.alwaysShowToolbar.read(reader) || !ghostText || ghostText.parts.length === 0) {
                this.sessionPosition = undefined;
                return null;
            }
            const firstColumn = ghostText.parts[0].column;
            if (this.sessionPosition && this.sessionPosition.lineNumber !== ghostText.lineNumber) {
                this.sessionPosition = undefined;
            }
            const position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](ghostText.lineNumber, Math.min(firstColumn, this.sessionPosition?.column ?? Number.MAX_SAFE_INTEGER));
            this.sessionPosition = position;
            return position;
        });
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorunWithStore"])((reader, store)=>{
            /** @description setup content widget */ const model = this.model.read(reader);
            if (!model || !this.alwaysShowToolbar.read(reader)) {
                return;
            }
            const contentWidget = store.add(this.instantiationService.createInstance(InlineEditHintsContentWidget, this.editor, true, this.position));
            editor.addContentWidget(contentWidget);
            store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDisposable"])(()=>editor.removeContentWidget(contentWidget)));
        }));
    }
};
InlineEditHintsWidget = __decorate([
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IInstantiationService"])
], InlineEditHintsWidget);
;
let InlineEditHintsContentWidget = class InlineEditHintsContentWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    static{
        InlineEditHintsContentWidget_1 = this;
    }
    static{
        this._dropDownVisible = false;
    }
    static{
        this.id = 0;
    }
    constructor(editor, withBorder, _position, instantiationService, _contextKeyService, _menuService){
        super();
        this.editor = editor;
        this.withBorder = withBorder;
        this._position = _position;
        this._contextKeyService = _contextKeyService;
        this._menuService = _menuService;
        this.id = `InlineEditHintsContentWidget${InlineEditHintsContentWidget_1.id++}`;
        this.allowEditorOverflow = true;
        this.suppressMouseDown = false;
        this.nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])('div.inlineEditHints', {
            className: this.withBorder ? '.withBorder' : ''
        }, [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])('div@toolBar')
        ]);
        this.inlineCompletionsActionsMenus = this._register(this._menuService.createMenu(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].InlineEditActions, this._contextKeyService));
        this.toolBar = this._register(instantiationService.createInstance(CustomizedMenuWorkbenchToolBar, this.nodes.toolBar, this.editor, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].InlineEditToolbar, {
            menuOptions: {
                renderShortTitle: true
            },
            toolbarOptions: {
                primaryGroup: (g)=>g.startsWith('primary')
            },
            actionViewItemProvider: (action, options)=>{
                if (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuItemAction"]) {
                    return instantiationService.createInstance(StatusBarViewItem, action, undefined);
                }
                return undefined;
            },
            telemetrySource: 'InlineEditToolbar'
        }));
        this._register(this.toolBar.onDidChangeDropdownVisibility((e)=>{
            InlineEditHintsContentWidget_1._dropDownVisible = e;
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description update position */ this._position.read(reader);
            this.editor.layoutContentWidget(this);
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description actions menu */ const extraActions = [];
            for (const [_, group] of this.inlineCompletionsActionsMenus.getActions()){
                for (const action of group){
                    if (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuItemAction"]) {
                        extraActions.push(action);
                    }
                }
            }
            if (extraActions.length > 0) {
                extraActions.unshift(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"]());
            }
            this.toolBar.setAdditionalSecondaryActions(extraActions);
        }));
    }
    getId() {
        return this.id;
    }
    getDomNode() {
        return this.nodes.root;
    }
    getPosition() {
        return {
            position: this._position.get(),
            preference: [
                1 /* ContentWidgetPositionPreference.ABOVE */ ,
                2 /* ContentWidgetPositionPreference.BELOW */ 
            ],
            positionAffinity: 3 /* PositionAffinity.LeftOfInjectedText */ 
        };
    }
};
InlineEditHintsContentWidget = InlineEditHintsContentWidget_1 = __decorate([
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMenuService"])
], InlineEditHintsContentWidget);
;
class StatusBarViewItem extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$menuEntryActionViewItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuEntryActionViewItem"] {
    updateLabel() {
        const kb = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService);
        if (!kb) {
            return super.updateLabel();
        }
        if (this.label) {
            const div = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])('div.keybinding').root;
            const k = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$keybindingLabel$2f$keybindingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeybindingLabel"](div, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OS"], {
                disableTitle: true,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$keybindingLabel$2f$keybindingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unthemedKeybindingLabelOptions"]
            }));
            k.set(kb);
            this.label.textContent = this._action.label;
            this.label.appendChild(div);
            this.label.classList.add('inlineEditStatusBarItemLabel');
        }
    }
    updateTooltip() {
    // NOOP, disable tooltip
    }
}
let CustomizedMenuWorkbenchToolBar = class CustomizedMenuWorkbenchToolBar extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$toolbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkbenchToolBar"] {
    constructor(container, editor, menuId, options2, menuService, contextKeyService, contextMenuService, keybindingService, commandService, telemetryService){
        super(container, {
            resetMenu: menuId,
            ...options2
        }, menuService, contextKeyService, contextMenuService, keybindingService, commandService, telemetryService);
        this.editor = editor;
        this.menuId = menuId;
        this.options2 = options2;
        this.menuService = menuService;
        this.contextKeyService = contextKeyService;
        this.menu = this._store.add(this.menuService.createMenu(this.menuId, this.contextKeyService, {
            emitEventsForSubmenuChanges: true
        }));
        this.additionalActions = [];
        this.prependedPrimaryActions = [];
        this._store.add(this.menu.onDidChange(()=>this.updateToolbar()));
        this._store.add(this.editor.onDidChangeCursorPosition(()=>this.updateToolbar()));
        this.updateToolbar();
    }
    updateToolbar() {
        const primary = [];
        const secondary = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$browser$2f$menuEntryActionViewItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAndFillInActionBarActions"])(this.menu, this.options2?.menuOptions, {
            primary,
            secondary
        }, this.options2?.toolbarOptions?.primaryGroup, this.options2?.toolbarOptions?.shouldInlineSubmenu, this.options2?.toolbarOptions?.useSeparatorsInPrimaryActions);
        secondary.push(...this.additionalActions);
        primary.unshift(...this.prependedPrimaryActions);
        this.setActions(primary, secondary);
    }
    setAdditionalSecondaryActions(actions) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equals"])(this.additionalActions, actions, (a, b)=>a === b)) {
            return;
        }
        this.additionalActions = actions;
        this.updateToolbar();
    }
};
CustomizedMenuWorkbenchToolBar = __decorate([
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMenuService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextview$2f$browser$2f$contextView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IContextMenuService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybinding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IKeybindingService"]),
    __param(8, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICommandService"]),
    __param(9, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$telemetry$2f$common$2f$telemetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ITelemetryService"])
], CustomizedMenuWorkbenchToolBar);
;
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/inlineEditSideBySideWidget.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "InlineEditSideBySideWidget": ()=>InlineEditSideBySideWidget
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$promise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/promise.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/autorun.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/derived.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/uri.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$observableCodeEditor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/observableCodeEditor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$codeEditor$2f$embeddedCodeEditorWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditor/embeddedCodeEditorWidget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$diffProviderFactoryService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditor/diffProviderFactoryService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$registrations$2e$contribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditor/registrations.contribution.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$modesRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/languages/modesRegistry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/services/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-ssr] (ecmascript)");
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
var InlineEditSideBySideWidget_1, InlineEditSideBySideContentWidget_1;
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
function* range(start, end, step = 1) {
    if (end === undefined) {
        [end, start] = [
            start,
            0
        ];
    }
    for(let n = start; n < end; n += step){
        yield n;
    }
}
function removeIndentation(lines) {
    const indentation = lines[0].match(/^\s*/)?.[0] ?? '';
    const length = indentation.length;
    return {
        text: lines.map((l)=>l.replace(new RegExp('^' + indentation), '')),
        shift: length
    };
}
let InlineEditSideBySideWidget = class InlineEditSideBySideWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    static{
        InlineEditSideBySideWidget_1 = this;
    }
    static{
        this._modelId = 0;
    }
    static _createUniqueUri() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$uri$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["URI"].from({
            scheme: 'inline-edit-widget',
            path: new Date().toString() + String(InlineEditSideBySideWidget_1._modelId++)
        });
    }
    constructor(_editor, _model, _instantiationService, _diffProviderFactoryService, _modelService){
        super();
        this._editor = _editor;
        this._model = _model;
        this._instantiationService = _instantiationService;
        this._diffProviderFactoryService = _diffProviderFactoryService;
        this._modelService = _modelService;
        this._position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            const ghostText = this._model.read(reader);
            if (!ghostText || ghostText.text.length === 0) {
                return null;
            }
            if (ghostText.range.startLineNumber === ghostText.range.endLineNumber && !(ghostText.range.startColumn === ghostText.range.endColumn && ghostText.range.startColumn === 1)) {
                //for inner-line suggestions we still want to use minimal ghost text
                return null;
            }
            const editorModel = this._editor.getModel();
            if (!editorModel) {
                return null;
            }
            const lines = Array.from(range(ghostText.range.startLineNumber, ghostText.range.endLineNumber + 1));
            const lengths = lines.map((lineNumber)=>editorModel.getLineLastNonWhitespaceColumn(lineNumber));
            const maxColumn = Math.max(...lengths);
            const lineOfMaxColumn = lines[lengths.indexOf(maxColumn)];
            const position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](lineOfMaxColumn, maxColumn);
            const pos = {
                top: ghostText.range.startLineNumber,
                left: position
            };
            return pos;
        });
        this._text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            const ghostText = this._model.read(reader);
            if (!ghostText) {
                return {
                    text: '',
                    shift: 0
                };
            }
            const t = removeIndentation(ghostText.text.split('\n'));
            return {
                text: t.text.join('\n'),
                shift: t.shift
            };
        });
        this._originalModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedDisposable"])(()=>this._modelService.createModel('', null, InlineEditSideBySideWidget_1._createUniqueUri())).keepObserved(this._store);
        this._modifiedModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedDisposable"])(()=>this._modelService.createModel('', null, InlineEditSideBySideWidget_1._createUniqueUri())).keepObserved(this._store);
        this._diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            return this._diffPromise.read(reader)?.promiseResult.read(reader)?.data;
        });
        this._diffPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            const ghostText = this._model.read(reader);
            if (!ghostText) {
                return;
            }
            const editorModel = this._editor.getModel();
            if (!editorModel) {
                return;
            }
            const originalText = removeIndentation(editorModel.getValueInRange(ghostText.range).split('\n')).text.join('\n');
            const modifiedText = removeIndentation(ghostText.text.split('\n')).text.join('\n');
            this._originalModel.get().setValue(originalText);
            this._modifiedModel.get().setValue(modifiedText);
            const d = this._diffProviderFactoryService.createDiffProvider({
                diffAlgorithm: 'advanced'
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$promise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ObservablePromise"].fromFn(async ()=>{
                const result = await d.computeDiff(this._originalModel.get(), this._modifiedModel.get(), {
                    computeMoves: false,
                    ignoreTrimWhitespace: false,
                    maxComputationTimeMs: 1000
                }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancellationToken"].None);
                if (result.identical) {
                    return undefined;
                }
                return result.changes;
            });
        });
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorunWithStore"])((reader, store)=>{
            /** @description setup content widget */ const model = this._model.read(reader);
            if (!model) {
                return;
            }
            if (this._position.get() === null) {
                return;
            }
            const contentWidget = store.add(this._instantiationService.createInstance(InlineEditSideBySideContentWidget, this._editor, this._position, this._text.map((t)=>t.text), this._text.map((t)=>t.shift), this._diff));
            _editor.addOverlayWidget(contentWidget);
            store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDisposable"])(()=>_editor.removeOverlayWidget(contentWidget)));
        }));
    }
};
InlineEditSideBySideWidget = InlineEditSideBySideWidget_1 = __decorate([
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$diffProviderFactoryService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IDiffProviderFactoryService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IModelService"])
], InlineEditSideBySideWidget);
;
let InlineEditSideBySideContentWidget = class InlineEditSideBySideContentWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    static{
        InlineEditSideBySideContentWidget_1 = this;
    }
    static{
        this.id = 0;
    }
    constructor(_editor, _position, _text, _shift, _diff, _instantiationService){
        super();
        this._editor = _editor;
        this._position = _position;
        this._text = _text;
        this._shift = _shift;
        this._diff = _diff;
        this._instantiationService = _instantiationService;
        this.id = `InlineEditSideBySideContentWidget${InlineEditSideBySideContentWidget_1.id++}`;
        this.allowEditorOverflow = false;
        this._nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$"])('div.inlineEditSideBySide', undefined);
        this._scrollChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableSignalFromEvent"])('editor.onDidScrollChange', this._editor.onDidScrollChange);
        this._previewEditor = this._register(this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$codeEditor$2f$embeddedCodeEditorWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmbeddedCodeEditorWidget"], this._nodes, {
            glyphMargin: false,
            lineNumbers: 'off',
            minimap: {
                enabled: false
            },
            guides: {
                indentation: false,
                bracketPairs: false,
                bracketPairsHorizontal: false,
                highlightActiveIndentation: false
            },
            folding: false,
            selectOnLineNumbers: false,
            selectionHighlight: false,
            columnSelection: false,
            overviewRulerBorder: false,
            overviewRulerLanes: 0,
            lineDecorationsWidth: 0,
            lineNumbersMinChars: 0,
            scrollbar: {
                vertical: 'hidden',
                horizontal: 'hidden',
                alwaysConsumeMouseWheel: false,
                handleMouseWheel: false
            },
            readOnly: true,
            wordWrap: 'off',
            wordWrapOverride1: 'off',
            wordWrapOverride2: 'off',
            wrappingIndent: 'none',
            wrappingStrategy: undefined
        }, {
            contributions: [],
            isSimpleWidget: true
        }, this._editor));
        this._previewEditorObs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$observableCodeEditor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableCodeEditor"])(this._previewEditor);
        this._editorObs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$observableCodeEditor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableCodeEditor"])(this._editor);
        this._previewTextModel = this._register(this._instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextModel"], '', this._editor.getModel()?.getLanguageId() ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2f$modesRegistry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLAINTEXT_LANGUAGE_ID"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$model$2f$textModel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextModel"].DEFAULT_CREATION_OPTIONS, null));
        this._setText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])((reader)=>{
            const edit = this._text.read(reader);
            if (!edit) {
                return;
            }
            this._previewTextModel.setValue(edit);
        }).recomputeInitiallyAndOnChange(this._store);
        this._decorations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            this._setText.read(reader);
            const position = this._position.read(reader);
            if (!position) {
                return {
                    org: [],
                    mod: []
                };
            }
            const diff = this._diff.read(reader);
            if (!diff) {
                return {
                    org: [],
                    mod: []
                };
            }
            const originalDecorations = [];
            const modifiedDecorations = [];
            if (diff.length === 1 && diff[0].innerChanges[0].modifiedRange.equalsRange(this._previewTextModel.getFullModelRange())) {
                return {
                    org: [],
                    mod: []
                };
            }
            const shift = this._shift.get();
            const moveRange = (range)=>{
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"](range.startLineNumber + position.top - 1, range.startColumn + shift, range.endLineNumber + position.top - 1, range.endColumn + shift);
            };
            for (const m of diff){
                if (!m.original.isEmpty) {
                    originalDecorations.push({
                        range: moveRange(m.original.toInclusiveRange()),
                        options: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$registrations$2e$contribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffLineDeleteDecorationBackgroundWithIndicator"]
                    });
                }
                if (!m.modified.isEmpty) {
                    modifiedDecorations.push({
                        range: m.modified.toInclusiveRange(),
                        options: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$registrations$2e$contribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffLineAddDecorationBackgroundWithIndicator"]
                    });
                }
                if (m.modified.isEmpty || m.original.isEmpty) {
                    if (!m.original.isEmpty) {
                        originalDecorations.push({
                            range: moveRange(m.original.toInclusiveRange()),
                            options: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$registrations$2e$contribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffWholeLineDeleteDecoration"]
                        });
                    }
                    if (!m.modified.isEmpty) {
                        modifiedDecorations.push({
                            range: m.modified.toInclusiveRange(),
                            options: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$registrations$2e$contribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffWholeLineAddDecoration"]
                        });
                    }
                } else {
                    for (const i of m.innerChanges || []){
                        // Don't show empty markers outside the line range
                        if (m.original.contains(i.originalRange.startLineNumber)) {
                            originalDecorations.push({
                                range: moveRange(i.originalRange),
                                options: i.originalRange.isEmpty() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$registrations$2e$contribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffDeleteDecorationEmpty"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$registrations$2e$contribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffDeleteDecoration"]
                            });
                        }
                        if (m.modified.contains(i.modifiedRange.startLineNumber)) {
                            modifiedDecorations.push({
                                range: i.modifiedRange,
                                options: i.modifiedRange.isEmpty() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$registrations$2e$contribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffAddDecorationEmpty"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$registrations$2e$contribution$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffAddDecoration"]
                            });
                        }
                    }
                }
            }
            return {
                org: originalDecorations,
                mod: modifiedDecorations
            };
        });
        this._originalDecorations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            return this._decorations.read(reader).org;
        });
        this._modifiedDecorations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derived"])(this, (reader)=>{
            return this._decorations.read(reader).mod;
        });
        this._previewEditor.setModel(this._previewTextModel);
        this._register(this._editorObs.setDecorations(this._originalDecorations));
        this._register(this._previewEditorObs.setDecorations(this._modifiedDecorations));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            const width = this._previewEditorObs.contentWidth.read(reader);
            const lines = this._text.read(reader).split('\n').length - 1;
            const height = this._editor.getOption(67 /* EditorOption.lineHeight */ ) * lines;
            if (width <= 0) {
                return;
            }
            this._previewEditor.layout({
                height: height,
                width: width
            });
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description update position */ this._position.read(reader);
            this._editor.layoutOverlayWidget(this);
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description scroll change */ this._scrollChanged.read(reader);
            const position = this._position.read(reader);
            if (!position) {
                return;
            }
            this._editor.layoutOverlayWidget(this);
        }));
    }
    getId() {
        return this.id;
    }
    getDomNode() {
        return this._nodes;
    }
    getPosition() {
        const position = this._position.get();
        if (!position) {
            return null;
        }
        const layoutInfo = this._editor.getLayoutInfo();
        const visibPos = this._editor.getScrolledVisiblePosition(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"](position.top, 1));
        if (!visibPos) {
            return null;
        }
        const top = visibPos.top - 1; //-1 to offset the border width
        const offset = this._editor.getOffsetForColumn(position.left.lineNumber, position.left.column);
        const left = layoutInfo.contentLeft + offset + 10;
        return {
            preference: {
                left,
                top
            }
        };
    }
};
InlineEditSideBySideContentWidget = InlineEditSideBySideContentWidget_1 = __decorate([
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IInstantiationService"])
], InlineEditSideBySideContentWidget);
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/inlineEditController.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "InlineEditController": ()=>InlineEditController
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/autorun.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/editOperation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$ghostTextWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/ghostTextWidget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/languages.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/model/ghostText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditHintsWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/inlineEditHintsWidget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/derived.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditSideBySideWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/inlineEditSideBySideWidget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$diffProviderFactoryService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditor/diffProviderFactoryService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/services/model.js [app-ssr] (ecmascript)");
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
var InlineEditController_1;
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
let InlineEditController = class InlineEditController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Disposable"] {
    static{
        InlineEditController_1 = this;
    }
    static{
        this.ID = 'editor.contrib.inlineEditController';
    }
    static{
        this.inlineEditVisibleKey = 'inlineEditVisible';
    }
    static{
        this.inlineEditVisibleContext = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawContextKey"](this.inlineEditVisibleKey, false);
    }
    static{
        this.cursorAtInlineEditKey = 'cursorAtInlineEdit';
    }
    static{
        this.cursorAtInlineEditContext = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawContextKey"](this.cursorAtInlineEditKey, false);
    }
    static get(editor) {
        return editor.getContribution(InlineEditController_1.ID);
    }
    constructor(editor, instantiationService, contextKeyService, languageFeaturesService, _commandService, _configurationService, _diffProviderFactoryService, _modelService){
        super();
        this.editor = editor;
        this.instantiationService = instantiationService;
        this.contextKeyService = contextKeyService;
        this.languageFeaturesService = languageFeaturesService;
        this._commandService = _commandService;
        this._configurationService = _configurationService;
        this._diffProviderFactoryService = _diffProviderFactoryService;
        this._modelService = _modelService;
        this._isVisibleContext = InlineEditController_1.inlineEditVisibleContext.bindTo(this.contextKeyService);
        this._isCursorAtInlineEditContext = InlineEditController_1.cursorAtInlineEditContext.bindTo(this.contextKeyService);
        this._currentEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableValue"])(this, undefined);
        this._currentWidget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$derived$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["derivedDisposable"])(this._currentEdit, (reader)=>{
            const edit = this._currentEdit.read(reader);
            if (!edit) {
                return undefined;
            }
            const line = edit.range.endLineNumber;
            const column = edit.range.endColumn;
            const textToDisplay = edit.text.endsWith('\n') && !(edit.range.startLineNumber === edit.range.endLineNumber && edit.range.startColumn === edit.range.endColumn) ? edit.text.slice(0, -1) : edit.text;
            const ghostText = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GhostText"](line, [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineCompletions$2f$browser$2f$model$2f$ghostText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GhostTextPart"](column, textToDisplay, false)
            ]);
            //only show ghost text for single line edits
            //unless it is a pure removal
            //multi line edits are shown in the side by side widget
            const isSingleLine = edit.range.startLineNumber === edit.range.endLineNumber && ghostText.parts.length === 1 && ghostText.parts[0].lines.length === 1;
            const isPureRemoval = edit.text === '';
            if (!isSingleLine && !isPureRemoval) {
                return undefined;
            }
            const instance = this.instantiationService.createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$ghostTextWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GhostTextWidget"], this.editor, {
                ghostText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constObservable"])(ghostText),
                minReservedLineCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constObservable"])(0),
                targetTextModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constObservable"])(this.editor.getModel() ?? undefined),
                range: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constObservable"])(edit.range)
            });
            return instance;
        });
        this._isAccepting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableValue"])(this, false);
        this._enabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this, this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(63 /* EditorOption.inlineEdit */ ).enabled);
        this._fontFamily = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this, this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(63 /* EditorOption.inlineEdit */ ).fontFamily);
        //Automatically request inline edit when the content was changed
        //Cancel the previous request if there is one
        //Remove the previous ghost text
        const modelChangedSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableSignalFromEvent"])('InlineEditController.modelContentChangedSignal', editor.onDidChangeModelContent);
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description InlineEditController.modelContentChanged model */ if (!this._enabled.read(reader)) {
                return;
            }
            modelChangedSignal.read(reader);
            if (this._isAccepting.read(reader)) {
                return;
            }
            this.getInlineEdit(editor, true);
        }));
        //Check if the cursor is at the ghost text
        const cursorPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableFromEvent"])(this, editor.onDidChangeCursorPosition, ()=>editor.getPosition());
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description InlineEditController.cursorPositionChanged model */ if (!this._enabled.read(reader)) {
                return;
            }
            const pos = cursorPosition.read(reader);
            if (pos) {
                this.checkCursorPosition(pos);
            }
        }));
        //Perform stuff when the current edit has changed
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description InlineEditController.update model */ const currentEdit = this._currentEdit.read(reader);
            this._isCursorAtInlineEditContext.set(false);
            if (!currentEdit) {
                this._isVisibleContext.set(false);
                return;
            }
            this._isVisibleContext.set(true);
            const pos = editor.getPosition();
            if (pos) {
                this.checkCursorPosition(pos);
            }
        }));
        //Clear suggestions on lost focus
        const editorBlurSingal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableSignalFromEvent"])('InlineEditController.editorBlurSignal', editor.onDidBlurEditorWidget);
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])(async (reader)=>{
            /** @description InlineEditController.editorBlur */ if (!this._enabled.read(reader)) {
                return;
            }
            editorBlurSingal.read(reader);
            // This is a hidden setting very useful for debugging
            if (this._configurationService.getValue('editor.experimentalInlineEdit.keepOnBlur') || editor.getOption(63 /* EditorOption.inlineEdit */ ).keepOnBlur) {
                return;
            }
            this._currentRequestCts?.dispose(true);
            this._currentRequestCts = undefined;
            await this.clear(false);
        }));
        //Invoke provider on focus
        const editorFocusSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observableSignalFromEvent"])('InlineEditController.editorFocusSignal', editor.onDidFocusEditorText);
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            /** @description InlineEditController.editorFocus */ if (!this._enabled.read(reader)) {
                return;
            }
            editorFocusSignal.read(reader);
            this.getInlineEdit(editor, true);
        }));
        //handle changes of font setting
        const styleElement = this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStyleSheet2"])());
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            const fontFamily = this._fontFamily.read(reader);
            styleElement.setStyle(fontFamily === '' || fontFamily === 'default' ? `` : `
.monaco-editor .inline-edit-decoration,
.monaco-editor .inline-edit-decoration-preview,
.monaco-editor .inline-edit {
	font-family: ${fontFamily};
}`);
        }));
        this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditHintsWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditHintsWidget"](this.editor, this._currentWidget, this.instantiationService));
        this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditSideBySideWidget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditSideBySideWidget"](this.editor, this._currentEdit, this.instantiationService, this._diffProviderFactoryService, this._modelService));
    }
    checkCursorPosition(position) {
        if (!this._currentEdit) {
            this._isCursorAtInlineEditContext.set(false);
            return;
        }
        const gt = this._currentEdit.get();
        if (!gt) {
            this._isCursorAtInlineEditContext.set(false);
            return;
        }
        this._isCursorAtInlineEditContext.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].containsPosition(gt.range, position));
    }
    validateInlineEdit(editor, edit) {
        //Multiline inline replacing edit must replace whole lines
        if (edit.text.includes('\n') && edit.range.startLineNumber !== edit.range.endLineNumber && edit.range.startColumn !== edit.range.endColumn) {
            const firstColumn = edit.range.startColumn;
            if (firstColumn !== 1) {
                return false;
            }
            const lastLine = edit.range.endLineNumber;
            const lastColumn = edit.range.endColumn;
            const lineLength = editor.getModel()?.getLineLength(lastLine) ?? 0;
            if (lastColumn !== lineLength + 1) {
                return false;
            }
        }
        return true;
    }
    async fetchInlineEdit(editor, auto) {
        if (this._currentRequestCts) {
            this._currentRequestCts.dispose(true);
        }
        const model = editor.getModel();
        if (!model) {
            return;
        }
        const modelVersion = model.getVersionId();
        const providers = this.languageFeaturesService.inlineEditProvider.all(model);
        if (providers.length === 0) {
            return;
        }
        const provider = providers[0];
        this._currentRequestCts = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
        const token = this._currentRequestCts.token;
        const triggerKind = auto ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditTriggerKind"].Automatic : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$languages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditTriggerKind"].Invoke;
        const shouldDebounce = auto;
        if (shouldDebounce) {
            await wait(50, token);
        }
        if (token.isCancellationRequested || model.isDisposed() || model.getVersionId() !== modelVersion) {
            return;
        }
        const edit = await provider.provideInlineEdit(model, {
            triggerKind
        }, token);
        if (!edit) {
            return;
        }
        if (token.isCancellationRequested || model.isDisposed() || model.getVersionId() !== modelVersion) {
            return;
        }
        if (!this.validateInlineEdit(editor, edit)) {
            return;
        }
        return edit;
    }
    async getInlineEdit(editor, auto) {
        this._isCursorAtInlineEditContext.set(false);
        await this.clear();
        const edit = await this.fetchInlineEdit(editor, auto);
        if (!edit) {
            return;
        }
        this._currentEdit.set(edit, undefined);
    }
    async trigger() {
        await this.getInlineEdit(this.editor, false);
    }
    async jumpBack() {
        if (!this._jumpBackPosition) {
            return;
        }
        this.editor.setPosition(this._jumpBackPosition);
        //if position is outside viewports, scroll to it
        this.editor.revealPositionInCenterIfOutsideViewport(this._jumpBackPosition);
    }
    async accept() {
        this._isAccepting.set(true, undefined);
        const data = this._currentEdit.get();
        if (!data) {
            return;
        }
        //It should only happen in case of last line suggestion
        let text = data.text;
        if (data.text.startsWith('\n')) {
            text = data.text.substring(1);
        }
        this.editor.pushUndoStop();
        this.editor.executeEdits('acceptCurrent', [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$editOperation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditOperation"].replace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"].lift(data.range), text)
        ]);
        if (data.accepted) {
            await this._commandService.executeCommand(data.accepted.id, ...data.accepted.arguments || []).then(undefined, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onUnexpectedExternalError"]);
        }
        this.freeEdit(data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transaction"])((tx)=>{
            this._currentEdit.set(undefined, tx);
            this._isAccepting.set(false, tx);
        });
    }
    jumpToCurrent() {
        this._jumpBackPosition = this.editor.getSelection()?.getStartPosition();
        const data = this._currentEdit.get();
        if (!data) {
            return;
        }
        const position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Position"].lift({
            lineNumber: data.range.startLineNumber,
            column: data.range.startColumn
        });
        this.editor.setPosition(position);
        //if position is outside viewports, scroll to it
        this.editor.revealPositionInCenterIfOutsideViewport(position);
    }
    async clear(sendRejection = true) {
        const edit = this._currentEdit.get();
        if (edit && edit?.rejected && sendRejection) {
            await this._commandService.executeCommand(edit.rejected.id, ...edit.rejected.arguments || []).then(undefined, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onUnexpectedExternalError"]);
        }
        if (edit) {
            this.freeEdit(edit);
        }
        this._currentEdit.set(undefined, undefined);
    }
    freeEdit(edit) {
        const model = this.editor.getModel();
        if (!model) {
            return;
        }
        const providers = this.languageFeaturesService.inlineEditProvider.all(model);
        if (providers.length === 0) {
            return;
        }
        providers[0].freeInlineEdit(edit);
    }
};
InlineEditController = InlineEditController_1 = __decorate([
    __param(1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$instantiation$2f$common$2f$instantiation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IInstantiationService"]),
    __param(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IContextKeyService"]),
    __param(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$languageFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ILanguageFeaturesService"]),
    __param(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$commands$2f$common$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICommandService"]),
    __param(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$configuration$2f$common$2f$configuration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IConfigurationService"]),
    __param(6, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$widget$2f$diffEditor$2f$diffProviderFactoryService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IDiffProviderFactoryService"]),
    __param(7, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$services$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IModelService"])
], InlineEditController);
;
function wait(ms, cancellationToken) {
    return new Promise((resolve)=>{
        let d = undefined;
        const handle = setTimeout(()=>{
            if (d) {
                d.dispose();
            }
            resolve();
        }, ms);
        if (cancellationToken) {
            d = cancellationToken.onCancellationRequested(()=>{
                clearTimeout(handle);
                if (d) {
                    d.dispose();
                }
                resolve();
            });
        }
    });
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/commands.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "AcceptInlineEdit": ()=>AcceptInlineEdit,
    "JumpBackInlineEdit": ()=>JumpBackInlineEdit,
    "JumpToInlineEdit": ()=>JumpToInlineEdit,
    "RejectInlineEdit": ()=>RejectInlineEdit,
    "TriggerInlineEdit": ()=>TriggerInlineEdit
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/commandIds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/inlineEditController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class AcceptInlineEdit extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inlineEditAcceptId"],
            label: 'Accept Inline Edit',
            alias: 'Accept Inline Edit',
            precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].inlineEditVisibleContext),
            kbOpts: [
                {
                    weight: 100 /* KeybindingWeight.EditorContrib */  + 1,
                    primary: 2 /* KeyCode.Tab */ ,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].inlineEditVisibleContext, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].cursorAtInlineEditContext)
                }
            ],
            menuOpts: [
                {
                    menuId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].InlineEditToolbar,
                    title: 'Accept',
                    group: 'primary',
                    order: 1
                }
            ]
        });
    }
    async run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].get(editor);
        await controller?.accept();
    }
}
class TriggerInlineEdit extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        const activeExpr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].not(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].inlineEditVisibleKey));
        super({
            id: 'editor.action.inlineEdit.trigger',
            label: 'Trigger Inline Edit',
            alias: 'Trigger Inline Edit',
            precondition: activeExpr,
            kbOpts: {
                weight: 100 /* KeybindingWeight.EditorContrib */  + 1,
                primary: 2048 /* KeyMod.CtrlCmd */  | 512 /* KeyMod.Alt */  | 86 /* KeyCode.Equal */ ,
                kbExpr: activeExpr
            }
        });
    }
    async run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].get(editor);
        controller?.trigger();
    }
}
class JumpToInlineEdit extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        const activeExpr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].inlineEditVisibleContext, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].not(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].cursorAtInlineEditKey));
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inlineEditJumpToId"],
            label: 'Jump to Inline Edit',
            alias: 'Jump to Inline Edit',
            precondition: activeExpr,
            kbOpts: {
                weight: 100 /* KeybindingWeight.EditorContrib */  + 1,
                primary: 2048 /* KeyMod.CtrlCmd */  | 512 /* KeyMod.Alt */  | 86 /* KeyCode.Equal */ ,
                kbExpr: activeExpr
            },
            menuOpts: [
                {
                    menuId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].InlineEditToolbar,
                    title: 'Jump To Edit',
                    group: 'primary',
                    order: 3,
                    when: activeExpr
                }
            ]
        });
    }
    async run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].get(editor);
        controller?.jumpToCurrent();
    }
}
class JumpBackInlineEdit extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        const activeExpr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].cursorAtInlineEditContext);
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inlineEditJumpBackId"],
            label: 'Jump Back from Inline Edit',
            alias: 'Jump Back from Inline Edit',
            precondition: activeExpr,
            kbOpts: {
                weight: 100 /* KeybindingWeight.EditorContrib */  + 10,
                primary: 2048 /* KeyMod.CtrlCmd */  | 512 /* KeyMod.Alt */  | 86 /* KeyCode.Equal */ ,
                kbExpr: activeExpr
            },
            menuOpts: [
                {
                    menuId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].InlineEditToolbar,
                    title: 'Jump Back',
                    group: 'primary',
                    order: 3,
                    when: activeExpr
                }
            ]
        });
    }
    async run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].get(editor);
        controller?.jumpBack();
    }
}
class RejectInlineEdit extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorAction"] {
    constructor(){
        const activeExpr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].inlineEditVisibleContext);
        super({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$commandIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inlineEditRejectId"],
            label: 'Reject Inline Edit',
            alias: 'Reject Inline Edit',
            precondition: activeExpr,
            kbOpts: {
                weight: 100 /* KeybindingWeight.EditorContrib */ ,
                primary: 9 /* KeyCode.Escape */ ,
                kbExpr: activeExpr
            },
            menuOpts: [
                {
                    menuId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$actions$2f$common$2f$actions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuId"].InlineEditToolbar,
                    title: 'Reject',
                    group: 'secondary',
                    order: 2
                }
            ]
        });
    }
    async run(accessor, editor) {
        const controller = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].get(editor);
        await controller?.clear();
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/inlineEdit.contribution.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-ssr] (ecmascript)");
// import { HoverParticipantRegistry } from 'vs/editor/contrib/hover/browser/hoverTypes';
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/commands.js [app-ssr] (ecmascript)");
// import { InlineEditHoverParticipant } from 'vs/editor/contrib/inlineEdit/browser/hoverParticipant';
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/inlineEditController.js [app-ssr] (ecmascript)");
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AcceptInlineEdit"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RejectInlineEdit"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JumpToInlineEdit"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JumpBackInlineEdit"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorAction"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$commands$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TriggerInlineEdit"]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerEditorContribution"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"].ID, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$contrib$2f$inlineEdit$2f$browser$2f$inlineEditController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InlineEditController"], 3 /* EditorContributionInstantiation.Eventually */ ); // HoverParticipantRegistry.register(InlineEditHoverParticipant);
}),

};

//# sourceMappingURL=afade_monaco-editor_esm_vs_editor_contrib_inlineEdit_browser_153cabef._.js.map