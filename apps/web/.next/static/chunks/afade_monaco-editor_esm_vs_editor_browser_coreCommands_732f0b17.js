(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/coreCommands.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "CoreEditingCommands": ()=>CoreEditingCommands,
    "CoreEditorCommand": ()=>CoreEditorCommand,
    "CoreNavigationCommands": ()=>CoreNavigationCommands,
    "EditorScroll_": ()=>EditorScroll_,
    "RevealLine_": ()=>RevealLine_
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorColumnSelection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/cursor/cursorColumnSelection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursorCommon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/cursorCommon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorDeleteOperations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/cursor/cursorDeleteOperations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/cursor/cursorMoveCommands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorTypeOperations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/cursor/cursorTypeOperations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/position.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/core/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybindingsRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorTypeEditOperations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/editor/common/cursor/cursorTypeEditOperations.js [app-client] (ecmascript)");
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
const CORE_WEIGHT = 0 /* KeybindingWeight.EditorCore */ ;
class CoreEditorCommand extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorCommand"] {
    runEditorCommand(accessor, editor, args) {
        const viewModel = editor._getViewModel();
        if (!viewModel) {
            // the editor has no view => has no cursors
            return;
        }
        this.runCoreEditorCommand(viewModel, args || {});
    }
}
var EditorScroll_;
(function(EditorScroll_) {
    const isEditorScrollArgs = function(arg) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](arg)) {
            return false;
        }
        const scrollArg = arg;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"](scrollArg.to)) {
            return false;
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"](scrollArg.by) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"](scrollArg.by)) {
            return false;
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"](scrollArg.value) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"](scrollArg.value)) {
            return false;
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"](scrollArg.revealCursor) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBoolean"](scrollArg.revealCursor)) {
            return false;
        }
        return true;
    };
    EditorScroll_.metadata = {
        description: 'Scroll editor in the given direction',
        args: [
            {
                name: 'Editor scroll argument object',
                description: "Property-value pairs that can be passed through this argument:\n					* 'to': A mandatory direction value.\n						```\n						'up', 'down'\n						```\n					* 'by': Unit to move. Default is computed based on 'to' value.\n						```\n						'line', 'wrappedLine', 'page', 'halfPage', 'editor'\n						```\n					* 'value': Number of units to move. Default is '1'.\n					* 'revealCursor': If 'true' reveals the cursor if it is outside view port.\n				",
                constraint: isEditorScrollArgs,
                schema: {
                    'type': 'object',
                    'required': [
                        'to'
                    ],
                    'properties': {
                        'to': {
                            'type': 'string',
                            'enum': [
                                'up',
                                'down'
                            ]
                        },
                        'by': {
                            'type': 'string',
                            'enum': [
                                'line',
                                'wrappedLine',
                                'page',
                                'halfPage',
                                'editor'
                            ]
                        },
                        'value': {
                            'type': 'number',
                            'default': 1
                        },
                        'revealCursor': {
                            'type': 'boolean'
                        }
                    }
                }
            }
        ]
    };
    /**
     * Directions in the view for editor scroll command.
     */ EditorScroll_.RawDirection = {
        Up: 'up',
        Right: 'right',
        Down: 'down',
        Left: 'left'
    };
    /**
     * Units for editor scroll 'by' argument
     */ EditorScroll_.RawUnit = {
        Line: 'line',
        WrappedLine: 'wrappedLine',
        Page: 'page',
        HalfPage: 'halfPage',
        Editor: 'editor',
        Column: 'column'
    };
    function parse(args) {
        let direction;
        switch(args.to){
            case EditorScroll_.RawDirection.Up:
                direction = 1 /* Direction.Up */ ;
                break;
            case EditorScroll_.RawDirection.Right:
                direction = 2 /* Direction.Right */ ;
                break;
            case EditorScroll_.RawDirection.Down:
                direction = 3 /* Direction.Down */ ;
                break;
            case EditorScroll_.RawDirection.Left:
                direction = 4 /* Direction.Left */ ;
                break;
            default:
                // Illegal arguments
                return null;
        }
        let unit;
        switch(args.by){
            case EditorScroll_.RawUnit.Line:
                unit = 1 /* Unit.Line */ ;
                break;
            case EditorScroll_.RawUnit.WrappedLine:
                unit = 2 /* Unit.WrappedLine */ ;
                break;
            case EditorScroll_.RawUnit.Page:
                unit = 3 /* Unit.Page */ ;
                break;
            case EditorScroll_.RawUnit.HalfPage:
                unit = 4 /* Unit.HalfPage */ ;
                break;
            case EditorScroll_.RawUnit.Editor:
                unit = 5 /* Unit.Editor */ ;
                break;
            case EditorScroll_.RawUnit.Column:
                unit = 6 /* Unit.Column */ ;
                break;
            default:
                unit = 2 /* Unit.WrappedLine */ ;
        }
        const value = Math.floor(args.value || 1);
        const revealCursor = !!args.revealCursor;
        return {
            direction: direction,
            unit: unit,
            value: value,
            revealCursor: revealCursor,
            select: !!args.select
        };
    }
    EditorScroll_.parse = parse;
})(EditorScroll_ || (EditorScroll_ = {}));
var RevealLine_;
(function(RevealLine_) {
    const isRevealLineArgs = function(arg) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"](arg)) {
            return false;
        }
        const reveaLineArg = arg;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"](reveaLineArg.lineNumber) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"](reveaLineArg.lineNumber)) {
            return false;
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"](reveaLineArg.at) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"](reveaLineArg.at)) {
            return false;
        }
        return true;
    };
    RevealLine_.metadata = {
        description: 'Reveal the given line at the given logical position',
        args: [
            {
                name: 'Reveal line argument object',
                description: "Property-value pairs that can be passed through this argument:\n					* 'lineNumber': A mandatory line number value.\n					* 'at': Logical position at which line has to be revealed.\n						```\n						'top', 'center', 'bottom'\n						```\n				",
                constraint: isRevealLineArgs,
                schema: {
                    'type': 'object',
                    'required': [
                        'lineNumber'
                    ],
                    'properties': {
                        'lineNumber': {
                            'type': [
                                'number',
                                'string'
                            ]
                        },
                        'at': {
                            'type': 'string',
                            'enum': [
                                'top',
                                'center',
                                'bottom'
                            ]
                        }
                    }
                }
            }
        ]
    };
    /**
     * Values for reveal line 'at' argument
     */ RevealLine_.RawAtArgument = {
        Top: 'top',
        Center: 'center',
        Bottom: 'bottom'
    };
})(RevealLine_ || (RevealLine_ = {}));
class EditorOrNativeTextInputCommand {
    _runEditorCommand(accessor, editor, args) {
        const result = this.runEditorCommand(accessor, editor, args);
        if (result) {
            return result;
        }
        return true;
    }
    constructor(target){
        // 1. handle case when focus is in editor.
        target.addImplementation(10000, 'code-editor', (accessor, args)=>{
            // Only if editor text focus (i.e. not if editor has widget focus).
            const focusedEditor = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"]).getFocusedCodeEditor();
            if (focusedEditor && focusedEditor.hasTextFocus()) {
                return this._runEditorCommand(accessor, focusedEditor, args);
            }
            return false;
        });
        // 2. handle case when focus is in some other `input` / `textarea`.
        target.addImplementation(1000, 'generic-dom-input-textarea', (accessor, args)=>{
            // Only if focused on an element that allows for entering text
            const activeElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])();
            if (activeElement && [
                'input',
                'textarea'
            ].indexOf(activeElement.tagName.toLowerCase()) >= 0) {
                this.runDOMCommand(activeElement);
                return true;
            }
            return false;
        });
        // 3. (default) handle case when focus is somewhere else.
        target.addImplementation(0, 'generic-dom', (accessor, args)=>{
            // Redirecting to active editor
            const activeEditor = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"]).getActiveCodeEditor();
            if (activeEditor) {
                activeEditor.focus();
                return this._runEditorCommand(accessor, activeEditor, args);
            }
            return false;
        });
    }
}
var CoreNavigationCommands;
(function(CoreNavigationCommands) {
    class BaseMoveToCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            viewModel.model.pushStackElement();
            const cursorStateChanged = viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].moveTo(viewModel, viewModel.getPrimaryCursorState(), this._inSelectionMode, args.position, args.viewPosition)
            ]);
            if (cursorStateChanged && args.revealType !== 2 /* NavigationCommandRevealType.None */ ) {
                viewModel.revealAllCursors(args.source, true, true);
            }
        }
        constructor(opts){
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
    }
    CoreNavigationCommands.MoveTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new BaseMoveToCommand({
        id: '_moveTo',
        inSelectionMode: false,
        precondition: undefined
    }));
    CoreNavigationCommands.MoveToSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new BaseMoveToCommand({
        id: '_moveToSelect',
        inSelectionMode: true,
        precondition: undefined
    }));
    class ColumnSelectCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            const result = this._getColumnSelectResult(viewModel, viewModel.getPrimaryCursorState(), viewModel.getCursorColumnSelectData(), args);
            if (result === null) {
                // invalid arguments
                return;
            }
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , result.viewStates.map((viewState)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursorCommon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorState"].fromViewState(viewState)));
            viewModel.setCursorColumnSelectData({
                isReal: true,
                fromViewLineNumber: result.fromLineNumber,
                fromViewVisualColumn: result.fromVisualColumn,
                toViewLineNumber: result.toLineNumber,
                toViewVisualColumn: result.toVisualColumn
            });
            if (result.reversed) {
                viewModel.revealTopMostCursor(args.source);
            } else {
                viewModel.revealBottomMostCursor(args.source);
            }
        }
    }
    CoreNavigationCommands.ColumnSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends ColumnSelectCommand {
        _getColumnSelectResult(viewModel, primary, prevColumnSelectData, args) {
            if (typeof args.position === 'undefined' || typeof args.viewPosition === 'undefined' || typeof args.mouseColumn === 'undefined') {
                return null;
            }
            // validate `args`
            const validatedPosition = viewModel.model.validatePosition(args.position);
            const validatedViewPosition = viewModel.coordinatesConverter.validateViewPosition(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"](args.viewPosition.lineNumber, args.viewPosition.column), validatedPosition);
            const fromViewLineNumber = args.doColumnSelect ? prevColumnSelectData.fromViewLineNumber : validatedViewPosition.lineNumber;
            const fromViewVisualColumn = args.doColumnSelect ? prevColumnSelectData.fromViewVisualColumn : args.mouseColumn - 1;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorColumnSelection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColumnSelection"].columnSelect(viewModel.cursorConfig, viewModel, fromViewLineNumber, fromViewVisualColumn, validatedViewPosition.lineNumber, args.mouseColumn - 1);
        }
        constructor(){
            super({
                id: 'columnSelect',
                precondition: undefined
            });
        }
    });
    CoreNavigationCommands.CursorColumnSelectLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends ColumnSelectCommand {
        _getColumnSelectResult(viewModel, primary, prevColumnSelectData, args) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorColumnSelection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColumnSelection"].columnSelectLeft(viewModel.cursorConfig, viewModel, prevColumnSelectData);
        }
        constructor(){
            super({
                id: 'cursorColumnSelectLeft',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                    primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 512 /* KeyMod.Alt */  | 15 /* KeyCode.LeftArrow */ ,
                    linux: {
                        primary: 0
                    }
                }
            });
        }
    });
    CoreNavigationCommands.CursorColumnSelectRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends ColumnSelectCommand {
        _getColumnSelectResult(viewModel, primary, prevColumnSelectData, args) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorColumnSelection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColumnSelection"].columnSelectRight(viewModel.cursorConfig, viewModel, prevColumnSelectData);
        }
        constructor(){
            super({
                id: 'cursorColumnSelectRight',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                    primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 512 /* KeyMod.Alt */  | 17 /* KeyCode.RightArrow */ ,
                    linux: {
                        primary: 0
                    }
                }
            });
        }
    });
    class ColumnSelectUpCommand extends ColumnSelectCommand {
        _getColumnSelectResult(viewModel, primary, prevColumnSelectData, args) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorColumnSelection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColumnSelection"].columnSelectUp(viewModel.cursorConfig, viewModel, prevColumnSelectData, this._isPaged);
        }
        constructor(opts){
            super(opts);
            this._isPaged = opts.isPaged;
        }
    }
    CoreNavigationCommands.CursorColumnSelectUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new ColumnSelectUpCommand({
        isPaged: false,
        id: 'cursorColumnSelectUp',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 512 /* KeyMod.Alt */  | 16 /* KeyCode.UpArrow */ ,
            linux: {
                primary: 0
            }
        }
    }));
    CoreNavigationCommands.CursorColumnSelectPageUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new ColumnSelectUpCommand({
        isPaged: true,
        id: 'cursorColumnSelectPageUp',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 512 /* KeyMod.Alt */  | 11 /* KeyCode.PageUp */ ,
            linux: {
                primary: 0
            }
        }
    }));
    class ColumnSelectDownCommand extends ColumnSelectCommand {
        _getColumnSelectResult(viewModel, primary, prevColumnSelectData, args) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorColumnSelection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColumnSelection"].columnSelectDown(viewModel.cursorConfig, viewModel, prevColumnSelectData, this._isPaged);
        }
        constructor(opts){
            super(opts);
            this._isPaged = opts.isPaged;
        }
    }
    CoreNavigationCommands.CursorColumnSelectDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new ColumnSelectDownCommand({
        isPaged: false,
        id: 'cursorColumnSelectDown',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 512 /* KeyMod.Alt */  | 18 /* KeyCode.DownArrow */ ,
            linux: {
                primary: 0
            }
        }
    }));
    CoreNavigationCommands.CursorColumnSelectPageDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new ColumnSelectDownCommand({
        isPaged: true,
        id: 'cursorColumnSelectPageDown',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 512 /* KeyMod.Alt */  | 12 /* KeyCode.PageDown */ ,
            linux: {
                primary: 0
            }
        }
    }));
    class CursorMoveImpl extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMove"].parse(args);
            if (!parsed) {
                // illegal arguments
                return;
            }
            this._runCursorMove(viewModel, args.source, parsed);
        }
        _runCursorMove(viewModel, source, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(source, 3 /* CursorChangeReason.Explicit */ , CursorMoveImpl._move(viewModel, viewModel.getCursorStates(), args));
            viewModel.revealAllCursors(source, true);
        }
        static _move(viewModel, cursors, args) {
            const inSelectionMode = args.select;
            const value = args.value;
            switch(args.direction){
                case 0 /* CursorMove_.Direction.Left */ :
                case 1 /* CursorMove_.Direction.Right */ :
                case 2 /* CursorMove_.Direction.Up */ :
                case 3 /* CursorMove_.Direction.Down */ :
                case 4 /* CursorMove_.Direction.PrevBlankLine */ :
                case 5 /* CursorMove_.Direction.NextBlankLine */ :
                case 6 /* CursorMove_.Direction.WrappedLineStart */ :
                case 7 /* CursorMove_.Direction.WrappedLineFirstNonWhitespaceCharacter */ :
                case 8 /* CursorMove_.Direction.WrappedLineColumnCenter */ :
                case 9 /* CursorMove_.Direction.WrappedLineEnd */ :
                case 10 /* CursorMove_.Direction.WrappedLineLastNonWhitespaceCharacter */ :
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].simpleMove(viewModel, cursors, args.direction, inSelectionMode, value, args.unit);
                case 11 /* CursorMove_.Direction.ViewPortTop */ :
                case 13 /* CursorMove_.Direction.ViewPortBottom */ :
                case 12 /* CursorMove_.Direction.ViewPortCenter */ :
                case 14 /* CursorMove_.Direction.ViewPortIfOutside */ :
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].viewportMove(viewModel, cursors, args.direction, inSelectionMode, value);
                default:
                    return null;
            }
        }
        constructor(){
            super({
                id: 'cursorMove',
                precondition: undefined,
                metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMove"].metadata
            });
        }
    }
    CoreNavigationCommands.CursorMoveImpl = CursorMoveImpl;
    CoreNavigationCommands.CursorMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveImpl());
    class CursorMoveBasedCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, dynamicArgs) {
            let args = this._staticArgs;
            if (this._staticArgs.value === -1 /* Constants.PAGE_SIZE_MARKER */ ) {
                // -1 is a marker for page size
                args = {
                    direction: this._staticArgs.direction,
                    unit: this._staticArgs.unit,
                    select: this._staticArgs.select,
                    value: dynamicArgs.pageSize || viewModel.cursorConfig.pageSize
                };
            }
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(dynamicArgs.source, 3 /* CursorChangeReason.Explicit */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].simpleMove(viewModel, viewModel.getCursorStates(), args.direction, args.select, args.value, args.unit));
            viewModel.revealAllCursors(dynamicArgs.source, true);
        }
        constructor(opts){
            super(opts);
            this._staticArgs = opts.args;
        }
    }
    CoreNavigationCommands.CursorLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveBasedCommand({
        args: {
            direction: 0 /* CursorMove_.Direction.Left */ ,
            unit: 0 /* CursorMove_.Unit.None */ ,
            select: false,
            value: 1
        },
        id: 'cursorLeft',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 15 /* KeyCode.LeftArrow */ ,
            mac: {
                primary: 15 /* KeyCode.LeftArrow */ ,
                secondary: [
                    256 /* KeyMod.WinCtrl */  | 32 /* KeyCode.KeyB */ 
                ]
            }
        }
    }));
    CoreNavigationCommands.CursorLeftSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveBasedCommand({
        args: {
            direction: 0 /* CursorMove_.Direction.Left */ ,
            unit: 0 /* CursorMove_.Unit.None */ ,
            select: true,
            value: 1
        },
        id: 'cursorLeftSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 1024 /* KeyMod.Shift */  | 15 /* KeyCode.LeftArrow */ 
        }
    }));
    CoreNavigationCommands.CursorRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveBasedCommand({
        args: {
            direction: 1 /* CursorMove_.Direction.Right */ ,
            unit: 0 /* CursorMove_.Unit.None */ ,
            select: false,
            value: 1
        },
        id: 'cursorRight',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 17 /* KeyCode.RightArrow */ ,
            mac: {
                primary: 17 /* KeyCode.RightArrow */ ,
                secondary: [
                    256 /* KeyMod.WinCtrl */  | 36 /* KeyCode.KeyF */ 
                ]
            }
        }
    }));
    CoreNavigationCommands.CursorRightSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveBasedCommand({
        args: {
            direction: 1 /* CursorMove_.Direction.Right */ ,
            unit: 0 /* CursorMove_.Unit.None */ ,
            select: true,
            value: 1
        },
        id: 'cursorRightSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 1024 /* KeyMod.Shift */  | 17 /* KeyCode.RightArrow */ 
        }
    }));
    CoreNavigationCommands.CursorUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveBasedCommand({
        args: {
            direction: 2 /* CursorMove_.Direction.Up */ ,
            unit: 2 /* CursorMove_.Unit.WrappedLine */ ,
            select: false,
            value: 1
        },
        id: 'cursorUp',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 16 /* KeyCode.UpArrow */ ,
            mac: {
                primary: 16 /* KeyCode.UpArrow */ ,
                secondary: [
                    256 /* KeyMod.WinCtrl */  | 46 /* KeyCode.KeyP */ 
                ]
            }
        }
    }));
    CoreNavigationCommands.CursorUpSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveBasedCommand({
        args: {
            direction: 2 /* CursorMove_.Direction.Up */ ,
            unit: 2 /* CursorMove_.Unit.WrappedLine */ ,
            select: true,
            value: 1
        },
        id: 'cursorUpSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 1024 /* KeyMod.Shift */  | 16 /* KeyCode.UpArrow */ ,
            secondary: [
                2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 16 /* KeyCode.UpArrow */ 
            ],
            mac: {
                primary: 1024 /* KeyMod.Shift */  | 16 /* KeyCode.UpArrow */ 
            },
            linux: {
                primary: 1024 /* KeyMod.Shift */  | 16 /* KeyCode.UpArrow */ 
            }
        }
    }));
    CoreNavigationCommands.CursorPageUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveBasedCommand({
        args: {
            direction: 2 /* CursorMove_.Direction.Up */ ,
            unit: 2 /* CursorMove_.Unit.WrappedLine */ ,
            select: false,
            value: -1 /* Constants.PAGE_SIZE_MARKER */ 
        },
        id: 'cursorPageUp',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 11 /* KeyCode.PageUp */ 
        }
    }));
    CoreNavigationCommands.CursorPageUpSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveBasedCommand({
        args: {
            direction: 2 /* CursorMove_.Direction.Up */ ,
            unit: 2 /* CursorMove_.Unit.WrappedLine */ ,
            select: true,
            value: -1 /* Constants.PAGE_SIZE_MARKER */ 
        },
        id: 'cursorPageUpSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 1024 /* KeyMod.Shift */  | 11 /* KeyCode.PageUp */ 
        }
    }));
    CoreNavigationCommands.CursorDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveBasedCommand({
        args: {
            direction: 3 /* CursorMove_.Direction.Down */ ,
            unit: 2 /* CursorMove_.Unit.WrappedLine */ ,
            select: false,
            value: 1
        },
        id: 'cursorDown',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 18 /* KeyCode.DownArrow */ ,
            mac: {
                primary: 18 /* KeyCode.DownArrow */ ,
                secondary: [
                    256 /* KeyMod.WinCtrl */  | 44 /* KeyCode.KeyN */ 
                ]
            }
        }
    }));
    CoreNavigationCommands.CursorDownSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveBasedCommand({
        args: {
            direction: 3 /* CursorMove_.Direction.Down */ ,
            unit: 2 /* CursorMove_.Unit.WrappedLine */ ,
            select: true,
            value: 1
        },
        id: 'cursorDownSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 1024 /* KeyMod.Shift */  | 18 /* KeyCode.DownArrow */ ,
            secondary: [
                2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 18 /* KeyCode.DownArrow */ 
            ],
            mac: {
                primary: 1024 /* KeyMod.Shift */  | 18 /* KeyCode.DownArrow */ 
            },
            linux: {
                primary: 1024 /* KeyMod.Shift */  | 18 /* KeyCode.DownArrow */ 
            }
        }
    }));
    CoreNavigationCommands.CursorPageDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveBasedCommand({
        args: {
            direction: 3 /* CursorMove_.Direction.Down */ ,
            unit: 2 /* CursorMove_.Unit.WrappedLine */ ,
            select: false,
            value: -1 /* Constants.PAGE_SIZE_MARKER */ 
        },
        id: 'cursorPageDown',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 12 /* KeyCode.PageDown */ 
        }
    }));
    CoreNavigationCommands.CursorPageDownSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new CursorMoveBasedCommand({
        args: {
            direction: 3 /* CursorMove_.Direction.Down */ ,
            unit: 2 /* CursorMove_.Unit.WrappedLine */ ,
            select: true,
            value: -1 /* Constants.PAGE_SIZE_MARKER */ 
        },
        id: 'cursorPageDownSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 1024 /* KeyMod.Shift */  | 12 /* KeyCode.PageDown */ 
        }
    }));
    CoreNavigationCommands.CreateCursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            let newState;
            if (args.wholeLine) {
                newState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].line(viewModel, viewModel.getPrimaryCursorState(), false, args.position, args.viewPosition);
            } else {
                newState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].moveTo(viewModel, viewModel.getPrimaryCursorState(), false, args.position, args.viewPosition);
            }
            const states = viewModel.getCursorStates();
            // Check if we should remove a cursor (sort of like a toggle)
            if (states.length > 1) {
                const newModelPosition = newState.modelState ? newState.modelState.position : null;
                const newViewPosition = newState.viewState ? newState.viewState.position : null;
                for(let i = 0, len = states.length; i < len; i++){
                    const state = states[i];
                    if (newModelPosition && !state.modelState.selection.containsPosition(newModelPosition)) {
                        continue;
                    }
                    if (newViewPosition && !state.viewState.selection.containsPosition(newViewPosition)) {
                        continue;
                    }
                    // => Remove the cursor
                    states.splice(i, 1);
                    viewModel.model.pushStackElement();
                    viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , states);
                    return;
                }
            }
            // => Add the new cursor
            states.push(newState);
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , states);
        }
        constructor(){
            super({
                id: 'createCursor',
                precondition: undefined
            });
        }
    });
    CoreNavigationCommands.LastCursorMoveToSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            const lastAddedCursorIndex = viewModel.getLastAddedCursorIndex();
            const states = viewModel.getCursorStates();
            const newStates = states.slice(0);
            newStates[lastAddedCursorIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].moveTo(viewModel, states[lastAddedCursorIndex], true, args.position, args.viewPosition);
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , newStates);
        }
        constructor(){
            super({
                id: '_lastCursorMoveToSelect',
                precondition: undefined
            });
        }
    });
    class HomeCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].moveToBeginningOfLine(viewModel, viewModel.getCursorStates(), this._inSelectionMode));
            viewModel.revealAllCursors(args.source, true);
        }
        constructor(opts){
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
    }
    CoreNavigationCommands.CursorHome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new HomeCommand({
        inSelectionMode: false,
        id: 'cursorHome',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 14 /* KeyCode.Home */ ,
            mac: {
                primary: 14 /* KeyCode.Home */ ,
                secondary: [
                    2048 /* KeyMod.CtrlCmd */  | 15 /* KeyCode.LeftArrow */ 
                ]
            }
        }
    }));
    CoreNavigationCommands.CursorHomeSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new HomeCommand({
        inSelectionMode: true,
        id: 'cursorHomeSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 1024 /* KeyMod.Shift */  | 14 /* KeyCode.Home */ ,
            mac: {
                primary: 1024 /* KeyMod.Shift */  | 14 /* KeyCode.Home */ ,
                secondary: [
                    2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 15 /* KeyCode.LeftArrow */ 
                ]
            }
        }
    }));
    class LineStartCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , this._exec(viewModel.getCursorStates()));
            viewModel.revealAllCursors(args.source, true);
        }
        _exec(cursors) {
            const result = [];
            for(let i = 0, len = cursors.length; i < len; i++){
                const cursor = cursors[i];
                const lineNumber = cursor.modelState.position.lineNumber;
                result[i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursorCommon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorState"].fromModelState(cursor.modelState.move(this._inSelectionMode, lineNumber, 1, 0));
            }
            return result;
        }
        constructor(opts){
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
    }
    CoreNavigationCommands.CursorLineStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new LineStartCommand({
        inSelectionMode: false,
        id: 'cursorLineStart',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 0,
            mac: {
                primary: 256 /* KeyMod.WinCtrl */  | 31 /* KeyCode.KeyA */ 
            }
        }
    }));
    CoreNavigationCommands.CursorLineStartSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new LineStartCommand({
        inSelectionMode: true,
        id: 'cursorLineStartSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 0,
            mac: {
                primary: 256 /* KeyMod.WinCtrl */  | 1024 /* KeyMod.Shift */  | 31 /* KeyCode.KeyA */ 
            }
        }
    }));
    class EndCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].moveToEndOfLine(viewModel, viewModel.getCursorStates(), this._inSelectionMode, args.sticky || false));
            viewModel.revealAllCursors(args.source, true);
        }
        constructor(opts){
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
    }
    CoreNavigationCommands.CursorEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new EndCommand({
        inSelectionMode: false,
        id: 'cursorEnd',
        precondition: undefined,
        kbOpts: {
            args: {
                sticky: false
            },
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 13 /* KeyCode.End */ ,
            mac: {
                primary: 13 /* KeyCode.End */ ,
                secondary: [
                    2048 /* KeyMod.CtrlCmd */  | 17 /* KeyCode.RightArrow */ 
                ]
            }
        },
        metadata: {
            description: "Go to End",
            args: [
                {
                    name: 'args',
                    schema: {
                        type: 'object',
                        properties: {
                            'sticky': {
                                description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('stickydesc', "Stick to the end even when going to longer lines"),
                                type: 'boolean',
                                default: false
                            }
                        }
                    }
                }
            ]
        }
    }));
    CoreNavigationCommands.CursorEndSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new EndCommand({
        inSelectionMode: true,
        id: 'cursorEndSelect',
        precondition: undefined,
        kbOpts: {
            args: {
                sticky: false
            },
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 1024 /* KeyMod.Shift */  | 13 /* KeyCode.End */ ,
            mac: {
                primary: 1024 /* KeyMod.Shift */  | 13 /* KeyCode.End */ ,
                secondary: [
                    2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 17 /* KeyCode.RightArrow */ 
                ]
            }
        },
        metadata: {
            description: "Select to End",
            args: [
                {
                    name: 'args',
                    schema: {
                        type: 'object',
                        properties: {
                            'sticky': {
                                description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('stickydesc', "Stick to the end even when going to longer lines"),
                                type: 'boolean',
                                default: false
                            }
                        }
                    }
                }
            ]
        }
    }));
    class LineEndCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , this._exec(viewModel, viewModel.getCursorStates()));
            viewModel.revealAllCursors(args.source, true);
        }
        _exec(viewModel, cursors) {
            const result = [];
            for(let i = 0, len = cursors.length; i < len; i++){
                const cursor = cursors[i];
                const lineNumber = cursor.modelState.position.lineNumber;
                const maxColumn = viewModel.model.getLineMaxColumn(lineNumber);
                result[i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursorCommon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorState"].fromModelState(cursor.modelState.move(this._inSelectionMode, lineNumber, maxColumn, 0));
            }
            return result;
        }
        constructor(opts){
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
    }
    CoreNavigationCommands.CursorLineEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new LineEndCommand({
        inSelectionMode: false,
        id: 'cursorLineEnd',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 0,
            mac: {
                primary: 256 /* KeyMod.WinCtrl */  | 35 /* KeyCode.KeyE */ 
            }
        }
    }));
    CoreNavigationCommands.CursorLineEndSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new LineEndCommand({
        inSelectionMode: true,
        id: 'cursorLineEndSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 0,
            mac: {
                primary: 256 /* KeyMod.WinCtrl */  | 1024 /* KeyMod.Shift */  | 35 /* KeyCode.KeyE */ 
            }
        }
    }));
    class TopCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].moveToBeginningOfBuffer(viewModel, viewModel.getCursorStates(), this._inSelectionMode));
            viewModel.revealAllCursors(args.source, true);
        }
        constructor(opts){
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
    }
    CoreNavigationCommands.CursorTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new TopCommand({
        inSelectionMode: false,
        id: 'cursorTop',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */  | 14 /* KeyCode.Home */ ,
            mac: {
                primary: 2048 /* KeyMod.CtrlCmd */  | 16 /* KeyCode.UpArrow */ 
            }
        }
    }));
    CoreNavigationCommands.CursorTopSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new TopCommand({
        inSelectionMode: true,
        id: 'cursorTopSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 14 /* KeyCode.Home */ ,
            mac: {
                primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 16 /* KeyCode.UpArrow */ 
            }
        }
    }));
    class BottomCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].moveToEndOfBuffer(viewModel, viewModel.getCursorStates(), this._inSelectionMode));
            viewModel.revealAllCursors(args.source, true);
        }
        constructor(opts){
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
    }
    CoreNavigationCommands.CursorBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new BottomCommand({
        inSelectionMode: false,
        id: 'cursorBottom',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */  | 13 /* KeyCode.End */ ,
            mac: {
                primary: 2048 /* KeyMod.CtrlCmd */  | 18 /* KeyCode.DownArrow */ 
            }
        }
    }));
    CoreNavigationCommands.CursorBottomSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new BottomCommand({
        inSelectionMode: true,
        id: 'cursorBottomSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 13 /* KeyCode.End */ ,
            mac: {
                primary: 2048 /* KeyMod.CtrlCmd */  | 1024 /* KeyMod.Shift */  | 18 /* KeyCode.DownArrow */ 
            }
        }
    }));
    class EditorScrollImpl extends CoreEditorCommand {
        determineScrollMethod(args) {
            const horizontalUnits = [
                6 /* EditorScroll_.Unit.Column */ 
            ];
            const verticalUnits = [
                1 /* EditorScroll_.Unit.Line */ ,
                2 /* EditorScroll_.Unit.WrappedLine */ ,
                3 /* EditorScroll_.Unit.Page */ ,
                4 /* EditorScroll_.Unit.HalfPage */ ,
                5 /* EditorScroll_.Unit.Editor */ ,
                6 /* EditorScroll_.Unit.Column */ 
            ];
            const horizontalDirections = [
                4 /* EditorScroll_.Direction.Left */ ,
                2 /* EditorScroll_.Direction.Right */ 
            ];
            const verticalDirections = [
                1 /* EditorScroll_.Direction.Up */ ,
                3 /* EditorScroll_.Direction.Down */ 
            ];
            if (horizontalUnits.includes(args.unit) && horizontalDirections.includes(args.direction)) {
                return this._runHorizontalEditorScroll.bind(this);
            }
            if (verticalUnits.includes(args.unit) && verticalDirections.includes(args.direction)) {
                return this._runVerticalEditorScroll.bind(this);
            }
            return null;
        }
        runCoreEditorCommand(viewModel, args) {
            const parsed = EditorScroll_.parse(args);
            if (!parsed) {
                // illegal arguments
                return;
            }
            const runEditorScroll = this.determineScrollMethod(parsed);
            if (!runEditorScroll) {
                // Incompatible unit and direction
                return;
            }
            runEditorScroll(viewModel, args.source, parsed);
        }
        _runVerticalEditorScroll(viewModel, source, args) {
            const desiredScrollTop = this._computeDesiredScrollTop(viewModel, args);
            if (args.revealCursor) {
                // must ensure cursor is in new visible range
                const desiredVisibleViewRange = viewModel.getCompletelyVisibleViewRangeAtScrollTop(desiredScrollTop);
                viewModel.setCursorStates(source, 3 /* CursorChangeReason.Explicit */ , [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].findPositionInViewportIfOutside(viewModel, viewModel.getPrimaryCursorState(), desiredVisibleViewRange, args.select)
                ]);
            }
            viewModel.viewLayout.setScrollPosition({
                scrollTop: desiredScrollTop
            }, 0 /* ScrollType.Smooth */ );
        }
        _computeDesiredScrollTop(viewModel, args) {
            if (args.unit === 1 /* EditorScroll_.Unit.Line */ ) {
                // scrolling by model lines
                const futureViewport = viewModel.viewLayout.getFutureViewport();
                const visibleViewRange = viewModel.getCompletelyVisibleViewRangeAtScrollTop(futureViewport.top);
                const visibleModelRange = viewModel.coordinatesConverter.convertViewRangeToModelRange(visibleViewRange);
                let desiredTopModelLineNumber;
                if (args.direction === 1 /* EditorScroll_.Direction.Up */ ) {
                    // must go x model lines up
                    desiredTopModelLineNumber = Math.max(1, visibleModelRange.startLineNumber - args.value);
                } else {
                    // must go x model lines down
                    desiredTopModelLineNumber = Math.min(viewModel.model.getLineCount(), visibleModelRange.startLineNumber + args.value);
                }
                const viewPosition = viewModel.coordinatesConverter.convertModelPositionToViewPosition(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$position$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"](desiredTopModelLineNumber, 1));
                return viewModel.viewLayout.getVerticalOffsetForLineNumber(viewPosition.lineNumber);
            }
            if (args.unit === 5 /* EditorScroll_.Unit.Editor */ ) {
                let desiredTopModelLineNumber = 0;
                if (args.direction === 3 /* EditorScroll_.Direction.Down */ ) {
                    desiredTopModelLineNumber = viewModel.model.getLineCount() - viewModel.cursorConfig.pageSize;
                }
                return viewModel.viewLayout.getVerticalOffsetForLineNumber(desiredTopModelLineNumber);
            }
            let noOfLines;
            if (args.unit === 3 /* EditorScroll_.Unit.Page */ ) {
                noOfLines = viewModel.cursorConfig.pageSize * args.value;
            } else if (args.unit === 4 /* EditorScroll_.Unit.HalfPage */ ) {
                noOfLines = Math.round(viewModel.cursorConfig.pageSize / 2) * args.value;
            } else {
                noOfLines = args.value;
            }
            const deltaLines = (args.direction === 1 /* EditorScroll_.Direction.Up */  ? -1 : 1) * noOfLines;
            return viewModel.viewLayout.getCurrentScrollTop() + deltaLines * viewModel.cursorConfig.lineHeight;
        }
        _runHorizontalEditorScroll(viewModel, source, args) {
            const desiredScrollLeft = this._computeDesiredScrollLeft(viewModel, args);
            viewModel.viewLayout.setScrollPosition({
                scrollLeft: desiredScrollLeft
            }, 0 /* ScrollType.Smooth */ );
        }
        _computeDesiredScrollLeft(viewModel, args) {
            const deltaColumns = (args.direction === 4 /* EditorScroll_.Direction.Left */  ? -1 : 1) * args.value;
            return viewModel.viewLayout.getCurrentScrollLeft() + deltaColumns * viewModel.cursorConfig.typicalHalfwidthCharacterWidth;
        }
        constructor(){
            super({
                id: 'editorScroll',
                precondition: undefined,
                metadata: EditorScroll_.metadata
            });
        }
    }
    CoreNavigationCommands.EditorScrollImpl = EditorScrollImpl;
    CoreNavigationCommands.EditorScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new EditorScrollImpl());
    CoreNavigationCommands.ScrollLineUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Up,
                by: EditorScroll_.RawUnit.WrappedLine,
                value: 1,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
        constructor(){
            super({
                id: 'scrollLineUp',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                    primary: 2048 /* KeyMod.CtrlCmd */  | 16 /* KeyCode.UpArrow */ ,
                    mac: {
                        primary: 256 /* KeyMod.WinCtrl */  | 11 /* KeyCode.PageUp */ 
                    }
                }
            });
        }
    });
    CoreNavigationCommands.ScrollPageUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Up,
                by: EditorScroll_.RawUnit.Page,
                value: 1,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
        constructor(){
            super({
                id: 'scrollPageUp',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                    primary: 2048 /* KeyMod.CtrlCmd */  | 11 /* KeyCode.PageUp */ ,
                    win: {
                        primary: 512 /* KeyMod.Alt */  | 11 /* KeyCode.PageUp */ 
                    },
                    linux: {
                        primary: 512 /* KeyMod.Alt */  | 11 /* KeyCode.PageUp */ 
                    }
                }
            });
        }
    });
    CoreNavigationCommands.ScrollEditorTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Up,
                by: EditorScroll_.RawUnit.Editor,
                value: 1,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
        constructor(){
            super({
                id: 'scrollEditorTop',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus
                }
            });
        }
    });
    CoreNavigationCommands.ScrollLineDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Down,
                by: EditorScroll_.RawUnit.WrappedLine,
                value: 1,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
        constructor(){
            super({
                id: 'scrollLineDown',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                    primary: 2048 /* KeyMod.CtrlCmd */  | 18 /* KeyCode.DownArrow */ ,
                    mac: {
                        primary: 256 /* KeyMod.WinCtrl */  | 12 /* KeyCode.PageDown */ 
                    }
                }
            });
        }
    });
    CoreNavigationCommands.ScrollPageDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Down,
                by: EditorScroll_.RawUnit.Page,
                value: 1,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
        constructor(){
            super({
                id: 'scrollPageDown',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                    primary: 2048 /* KeyMod.CtrlCmd */  | 12 /* KeyCode.PageDown */ ,
                    win: {
                        primary: 512 /* KeyMod.Alt */  | 12 /* KeyCode.PageDown */ 
                    },
                    linux: {
                        primary: 512 /* KeyMod.Alt */  | 12 /* KeyCode.PageDown */ 
                    }
                }
            });
        }
    });
    CoreNavigationCommands.ScrollEditorBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Down,
                by: EditorScroll_.RawUnit.Editor,
                value: 1,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
        constructor(){
            super({
                id: 'scrollEditorBottom',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus
                }
            });
        }
    });
    CoreNavigationCommands.ScrollLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Left,
                by: EditorScroll_.RawUnit.Column,
                value: 2,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
        constructor(){
            super({
                id: 'scrollLeft',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus
                }
            });
        }
    });
    CoreNavigationCommands.ScrollRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Right,
                by: EditorScroll_.RawUnit.Column,
                value: 2,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
        constructor(){
            super({
                id: 'scrollRight',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus
                }
            });
        }
    });
    class WordCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].word(viewModel, viewModel.getPrimaryCursorState(), this._inSelectionMode, args.position)
            ]);
            if (args.revealType !== 2 /* NavigationCommandRevealType.None */ ) {
                viewModel.revealAllCursors(args.source, true, true);
            }
        }
        constructor(opts){
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
    }
    CoreNavigationCommands.WordSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new WordCommand({
        inSelectionMode: false,
        id: '_wordSelect',
        precondition: undefined
    }));
    CoreNavigationCommands.WordSelectDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new WordCommand({
        inSelectionMode: true,
        id: '_wordSelectDrag',
        precondition: undefined
    }));
    CoreNavigationCommands.LastCursorWordSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            const lastAddedCursorIndex = viewModel.getLastAddedCursorIndex();
            const states = viewModel.getCursorStates();
            const newStates = states.slice(0);
            const lastAddedState = states[lastAddedCursorIndex];
            newStates[lastAddedCursorIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].word(viewModel, lastAddedState, lastAddedState.modelState.hasSelection(), args.position);
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , newStates);
        }
        constructor(){
            super({
                id: 'lastCursorWordSelect',
                precondition: undefined
            });
        }
    });
    class LineCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].line(viewModel, viewModel.getPrimaryCursorState(), this._inSelectionMode, args.position, args.viewPosition)
            ]);
            if (args.revealType !== 2 /* NavigationCommandRevealType.None */ ) {
                viewModel.revealAllCursors(args.source, false, true);
            }
        }
        constructor(opts){
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
    }
    CoreNavigationCommands.LineSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new LineCommand({
        inSelectionMode: false,
        id: '_lineSelect',
        precondition: undefined
    }));
    CoreNavigationCommands.LineSelectDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new LineCommand({
        inSelectionMode: true,
        id: '_lineSelectDrag',
        precondition: undefined
    }));
    class LastCursorLineCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            const lastAddedCursorIndex = viewModel.getLastAddedCursorIndex();
            const states = viewModel.getCursorStates();
            const newStates = states.slice(0);
            newStates[lastAddedCursorIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].line(viewModel, states[lastAddedCursorIndex], this._inSelectionMode, args.position, args.viewPosition);
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , newStates);
        }
        constructor(opts){
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
    }
    CoreNavigationCommands.LastCursorLineSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new LastCursorLineCommand({
        inSelectionMode: false,
        id: 'lastCursorLineSelect',
        precondition: undefined
    }));
    CoreNavigationCommands.LastCursorLineSelectDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new LastCursorLineCommand({
        inSelectionMode: true,
        id: 'lastCursorLineSelectDrag',
        precondition: undefined
    }));
    CoreNavigationCommands.CancelSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].cancelSelection(viewModel, viewModel.getPrimaryCursorState())
            ]);
            viewModel.revealAllCursors(args.source, true);
        }
        constructor(){
            super({
                id: 'cancelSelection',
                precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasNonEmptySelection,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                    primary: 9 /* KeyCode.Escape */ ,
                    secondary: [
                        1024 /* KeyMod.Shift */  | 9 /* KeyCode.Escape */ 
                    ]
                }
            });
        }
    });
    CoreNavigationCommands.RemoveSecondaryCursors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , [
                viewModel.getPrimaryCursorState()
            ]);
            viewModel.revealAllCursors(args.source, true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["status"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('removedCursor', "Removed secondary cursors"));
        }
        constructor(){
            super({
                id: 'removeSecondaryCursors',
                precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].hasMultipleSelections,
                kbOpts: {
                    weight: CORE_WEIGHT + 1,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                    primary: 9 /* KeyCode.Escape */ ,
                    secondary: [
                        1024 /* KeyMod.Shift */  | 9 /* KeyCode.Escape */ 
                    ]
                }
            });
        }
    });
    CoreNavigationCommands.RevealLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            const revealLineArg = args;
            const lineNumberArg = revealLineArg.lineNumber || 0;
            let lineNumber = typeof lineNumberArg === 'number' ? lineNumberArg + 1 : parseInt(lineNumberArg) + 1;
            if (lineNumber < 1) {
                lineNumber = 1;
            }
            const lineCount = viewModel.model.getLineCount();
            if (lineNumber > lineCount) {
                lineNumber = lineCount;
            }
            const range = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$core$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"](lineNumber, 1, lineNumber, viewModel.model.getLineMaxColumn(lineNumber));
            let revealAt = 0 /* VerticalRevealType.Simple */ ;
            if (revealLineArg.at) {
                switch(revealLineArg.at){
                    case RevealLine_.RawAtArgument.Top:
                        revealAt = 3 /* VerticalRevealType.Top */ ;
                        break;
                    case RevealLine_.RawAtArgument.Center:
                        revealAt = 1 /* VerticalRevealType.Center */ ;
                        break;
                    case RevealLine_.RawAtArgument.Bottom:
                        revealAt = 4 /* VerticalRevealType.Bottom */ ;
                        break;
                    default:
                        break;
                }
            }
            const viewRange = viewModel.coordinatesConverter.convertModelRangeToViewRange(range);
            viewModel.revealRange(args.source, false, viewRange, revealAt, 0 /* ScrollType.Smooth */ );
        }
        constructor(){
            super({
                id: 'revealLine',
                precondition: undefined,
                metadata: RevealLine_.metadata
            });
        }
    });
    CoreNavigationCommands.SelectAll = new class extends EditorOrNativeTextInputCommand {
        runDOMCommand(activeElement) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"]) {
                activeElement.focus();
                activeElement.select();
            }
            activeElement.ownerDocument.execCommand('selectAll');
        }
        runEditorCommand(accessor, editor, args) {
            const viewModel = editor._getViewModel();
            if (!viewModel) {
                // the editor has no view => has no cursors
                return;
            }
            this.runCoreEditorCommand(viewModel, args);
        }
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates('keyboard', 3 /* CursorChangeReason.Explicit */ , [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorMoveCommands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorMoveCommands"].selectAll(viewModel, viewModel.getPrimaryCursorState())
            ]);
        }
        constructor(){
            super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectAllCommand"]);
        }
    }();
    CoreNavigationCommands.SetSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            if (!args.selection) {
                return;
            }
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */ , [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursorCommon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorState"].fromModelSelection(args.selection)
            ]);
        }
        constructor(){
            super({
                id: 'setSelection',
                precondition: undefined
            });
        }
    });
})(CoreNavigationCommands || (CoreNavigationCommands = {}));
const columnSelectionCondition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].columnSelection);
function registerColumnSelection(id, keybinding) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$keybinding$2f$common$2f$keybindingsRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeybindingsRegistry"].registerKeybindingRule({
        id: id,
        primary: keybinding,
        when: columnSelectionCondition,
        weight: CORE_WEIGHT + 1
    });
}
registerColumnSelection(CoreNavigationCommands.CursorColumnSelectLeft.id, 1024 /* KeyMod.Shift */  | 15 /* KeyCode.LeftArrow */ );
registerColumnSelection(CoreNavigationCommands.CursorColumnSelectRight.id, 1024 /* KeyMod.Shift */  | 17 /* KeyCode.RightArrow */ );
registerColumnSelection(CoreNavigationCommands.CursorColumnSelectUp.id, 1024 /* KeyMod.Shift */  | 16 /* KeyCode.UpArrow */ );
registerColumnSelection(CoreNavigationCommands.CursorColumnSelectPageUp.id, 1024 /* KeyMod.Shift */  | 11 /* KeyCode.PageUp */ );
registerColumnSelection(CoreNavigationCommands.CursorColumnSelectDown.id, 1024 /* KeyMod.Shift */  | 18 /* KeyCode.DownArrow */ );
registerColumnSelection(CoreNavigationCommands.CursorColumnSelectPageDown.id, 1024 /* KeyMod.Shift */  | 12 /* KeyCode.PageDown */ );
function registerCommand(command) {
    command.register();
    return command;
}
var CoreEditingCommands;
(function(CoreEditingCommands) {
    class CoreEditingCommand extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorCommand"] {
        runEditorCommand(accessor, editor, args) {
            const viewModel = editor._getViewModel();
            if (!viewModel) {
                // the editor has no view => has no cursors
                return;
            }
            this.runCoreEditingCommand(editor, viewModel, args || {});
        }
    }
    CoreEditingCommands.CoreEditingCommand = CoreEditingCommand;
    CoreEditingCommands.LineBreakInsert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditingCommand {
        runCoreEditingCommand(editor, viewModel, args) {
            editor.pushUndoStop();
            editor.executeCommands(this.id, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorTypeEditOperations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnterOperation"].lineBreakInsert(viewModel.cursorConfig, viewModel.model, viewModel.getCursorStates().map((s)=>s.modelState.selection)));
        }
        constructor(){
            super({
                id: 'lineBreakInsert',
                precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                    primary: 0,
                    mac: {
                        primary: 256 /* KeyMod.WinCtrl */  | 45 /* KeyCode.KeyO */ 
                    }
                }
            });
        }
    });
    CoreEditingCommands.Outdent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditingCommand {
        runCoreEditingCommand(editor, viewModel, args) {
            editor.pushUndoStop();
            editor.executeCommands(this.id, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorTypeOperations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOperations"].outdent(viewModel.cursorConfig, viewModel.model, viewModel.getCursorStates().map((s)=>s.modelState.selection)));
            editor.pushUndoStop();
        }
        constructor(){
            super({
                id: 'outdent',
                precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].tabDoesNotMoveFocus),
                    primary: 1024 /* KeyMod.Shift */  | 2 /* KeyCode.Tab */ 
                }
            });
        }
    });
    CoreEditingCommands.Tab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditingCommand {
        runCoreEditingCommand(editor, viewModel, args) {
            editor.pushUndoStop();
            editor.executeCommands(this.id, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorTypeOperations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeOperations"].tab(viewModel.cursorConfig, viewModel.model, viewModel.getCursorStates().map((s)=>s.modelState.selection)));
            editor.pushUndoStop();
        }
        constructor(){
            super({
                id: 'tab',
                precondition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].writable,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$platform$2f$contextkey$2f$common$2f$contextkey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextKeyExpr"].and(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].editorTextFocus, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].tabDoesNotMoveFocus),
                    primary: 2 /* KeyCode.Tab */ 
                }
            });
        }
    });
    CoreEditingCommands.DeleteLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditingCommand {
        runCoreEditingCommand(editor, viewModel, args) {
            const [shouldPushStackElementBefore, commands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorDeleteOperations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteOperations"].deleteLeft(viewModel.getPrevEditOperationType(), viewModel.cursorConfig, viewModel.model, viewModel.getCursorStates().map((s)=>s.modelState.selection), viewModel.getCursorAutoClosedCharacters());
            if (shouldPushStackElementBefore) {
                editor.pushUndoStop();
            }
            editor.executeCommands(this.id, commands);
            viewModel.setPrevEditOperationType(2 /* EditOperationType.DeletingLeft */ );
        }
        constructor(){
            super({
                id: 'deleteLeft',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                    primary: 1 /* KeyCode.Backspace */ ,
                    secondary: [
                        1024 /* KeyMod.Shift */  | 1 /* KeyCode.Backspace */ 
                    ],
                    mac: {
                        primary: 1 /* KeyCode.Backspace */ ,
                        secondary: [
                            1024 /* KeyMod.Shift */  | 1 /* KeyCode.Backspace */ ,
                            256 /* KeyMod.WinCtrl */  | 38 /* KeyCode.KeyH */ ,
                            256 /* KeyMod.WinCtrl */  | 1 /* KeyCode.Backspace */ 
                        ]
                    }
                }
            });
        }
    });
    CoreEditingCommands.DeleteRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerEditorCommand"])(new class extends CoreEditingCommand {
        runCoreEditingCommand(editor, viewModel, args) {
            const [shouldPushStackElementBefore, commands] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$cursor$2f$cursorDeleteOperations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteOperations"].deleteRight(viewModel.getPrevEditOperationType(), viewModel.cursorConfig, viewModel.model, viewModel.getCursorStates().map((s)=>s.modelState.selection));
            if (shouldPushStackElementBefore) {
                editor.pushUndoStop();
            }
            editor.executeCommands(this.id, commands);
            viewModel.setPrevEditOperationType(3 /* EditOperationType.DeletingRight */ );
        }
        constructor(){
            super({
                id: 'deleteRight',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$common$2f$editorContextKeys$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorContextKeys"].textInputFocus,
                    primary: 20 /* KeyCode.Delete */ ,
                    mac: {
                        primary: 20 /* KeyCode.Delete */ ,
                        secondary: [
                            256 /* KeyMod.WinCtrl */  | 34 /* KeyCode.KeyD */ ,
                            256 /* KeyMod.WinCtrl */  | 20 /* KeyCode.Delete */ 
                        ]
                    }
                }
            });
        }
    });
    CoreEditingCommands.Undo = new class extends EditorOrNativeTextInputCommand {
        runDOMCommand(activeElement) {
            activeElement.ownerDocument.execCommand('undo');
        }
        runEditorCommand(accessor, editor, args) {
            if (!editor.hasModel() || editor.getOption(92 /* EditorOption.readOnly */ ) === true) {
                return;
            }
            return editor.getModel().undo();
        }
        constructor(){
            super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UndoCommand"]);
        }
    }();
    CoreEditingCommands.Redo = new class extends EditorOrNativeTextInputCommand {
        runDOMCommand(activeElement) {
            activeElement.ownerDocument.execCommand('redo');
        }
        runEditorCommand(accessor, editor, args) {
            if (!editor.hasModel() || editor.getOption(92 /* EditorOption.readOnly */ ) === true) {
                return;
            }
            return editor.getModel().redo();
        }
        constructor(){
            super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RedoCommand"]);
        }
    }();
})(CoreEditingCommands || (CoreEditingCommands = {}));
/**
 * A command that will invoke a command on the focused editor.
 */ class EditorHandlerCommand extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$editorExtensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"] {
    runCommand(accessor, args) {
        const editor = accessor.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$editor$2f$browser$2f$services$2f$codeEditorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICodeEditorService"]).getFocusedCodeEditor();
        if (!editor) {
            return;
        }
        editor.trigger('keyboard', this._handlerId, args);
    }
    constructor(id, handlerId, metadata){
        super({
            id: id,
            precondition: undefined,
            metadata
        });
        this._handlerId = handlerId;
    }
}
function registerOverwritableCommand(handlerId, metadata) {
    registerCommand(new EditorHandlerCommand('default:' + handlerId, handlerId));
    registerCommand(new EditorHandlerCommand(handlerId, handlerId, metadata));
}
registerOverwritableCommand("type" /* Handler.Type */ , {
    description: "Type",
    args: [
        {
            name: 'args',
            schema: {
                'type': 'object',
                'required': [
                    'text'
                ],
                'properties': {
                    'text': {
                        'type': 'string'
                    }
                }
            }
        }
    ]
});
registerOverwritableCommand("replacePreviousChar" /* Handler.ReplacePreviousChar */ );
registerOverwritableCommand("compositionType" /* Handler.CompositionType */ );
registerOverwritableCommand("compositionStart" /* Handler.CompositionStart */ );
registerOverwritableCommand("compositionEnd" /* Handler.CompositionEnd */ );
registerOverwritableCommand("paste" /* Handler.Paste */ );
registerOverwritableCommand("cut" /* Handler.Cut */ );
}),
}]);

//# sourceMappingURL=afade_monaco-editor_esm_vs_editor_browser_coreCommands_732f0b17.js.map