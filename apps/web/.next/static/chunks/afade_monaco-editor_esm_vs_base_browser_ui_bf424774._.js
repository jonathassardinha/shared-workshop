(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "Widget": ()=>Widget
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/touch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
;
;
;
;
;
class Widget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    onclick(domNode, listener) {
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].CLICK, (e)=>listener(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMouseEvent"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](domNode), e))));
    }
    onmousedown(domNode, listener) {
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_DOWN, (e)=>listener(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMouseEvent"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](domNode), e))));
    }
    onmouseover(domNode, listener) {
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_OVER, (e)=>listener(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMouseEvent"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](domNode), e))));
    }
    onmouseleave(domNode, listener) {
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_LEAVE, (e)=>listener(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMouseEvent"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](domNode), e))));
    }
    onkeydown(domNode, listener) {
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>listener(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e))));
    }
    onkeyup(domNode, listener) {
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_UP, (e)=>listener(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e))));
    }
    oninput(domNode, listener) {
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].INPUT, listener));
    }
    onblur(domNode, listener) {
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].BLUR, listener));
    }
    onfocus(domNode, listener) {
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].FOCUS, listener));
    }
    ignoreGesture(domNode) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gesture"].ignoreTarget(domNode);
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarArrow.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ARROW_IMG_SIZE": ()=>ARROW_IMG_SIZE,
    "ScrollbarArrow": ()=>ScrollbarArrow
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$globalPointerMoveMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/globalPointerMoveMonitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/themables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
;
;
;
;
;
const ARROW_IMG_SIZE = 11;
class ScrollbarArrow extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Widget"] {
    _arrowPointerDown(e) {
        if (!e.target || !(e.target instanceof Element)) {
            return;
        }
        const scheduleRepeater = ()=>{
            this._pointerdownRepeatTimer.cancelAndSet(()=>this._onActivate(), 1000 / 24, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](e));
        };
        this._onActivate();
        this._pointerdownRepeatTimer.cancel();
        this._pointerdownScheduleRepeatTimer.cancelAndSet(scheduleRepeater, 200);
        this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, (pointerMoveData)=>{}, ()=>{
            this._pointerdownRepeatTimer.cancel();
            this._pointerdownScheduleRepeatTimer.cancel();
        });
        e.preventDefault();
    }
    constructor(opts){
        super();
        this._onActivate = opts.onActivate;
        this.bgDomNode = document.createElement('div');
        this.bgDomNode.className = 'arrow-background';
        this.bgDomNode.style.position = 'absolute';
        this.bgDomNode.style.width = opts.bgWidth + 'px';
        this.bgDomNode.style.height = opts.bgHeight + 'px';
        if (typeof opts.top !== 'undefined') {
            this.bgDomNode.style.top = '0px';
        }
        if (typeof opts.left !== 'undefined') {
            this.bgDomNode.style.left = '0px';
        }
        if (typeof opts.bottom !== 'undefined') {
            this.bgDomNode.style.bottom = '0px';
        }
        if (typeof opts.right !== 'undefined') {
            this.bgDomNode.style.right = '0px';
        }
        this.domNode = document.createElement('div');
        this.domNode.className = opts.className;
        this.domNode.classList.add(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassNameArray(opts.icon));
        this.domNode.style.position = 'absolute';
        this.domNode.style.width = ARROW_IMG_SIZE + 'px';
        this.domNode.style.height = ARROW_IMG_SIZE + 'px';
        if (typeof opts.top !== 'undefined') {
            this.domNode.style.top = opts.top + 'px';
        }
        if (typeof opts.left !== 'undefined') {
            this.domNode.style.left = opts.left + 'px';
        }
        if (typeof opts.bottom !== 'undefined') {
            this.domNode.style.bottom = opts.bottom + 'px';
        }
        if (typeof opts.right !== 'undefined') {
            this.domNode.style.right = opts.right + 'px';
        }
        this._pointerMoveMonitor = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$globalPointerMoveMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalPointerMoveMonitor"]());
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](this.bgDomNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].POINTER_DOWN, (e)=>this._arrowPointerDown(e)));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](this.domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].POINTER_DOWN, (e)=>this._arrowPointerDown(e)));
        this._pointerdownRepeatTimer = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WindowIntervalTimer"]());
        this._pointerdownScheduleRepeatTimer = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutTimer"]());
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarVisibilityController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ScrollbarVisibilityController": ()=>ScrollbarVisibilityController
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
;
;
class ScrollbarVisibilityController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    setVisibility(visibility) {
        if (this._visibility !== visibility) {
            this._visibility = visibility;
            this._updateShouldBeVisible();
        }
    }
    // ----------------- Hide / Reveal
    setShouldBeVisible(rawShouldBeVisible) {
        this._rawShouldBeVisible = rawShouldBeVisible;
        this._updateShouldBeVisible();
    }
    _applyVisibilitySetting() {
        if (this._visibility === 2 /* ScrollbarVisibility.Hidden */ ) {
            return false;
        }
        if (this._visibility === 3 /* ScrollbarVisibility.Visible */ ) {
            return true;
        }
        return this._rawShouldBeVisible;
    }
    _updateShouldBeVisible() {
        const shouldBeVisible = this._applyVisibilitySetting();
        if (this._shouldBeVisible !== shouldBeVisible) {
            this._shouldBeVisible = shouldBeVisible;
            this.ensureVisibility();
        }
    }
    setIsNeeded(isNeeded) {
        if (this._isNeeded !== isNeeded) {
            this._isNeeded = isNeeded;
            this.ensureVisibility();
        }
    }
    setDomNode(domNode) {
        this._domNode = domNode;
        this._domNode.setClassName(this._invisibleClassName);
        // Now that the flags & the dom node are in a consistent state, ensure the Hidden/Visible configuration
        this.setShouldBeVisible(false);
    }
    ensureVisibility() {
        if (!this._isNeeded) {
            // Nothing to be rendered
            this._hide(false);
            return;
        }
        if (this._shouldBeVisible) {
            this._reveal();
        } else {
            this._hide(true);
        }
    }
    _reveal() {
        if (this._isVisible) {
            return;
        }
        this._isVisible = true;
        // The CSS animation doesn't play otherwise
        this._revealTimer.setIfNotSet(()=>{
            var _this__domNode;
            (_this__domNode = this._domNode) === null || _this__domNode === void 0 ? void 0 : _this__domNode.setClassName(this._visibleClassName);
        }, 0);
    }
    _hide(withFadeAway) {
        var _this__domNode;
        this._revealTimer.cancel();
        if (!this._isVisible) {
            return;
        }
        this._isVisible = false;
        (_this__domNode = this._domNode) === null || _this__domNode === void 0 ? void 0 : _this__domNode.setClassName(this._invisibleClassName + (withFadeAway ? ' fade' : ''));
    }
    constructor(visibility, visibleClassName, invisibleClassName){
        super();
        this._visibility = visibility;
        this._visibleClassName = visibleClassName;
        this._invisibleClassName = invisibleClassName;
        this._domNode = null;
        this._isVisible = false;
        this._isNeeded = false;
        this._rawShouldBeVisible = false;
        this._shouldBeVisible = false;
        this._revealTimer = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutTimer"]());
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/abstractScrollbar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "AbstractScrollbar": ()=>AbstractScrollbar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$fastDomNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/fastDomNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$globalPointerMoveMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/globalPointerMoveMonitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarVisibilityController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarVisibilityController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
/**
 * The orthogonal distance to the slider at which dragging "resets". This implements "snapping"
 */ const POINTER_DRAG_RESET_DISTANCE = 140;
class AbstractScrollbar extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Widget"] {
    // ----------------- creation
    /**
     * Creates the dom node for an arrow & adds it to the container
     */ _createArrow(opts) {
        const arrow = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollbarArrow"](opts));
        this.domNode.domNode.appendChild(arrow.bgDomNode);
        this.domNode.domNode.appendChild(arrow.domNode);
    }
    /**
     * Creates the slider dom node, adds it to the container & hooks up the events
     */ _createSlider(top, left, width, height) {
        this.slider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$fastDomNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFastDomNode"])(document.createElement('div'));
        this.slider.setClassName('slider');
        this.slider.setPosition('absolute');
        this.slider.setTop(top);
        this.slider.setLeft(left);
        if (typeof width === 'number') {
            this.slider.setWidth(width);
        }
        if (typeof height === 'number') {
            this.slider.setHeight(height);
        }
        this.slider.setLayerHinting(true);
        this.slider.setContain('strict');
        this.domNode.domNode.appendChild(this.slider.domNode);
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.slider.domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].POINTER_DOWN, (e)=>{
            if (e.button === 0) {
                e.preventDefault();
                this._sliderPointerDown(e);
            }
        }));
        this.onclick(this.slider.domNode, (e)=>{
            if (e.leftButton) {
                e.stopPropagation();
            }
        });
    }
    // ----------------- Update state
    _onElementSize(visibleSize) {
        if (this._scrollbarState.setVisibleSize(visibleSize)) {
            this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
            this._shouldRender = true;
            if (!this._lazyRender) {
                this.render();
            }
        }
        return this._shouldRender;
    }
    _onElementScrollSize(elementScrollSize) {
        if (this._scrollbarState.setScrollSize(elementScrollSize)) {
            this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
            this._shouldRender = true;
            if (!this._lazyRender) {
                this.render();
            }
        }
        return this._shouldRender;
    }
    _onElementScrollPosition(elementScrollPosition) {
        if (this._scrollbarState.setScrollPosition(elementScrollPosition)) {
            this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
            this._shouldRender = true;
            if (!this._lazyRender) {
                this.render();
            }
        }
        return this._shouldRender;
    }
    // ----------------- rendering
    beginReveal() {
        this._visibilityController.setShouldBeVisible(true);
    }
    beginHide() {
        this._visibilityController.setShouldBeVisible(false);
    }
    render() {
        if (!this._shouldRender) {
            return;
        }
        this._shouldRender = false;
        this._renderDomNode(this._scrollbarState.getRectangleLargeSize(), this._scrollbarState.getRectangleSmallSize());
        this._updateSlider(this._scrollbarState.getSliderSize(), this._scrollbarState.getArrowSize() + this._scrollbarState.getSliderPosition());
    }
    // ----------------- DOM events
    _domNodePointerDown(e) {
        if (e.target !== this.domNode.domNode) {
            return;
        }
        this._onPointerDown(e);
    }
    delegatePointerDown(e) {
        const domTop = this.domNode.domNode.getClientRects()[0].top;
        const sliderStart = domTop + this._scrollbarState.getSliderPosition();
        const sliderStop = domTop + this._scrollbarState.getSliderPosition() + this._scrollbarState.getSliderSize();
        const pointerPos = this._sliderPointerPosition(e);
        if (sliderStart <= pointerPos && pointerPos <= sliderStop) {
            // Act as if it was a pointer down on the slider
            if (e.button === 0) {
                e.preventDefault();
                this._sliderPointerDown(e);
            }
        } else {
            // Act as if it was a pointer down on the scrollbar
            this._onPointerDown(e);
        }
    }
    _onPointerDown(e) {
        let offsetX;
        let offsetY;
        if (e.target === this.domNode.domNode && typeof e.offsetX === 'number' && typeof e.offsetY === 'number') {
            offsetX = e.offsetX;
            offsetY = e.offsetY;
        } else {
            const domNodePosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](this.domNode.domNode);
            offsetX = e.pageX - domNodePosition.left;
            offsetY = e.pageY - domNodePosition.top;
        }
        const offset = this._pointerDownRelativePosition(offsetX, offsetY);
        this._setDesiredScrollPositionNow(this._scrollByPage ? this._scrollbarState.getDesiredScrollPositionFromOffsetPaged(offset) : this._scrollbarState.getDesiredScrollPositionFromOffset(offset));
        if (e.button === 0) {
            // left button
            e.preventDefault();
            this._sliderPointerDown(e);
        }
    }
    _sliderPointerDown(e) {
        if (!e.target || !(e.target instanceof Element)) {
            return;
        }
        const initialPointerPosition = this._sliderPointerPosition(e);
        const initialPointerOrthogonalPosition = this._sliderOrthogonalPointerPosition(e);
        const initialScrollbarState = this._scrollbarState.clone();
        this.slider.toggleClassName('active', true);
        this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, (pointerMoveData)=>{
            const pointerOrthogonalPosition = this._sliderOrthogonalPointerPosition(pointerMoveData);
            const pointerOrthogonalDelta = Math.abs(pointerOrthogonalPosition - initialPointerOrthogonalPosition);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWindows"] && pointerOrthogonalDelta > POINTER_DRAG_RESET_DISTANCE) {
                // The pointer has wondered away from the scrollbar => reset dragging
                this._setDesiredScrollPositionNow(initialScrollbarState.getScrollPosition());
                return;
            }
            const pointerPosition = this._sliderPointerPosition(pointerMoveData);
            const pointerDelta = pointerPosition - initialPointerPosition;
            this._setDesiredScrollPositionNow(initialScrollbarState.getDesiredScrollPositionFromDelta(pointerDelta));
        }, ()=>{
            this.slider.toggleClassName('active', false);
            this._host.onDragEnd();
        });
        this._host.onDragStart();
    }
    _setDesiredScrollPositionNow(_desiredScrollPosition) {
        const desiredScrollPosition = {};
        this.writeScrollPosition(desiredScrollPosition, _desiredScrollPosition);
        this._scrollable.setScrollPositionNow(desiredScrollPosition);
    }
    updateScrollbarSize(scrollbarSize) {
        this._updateScrollbarSize(scrollbarSize);
        this._scrollbarState.setScrollbarSize(scrollbarSize);
        this._shouldRender = true;
        if (!this._lazyRender) {
            this.render();
        }
    }
    isNeeded() {
        return this._scrollbarState.isNeeded();
    }
    constructor(opts){
        super();
        this._lazyRender = opts.lazyRender;
        this._host = opts.host;
        this._scrollable = opts.scrollable;
        this._scrollByPage = opts.scrollByPage;
        this._scrollbarState = opts.scrollbarState;
        this._visibilityController = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarVisibilityController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollbarVisibilityController"](opts.visibility, 'visible scrollbar ' + opts.extraScrollbarClassName, 'invisible scrollbar ' + opts.extraScrollbarClassName));
        this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
        this._pointerMoveMonitor = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$globalPointerMoveMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalPointerMoveMonitor"]());
        this._shouldRender = true;
        this.domNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$fastDomNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFastDomNode"])(document.createElement('div'));
        this.domNode.setAttribute('role', 'presentation');
        this.domNode.setAttribute('aria-hidden', 'true');
        this._visibilityController.setDomNode(this.domNode);
        this.domNode.setPosition('absolute');
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.domNode.domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].POINTER_DOWN, (e)=>this._domNodePointerDown(e)));
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarState.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ /**
 * The minimal size of the slider (such that it can still be clickable) -- it is artificially enlarged.
 */ __turbopack_context__.s({
    "ScrollbarState": ()=>ScrollbarState
});
const MINIMUM_SLIDER_SIZE = 20;
class ScrollbarState {
    clone() {
        return new ScrollbarState(this._arrowSize, this._scrollbarSize, this._oppositeScrollbarSize, this._visibleSize, this._scrollSize, this._scrollPosition);
    }
    setVisibleSize(visibleSize) {
        const iVisibleSize = Math.round(visibleSize);
        if (this._visibleSize !== iVisibleSize) {
            this._visibleSize = iVisibleSize;
            this._refreshComputedValues();
            return true;
        }
        return false;
    }
    setScrollSize(scrollSize) {
        const iScrollSize = Math.round(scrollSize);
        if (this._scrollSize !== iScrollSize) {
            this._scrollSize = iScrollSize;
            this._refreshComputedValues();
            return true;
        }
        return false;
    }
    setScrollPosition(scrollPosition) {
        const iScrollPosition = Math.round(scrollPosition);
        if (this._scrollPosition !== iScrollPosition) {
            this._scrollPosition = iScrollPosition;
            this._refreshComputedValues();
            return true;
        }
        return false;
    }
    setScrollbarSize(scrollbarSize) {
        this._scrollbarSize = Math.round(scrollbarSize);
    }
    setOppositeScrollbarSize(oppositeScrollbarSize) {
        this._oppositeScrollbarSize = Math.round(oppositeScrollbarSize);
    }
    static _computeValues(oppositeScrollbarSize, arrowSize, visibleSize, scrollSize, scrollPosition) {
        const computedAvailableSize = Math.max(0, visibleSize - oppositeScrollbarSize);
        const computedRepresentableSize = Math.max(0, computedAvailableSize - 2 * arrowSize);
        const computedIsNeeded = scrollSize > 0 && scrollSize > visibleSize;
        if (!computedIsNeeded) {
            // There is no need for a slider
            return {
                computedAvailableSize: Math.round(computedAvailableSize),
                computedIsNeeded: computedIsNeeded,
                computedSliderSize: Math.round(computedRepresentableSize),
                computedSliderRatio: 0,
                computedSliderPosition: 0
            };
        }
        // We must artificially increase the size of the slider if needed, since the slider would be too small to grab with the mouse otherwise
        const computedSliderSize = Math.round(Math.max(MINIMUM_SLIDER_SIZE, Math.floor(visibleSize * computedRepresentableSize / scrollSize)));
        // The slider can move from 0 to `computedRepresentableSize` - `computedSliderSize`
        // in the same way `scrollPosition` can move from 0 to `scrollSize` - `visibleSize`.
        const computedSliderRatio = (computedRepresentableSize - computedSliderSize) / (scrollSize - visibleSize);
        const computedSliderPosition = scrollPosition * computedSliderRatio;
        return {
            computedAvailableSize: Math.round(computedAvailableSize),
            computedIsNeeded: computedIsNeeded,
            computedSliderSize: Math.round(computedSliderSize),
            computedSliderRatio: computedSliderRatio,
            computedSliderPosition: Math.round(computedSliderPosition)
        };
    }
    _refreshComputedValues() {
        const r = ScrollbarState._computeValues(this._oppositeScrollbarSize, this._arrowSize, this._visibleSize, this._scrollSize, this._scrollPosition);
        this._computedAvailableSize = r.computedAvailableSize;
        this._computedIsNeeded = r.computedIsNeeded;
        this._computedSliderSize = r.computedSliderSize;
        this._computedSliderRatio = r.computedSliderRatio;
        this._computedSliderPosition = r.computedSliderPosition;
    }
    getArrowSize() {
        return this._arrowSize;
    }
    getScrollPosition() {
        return this._scrollPosition;
    }
    getRectangleLargeSize() {
        return this._computedAvailableSize;
    }
    getRectangleSmallSize() {
        return this._scrollbarSize;
    }
    isNeeded() {
        return this._computedIsNeeded;
    }
    getSliderSize() {
        return this._computedSliderSize;
    }
    getSliderPosition() {
        return this._computedSliderPosition;
    }
    /**
     * Compute a desired `scrollPosition` such that `offset` ends up in the center of the slider.
     * `offset` is based on the same coordinate system as the `sliderPosition`.
     */ getDesiredScrollPositionFromOffset(offset) {
        if (!this._computedIsNeeded) {
            // no need for a slider
            return 0;
        }
        const desiredSliderPosition = offset - this._arrowSize - this._computedSliderSize / 2;
        return Math.round(desiredSliderPosition / this._computedSliderRatio);
    }
    /**
     * Compute a desired `scrollPosition` from if offset is before or after the slider position.
     * If offset is before slider, treat as a page up (or left).  If after, page down (or right).
     * `offset` and `_computedSliderPosition` are based on the same coordinate system.
     * `_visibleSize` corresponds to a "page" of lines in the returned coordinate system.
     */ getDesiredScrollPositionFromOffsetPaged(offset) {
        if (!this._computedIsNeeded) {
            // no need for a slider
            return 0;
        }
        const correctedOffset = offset - this._arrowSize; // compensate if has arrows
        let desiredScrollPosition = this._scrollPosition;
        if (correctedOffset < this._computedSliderPosition) {
            desiredScrollPosition -= this._visibleSize; // page up/left
        } else {
            desiredScrollPosition += this._visibleSize; // page down/right
        }
        return desiredScrollPosition;
    }
    /**
     * Compute a desired `scrollPosition` such that the slider moves by `delta`.
     */ getDesiredScrollPositionFromDelta(delta) {
        if (!this._computedIsNeeded) {
            // no need for a slider
            return 0;
        }
        const desiredSliderPosition = this._computedSliderPosition + delta;
        return Math.round(desiredSliderPosition / this._computedSliderRatio);
    }
    constructor(arrowSize, scrollbarSize, oppositeScrollbarSize, visibleSize, scrollSize, scrollPosition){
        this._scrollbarSize = Math.round(scrollbarSize);
        this._oppositeScrollbarSize = Math.round(oppositeScrollbarSize);
        this._arrowSize = Math.round(arrowSize);
        this._visibleSize = visibleSize;
        this._scrollSize = scrollSize;
        this._scrollPosition = scrollPosition;
        this._computedAvailableSize = 0;
        this._computedIsNeeded = false;
        this._computedSliderSize = 0;
        this._computedSliderRatio = 0;
        this._computedSliderPosition = 0;
        this._refreshComputedValues();
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/horizontalScrollbar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "HorizontalScrollbar": ()=>HorizontalScrollbar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$abstractScrollbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/abstractScrollbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/codicons.js [app-client] (ecmascript)");
;
;
;
;
;
class HorizontalScrollbar extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$abstractScrollbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractScrollbar"] {
    _updateSlider(sliderSize, sliderPosition) {
        this.slider.setWidth(sliderSize);
        this.slider.setLeft(sliderPosition);
    }
    _renderDomNode(largeSize, smallSize) {
        this.domNode.setWidth(largeSize);
        this.domNode.setHeight(smallSize);
        this.domNode.setLeft(0);
        this.domNode.setBottom(0);
    }
    onDidScroll(e) {
        this._shouldRender = this._onElementScrollSize(e.scrollWidth) || this._shouldRender;
        this._shouldRender = this._onElementScrollPosition(e.scrollLeft) || this._shouldRender;
        this._shouldRender = this._onElementSize(e.width) || this._shouldRender;
        return this._shouldRender;
    }
    _pointerDownRelativePosition(offsetX, offsetY) {
        return offsetX;
    }
    _sliderPointerPosition(e) {
        return e.pageX;
    }
    _sliderOrthogonalPointerPosition(e) {
        return e.pageY;
    }
    _updateScrollbarSize(size) {
        this.slider.setHeight(size);
    }
    writeScrollPosition(target, scrollPosition) {
        target.scrollLeft = scrollPosition;
    }
    updateOptions(options) {
        this.updateScrollbarSize(options.horizontal === 2 /* ScrollbarVisibility.Hidden */  ? 0 : options.horizontalScrollbarSize);
        this._scrollbarState.setOppositeScrollbarSize(options.vertical === 2 /* ScrollbarVisibility.Hidden */  ? 0 : options.verticalScrollbarSize);
        this._visibilityController.setVisibility(options.horizontal);
        this._scrollByPage = options.scrollByPage;
    }
    constructor(scrollable, options, host){
        const scrollDimensions = scrollable.getScrollDimensions();
        const scrollPosition = scrollable.getCurrentScrollPosition();
        super({
            lazyRender: options.lazyRender,
            host: host,
            scrollbarState: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollbarState"](options.horizontalHasArrows ? options.arrowSize : 0, options.horizontal === 2 /* ScrollbarVisibility.Hidden */  ? 0 : options.horizontalScrollbarSize, options.vertical === 2 /* ScrollbarVisibility.Hidden */  ? 0 : options.verticalScrollbarSize, scrollDimensions.width, scrollDimensions.scrollWidth, scrollPosition.scrollLeft),
            visibility: options.horizontal,
            extraScrollbarClassName: 'horizontal',
            scrollable: scrollable,
            scrollByPage: options.scrollByPage
        });
        if (options.horizontalHasArrows) {
            const arrowDelta = (options.arrowSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_IMG_SIZE"]) / 2;
            const scrollbarDelta = (options.horizontalScrollbarSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_IMG_SIZE"]) / 2;
            this._createArrow({
                className: 'scra',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].scrollbarButtonLeft,
                top: scrollbarDelta,
                left: arrowDelta,
                bottom: undefined,
                right: undefined,
                bgWidth: options.arrowSize,
                bgHeight: options.horizontalScrollbarSize,
                onActivate: ()=>this._host.onMouseWheel(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardWheelEvent"](null, 1, 0))
            });
            this._createArrow({
                className: 'scra',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].scrollbarButtonRight,
                top: scrollbarDelta,
                left: undefined,
                bottom: undefined,
                right: arrowDelta,
                bgWidth: options.arrowSize,
                bgHeight: options.horizontalScrollbarSize,
                onActivate: ()=>this._host.onMouseWheel(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardWheelEvent"](null, -1, 0))
            });
        }
        this._createSlider(Math.floor((options.horizontalScrollbarSize - options.horizontalSliderSize) / 2), 0, undefined, options.horizontalSliderSize);
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/verticalScrollbar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "VerticalScrollbar": ()=>VerticalScrollbar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$abstractScrollbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/abstractScrollbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarArrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/codicons.js [app-client] (ecmascript)");
;
;
;
;
;
class VerticalScrollbar extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$abstractScrollbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractScrollbar"] {
    _updateSlider(sliderSize, sliderPosition) {
        this.slider.setHeight(sliderSize);
        this.slider.setTop(sliderPosition);
    }
    _renderDomNode(largeSize, smallSize) {
        this.domNode.setWidth(smallSize);
        this.domNode.setHeight(largeSize);
        this.domNode.setRight(0);
        this.domNode.setTop(0);
    }
    onDidScroll(e) {
        this._shouldRender = this._onElementScrollSize(e.scrollHeight) || this._shouldRender;
        this._shouldRender = this._onElementScrollPosition(e.scrollTop) || this._shouldRender;
        this._shouldRender = this._onElementSize(e.height) || this._shouldRender;
        return this._shouldRender;
    }
    _pointerDownRelativePosition(offsetX, offsetY) {
        return offsetY;
    }
    _sliderPointerPosition(e) {
        return e.pageY;
    }
    _sliderOrthogonalPointerPosition(e) {
        return e.pageX;
    }
    _updateScrollbarSize(size) {
        this.slider.setWidth(size);
    }
    writeScrollPosition(target, scrollPosition) {
        target.scrollTop = scrollPosition;
    }
    updateOptions(options) {
        this.updateScrollbarSize(options.vertical === 2 /* ScrollbarVisibility.Hidden */  ? 0 : options.verticalScrollbarSize);
        // give priority to vertical scroll bar over horizontal and let it scroll all the way to the bottom
        this._scrollbarState.setOppositeScrollbarSize(0);
        this._visibilityController.setVisibility(options.vertical);
        this._scrollByPage = options.scrollByPage;
    }
    constructor(scrollable, options, host){
        const scrollDimensions = scrollable.getScrollDimensions();
        const scrollPosition = scrollable.getCurrentScrollPosition();
        super({
            lazyRender: options.lazyRender,
            host: host,
            scrollbarState: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollbarState"](options.verticalHasArrows ? options.arrowSize : 0, options.vertical === 2 /* ScrollbarVisibility.Hidden */  ? 0 : options.verticalScrollbarSize, // give priority to vertical scroll bar over horizontal and let it scroll all the way to the bottom
            0, scrollDimensions.height, scrollDimensions.scrollHeight, scrollPosition.scrollTop),
            visibility: options.vertical,
            extraScrollbarClassName: 'vertical',
            scrollable: scrollable,
            scrollByPage: options.scrollByPage
        });
        if (options.verticalHasArrows) {
            const arrowDelta = (options.arrowSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_IMG_SIZE"]) / 2;
            const scrollbarDelta = (options.verticalScrollbarSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollbarArrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ARROW_IMG_SIZE"]) / 2;
            this._createArrow({
                className: 'scra',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].scrollbarButtonUp,
                top: arrowDelta,
                left: scrollbarDelta,
                bottom: undefined,
                right: undefined,
                bgWidth: options.verticalScrollbarSize,
                bgHeight: options.arrowSize,
                onActivate: ()=>this._host.onMouseWheel(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardWheelEvent"](null, 0, 1))
            });
            this._createArrow({
                className: 'scra',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].scrollbarButtonDown,
                top: undefined,
                left: scrollbarDelta,
                bottom: arrowDelta,
                right: undefined,
                bgWidth: options.verticalScrollbarSize,
                bgHeight: options.arrowSize,
                onActivate: ()=>this._host.onMouseWheel(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardWheelEvent"](null, 0, -1))
            });
        }
        this._createSlider(0, Math.floor((options.verticalScrollbarSize - options.verticalSliderSize) / 2), options.verticalSliderSize, undefined);
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "AbstractScrollableElement": ()=>AbstractScrollableElement,
    "DomScrollableElement": ()=>DomScrollableElement,
    "MouseWheelClassifier": ()=>MouseWheelClassifier,
    "ScrollableElement": ()=>ScrollableElement,
    "SmoothScrollableElement": ()=>SmoothScrollableElement
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$fastDomNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/fastDomNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$horizontalScrollbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/horizontalScrollbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$verticalScrollbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/verticalScrollbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$scrollable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/scrollable.js [app-client] (ecmascript)");
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
const HIDE_TIMEOUT = 500;
const SCROLL_WHEEL_SENSITIVITY = 50;
const SCROLL_WHEEL_SMOOTH_SCROLL_ENABLED = true;
class MouseWheelClassifierItem {
    constructor(timestamp, deltaX, deltaY){
        this.timestamp = timestamp;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.score = 0;
    }
}
class MouseWheelClassifier {
    isPhysicalMouseWheel() {
        if (this._front === -1 && this._rear === -1) {
            // no elements
            return false;
        }
        // 0.5 * last + 0.25 * 2nd last + 0.125 * 3rd last + ...
        let remainingInfluence = 1;
        let score = 0;
        let iteration = 1;
        let index = this._rear;
        do {
            const influence = index === this._front ? remainingInfluence : Math.pow(2, -iteration);
            remainingInfluence -= influence;
            score += this._memory[index].score * influence;
            if (index === this._front) {
                break;
            }
            index = (this._capacity + index - 1) % this._capacity;
            iteration++;
        }while (true)
        return score <= 0.5;
    }
    acceptStandardWheelEvent(e) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isChrome"]) {
            const targetWindow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](e.browserEvent);
            const pageZoomFactor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getZoomFactor"])(targetWindow);
            // On Chrome, the incoming delta events are multiplied with the OS zoom factor.
            // The OS zoom factor can be reverse engineered by using the device pixel ratio and the configured zoom factor into account.
            this.accept(Date.now(), e.deltaX * pageZoomFactor, e.deltaY * pageZoomFactor);
        } else {
            this.accept(Date.now(), e.deltaX, e.deltaY);
        }
    }
    accept(timestamp, deltaX, deltaY) {
        let previousItem = null;
        const item = new MouseWheelClassifierItem(timestamp, deltaX, deltaY);
        if (this._front === -1 && this._rear === -1) {
            this._memory[0] = item;
            this._front = 0;
            this._rear = 0;
        } else {
            previousItem = this._memory[this._rear];
            this._rear = (this._rear + 1) % this._capacity;
            if (this._rear === this._front) {
                // Drop oldest
                this._front = (this._front + 1) % this._capacity;
            }
            this._memory[this._rear] = item;
        }
        item.score = this._computeScore(item, previousItem);
    }
    /**
     * A score between 0 and 1 for `item`.
     *  - a score towards 0 indicates that the source appears to be a physical mouse wheel
     *  - a score towards 1 indicates that the source appears to be a touchpad or magic mouse, etc.
     */ _computeScore(item, previousItem) {
        if (Math.abs(item.deltaX) > 0 && Math.abs(item.deltaY) > 0) {
            // both axes exercised => definitely not a physical mouse wheel
            return 1;
        }
        let score = 0.5;
        if (!this._isAlmostInt(item.deltaX) || !this._isAlmostInt(item.deltaY)) {
            // non-integer deltas => indicator that this is not a physical mouse wheel
            score += 0.25;
        }
        // Non-accelerating scroll => indicator that this is a physical mouse wheel
        // These can be identified by seeing whether they are the module of one another.
        if (previousItem) {
            const absDeltaX = Math.abs(item.deltaX);
            const absDeltaY = Math.abs(item.deltaY);
            const absPreviousDeltaX = Math.abs(previousItem.deltaX);
            const absPreviousDeltaY = Math.abs(previousItem.deltaY);
            // Min 1 to avoid division by zero, module 1 will still be 0.
            const minDeltaX = Math.max(Math.min(absDeltaX, absPreviousDeltaX), 1);
            const minDeltaY = Math.max(Math.min(absDeltaY, absPreviousDeltaY), 1);
            const maxDeltaX = Math.max(absDeltaX, absPreviousDeltaX);
            const maxDeltaY = Math.max(absDeltaY, absPreviousDeltaY);
            const isSameModulo = maxDeltaX % minDeltaX === 0 && maxDeltaY % minDeltaY === 0;
            if (isSameModulo) {
                score -= 0.5;
            }
        }
        return Math.min(Math.max(score, 0), 1);
    }
    _isAlmostInt(value) {
        const delta = Math.abs(Math.round(value) - value);
        return delta < 0.01;
    }
    constructor(){
        this._capacity = 5;
        this._memory = [];
        this._front = -1;
        this._rear = -1;
    }
}
MouseWheelClassifier.INSTANCE = new MouseWheelClassifier();
class AbstractScrollableElement extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Widget"] {
    get options() {
        return this._options;
    }
    dispose() {
        this._mouseWheelToDispose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this._mouseWheelToDispose);
        super.dispose();
    }
    /**
     * Get the generated 'scrollable' dom node
     */ getDomNode() {
        return this._domNode;
    }
    getOverviewRulerLayoutInfo() {
        return {
            parent: this._domNode,
            insertBefore: this._verticalScrollbar.domNode.domNode
        };
    }
    /**
     * Delegate a pointer down event to the vertical scrollbar.
     * This is to help with clicking somewhere else and having the scrollbar react.
     */ delegateVerticalScrollbarPointerDown(browserEvent) {
        this._verticalScrollbar.delegatePointerDown(browserEvent);
    }
    getScrollDimensions() {
        return this._scrollable.getScrollDimensions();
    }
    setScrollDimensions(dimensions) {
        this._scrollable.setScrollDimensions(dimensions, false);
    }
    /**
     * Update the class name of the scrollable element.
     */ updateClassName(newClassName) {
        this._options.className = newClassName;
        // Defaults are different on Macs
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"]) {
            this._options.className += ' mac';
        }
        this._domNode.className = 'monaco-scrollable-element ' + this._options.className;
    }
    /**
     * Update configuration options for the scrollbar.
     */ updateOptions(newOptions) {
        if (typeof newOptions.handleMouseWheel !== 'undefined') {
            this._options.handleMouseWheel = newOptions.handleMouseWheel;
            this._setListeningToMouseWheel(this._options.handleMouseWheel);
        }
        if (typeof newOptions.mouseWheelScrollSensitivity !== 'undefined') {
            this._options.mouseWheelScrollSensitivity = newOptions.mouseWheelScrollSensitivity;
        }
        if (typeof newOptions.fastScrollSensitivity !== 'undefined') {
            this._options.fastScrollSensitivity = newOptions.fastScrollSensitivity;
        }
        if (typeof newOptions.scrollPredominantAxis !== 'undefined') {
            this._options.scrollPredominantAxis = newOptions.scrollPredominantAxis;
        }
        if (typeof newOptions.horizontal !== 'undefined') {
            this._options.horizontal = newOptions.horizontal;
        }
        if (typeof newOptions.vertical !== 'undefined') {
            this._options.vertical = newOptions.vertical;
        }
        if (typeof newOptions.horizontalScrollbarSize !== 'undefined') {
            this._options.horizontalScrollbarSize = newOptions.horizontalScrollbarSize;
        }
        if (typeof newOptions.verticalScrollbarSize !== 'undefined') {
            this._options.verticalScrollbarSize = newOptions.verticalScrollbarSize;
        }
        if (typeof newOptions.scrollByPage !== 'undefined') {
            this._options.scrollByPage = newOptions.scrollByPage;
        }
        this._horizontalScrollbar.updateOptions(this._options);
        this._verticalScrollbar.updateOptions(this._options);
        if (!this._options.lazyRender) {
            this._render();
        }
    }
    delegateScrollFromMouseWheelEvent(browserEvent) {
        this._onMouseWheel(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardWheelEvent"](browserEvent));
    }
    // -------------------- mouse wheel scrolling --------------------
    _setListeningToMouseWheel(shouldListen) {
        const isListening = this._mouseWheelToDispose.length > 0;
        if (isListening === shouldListen) {
            // No change
            return;
        }
        // Stop listening (if necessary)
        this._mouseWheelToDispose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this._mouseWheelToDispose);
        // Start listening (if necessary)
        if (shouldListen) {
            const onMouseWheel = (browserEvent)=>{
                this._onMouseWheel(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardWheelEvent"](browserEvent));
            };
            this._mouseWheelToDispose.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this._listenOnDomNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_WHEEL, onMouseWheel, {
                passive: false
            }));
        }
    }
    _onMouseWheel(e) {
        var _e_browserEvent;
        if ((_e_browserEvent = e.browserEvent) === null || _e_browserEvent === void 0 ? void 0 : _e_browserEvent.defaultPrevented) {
            return;
        }
        const classifier = MouseWheelClassifier.INSTANCE;
        if ("TURBOPACK compile-time truthy", 1) {
            classifier.acceptStandardWheelEvent(e);
        }
        // useful for creating unit tests:
        // console.log(`${Date.now()}, ${e.deltaY}, ${e.deltaX}`);
        let didScroll = false;
        if (e.deltaY || e.deltaX) {
            let deltaY = e.deltaY * this._options.mouseWheelScrollSensitivity;
            let deltaX = e.deltaX * this._options.mouseWheelScrollSensitivity;
            if (this._options.scrollPredominantAxis) {
                if (this._options.scrollYToX && deltaX + deltaY === 0) {
                    // when configured to map Y to X and we both see
                    // no dominant axis and X and Y are competing with
                    // identical values into opposite directions, we
                    // ignore the delta as we cannot make a decision then
                    deltaX = deltaY = 0;
                } else if (Math.abs(deltaY) >= Math.abs(deltaX)) {
                    deltaX = 0;
                } else {
                    deltaY = 0;
                }
            }
            if (this._options.flipAxes) {
                [deltaY, deltaX] = [
                    deltaX,
                    deltaY
                ];
            }
            // Convert vertical scrolling to horizontal if shift is held, this
            // is handled at a higher level on Mac
            const shiftConvert = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] && e.browserEvent && e.browserEvent.shiftKey;
            if ((this._options.scrollYToX || shiftConvert) && !deltaX) {
                deltaX = deltaY;
                deltaY = 0;
            }
            if (e.browserEvent && e.browserEvent.altKey) {
                // fastScrolling
                deltaX = deltaX * this._options.fastScrollSensitivity;
                deltaY = deltaY * this._options.fastScrollSensitivity;
            }
            const futureScrollPosition = this._scrollable.getFutureScrollPosition();
            let desiredScrollPosition = {};
            if (deltaY) {
                const deltaScrollTop = SCROLL_WHEEL_SENSITIVITY * deltaY;
                // Here we convert values such as -0.3 to -1 or 0.3 to 1, otherwise low speed scrolling will never scroll
                const desiredScrollTop = futureScrollPosition.scrollTop - (deltaScrollTop < 0 ? Math.floor(deltaScrollTop) : Math.ceil(deltaScrollTop));
                this._verticalScrollbar.writeScrollPosition(desiredScrollPosition, desiredScrollTop);
            }
            if (deltaX) {
                const deltaScrollLeft = SCROLL_WHEEL_SENSITIVITY * deltaX;
                // Here we convert values such as -0.3 to -1 or 0.3 to 1, otherwise low speed scrolling will never scroll
                const desiredScrollLeft = futureScrollPosition.scrollLeft - (deltaScrollLeft < 0 ? Math.floor(deltaScrollLeft) : Math.ceil(deltaScrollLeft));
                this._horizontalScrollbar.writeScrollPosition(desiredScrollPosition, desiredScrollLeft);
            }
            // Check that we are scrolling towards a location which is valid
            desiredScrollPosition = this._scrollable.validateScrollPosition(desiredScrollPosition);
            if (futureScrollPosition.scrollLeft !== desiredScrollPosition.scrollLeft || futureScrollPosition.scrollTop !== desiredScrollPosition.scrollTop) {
                const canPerformSmoothScroll = SCROLL_WHEEL_SMOOTH_SCROLL_ENABLED && this._options.mouseWheelSmoothScroll && classifier.isPhysicalMouseWheel();
                if (canPerformSmoothScroll) {
                    this._scrollable.setScrollPositionSmooth(desiredScrollPosition);
                } else {
                    this._scrollable.setScrollPositionNow(desiredScrollPosition);
                }
                didScroll = true;
            }
        }
        let consumeMouseWheel = didScroll;
        if (!consumeMouseWheel && this._options.alwaysConsumeMouseWheel) {
            consumeMouseWheel = true;
        }
        if (!consumeMouseWheel && this._options.consumeMouseWheelIfScrollbarIsNeeded && (this._verticalScrollbar.isNeeded() || this._horizontalScrollbar.isNeeded())) {
            consumeMouseWheel = true;
        }
        if (consumeMouseWheel) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    _onDidScroll(e) {
        this._shouldRender = this._horizontalScrollbar.onDidScroll(e) || this._shouldRender;
        this._shouldRender = this._verticalScrollbar.onDidScroll(e) || this._shouldRender;
        if (this._options.useShadows) {
            this._shouldRender = true;
        }
        if (this._revealOnScroll) {
            this._reveal();
        }
        if (!this._options.lazyRender) {
            this._render();
        }
    }
    /**
     * Render / mutate the DOM now.
     * Should be used together with the ctor option `lazyRender`.
     */ renderNow() {
        if (!this._options.lazyRender) {
            throw new Error('Please use `lazyRender` together with `renderNow`!');
        }
        this._render();
    }
    _render() {
        if (!this._shouldRender) {
            return;
        }
        this._shouldRender = false;
        this._horizontalScrollbar.render();
        this._verticalScrollbar.render();
        if (this._options.useShadows) {
            const scrollState = this._scrollable.getCurrentScrollPosition();
            const enableTop = scrollState.scrollTop > 0;
            const enableLeft = scrollState.scrollLeft > 0;
            const leftClassName = enableLeft ? ' left' : '';
            const topClassName = enableTop ? ' top' : '';
            const topLeftClassName = enableLeft || enableTop ? ' top-left-corner' : '';
            this._leftShadowDomNode.setClassName("shadow".concat(leftClassName));
            this._topShadowDomNode.setClassName("shadow".concat(topClassName));
            this._topLeftShadowDomNode.setClassName("shadow".concat(topLeftClassName).concat(topClassName).concat(leftClassName));
        }
    }
    // -------------------- fade in / fade out --------------------
    _onDragStart() {
        this._isDragging = true;
        this._reveal();
    }
    _onDragEnd() {
        this._isDragging = false;
        this._hide();
    }
    _onMouseLeave(e) {
        this._mouseIsOver = false;
        this._hide();
    }
    _onMouseOver(e) {
        this._mouseIsOver = true;
        this._reveal();
    }
    _reveal() {
        this._verticalScrollbar.beginReveal();
        this._horizontalScrollbar.beginReveal();
        this._scheduleHide();
    }
    _hide() {
        if (!this._mouseIsOver && !this._isDragging) {
            this._verticalScrollbar.beginHide();
            this._horizontalScrollbar.beginHide();
        }
    }
    _scheduleHide() {
        if (!this._mouseIsOver && !this._isDragging) {
            this._hideTimeout.cancelAndSet(()=>this._hide(), HIDE_TIMEOUT);
        }
    }
    constructor(element, options, scrollable){
        super();
        this._onScroll = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onScroll = this._onScroll.event;
        this._onWillScroll = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        element.style.overflow = 'hidden';
        this._options = resolveOptions(options);
        this._scrollable = scrollable;
        this._register(this._scrollable.onScroll((e)=>{
            this._onWillScroll.fire(e);
            this._onDidScroll(e);
            this._onScroll.fire(e);
        }));
        const scrollbarHost = {
            onMouseWheel: (mouseWheelEvent)=>this._onMouseWheel(mouseWheelEvent),
            onDragStart: ()=>this._onDragStart(),
            onDragEnd: ()=>this._onDragEnd()
        };
        this._verticalScrollbar = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$verticalScrollbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerticalScrollbar"](this._scrollable, this._options, scrollbarHost));
        this._horizontalScrollbar = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$horizontalScrollbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HorizontalScrollbar"](this._scrollable, this._options, scrollbarHost));
        this._domNode = document.createElement('div');
        this._domNode.className = 'monaco-scrollable-element ' + this._options.className;
        this._domNode.setAttribute('role', 'presentation');
        this._domNode.style.position = 'relative';
        this._domNode.style.overflow = 'hidden';
        this._domNode.appendChild(element);
        this._domNode.appendChild(this._horizontalScrollbar.domNode.domNode);
        this._domNode.appendChild(this._verticalScrollbar.domNode.domNode);
        if (this._options.useShadows) {
            this._leftShadowDomNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$fastDomNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFastDomNode"])(document.createElement('div'));
            this._leftShadowDomNode.setClassName('shadow');
            this._domNode.appendChild(this._leftShadowDomNode.domNode);
            this._topShadowDomNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$fastDomNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFastDomNode"])(document.createElement('div'));
            this._topShadowDomNode.setClassName('shadow');
            this._domNode.appendChild(this._topShadowDomNode.domNode);
            this._topLeftShadowDomNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$fastDomNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFastDomNode"])(document.createElement('div'));
            this._topLeftShadowDomNode.setClassName('shadow');
            this._domNode.appendChild(this._topLeftShadowDomNode.domNode);
        } else {
            this._leftShadowDomNode = null;
            this._topShadowDomNode = null;
            this._topLeftShadowDomNode = null;
        }
        this._listenOnDomNode = this._options.listenOnDomNode || this._domNode;
        this._mouseWheelToDispose = [];
        this._setListeningToMouseWheel(this._options.handleMouseWheel);
        this.onmouseover(this._listenOnDomNode, (e)=>this._onMouseOver(e));
        this.onmouseleave(this._listenOnDomNode, (e)=>this._onMouseLeave(e));
        this._hideTimeout = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutTimer"]());
        this._isDragging = false;
        this._mouseIsOver = false;
        this._shouldRender = true;
        this._revealOnScroll = true;
    }
}
class ScrollableElement extends AbstractScrollableElement {
    setScrollPosition(update) {
        this._scrollable.setScrollPositionNow(update);
    }
    constructor(element, options){
        options = options || {};
        options.mouseWheelSmoothScroll = false;
        const scrollable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$scrollable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scrollable"]({
            forceIntegerValues: true,
            smoothScrollDuration: 0,
            scheduleAtNextAnimationFrame: (callback)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAtNextAnimationFrame"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](element), callback)
        });
        super(element, options, scrollable);
        this._register(scrollable);
    }
}
class SmoothScrollableElement extends AbstractScrollableElement {
    setScrollPosition(update) {
        if (update.reuseAnimation) {
            this._scrollable.setScrollPositionSmooth(update, update.reuseAnimation);
        } else {
            this._scrollable.setScrollPositionNow(update);
        }
    }
    getScrollPosition() {
        return this._scrollable.getCurrentScrollPosition();
    }
    constructor(element, options, scrollable){
        super(element, options, scrollable);
    }
}
class DomScrollableElement extends AbstractScrollableElement {
    setScrollPosition(update) {
        this._scrollable.setScrollPositionNow(update);
    }
    getScrollPosition() {
        return this._scrollable.getCurrentScrollPosition();
    }
    scanDomNode() {
        // width, scrollLeft, scrollWidth, height, scrollTop, scrollHeight
        this.setScrollDimensions({
            width: this._element.clientWidth,
            scrollWidth: this._element.scrollWidth,
            height: this._element.clientHeight,
            scrollHeight: this._element.scrollHeight
        });
        this.setScrollPosition({
            scrollLeft: this._element.scrollLeft,
            scrollTop: this._element.scrollTop
        });
    }
    constructor(element, options){
        options = options || {};
        options.mouseWheelSmoothScroll = false;
        const scrollable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$scrollable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scrollable"]({
            forceIntegerValues: false,
            smoothScrollDuration: 0,
            scheduleAtNextAnimationFrame: (callback)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAtNextAnimationFrame"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](element), callback)
        });
        super(element, options, scrollable);
        this._register(scrollable);
        this._element = element;
        this._register(this.onScroll((e)=>{
            if (e.scrollTopChanged) {
                this._element.scrollTop = e.scrollTop;
            }
            if (e.scrollLeftChanged) {
                this._element.scrollLeft = e.scrollLeft;
            }
        }));
        this.scanDomNode();
    }
}
function resolveOptions(opts) {
    const result = {
        lazyRender: typeof opts.lazyRender !== 'undefined' ? opts.lazyRender : false,
        className: typeof opts.className !== 'undefined' ? opts.className : '',
        useShadows: typeof opts.useShadows !== 'undefined' ? opts.useShadows : true,
        handleMouseWheel: typeof opts.handleMouseWheel !== 'undefined' ? opts.handleMouseWheel : true,
        flipAxes: typeof opts.flipAxes !== 'undefined' ? opts.flipAxes : false,
        consumeMouseWheelIfScrollbarIsNeeded: typeof opts.consumeMouseWheelIfScrollbarIsNeeded !== 'undefined' ? opts.consumeMouseWheelIfScrollbarIsNeeded : false,
        alwaysConsumeMouseWheel: typeof opts.alwaysConsumeMouseWheel !== 'undefined' ? opts.alwaysConsumeMouseWheel : false,
        scrollYToX: typeof opts.scrollYToX !== 'undefined' ? opts.scrollYToX : false,
        mouseWheelScrollSensitivity: typeof opts.mouseWheelScrollSensitivity !== 'undefined' ? opts.mouseWheelScrollSensitivity : 1,
        fastScrollSensitivity: typeof opts.fastScrollSensitivity !== 'undefined' ? opts.fastScrollSensitivity : 5,
        scrollPredominantAxis: typeof opts.scrollPredominantAxis !== 'undefined' ? opts.scrollPredominantAxis : true,
        mouseWheelSmoothScroll: typeof opts.mouseWheelSmoothScroll !== 'undefined' ? opts.mouseWheelSmoothScroll : true,
        arrowSize: typeof opts.arrowSize !== 'undefined' ? opts.arrowSize : 11,
        listenOnDomNode: typeof opts.listenOnDomNode !== 'undefined' ? opts.listenOnDomNode : null,
        horizontal: typeof opts.horizontal !== 'undefined' ? opts.horizontal : 1 /* ScrollbarVisibility.Auto */ ,
        horizontalScrollbarSize: typeof opts.horizontalScrollbarSize !== 'undefined' ? opts.horizontalScrollbarSize : 10,
        horizontalSliderSize: typeof opts.horizontalSliderSize !== 'undefined' ? opts.horizontalSliderSize : 0,
        horizontalHasArrows: typeof opts.horizontalHasArrows !== 'undefined' ? opts.horizontalHasArrows : false,
        vertical: typeof opts.vertical !== 'undefined' ? opts.vertical : 1 /* ScrollbarVisibility.Auto */ ,
        verticalScrollbarSize: typeof opts.verticalScrollbarSize !== 'undefined' ? opts.verticalScrollbarSize : 10,
        verticalHasArrows: typeof opts.verticalHasArrows !== 'undefined' ? opts.verticalHasArrows : false,
        verticalSliderSize: typeof opts.verticalSliderSize !== 'undefined' ? opts.verticalSliderSize : 0,
        scrollByPage: typeof opts.scrollByPage !== 'undefined' ? opts.scrollByPage : false
    };
    result.horizontalSliderSize = typeof opts.horizontalSliderSize !== 'undefined' ? opts.horizontalSliderSize : result.horizontalScrollbarSize;
    result.verticalSliderSize = typeof opts.verticalSliderSize !== 'undefined' ? opts.verticalSliderSize : result.verticalScrollbarSize;
    // Defaults are different on Macs
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"]) {
        result.className += ' mac';
    }
    return result;
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverWidget.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ClickAction": ()=>ClickAction,
    "HoverAction": ()=>HoverAction,
    "HoverWidget": ()=>HoverWidget,
    "KeyDownAction": ()=>KeyDownAction,
    "getHoverAccessibleViewHint": ()=>getHoverAccessibleViewHint
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
const $ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"];
class HoverWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    onContentsChanged() {
        this.scrollbar.scanDomNode();
    }
    constructor(){
        super();
        this.containerDomNode = document.createElement('div');
        this.containerDomNode.className = 'monaco-hover';
        this.containerDomNode.tabIndex = 0;
        this.containerDomNode.setAttribute('role', 'tooltip');
        this.contentsDomNode = document.createElement('div');
        this.contentsDomNode.className = 'monaco-hover-content';
        this.scrollbar = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomScrollableElement"](this.contentsDomNode, {
            consumeMouseWheelIfScrollbarIsNeeded: true
        }));
        this.containerDomNode.appendChild(this.scrollbar.getDomNode());
    }
}
class HoverAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    static render(parent, actionOptions, keybindingLabel) {
        return new HoverAction(parent, actionOptions, keybindingLabel);
    }
    setEnabled(enabled) {
        if (enabled) {
            this.actionContainer.classList.remove('disabled');
            this.actionContainer.removeAttribute('aria-disabled');
        } else {
            this.actionContainer.classList.add('disabled');
            this.actionContainer.setAttribute('aria-disabled', 'true');
        }
    }
    constructor(parent, actionOptions, keybindingLabel){
        super();
        this.actionLabel = actionOptions.label;
        this.actionKeybindingLabel = keybindingLabel;
        this.actionContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](parent, $('div.action-container'));
        this.actionContainer.setAttribute('tabindex', '0');
        this.action = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.actionContainer, $('a.action'));
        this.action.setAttribute('role', 'button');
        if (actionOptions.iconClass) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.action, $("span.icon.".concat(actionOptions.iconClass)));
        }
        const label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.action, $('span'));
        label.textContent = keybindingLabel ? "".concat(actionOptions.label, " (").concat(keybindingLabel, ")") : actionOptions.label;
        this._store.add(new ClickAction(this.actionContainer, actionOptions.run));
        this._store.add(new KeyDownAction(this.actionContainer, actionOptions.run, [
            3 /* KeyCode.Enter */ ,
            10 /* KeyCode.Space */ 
        ]));
        this.setEnabled(true);
    }
}
function getHoverAccessibleViewHint(shouldHaveHint, keybinding) {
    return shouldHaveHint && keybinding ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('acessibleViewHint', "Inspect this in the accessible view with {0}.", keybinding) : shouldHaveHint ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('acessibleViewHintNoKbOpen', "Inspect this in the accessible view via the command Open Accessible View which is currently not triggerable via keybinding.") : '';
}
class ClickAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    constructor(container, run){
        super();
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](container, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].CLICK, (e)=>{
            e.stopPropagation();
            e.preventDefault();
            run(container);
        }));
    }
}
class KeyDownAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    constructor(container, run, keyCodes){
        super();
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](container, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
            const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            if (keyCodes.some((keyCode)=>event.equals(keyCode))) {
                e.stopPropagation();
                e.preventDefault();
                run(container);
            }
        }));
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "createInstantHoverDelegate": ()=>createInstantHoverDelegate,
    "getDefaultHoverDelegate": ()=>getDefaultHoverDelegate,
    "setHoverDelegateFactory": ()=>setHoverDelegateFactory
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lazy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lazy.js [app-client] (ecmascript)");
;
const nullHoverDelegateFactory = ()=>({
        get delay () {
            return -1;
        },
        dispose: ()=>{},
        showHover: ()=>{
            return undefined;
        }
    });
let hoverDelegateFactory = nullHoverDelegateFactory;
const defaultHoverDelegateMouse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lazy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lazy"](()=>hoverDelegateFactory('mouse', false));
const defaultHoverDelegateElement = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lazy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lazy"](()=>hoverDelegateFactory('element', false));
function setHoverDelegateFactory(hoverDelegateProvider) {
    hoverDelegateFactory = hoverDelegateProvider;
}
function getDefaultHoverDelegate(placement) {
    if (placement === 'element') {
        return defaultHoverDelegateElement.value;
    }
    return defaultHoverDelegateMouse.value;
}
function createInstantHoverDelegate() {
    // Creates a hover delegate with instant hover enabled.
    // This hover belongs to the consumer and requires the them to dispose it.
    // Instant hover only makes sense for 'element' placement.
    return hoverDelegateFactory('element', true);
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegate2.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "getBaseLayerHoverDelegate": ()=>getBaseLayerHoverDelegate,
    "setBaseLayerHoverDelegate": ()=>setBaseLayerHoverDelegate
});
let baseHoverDelegate = {
    showHover: ()=>undefined,
    hideHover: ()=>undefined,
    showAndFocusLastHover: ()=>undefined,
    setupManagedHover: ()=>null,
    showManagedHover: ()=>undefined
};
function setBaseLayerHoverDelegate(hoverDelegate) {
    baseHoverDelegate = hoverDelegate;
}
function getBaseLayerHoverDelegate() {
    return baseHoverDelegate;
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabels.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "renderIcon": ()=>renderIcon,
    "renderLabelWithIcons": ()=>renderLabelWithIcons
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/themables.js [app-client] (ecmascript)");
;
;
const labelWithIconsRegex = new RegExp("(\\\\)?\\$\\((".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].iconNameExpression, "(?:").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].iconModifierExpression, ")?)\\)"), 'g');
function renderLabelWithIcons(text) {
    const elements = new Array();
    let match;
    let textStart = 0, textStop = 0;
    while((match = labelWithIconsRegex.exec(text)) !== null){
        textStop = match.index || 0;
        if (textStart < textStop) {
            elements.push(text.substring(textStart, textStop));
        }
        textStart = (match.index || 0) + match[0].length;
        const [, escaped, codicon] = match;
        elements.push(escaped ? "$(".concat(codicon, ")") : renderIcon({
            id: codicon
        }));
    }
    if (textStart < text.length) {
        elements.push(text.substring(textStart));
    }
    return elements;
}
function renderIcon(icon) {
    const node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]("span");
    node.classList.add(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassNameArray(icon));
    return node;
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "IconLabel": ()=>IconLabel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$highlightedlabel$2f$highlightedLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/highlightedlabel/highlightedLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegate2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/iconLabels.js [app-client] (ecmascript)");
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
class FastLabelNode {
    get element() {
        return this._element;
    }
    set textContent(content) {
        if (this.disposed || content === this._textContent) {
            return;
        }
        this._textContent = content;
        this._element.textContent = content;
    }
    set classNames(classNames) {
        if (this.disposed || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"])(classNames, this._classNames)) {
            return;
        }
        this._classNames = classNames;
        this._element.classList.value = '';
        this._element.classList.add(...classNames);
    }
    set empty(empty) {
        if (this.disposed || empty === this._empty) {
            return;
        }
        this._empty = empty;
        this._element.style.marginLeft = empty ? '0' : '';
    }
    dispose() {
        this.disposed = true;
    }
    constructor(_element){
        this._element = _element;
    }
}
class IconLabel extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get element() {
        return this.domNode.element;
    }
    setLabel(label, description, options) {
        const labelClasses = [
            'monaco-icon-label'
        ];
        const containerClasses = [
            'monaco-icon-label-container'
        ];
        let ariaLabel = '';
        if (options) {
            if (options.extraClasses) {
                labelClasses.push(...options.extraClasses);
            }
            if (options.italic) {
                labelClasses.push('italic');
            }
            if (options.strikethrough) {
                labelClasses.push('strikethrough');
            }
            if (options.disabledCommand) {
                containerClasses.push('disabled');
            }
            if (options.title) {
                if (typeof options.title === 'string') {
                    ariaLabel += options.title;
                } else {
                    ariaLabel += label;
                }
            }
        }
        const existingIconNode = this.domNode.element.querySelector('.monaco-icon-label-iconpath');
        if (options === null || options === void 0 ? void 0 : options.iconPath) {
            let iconNode;
            if (!existingIconNode || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](existingIconNode)) {
                iconNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('.monaco-icon-label-iconpath');
                this.domNode.element.prepend(iconNode);
            } else {
                iconNode = existingIconNode;
            }
            iconNode.style.backgroundImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCSSUrl"](options === null || options === void 0 ? void 0 : options.iconPath);
        } else if (existingIconNode) {
            existingIconNode.remove();
        }
        this.domNode.classNames = labelClasses;
        this.domNode.element.setAttribute('aria-label', ariaLabel);
        this.labelContainer.classList.value = '';
        this.labelContainer.classList.add(...containerClasses);
        this.setupHover((options === null || options === void 0 ? void 0 : options.descriptionTitle) ? this.labelContainer : this.element, options === null || options === void 0 ? void 0 : options.title);
        this.nameNode.setLabel(label, options);
        if (description || this.descriptionNode) {
            const descriptionNode = this.getOrCreateDescriptionNode();
            if (descriptionNode instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$highlightedlabel$2f$highlightedLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightedLabel"]) {
                descriptionNode.set(description || '', options ? options.descriptionMatches : undefined, undefined, options === null || options === void 0 ? void 0 : options.labelEscapeNewLines);
                this.setupHover(descriptionNode.element, options === null || options === void 0 ? void 0 : options.descriptionTitle);
            } else {
                descriptionNode.textContent = description && (options === null || options === void 0 ? void 0 : options.labelEscapeNewLines) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$highlightedlabel$2f$highlightedLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightedLabel"].escapeNewLines(description, []) : description || '';
                this.setupHover(descriptionNode.element, (options === null || options === void 0 ? void 0 : options.descriptionTitle) || '');
                descriptionNode.empty = !description;
            }
        }
        if ((options === null || options === void 0 ? void 0 : options.suffix) || this.suffixNode) {
            const suffixNode = this.getOrCreateSuffixNode();
            var _options_suffix;
            suffixNode.textContent = (_options_suffix = options === null || options === void 0 ? void 0 : options.suffix) !== null && _options_suffix !== void 0 ? _options_suffix : '';
        }
    }
    setupHover(htmlElement, tooltip) {
        const previousCustomHover = this.customHovers.get(htmlElement);
        if (previousCustomHover) {
            previousCustomHover.dispose();
            this.customHovers.delete(htmlElement);
        }
        if (!tooltip) {
            htmlElement.removeAttribute('title');
            return;
        }
        if (this.hoverDelegate.showNativeHover) {
            function setupNativeHover(htmlElement, tooltip) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(tooltip)) {
                    // Icons don't render in the native hover so we strip them out
                    htmlElement.title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripIcons"])(tooltip);
                } else if (tooltip === null || tooltip === void 0 ? void 0 : tooltip.markdownNotSupportedFallback) {
                    htmlElement.title = tooltip.markdownNotSupportedFallback;
                } else {
                    htmlElement.removeAttribute('title');
                }
            }
            setupNativeHover(htmlElement, tooltip);
        } else {
            const hoverDisposable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLayerHoverDelegate"])().setupManagedHover(this.hoverDelegate, htmlElement, tooltip);
            if (hoverDisposable) {
                this.customHovers.set(htmlElement, hoverDisposable);
            }
        }
    }
    dispose() {
        super.dispose();
        for (const disposable of this.customHovers.values()){
            disposable.dispose();
        }
        this.customHovers.clear();
    }
    getOrCreateSuffixNode() {
        if (!this.suffixNode) {
            const suffixContainer = this._register(new FastLabelNode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["after"](this.nameContainer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('span.monaco-icon-suffix-container'))));
            this.suffixNode = this._register(new FastLabelNode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](suffixContainer.element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('span.label-suffix'))));
        }
        return this.suffixNode;
    }
    getOrCreateDescriptionNode() {
        if (!this.descriptionNode) {
            var _this_creationOptions;
            const descriptionContainer = this._register(new FastLabelNode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.labelContainer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('span.monaco-icon-description-container'))));
            if ((_this_creationOptions = this.creationOptions) === null || _this_creationOptions === void 0 ? void 0 : _this_creationOptions.supportDescriptionHighlights) {
                this.descriptionNode = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$highlightedlabel$2f$highlightedLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightedLabel"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](descriptionContainer.element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('span.label-description')), {
                    supportIcons: !!this.creationOptions.supportIcons
                }));
            } else {
                this.descriptionNode = this._register(new FastLabelNode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](descriptionContainer.element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('span.label-description'))));
            }
        }
        return this.descriptionNode;
    }
    constructor(container, options){
        super();
        this.customHovers = new Map();
        this.creationOptions = options;
        this.domNode = this._register(new FastLabelNode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](container, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('.monaco-icon-label'))));
        this.labelContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.domNode.element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('.monaco-icon-label-container'));
        this.nameContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.labelContainer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('span.monaco-icon-name-container'));
        if ((options === null || options === void 0 ? void 0 : options.supportHighlights) || (options === null || options === void 0 ? void 0 : options.supportIcons)) {
            this.nameNode = this._register(new LabelWithHighlights(this.nameContainer, !!options.supportIcons));
        } else {
            this.nameNode = new Label(this.nameContainer);
        }
        var _options_hoverDelegate;
        this.hoverDelegate = (_options_hoverDelegate = options === null || options === void 0 ? void 0 : options.hoverDelegate) !== null && _options_hoverDelegate !== void 0 ? _options_hoverDelegate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('mouse');
    }
}
class Label {
    setLabel(label, options) {
        if (this.label === label && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"])(this.options, options)) {
            return;
        }
        this.label = label;
        this.options = options;
        if (typeof label === 'string') {
            if (!this.singleLabel) {
                this.container.innerText = '';
                this.container.classList.remove('multiple');
                this.singleLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.container, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('a.label-name', {
                    id: options === null || options === void 0 ? void 0 : options.domId
                }));
            }
            this.singleLabel.textContent = label;
        } else {
            this.container.innerText = '';
            this.container.classList.add('multiple');
            this.singleLabel = undefined;
            for(let i = 0; i < label.length; i++){
                const l = label[i];
                const id = (options === null || options === void 0 ? void 0 : options.domId) && "".concat(options === null || options === void 0 ? void 0 : options.domId, "_").concat(i);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.container, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('a.label-name', {
                    id,
                    'data-icon-label-count': label.length,
                    'data-icon-label-index': i,
                    'role': 'treeitem'
                }, l));
                if (i < label.length - 1) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.container, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('span.label-separator', undefined, (options === null || options === void 0 ? void 0 : options.separator) || '/'));
                }
            }
        }
    }
    constructor(container){
        this.container = container;
        this.label = undefined;
        this.singleLabel = undefined;
    }
}
function splitMatches(labels, separator, matches) {
    if (!matches) {
        return undefined;
    }
    let labelStart = 0;
    return labels.map((label)=>{
        const labelRange = {
            start: labelStart,
            end: labelStart + label.length
        };
        const result = matches.map((match)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].intersect(labelRange, match)).filter((range)=>!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isEmpty(range)).map((param)=>{
            let { start, end } = param;
            return {
                start: start - labelStart,
                end: end - labelStart
            };
        });
        labelStart = labelRange.end + separator.length;
        return result;
    });
}
class LabelWithHighlights extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    setLabel(label, options) {
        if (this.label === label && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"])(this.options, options)) {
            return;
        }
        this.label = label;
        this.options = options;
        if (typeof label === 'string') {
            if (!this.singleLabel) {
                this.container.innerText = '';
                this.container.classList.remove('multiple');
                this.singleLabel = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$highlightedlabel$2f$highlightedLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightedLabel"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.container, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('a.label-name', {
                    id: options === null || options === void 0 ? void 0 : options.domId
                })), {
                    supportIcons: this.supportIcons
                }));
            }
            this.singleLabel.set(label, options === null || options === void 0 ? void 0 : options.matches, undefined, options === null || options === void 0 ? void 0 : options.labelEscapeNewLines);
        } else {
            this.container.innerText = '';
            this.container.classList.add('multiple');
            this.singleLabel = undefined;
            const separator = (options === null || options === void 0 ? void 0 : options.separator) || '/';
            const matches = splitMatches(label, separator, options === null || options === void 0 ? void 0 : options.matches);
            for(let i = 0; i < label.length; i++){
                const l = label[i];
                const m = matches ? matches[i] : undefined;
                const id = (options === null || options === void 0 ? void 0 : options.domId) && "".concat(options === null || options === void 0 ? void 0 : options.domId, "_").concat(i);
                const name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('a.label-name', {
                    id,
                    'data-icon-label-count': label.length,
                    'data-icon-label-index': i,
                    'role': 'treeitem'
                });
                const highlightedLabel = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$highlightedlabel$2f$highlightedLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightedLabel"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.container, name), {
                    supportIcons: this.supportIcons
                }));
                highlightedLabel.set(l, m, undefined, options === null || options === void 0 ? void 0 : options.labelEscapeNewLines);
                if (i < label.length - 1) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('span.label-separator', undefined, separator));
                }
            }
        }
    }
    constructor(container, supportIcons){
        super();
        this.container = container;
        this.supportIcons = supportIcons;
        this.label = undefined;
        this.singleLabel = undefined;
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "alert": ()=>alert,
    "setARIAContainer": ()=>setARIAContainer,
    "status": ()=>status
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
;
;
// Use a max length since we are inserting the whole msg in the DOM and that can cause browsers to freeze for long messages #94233
const MAX_MESSAGE_LENGTH = 20000;
let ariaContainer;
let alertContainer;
let alertContainer2;
let statusContainer;
let statusContainer2;
function setARIAContainer(parent) {
    ariaContainer = document.createElement('div');
    ariaContainer.className = 'monaco-aria-container';
    const createAlertContainer = ()=>{
        const element = document.createElement('div');
        element.className = 'monaco-alert';
        element.setAttribute('role', 'alert');
        element.setAttribute('aria-atomic', 'true');
        ariaContainer.appendChild(element);
        return element;
    };
    alertContainer = createAlertContainer();
    alertContainer2 = createAlertContainer();
    const createStatusContainer = ()=>{
        const element = document.createElement('div');
        element.className = 'monaco-status';
        element.setAttribute('aria-live', 'polite');
        element.setAttribute('aria-atomic', 'true');
        ariaContainer.appendChild(element);
        return element;
    };
    statusContainer = createStatusContainer();
    statusContainer2 = createStatusContainer();
    parent.appendChild(ariaContainer);
}
function alert(msg) {
    if (!ariaContainer) {
        return;
    }
    // Use alternate containers such that duplicated messages get read out by screen readers #99466
    if (alertContainer.textContent !== msg) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNode"](alertContainer2);
        insertMessage(alertContainer, msg);
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNode"](alertContainer);
        insertMessage(alertContainer2, msg);
    }
}
function status(msg) {
    if (!ariaContainer) {
        return;
    }
    if (statusContainer.textContent !== msg) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNode"](statusContainer2);
        insertMessage(statusContainer, msg);
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNode"](statusContainer);
        insertMessage(statusContainer2, msg);
    }
}
function insertMessage(target, msg) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNode"](target);
    if (msg.length > MAX_MESSAGE_LENGTH) {
        msg = msg.substr(0, MAX_MESSAGE_LENGTH);
    }
    target.textContent = msg;
    // See https://www.paciellogroup.com/blog/2012/06/html5-accessibility-chops-aria-rolealert-browser-support/
    target.style.visibility = 'hidden';
    target.style.visibility = 'visible';
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/contextview/contextview.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ContextView": ()=>ContextView,
    "LayoutAnchorMode": ()=>LayoutAnchorMode,
    "isAnchor": ()=>isAnchor,
    "layout": ()=>layout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$canIUse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/canIUse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/range.js [app-client] (ecmascript)");
;
;
;
;
;
;
function isAnchor(obj) {
    const anchor = obj;
    return !!anchor && typeof anchor.x === 'number' && typeof anchor.y === 'number';
}
var LayoutAnchorMode;
(function(LayoutAnchorMode) {
    LayoutAnchorMode[LayoutAnchorMode["AVOID"] = 0] = "AVOID";
    LayoutAnchorMode[LayoutAnchorMode["ALIGN"] = 1] = "ALIGN";
})(LayoutAnchorMode || (LayoutAnchorMode = {}));
function layout(viewportSize, viewSize, anchor) {
    const layoutAfterAnchorBoundary = anchor.mode === LayoutAnchorMode.ALIGN ? anchor.offset : anchor.offset + anchor.size;
    const layoutBeforeAnchorBoundary = anchor.mode === LayoutAnchorMode.ALIGN ? anchor.offset + anchor.size : anchor.offset;
    if (anchor.position === 0 /* LayoutAnchorPosition.Before */ ) {
        if (viewSize <= viewportSize - layoutAfterAnchorBoundary) {
            return layoutAfterAnchorBoundary; // happy case, lay it out after the anchor
        }
        if (viewSize <= layoutBeforeAnchorBoundary) {
            return layoutBeforeAnchorBoundary - viewSize; // ok case, lay it out before the anchor
        }
        return Math.max(viewportSize - viewSize, 0); // sad case, lay it over the anchor
    } else {
        if (viewSize <= layoutBeforeAnchorBoundary) {
            return layoutBeforeAnchorBoundary - viewSize; // happy case, lay it out before the anchor
        }
        if (viewSize <= viewportSize - layoutAfterAnchorBoundary) {
            return layoutAfterAnchorBoundary; // ok case, lay it out after the anchor
        }
        return 0; // sad case, lay it over the anchor
    }
}
class ContextView extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    setContainer(container, domPosition) {
        this.useFixedPosition = domPosition !== 1 /* ContextViewDOMPosition.ABSOLUTE */ ;
        const usedShadowDOM = this.useShadowDOM;
        this.useShadowDOM = domPosition === 3 /* ContextViewDOMPosition.FIXED_SHADOW */ ;
        if (container === this.container && usedShadowDOM === this.useShadowDOM) {
            return; // container is the same and no shadow DOM usage has changed
        }
        if (this.container) {
            this.toDisposeOnSetContainer.dispose();
            this.view.remove();
            if (this.shadowRoot) {
                var _this_shadowRootHostElement;
                this.shadowRoot = null;
                (_this_shadowRootHostElement = this.shadowRootHostElement) === null || _this_shadowRootHostElement === void 0 ? void 0 : _this_shadowRootHostElement.remove();
                this.shadowRootHostElement = null;
            }
            this.container = null;
        }
        if (container) {
            this.container = container;
            if (this.useShadowDOM) {
                this.shadowRootHostElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('.shadow-root-host');
                this.container.appendChild(this.shadowRootHostElement);
                this.shadowRoot = this.shadowRootHostElement.attachShadow({
                    mode: 'open'
                });
                const style = document.createElement('style');
                style.textContent = SHADOW_ROOT_CSS;
                this.shadowRoot.appendChild(style);
                this.shadowRoot.appendChild(this.view);
                this.shadowRoot.appendChild(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('slot'));
            } else {
                this.container.appendChild(this.view);
            }
            const toDisposeOnSetContainer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
            ContextView.BUBBLE_UP_EVENTS.forEach((event)=>{
                toDisposeOnSetContainer.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](this.container, event, (e)=>{
                    this.onDOMEvent(e, false);
                }));
            });
            ContextView.BUBBLE_DOWN_EVENTS.forEach((event)=>{
                toDisposeOnSetContainer.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](this.container, event, (e)=>{
                    this.onDOMEvent(e, true);
                }, true));
            });
            this.toDisposeOnSetContainer = toDisposeOnSetContainer;
        }
    }
    show(delegate) {
        var // Focus
        _this_delegate_focus, _this_delegate;
        if (this.isVisible()) {
            this.hide();
        }
        // Show static box
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNode"](this.view);
        this.view.className = 'context-view monaco-component';
        this.view.style.top = '0px';
        this.view.style.left = '0px';
        var _delegate_layer;
        this.view.style.zIndex = "".concat(2575 + ((_delegate_layer = delegate.layer) !== null && _delegate_layer !== void 0 ? _delegate_layer : 0));
        this.view.style.position = this.useFixedPosition ? 'fixed' : 'absolute';
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"](this.view);
        // Render content
        this.toDisposeOnClean = delegate.render(this.view) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
        // Set active delegate
        this.delegate = delegate;
        // Layout
        this.doLayout();
        (_this_delegate_focus = (_this_delegate = this.delegate).focus) === null || _this_delegate_focus === void 0 ? void 0 : _this_delegate_focus.call(_this_delegate);
    }
    getViewElement() {
        return this.view;
    }
    layout() {
        var _this_delegate_layout, _this_delegate;
        if (!this.isVisible()) {
            return;
        }
        if (this.delegate.canRelayout === false && !(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$canIUse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserFeatures"].pointerEvents)) {
            this.hide();
            return;
        }
        (_this_delegate = this.delegate) === null || _this_delegate === void 0 ? void 0 : (_this_delegate_layout = _this_delegate.layout) === null || _this_delegate_layout === void 0 ? void 0 : _this_delegate_layout.call(_this_delegate);
        this.doLayout();
    }
    doLayout() {
        // Check that we still have a delegate - this.delegate.layout may have hidden
        if (!this.isVisible()) {
            return;
        }
        // Get anchor
        const anchor = this.delegate.getAnchor();
        // Compute around
        let around;
        // Get the element's position and size (to anchor the view)
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](anchor)) {
            const elementPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](anchor);
            // In areas where zoom is applied to the element or its ancestors, we need to adjust the size of the element
            // e.g. The title bar has counter zoom behavior meaning it applies the inverse of zoom level.
            // Window Zoom Level: 1.5, Title Bar Zoom: 1/1.5, Size Multiplier: 1.5
            const zoom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodeZoomLevel"](anchor);
            around = {
                top: elementPosition.top * zoom,
                left: elementPosition.left * zoom,
                width: elementPosition.width * zoom,
                height: elementPosition.height * zoom
            };
        } else if (isAnchor(anchor)) {
            around = {
                top: anchor.y,
                left: anchor.x,
                width: anchor.width || 1,
                height: anchor.height || 2
            };
        } else {
            around = {
                top: anchor.posy,
                left: anchor.posx,
                // We are about to position the context view where the mouse
                // cursor is. To prevent the view being exactly under the mouse
                // when showing and thus potentially triggering an action within,
                // we treat the mouse location like a small sized block element.
                width: 2,
                height: 2
            };
        }
        const viewSizeWidth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalWidth"](this.view);
        const viewSizeHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalHeight"](this.view);
        const anchorPosition = this.delegate.anchorPosition || 0 /* AnchorPosition.BELOW */ ;
        const anchorAlignment = this.delegate.anchorAlignment || 0 /* AnchorAlignment.LEFT */ ;
        const anchorAxisAlignment = this.delegate.anchorAxisAlignment || 0 /* AnchorAxisAlignment.VERTICAL */ ;
        let top;
        let left;
        const activeWindow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveWindow"]();
        if (anchorAxisAlignment === 0 /* AnchorAxisAlignment.VERTICAL */ ) {
            const verticalAnchor = {
                offset: around.top - activeWindow.pageYOffset,
                size: around.height,
                position: anchorPosition === 0 /* AnchorPosition.BELOW */  ? 0 /* LayoutAnchorPosition.Before */  : 1 /* LayoutAnchorPosition.After */ 
            };
            const horizontalAnchor = {
                offset: around.left,
                size: around.width,
                position: anchorAlignment === 0 /* AnchorAlignment.LEFT */  ? 0 /* LayoutAnchorPosition.Before */  : 1 /* LayoutAnchorPosition.After */ ,
                mode: LayoutAnchorMode.ALIGN
            };
            top = layout(activeWindow.innerHeight, viewSizeHeight, verticalAnchor) + activeWindow.pageYOffset;
            // if view intersects vertically with anchor,  we must avoid the anchor
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].intersects({
                start: top,
                end: top + viewSizeHeight
            }, {
                start: verticalAnchor.offset,
                end: verticalAnchor.offset + verticalAnchor.size
            })) {
                horizontalAnchor.mode = LayoutAnchorMode.AVOID;
            }
            left = layout(activeWindow.innerWidth, viewSizeWidth, horizontalAnchor);
        } else {
            const horizontalAnchor = {
                offset: around.left,
                size: around.width,
                position: anchorAlignment === 0 /* AnchorAlignment.LEFT */  ? 0 /* LayoutAnchorPosition.Before */  : 1 /* LayoutAnchorPosition.After */ 
            };
            const verticalAnchor = {
                offset: around.top,
                size: around.height,
                position: anchorPosition === 0 /* AnchorPosition.BELOW */  ? 0 /* LayoutAnchorPosition.Before */  : 1 /* LayoutAnchorPosition.After */ ,
                mode: LayoutAnchorMode.ALIGN
            };
            left = layout(activeWindow.innerWidth, viewSizeWidth, horizontalAnchor);
            // if view intersects horizontally with anchor, we must avoid the anchor
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].intersects({
                start: left,
                end: left + viewSizeWidth
            }, {
                start: horizontalAnchor.offset,
                end: horizontalAnchor.offset + horizontalAnchor.size
            })) {
                verticalAnchor.mode = LayoutAnchorMode.AVOID;
            }
            top = layout(activeWindow.innerHeight, viewSizeHeight, verticalAnchor) + activeWindow.pageYOffset;
        }
        this.view.classList.remove('top', 'bottom', 'left', 'right');
        this.view.classList.add(anchorPosition === 0 /* AnchorPosition.BELOW */  ? 'bottom' : 'top');
        this.view.classList.add(anchorAlignment === 0 /* AnchorAlignment.LEFT */  ? 'left' : 'right');
        this.view.classList.toggle('fixed', this.useFixedPosition);
        const containerPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](this.container);
        this.view.style.top = "".concat(top - (this.useFixedPosition ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](this.view).top : containerPosition.top), "px");
        this.view.style.left = "".concat(left - (this.useFixedPosition ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](this.view).left : containerPosition.left), "px");
        this.view.style.width = 'initial';
    }
    hide(data) {
        const delegate = this.delegate;
        this.delegate = null;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.onHide) {
            delegate.onHide(data);
        }
        this.toDisposeOnClean.dispose();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hide"](this.view);
    }
    isVisible() {
        return !!this.delegate;
    }
    onDOMEvent(e, onCapture) {
        if (this.delegate) {
            if (this.delegate.onDOMEvent) {
                this.delegate.onDOMEvent(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](e).document.activeElement);
            } else if (onCapture && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestor"](e.target, this.container)) {
                this.hide();
            }
        }
    }
    dispose() {
        this.hide();
        super.dispose();
    }
    constructor(container, domPosition){
        super();
        this.container = null;
        this.useFixedPosition = false;
        this.useShadowDOM = false;
        this.delegate = null;
        this.toDisposeOnClean = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
        this.toDisposeOnSetContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
        this.shadowRoot = null;
        this.shadowRootHostElement = null;
        this.view = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('.context-view');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hide"](this.view);
        this.setContainer(container, domPosition);
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>this.setContainer(null, 1 /* ContextViewDOMPosition.ABSOLUTE */ )));
    }
}
ContextView.BUBBLE_UP_EVENTS = [
    'click',
    'keydown',
    'focus',
    'blur'
];
ContextView.BUBBLE_DOWN_EVENTS = [
    'click'
];
const SHADOW_ROOT_CSS = '\n	:host {\n		all: initial; /* 1st rule so subsequent properties are reset. */\n	}\n\n	.codicon[class*=\'codicon-\'] {\n		font: normal normal normal 16px/1 codicon;\n		display: inline-block;\n		text-decoration: none;\n		text-rendering: auto;\n		text-align: center;\n		-webkit-font-smoothing: antialiased;\n		-moz-osx-font-smoothing: grayscale;\n		user-select: none;\n		-webkit-user-select: none;\n		-ms-user-select: none;\n	}\n\n	:host {\n		font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", "HelveticaNeue-Light", system-ui, "Ubuntu", "Droid Sans", sans-serif;\n	}\n\n	:host-context(.mac) { font-family: -apple-system, BlinkMacSystemFont, sans-serif; }\n	:host-context(.mac:lang(zh-Hans)) { font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", sans-serif; }\n	:host-context(.mac:lang(zh-Hant)) { font-family: -apple-system, BlinkMacSystemFont, "PingFang TC", sans-serif; }\n	:host-context(.mac:lang(ja)) { font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic Pro", sans-serif; }\n	:host-context(.mac:lang(ko)) { font-family: -apple-system, BlinkMacSystemFont, "Nanum Gothic", "Apple SD Gothic Neo", "AppleGothic", sans-serif; }\n\n	:host-context(.windows) { font-family: "Segoe WPC", "Segoe UI", sans-serif; }\n	:host-context(.windows:lang(zh-Hans)) { font-family: "Segoe WPC", "Segoe UI", "Microsoft YaHei", sans-serif; }\n	:host-context(.windows:lang(zh-Hant)) { font-family: "Segoe WPC", "Segoe UI", "Microsoft Jhenghei", sans-serif; }\n	:host-context(.windows:lang(ja)) { font-family: "Segoe WPC", "Segoe UI", "Yu Gothic UI", "Meiryo UI", sans-serif; }\n	:host-context(.windows:lang(ko)) { font-family: "Segoe WPC", "Segoe UI", "Malgun Gothic", "Dotom", sans-serif; }\n\n	:host-context(.linux) { font-family: system-ui, "Ubuntu", "Droid Sans", sans-serif; }\n	:host-context(.linux:lang(zh-Hans)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans SC", "Source Han Sans CN", "Source Han Sans", sans-serif; }\n	:host-context(.linux:lang(zh-Hant)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans TC", "Source Han Sans TW", "Source Han Sans", sans-serif; }\n	:host-context(.linux:lang(ja)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans J", "Source Han Sans JP", "Source Han Sans", sans-serif; }\n	:host-context(.linux:lang(ko)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans K", "Source Han Sans JR", "Source Han Sans", "UnDotum", "FBaekmuk Gulim", sans-serif; }\n';
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBoxCustom.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "SelectBoxList": ()=>SelectBoxList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/markdownRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegate2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
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
const $ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"];
const SELECT_OPTION_ENTRY_TEMPLATE_ID = 'selectOption.entry.template';
class SelectListRenderer {
    get templateId() {
        return SELECT_OPTION_ENTRY_TEMPLATE_ID;
    }
    renderTemplate(container) {
        const data = Object.create(null);
        data.root = container;
        data.text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](container, $('.option-text'));
        data.detail = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](container, $('.option-detail'));
        data.decoratorRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](container, $('.option-decorator-right'));
        return data;
    }
    renderElement(element, index, templateData) {
        const data = templateData;
        const text = element.text;
        const detail = element.detail;
        const decoratorRight = element.decoratorRight;
        const isDisabled = element.isDisabled;
        data.text.textContent = text;
        data.detail.textContent = !!detail ? detail : '';
        data.decoratorRight.innerText = !!decoratorRight ? decoratorRight : '';
        // pseudo-select disabled option
        if (isDisabled) {
            data.root.classList.add('option-disabled');
        } else {
            // Make sure we do class removal from prior template rendering
            data.root.classList.remove('option-disabled');
        }
    }
    disposeTemplate(_templateData) {
    // noop
    }
}
class SelectBoxList extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    setTitle(title) {
        if (!this._hover && title) {
            this._hover = this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLayerHoverDelegate"])().setupManagedHover((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('mouse'), this.selectElement, title));
        } else if (this._hover) {
            this._hover.update(title);
        }
    }
    // IDelegate - List renderer
    getHeight() {
        return 22;
    }
    getTemplateId() {
        return SELECT_OPTION_ENTRY_TEMPLATE_ID;
    }
    constructSelectDropDown(contextViewProvider) {
        // SetUp ContextView container to hold select Dropdown
        this.contextViewProvider = contextViewProvider;
        this.selectDropDownContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('.monaco-select-box-dropdown-container');
        // Use custom CSS vars for padding calculation (shared with parent select)
        this.selectDropDownContainer.classList.add('monaco-select-box-dropdown-padding');
        // Setup container for select option details
        this.selectionDetailsPane = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.selectDropDownContainer, $('.select-box-details-pane'));
        // Create span flex box item/div we can measure and control
        const widthControlOuterDiv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.selectDropDownContainer, $('.select-box-dropdown-container-width-control'));
        const widthControlInnerDiv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](widthControlOuterDiv, $('.width-control-div'));
        this.widthControlElement = document.createElement('span');
        this.widthControlElement.className = 'option-text-width-control';
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](widthControlInnerDiv, this.widthControlElement);
        // Always default to below position
        this._dropDownPosition = 0 /* AnchorPosition.BELOW */ ;
        // Inline stylesheet for themes
        this.styleElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyleSheet"](this.selectDropDownContainer);
        // Prevent dragging of dropdown #114329
        this.selectDropDownContainer.setAttribute('draggable', 'true');
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.selectDropDownContainer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].DRAG_START, (e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
        }));
    }
    registerListeners() {
        // Parent native select keyboard listeners
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](this.selectElement, 'change', (e)=>{
            this.selected = e.target.selectedIndex;
            this._onDidSelect.fire({
                index: e.target.selectedIndex,
                selected: e.target.value
            });
            if (!!this.options[this.selected] && !!this.options[this.selected].text) {
                this.setTitle(this.options[this.selected].text);
            }
        }));
        // Have to implement both keyboard and mouse controllers to handle disabled options
        // Intercept mouse events to override normal select actions on parents
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.selectElement, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].CLICK, (e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
            if (this._isVisible) {
                this.hideSelectDropDown(true);
            } else {
                this.showSelectDropDown();
            }
        }));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.selectElement, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_DOWN, (e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
        }));
        // Intercept touch events
        // The following implementation is slightly different from the mouse event handlers above.
        // Use the following helper variable, otherwise the list flickers.
        let listIsVisibleOnTouchStart;
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.selectElement, 'touchstart', (e)=>{
            listIsVisibleOnTouchStart = this._isVisible;
        }));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.selectElement, 'touchend', (e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
            if (listIsVisibleOnTouchStart) {
                this.hideSelectDropDown(true);
            } else {
                this.showSelectDropDown();
            }
        }));
        // Intercept keyboard handling
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.selectElement, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
            const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            let showDropDown = false;
            // Create and drop down select list on keyboard select
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"]) {
                if (event.keyCode === 18 /* KeyCode.DownArrow */  || event.keyCode === 16 /* KeyCode.UpArrow */  || event.keyCode === 10 /* KeyCode.Space */  || event.keyCode === 3 /* KeyCode.Enter */ ) {
                    showDropDown = true;
                }
            } else {
                if (event.keyCode === 18 /* KeyCode.DownArrow */  && event.altKey || event.keyCode === 16 /* KeyCode.UpArrow */  && event.altKey || event.keyCode === 10 /* KeyCode.Space */  || event.keyCode === 3 /* KeyCode.Enter */ ) {
                    showDropDown = true;
                }
            }
            if (showDropDown) {
                this.showSelectDropDown();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
            }
        }));
    }
    get onDidSelect() {
        return this._onDidSelect.event;
    }
    setOptions(options, selected) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"](this.options, options)) {
            this.options = options;
            this.selectElement.options.length = 0;
            this._hasDetails = false;
            this._cachedMaxDetailsHeight = undefined;
            this.options.forEach((option, index)=>{
                this.selectElement.add(this.createOption(option.text, index, option.isDisabled));
                if (typeof option.description === 'string') {
                    this._hasDetails = true;
                }
            });
        }
        if (selected !== undefined) {
            this.select(selected);
            // Set current = selected since this is not necessarily a user exit
            this._currentSelection = this.selected;
        }
    }
    setOptionsList() {
        var // Mirror options in drop-down
        // Populate select list for non-native select mode
        _this_selectList;
        (_this_selectList = this.selectList) === null || _this_selectList === void 0 ? void 0 : _this_selectList.splice(0, this.selectList.length, this.options);
    }
    select(index) {
        if (index >= 0 && index < this.options.length) {
            this.selected = index;
        } else if (index > this.options.length - 1) {
            // Adjust index to end of list
            // This could make client out of sync with the select
            this.select(this.options.length - 1);
        } else if (this.selected < 0) {
            this.selected = 0;
        }
        this.selectElement.selectedIndex = this.selected;
        if (!!this.options[this.selected] && !!this.options[this.selected].text) {
            this.setTitle(this.options[this.selected].text);
        }
    }
    focus() {
        if (this.selectElement) {
            this.selectElement.tabIndex = 0;
            this.selectElement.focus();
        }
    }
    blur() {
        if (this.selectElement) {
            this.selectElement.tabIndex = -1;
            this.selectElement.blur();
        }
    }
    setFocusable(focusable) {
        this.selectElement.tabIndex = focusable ? 0 : -1;
    }
    render(container) {
        this.container = container;
        container.classList.add('select-container');
        container.appendChild(this.selectElement);
        this.styleSelectElement();
    }
    initStyleSheet() {
        const content = [];
        // Style non-native select mode
        if (this.styles.listFocusBackground) {
            content.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { background-color: ".concat(this.styles.listFocusBackground, " !important; }"));
        }
        if (this.styles.listFocusForeground) {
            content.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { color: ".concat(this.styles.listFocusForeground, " !important; }"));
        }
        if (this.styles.decoratorRightForeground) {
            content.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.focused) .option-decorator-right { color: ".concat(this.styles.decoratorRightForeground, "; }"));
        }
        if (this.styles.selectBackground && this.styles.selectBorder && this.styles.selectBorder !== this.styles.selectBackground) {
            content.push(".monaco-select-box-dropdown-container { border: 1px solid ".concat(this.styles.selectBorder, " } "));
            content.push(".monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ".concat(this.styles.selectBorder, " } "));
            content.push(".monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ".concat(this.styles.selectBorder, " } "));
        } else if (this.styles.selectListBorder) {
            content.push(".monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ".concat(this.styles.selectListBorder, " } "));
            content.push(".monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ".concat(this.styles.selectListBorder, " } "));
        }
        // Hover foreground - ignore for disabled options
        if (this.styles.listHoverForeground) {
            content.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { color: ".concat(this.styles.listHoverForeground, " !important; }"));
        }
        // Hover background - ignore for disabled options
        if (this.styles.listHoverBackground) {
            content.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { background-color: ".concat(this.styles.listHoverBackground, " !important; }"));
        }
        // Match quick input outline styles - ignore for disabled options
        if (this.styles.listFocusOutline) {
            content.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { outline: 1.6px dotted ".concat(this.styles.listFocusOutline, " !important; outline-offset: -1.6px !important; }"));
        }
        if (this.styles.listHoverOutline) {
            content.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { outline: 1.6px dashed ".concat(this.styles.listHoverOutline, " !important; outline-offset: -1.6px !important; }"));
        }
        // Clear list styles on focus and on hover for disabled options
        content.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled.focused { background-color: transparent !important; color: inherit !important; outline: none !important; }");
        content.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled:hover { background-color: transparent !important; color: inherit !important; outline: none !important; }");
        this.styleElement.textContent = content.join('\n');
    }
    styleSelectElement() {
        var _this_styles_selectBackground;
        const background = (_this_styles_selectBackground = this.styles.selectBackground) !== null && _this_styles_selectBackground !== void 0 ? _this_styles_selectBackground : '';
        var _this_styles_selectForeground;
        const foreground = (_this_styles_selectForeground = this.styles.selectForeground) !== null && _this_styles_selectForeground !== void 0 ? _this_styles_selectForeground : '';
        var _this_styles_selectBorder;
        const border = (_this_styles_selectBorder = this.styles.selectBorder) !== null && _this_styles_selectBorder !== void 0 ? _this_styles_selectBorder : '';
        this.selectElement.style.backgroundColor = background;
        this.selectElement.style.color = foreground;
        this.selectElement.style.borderColor = border;
    }
    styleList() {
        var _this_styles_selectBackground;
        const background = (_this_styles_selectBackground = this.styles.selectBackground) !== null && _this_styles_selectBackground !== void 0 ? _this_styles_selectBackground : '';
        const listBackground = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCssValueWithDefault"](this.styles.selectListBackground, background);
        this.selectDropDownListContainer.style.backgroundColor = listBackground;
        this.selectionDetailsPane.style.backgroundColor = listBackground;
        var _this_styles_focusBorder;
        const optionsBorder = (_this_styles_focusBorder = this.styles.focusBorder) !== null && _this_styles_focusBorder !== void 0 ? _this_styles_focusBorder : '';
        this.selectDropDownContainer.style.outlineColor = optionsBorder;
        this.selectDropDownContainer.style.outlineOffset = '-1px';
        this.selectList.style(this.styles);
    }
    createOption(value, index, disabled) {
        const option = document.createElement('option');
        option.value = value;
        option.text = value;
        option.disabled = !!disabled;
        return option;
    }
    // ContextView dropdown methods
    showSelectDropDown() {
        this.selectionDetailsPane.innerText = '';
        if (!this.contextViewProvider || this._isVisible) {
            return;
        }
        // Lazily create and populate list only at open, moved from constructor
        this.createSelectList(this.selectDropDownContainer);
        this.setOptionsList();
        // This allows us to flip the position based on measurement
        // Set drop-down position above/below from required height and margins
        // If pre-layout cannot fit at least one option do not show drop-down
        this.contextViewProvider.showContextView({
            getAnchor: ()=>this.selectElement,
            render: (container)=>this.renderSelectDropDown(container, true),
            layout: ()=>{
                this.layoutSelectDropDown();
            },
            onHide: ()=>{
                this.selectDropDownContainer.classList.remove('visible');
                this.selectElement.classList.remove('synthetic-focus');
            },
            anchorPosition: this._dropDownPosition
        }, this.selectBoxOptions.optionsAsChildren ? this.container : undefined);
        // Hide so we can relay out
        this._isVisible = true;
        this.hideSelectDropDown(false);
        this.contextViewProvider.showContextView({
            getAnchor: ()=>this.selectElement,
            render: (container)=>this.renderSelectDropDown(container),
            layout: ()=>this.layoutSelectDropDown(),
            onHide: ()=>{
                this.selectDropDownContainer.classList.remove('visible');
                this.selectElement.classList.remove('synthetic-focus');
            },
            anchorPosition: this._dropDownPosition
        }, this.selectBoxOptions.optionsAsChildren ? this.container : undefined);
        // Track initial selection the case user escape, blur
        this._currentSelection = this.selected;
        this._isVisible = true;
        this.selectElement.setAttribute('aria-expanded', 'true');
    }
    hideSelectDropDown(focusSelect) {
        if (!this.contextViewProvider || !this._isVisible) {
            return;
        }
        this._isVisible = false;
        this.selectElement.setAttribute('aria-expanded', 'false');
        if (focusSelect) {
            this.selectElement.focus();
        }
        this.contextViewProvider.hideContextView();
    }
    renderSelectDropDown(container, preLayoutPosition) {
        container.appendChild(this.selectDropDownContainer);
        // Pre-Layout allows us to change position
        this.layoutSelectDropDown(preLayoutPosition);
        return {
            dispose: ()=>{
                // contextView will dispose itself if moving from one View to another
                this.selectDropDownContainer.remove(); // remove to take out the CSS rules we add
            }
        };
    }
    // Iterate over detailed descriptions, find max height
    measureMaxDetailsHeight() {
        let maxDetailsPaneHeight = 0;
        this.options.forEach((_option, index)=>{
            this.updateDetail(index);
            if (this.selectionDetailsPane.offsetHeight > maxDetailsPaneHeight) {
                maxDetailsPaneHeight = this.selectionDetailsPane.offsetHeight;
            }
        });
        return maxDetailsPaneHeight;
    }
    layoutSelectDropDown(preLayoutPosition) {
        // Avoid recursion from layout called in onListFocus
        if (this._skipLayout) {
            return false;
        }
        // Layout ContextView drop down select list and container
        // Have to manage our vertical overflow, sizing, position below or above
        // Position has to be determined and set prior to contextView instantiation
        if (this.selectList) {
            // Make visible to enable measurements
            this.selectDropDownContainer.classList.add('visible');
            const window = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](this.selectElement);
            const selectPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDomNodePagePosition"](this.selectElement);
            const styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"](this.selectElement).getComputedStyle(this.selectElement);
            const verticalPadding = parseFloat(styles.getPropertyValue('--dropdown-padding-top')) + parseFloat(styles.getPropertyValue('--dropdown-padding-bottom'));
            const maxSelectDropDownHeightBelow = window.innerHeight - selectPosition.top - selectPosition.height - (this.selectBoxOptions.minBottomMargin || 0);
            const maxSelectDropDownHeightAbove = selectPosition.top - SelectBoxList.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN;
            // Determine optimal width - min(longest option), opt(parent select, excluding margins), max(ContextView controlled)
            const selectWidth = this.selectElement.offsetWidth;
            const selectMinWidth = this.setWidthControlElement(this.widthControlElement);
            const selectOptimalWidth = Math.max(selectMinWidth, Math.round(selectWidth)).toString() + 'px';
            this.selectDropDownContainer.style.width = selectOptimalWidth;
            // Get initial list height and determine space above and below
            this.selectList.getHTMLElement().style.height = '';
            this.selectList.layout();
            let listHeight = this.selectList.contentHeight;
            if (this._hasDetails && this._cachedMaxDetailsHeight === undefined) {
                this._cachedMaxDetailsHeight = this.measureMaxDetailsHeight();
            }
            const maxDetailsPaneHeight = this._hasDetails ? this._cachedMaxDetailsHeight : 0;
            const minRequiredDropDownHeight = listHeight + verticalPadding + maxDetailsPaneHeight;
            const maxVisibleOptionsBelow = Math.floor((maxSelectDropDownHeightBelow - verticalPadding - maxDetailsPaneHeight) / this.getHeight());
            const maxVisibleOptionsAbove = Math.floor((maxSelectDropDownHeightAbove - verticalPadding - maxDetailsPaneHeight) / this.getHeight());
            // If we are only doing pre-layout check/adjust position only
            // Calculate vertical space available, flip up if insufficient
            // Use reflected padding on parent select, ContextView style
            // properties not available before DOM attachment
            if (preLayoutPosition) {
                // Check if select moved out of viewport , do not open
                // If at least one option cannot be shown, don't open the drop-down or hide/remove if open
                if (selectPosition.top + selectPosition.height > window.innerHeight - 22 || selectPosition.top < SelectBoxList.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN || maxVisibleOptionsBelow < 1 && maxVisibleOptionsAbove < 1) {
                    // Indicate we cannot open
                    return false;
                }
                // Determine if we have to flip up
                // Always show complete list items - never more than Max available vertical height
                if (maxVisibleOptionsBelow < SelectBoxList.DEFAULT_MINIMUM_VISIBLE_OPTIONS && maxVisibleOptionsAbove > maxVisibleOptionsBelow && this.options.length > maxVisibleOptionsBelow) {
                    this._dropDownPosition = 1 /* AnchorPosition.ABOVE */ ;
                    this.selectDropDownListContainer.remove();
                    this.selectionDetailsPane.remove();
                    this.selectDropDownContainer.appendChild(this.selectionDetailsPane);
                    this.selectDropDownContainer.appendChild(this.selectDropDownListContainer);
                    this.selectionDetailsPane.classList.remove('border-top');
                    this.selectionDetailsPane.classList.add('border-bottom');
                } else {
                    this._dropDownPosition = 0 /* AnchorPosition.BELOW */ ;
                    this.selectDropDownListContainer.remove();
                    this.selectionDetailsPane.remove();
                    this.selectDropDownContainer.appendChild(this.selectDropDownListContainer);
                    this.selectDropDownContainer.appendChild(this.selectionDetailsPane);
                    this.selectionDetailsPane.classList.remove('border-bottom');
                    this.selectionDetailsPane.classList.add('border-top');
                }
                // Do full layout on showSelectDropDown only
                return true;
            }
            // Check if select out of viewport or cutting into status bar
            if (selectPosition.top + selectPosition.height > window.innerHeight - 22 || selectPosition.top < SelectBoxList.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN || this._dropDownPosition === 0 /* AnchorPosition.BELOW */  && maxVisibleOptionsBelow < 1 || this._dropDownPosition === 1 /* AnchorPosition.ABOVE */  && maxVisibleOptionsAbove < 1) {
                // Cannot properly layout, close and hide
                this.hideSelectDropDown(true);
                return false;
            }
            // SetUp list dimensions and layout - account for container padding
            // Use position to check above or below available space
            if (this._dropDownPosition === 0 /* AnchorPosition.BELOW */ ) {
                if (this._isVisible && maxVisibleOptionsBelow + maxVisibleOptionsAbove < 1) {
                    // If drop-down is visible, must be doing a DOM re-layout, hide since we don't fit
                    // Hide drop-down, hide contextview, focus on parent select
                    this.hideSelectDropDown(true);
                    return false;
                }
                // Adjust list height to max from select bottom to margin (default/minBottomMargin)
                if (minRequiredDropDownHeight > maxSelectDropDownHeightBelow) {
                    listHeight = maxVisibleOptionsBelow * this.getHeight();
                }
            } else {
                if (minRequiredDropDownHeight > maxSelectDropDownHeightAbove) {
                    listHeight = maxVisibleOptionsAbove * this.getHeight();
                }
            }
            // Set adjusted list height and relayout
            this.selectList.layout(listHeight);
            this.selectList.domFocus();
            // Finally set focus on selected item
            if (this.selectList.length > 0) {
                this.selectList.setFocus([
                    this.selected || 0
                ]);
                this.selectList.reveal(this.selectList.getFocus()[0] || 0);
            }
            if (this._hasDetails) {
                // Leave the selectDropDownContainer to size itself according to children (list + details) - #57447
                this.selectList.getHTMLElement().style.height = listHeight + verticalPadding + 'px';
                this.selectDropDownContainer.style.height = '';
            } else {
                this.selectDropDownContainer.style.height = listHeight + verticalPadding + 'px';
            }
            this.updateDetail(this.selected);
            this.selectDropDownContainer.style.width = selectOptimalWidth;
            // Maintain focus outline on parent select as well as list container - tabindex for focus
            this.selectDropDownListContainer.setAttribute('tabindex', '0');
            this.selectElement.classList.add('synthetic-focus');
            this.selectDropDownContainer.classList.add('synthetic-focus');
            return true;
        } else {
            return false;
        }
    }
    setWidthControlElement(container) {
        let elementWidth = 0;
        if (container) {
            let longest = 0;
            let longestLength = 0;
            this.options.forEach((option, index)=>{
                const detailLength = !!option.detail ? option.detail.length : 0;
                const rightDecoratorLength = !!option.decoratorRight ? option.decoratorRight.length : 0;
                const len = option.text.length + detailLength + rightDecoratorLength;
                if (len > longestLength) {
                    longest = index;
                    longestLength = len;
                }
            });
            container.textContent = this.options[longest].text + (!!this.options[longest].decoratorRight ? this.options[longest].decoratorRight + ' ' : '');
            elementWidth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalWidth"](container);
        }
        return elementWidth;
    }
    createSelectList(parent) {
        // If we have already constructive list on open, skip
        if (this.selectList) {
            return;
        }
        // SetUp container for list
        this.selectDropDownListContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](parent, $('.select-box-dropdown-list-container'));
        this.listRenderer = new SelectListRenderer();
        this.selectList = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"]('SelectBoxCustom', this.selectDropDownListContainer, this, [
            this.listRenderer
        ], {
            useShadows: false,
            verticalScrollMode: 3 /* ScrollbarVisibility.Visible */ ,
            keyboardSupport: false,
            mouseSupport: false,
            accessibilityProvider: {
                getAriaLabel: (element)=>{
                    let label = element.text;
                    if (element.detail) {
                        label += ". ".concat(element.detail);
                    }
                    if (element.decoratorRight) {
                        label += ". ".concat(element.decoratorRight);
                    }
                    if (element.description) {
                        label += ". ".concat(element.description);
                    }
                    return label;
                },
                getWidgetAriaLabel: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])({
                        key: 'selectBox',
                        comment: [
                            'Behave like native select dropdown element.'
                        ]
                    }, "Select Box"),
                getRole: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] ? '' : 'option',
                getWidgetRole: ()=>'listbox'
            }
        }));
        if (this.selectBoxOptions.ariaLabel) {
            this.selectList.ariaLabel = this.selectBoxOptions.ariaLabel;
        }
        // SetUp list keyboard controller - control navigation, disabled items, focus
        const onKeyDown = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.selectDropDownListContainer, 'keydown'));
        const onSelectDropDownKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onKeyDown.event, ($)=>$.filter(()=>this.selectList.length > 0).map((e)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e)));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onSelectDropDownKeyDown, ($)=>$.filter((e)=>e.keyCode === 3 /* KeyCode.Enter */ ))(this.onEnter, this));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onSelectDropDownKeyDown, ($)=>$.filter((e)=>e.keyCode === 2 /* KeyCode.Tab */ ))(this.onEnter, this)); // Tab should behave the same as enter, #79339
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onSelectDropDownKeyDown, ($)=>$.filter((e)=>e.keyCode === 9 /* KeyCode.Escape */ ))(this.onEscape, this));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onSelectDropDownKeyDown, ($)=>$.filter((e)=>e.keyCode === 16 /* KeyCode.UpArrow */ ))(this.onUpArrow, this));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onSelectDropDownKeyDown, ($)=>$.filter((e)=>e.keyCode === 18 /* KeyCode.DownArrow */ ))(this.onDownArrow, this));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onSelectDropDownKeyDown, ($)=>$.filter((e)=>e.keyCode === 12 /* KeyCode.PageDown */ ))(this.onPageDown, this));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onSelectDropDownKeyDown, ($)=>$.filter((e)=>e.keyCode === 11 /* KeyCode.PageUp */ ))(this.onPageUp, this));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onSelectDropDownKeyDown, ($)=>$.filter((e)=>e.keyCode === 14 /* KeyCode.Home */ ))(this.onHome, this));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onSelectDropDownKeyDown, ($)=>$.filter((e)=>e.keyCode === 13 /* KeyCode.End */ ))(this.onEnd, this));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onSelectDropDownKeyDown, ($)=>$.filter((e)=>e.keyCode >= 21 /* KeyCode.Digit0 */  && e.keyCode <= 56 /* KeyCode.KeyZ */  || e.keyCode >= 85 /* KeyCode.Semicolon */  && e.keyCode <= 113 /* KeyCode.NumpadDivide */ ))(this.onCharacter, this));
        // SetUp list mouse controller - control navigation, disabled items, focus
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.selectList.getHTMLElement(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].POINTER_UP, (e)=>this.onPointerUp(e)));
        this._register(this.selectList.onMouseOver((e)=>typeof e.index !== 'undefined' && this.selectList.setFocus([
                e.index
            ])));
        this._register(this.selectList.onDidChangeFocus((e)=>this.onListFocus(e)));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.selectDropDownContainer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].FOCUS_OUT, (e)=>{
            if (!this._isVisible || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestor"](e.relatedTarget, this.selectDropDownContainer)) {
                return;
            }
            this.onListBlur();
        }));
        this.selectList.getHTMLElement().setAttribute('aria-label', this.selectBoxOptions.ariaLabel || '');
        this.selectList.getHTMLElement().setAttribute('aria-expanded', 'true');
        this.styleList();
    }
    // List methods
    // List mouse controller - active exit, select option, fire onDidSelect if change, return focus to parent select
    // Also takes in touchend events
    onPointerUp(e) {
        if (!this.selectList.length) {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
        const target = e.target;
        if (!target) {
            return;
        }
        // Check our mouse event is on an option (not scrollbar)
        if (target.classList.contains('slider')) {
            return;
        }
        const listRowElement = target.closest('.monaco-list-row');
        if (!listRowElement) {
            return;
        }
        const index = Number(listRowElement.getAttribute('data-index'));
        const disabled = listRowElement.classList.contains('option-disabled');
        // Ignore mouse selection of disabled options
        if (index >= 0 && index < this.options.length && !disabled) {
            this.selected = index;
            this.select(this.selected);
            this.selectList.setFocus([
                this.selected
            ]);
            this.selectList.reveal(this.selectList.getFocus()[0]);
            // Only fire if selection change
            if (this.selected !== this._currentSelection) {
                // Set current = selected
                this._currentSelection = this.selected;
                this._onDidSelect.fire({
                    index: this.selectElement.selectedIndex,
                    selected: this.options[this.selected].text
                });
                if (!!this.options[this.selected] && !!this.options[this.selected].text) {
                    this.setTitle(this.options[this.selected].text);
                }
            }
            this.hideSelectDropDown(true);
        }
    }
    // List Exit - passive - implicit no selection change, hide drop-down
    onListBlur() {
        if (this._sticky) {
            return;
        }
        if (this.selected !== this._currentSelection) {
            // Reset selected to current if no change
            this.select(this._currentSelection);
        }
        this.hideSelectDropDown(false);
    }
    renderDescriptionMarkdown(text, actionHandler) {
        const cleanRenderedMarkdown = (element)=>{
            for(let i = 0; i < element.childNodes.length; i++){
                const child = element.childNodes.item(i);
                const tagName = child.tagName && child.tagName.toLowerCase();
                if (tagName === 'img') {
                    child.remove();
                } else {
                    cleanRenderedMarkdown(child);
                }
            }
        };
        const rendered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMarkdown"])({
            value: text,
            supportThemeIcons: true
        }, {
            actionHandler
        });
        rendered.element.classList.add('select-box-description-markdown');
        cleanRenderedMarkdown(rendered.element);
        return rendered.element;
    }
    // List Focus Change - passive - update details pane with newly focused element's data
    onListFocus(e) {
        // Skip during initial layout
        if (!this._isVisible || !this._hasDetails) {
            return;
        }
        this.updateDetail(e.indexes[0]);
    }
    updateDetail(selectedIndex) {
        this.selectionDetailsPane.innerText = '';
        const option = this.options[selectedIndex];
        var _option_description;
        const description = (_option_description = option === null || option === void 0 ? void 0 : option.description) !== null && _option_description !== void 0 ? _option_description : '';
        var _option_descriptionIsMarkdown;
        const descriptionIsMarkdown = (_option_descriptionIsMarkdown = option === null || option === void 0 ? void 0 : option.descriptionIsMarkdown) !== null && _option_descriptionIsMarkdown !== void 0 ? _option_descriptionIsMarkdown : false;
        if (description) {
            if (descriptionIsMarkdown) {
                const actionHandler = option.descriptionMarkdownActionHandler;
                this.selectionDetailsPane.appendChild(this.renderDescriptionMarkdown(description, actionHandler));
            } else {
                this.selectionDetailsPane.innerText = description;
            }
            this.selectionDetailsPane.style.display = 'block';
        } else {
            this.selectionDetailsPane.style.display = 'none';
        }
        // Avoid recursion
        this._skipLayout = true;
        this.contextViewProvider.layout();
        this._skipLayout = false;
    }
    // List keyboard controller
    // List exit - active - hide ContextView dropdown, reset selection, return focus to parent select
    onEscape(e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
        // Reset selection to value when opened
        this.select(this._currentSelection);
        this.hideSelectDropDown(true);
    }
    // List exit - active - hide ContextView dropdown, return focus to parent select, fire onDidSelect if change
    onEnter(e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
        // Only fire if selection change
        if (this.selected !== this._currentSelection) {
            this._currentSelection = this.selected;
            this._onDidSelect.fire({
                index: this.selectElement.selectedIndex,
                selected: this.options[this.selected].text
            });
            if (!!this.options[this.selected] && !!this.options[this.selected].text) {
                this.setTitle(this.options[this.selected].text);
            }
        }
        this.hideSelectDropDown(true);
    }
    // List navigation - have to handle a disabled option (jump over)
    onDownArrow(e) {
        if (this.selected < this.options.length - 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
            // Skip disabled options
            const nextOptionDisabled = this.options[this.selected + 1].isDisabled;
            if (nextOptionDisabled && this.options.length > this.selected + 2) {
                this.selected += 2;
            } else if (nextOptionDisabled) {
                return;
            } else {
                this.selected++;
            }
            // Set focus/selection - only fire event when closing drop-down or on blur
            this.select(this.selected);
            this.selectList.setFocus([
                this.selected
            ]);
            this.selectList.reveal(this.selectList.getFocus()[0]);
        }
    }
    onUpArrow(e) {
        if (this.selected > 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
            // Skip disabled options
            const previousOptionDisabled = this.options[this.selected - 1].isDisabled;
            if (previousOptionDisabled && this.selected > 1) {
                this.selected -= 2;
            } else {
                this.selected--;
            }
            // Set focus/selection - only fire event when closing drop-down or on blur
            this.select(this.selected);
            this.selectList.setFocus([
                this.selected
            ]);
            this.selectList.reveal(this.selectList.getFocus()[0]);
        }
    }
    onPageUp(e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
        this.selectList.focusPreviousPage();
        // Allow scrolling to settle
        setTimeout(()=>{
            this.selected = this.selectList.getFocus()[0];
            // Shift selection down if we land on a disabled option
            if (this.options[this.selected].isDisabled && this.selected < this.options.length - 1) {
                this.selected++;
                this.selectList.setFocus([
                    this.selected
                ]);
            }
            this.selectList.reveal(this.selected);
            this.select(this.selected);
        }, 1);
    }
    onPageDown(e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
        this.selectList.focusNextPage();
        // Allow scrolling to settle
        setTimeout(()=>{
            this.selected = this.selectList.getFocus()[0];
            // Shift selection up if we land on a disabled option
            if (this.options[this.selected].isDisabled && this.selected > 0) {
                this.selected--;
                this.selectList.setFocus([
                    this.selected
                ]);
            }
            this.selectList.reveal(this.selected);
            this.select(this.selected);
        }, 1);
    }
    onHome(e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
        if (this.options.length < 2) {
            return;
        }
        this.selected = 0;
        if (this.options[this.selected].isDisabled && this.selected > 1) {
            this.selected++;
        }
        this.selectList.setFocus([
            this.selected
        ]);
        this.selectList.reveal(this.selected);
        this.select(this.selected);
    }
    onEnd(e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
        if (this.options.length < 2) {
            return;
        }
        this.selected = this.options.length - 1;
        if (this.options[this.selected].isDisabled && this.selected > 1) {
            this.selected--;
        }
        this.selectList.setFocus([
            this.selected
        ]);
        this.selectList.reveal(this.selected);
        this.select(this.selected);
    }
    // Mimic option first character navigation of native select
    onCharacter(e) {
        const ch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keyCodes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyCodeUtils"].toString(e.keyCode);
        let optionIndex = -1;
        for(let i = 0; i < this.options.length - 1; i++){
            optionIndex = (i + this.selected + 1) % this.options.length;
            if (this.options[optionIndex].text.charAt(0).toUpperCase() === ch && !this.options[optionIndex].isDisabled) {
                this.select(optionIndex);
                this.selectList.setFocus([
                    optionIndex
                ]);
                this.selectList.reveal(this.selectList.getFocus()[0]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
                break;
            }
        }
    }
    dispose() {
        this.hideSelectDropDown(false);
        super.dispose();
    }
    constructor(options, selected, contextViewProvider, styles, selectBoxOptions){
        super();
        this.options = [];
        this._currentSelection = 0;
        this._hasDetails = false;
        this._skipLayout = false;
        this._sticky = false; // for dev purposes only
        this._isVisible = false;
        this.styles = styles;
        this.selectBoxOptions = selectBoxOptions || Object.create(null);
        if (typeof this.selectBoxOptions.minBottomMargin !== 'number') {
            this.selectBoxOptions.minBottomMargin = SelectBoxList.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN;
        } else if (this.selectBoxOptions.minBottomMargin < 0) {
            this.selectBoxOptions.minBottomMargin = 0;
        }
        this.selectElement = document.createElement('select');
        // Use custom CSS vars for padding calculation
        this.selectElement.className = 'monaco-select-box monaco-select-box-dropdown-padding';
        if (typeof this.selectBoxOptions.ariaLabel === 'string') {
            this.selectElement.setAttribute('aria-label', this.selectBoxOptions.ariaLabel);
        }
        if (typeof this.selectBoxOptions.ariaDescription === 'string') {
            this.selectElement.setAttribute('aria-description', this.selectBoxOptions.ariaDescription);
        }
        this._onDidSelect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this._register(this._onDidSelect);
        this.registerListeners();
        this.constructSelectDropDown(contextViewProvider);
        this.selected = selected || 0;
        if (options) {
            this.setOptions(options, selected);
        }
        this.initStyleSheet();
    }
}
SelectBoxList.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN = 32;
SelectBoxList.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN = 2;
SelectBoxList.DEFAULT_MINIMUM_VISIBLE_OPTIONS = 3;
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBoxNative.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "SelectBoxNative": ()=>SelectBoxNative
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/touch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
;
;
;
;
;
;
class SelectBoxNative extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    registerListeners() {
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gesture"].addTarget(this.selectElement));
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Tap
        ].forEach((eventType)=>{
            this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.selectElement, eventType, (e)=>{
                this.selectElement.focus();
            }));
        });
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](this.selectElement, 'click', (e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
        }));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](this.selectElement, 'change', (e)=>{
            this.selectElement.title = e.target.value;
            this._onDidSelect.fire({
                index: e.target.selectedIndex,
                selected: e.target.value
            });
        }));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addStandardDisposableListener"](this.selectElement, 'keydown', (e)=>{
            let showSelect = false;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"]) {
                if (e.keyCode === 18 /* KeyCode.DownArrow */  || e.keyCode === 16 /* KeyCode.UpArrow */  || e.keyCode === 10 /* KeyCode.Space */ ) {
                    showSelect = true;
                }
            } else {
                if (e.keyCode === 18 /* KeyCode.DownArrow */  && e.altKey || e.keyCode === 10 /* KeyCode.Space */  || e.keyCode === 3 /* KeyCode.Enter */ ) {
                    showSelect = true;
                }
            }
            if (showSelect) {
                // Space, Enter, is used to expand select box, do not propagate it (prevent action bar action run)
                e.stopPropagation();
            }
        }));
    }
    get onDidSelect() {
        return this._onDidSelect.event;
    }
    setOptions(options, selected) {
        if (!this.options || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"](this.options, options)) {
            this.options = options;
            this.selectElement.options.length = 0;
            this.options.forEach((option, index)=>{
                this.selectElement.add(this.createOption(option.text, index, option.isDisabled));
            });
        }
        if (selected !== undefined) {
            this.select(selected);
        }
    }
    select(index) {
        if (this.options.length === 0) {
            this.selected = 0;
        } else if (index >= 0 && index < this.options.length) {
            this.selected = index;
        } else if (index > this.options.length - 1) {
            // Adjust index to end of list
            // This could make client out of sync with the select
            this.select(this.options.length - 1);
        } else if (this.selected < 0) {
            this.selected = 0;
        }
        this.selectElement.selectedIndex = this.selected;
        if (this.selected < this.options.length && typeof this.options[this.selected].text === 'string') {
            this.selectElement.title = this.options[this.selected].text;
        } else {
            this.selectElement.title = '';
        }
    }
    focus() {
        if (this.selectElement) {
            this.selectElement.tabIndex = 0;
            this.selectElement.focus();
        }
    }
    blur() {
        if (this.selectElement) {
            this.selectElement.tabIndex = -1;
            this.selectElement.blur();
        }
    }
    setFocusable(focusable) {
        this.selectElement.tabIndex = focusable ? 0 : -1;
    }
    render(container) {
        container.classList.add('select-container');
        container.appendChild(this.selectElement);
        this.setOptions(this.options, this.selected);
        this.applyStyles();
    }
    applyStyles() {
        // Style native select
        if (this.selectElement) {
            var _this_styles_selectBackground;
            this.selectElement.style.backgroundColor = (_this_styles_selectBackground = this.styles.selectBackground) !== null && _this_styles_selectBackground !== void 0 ? _this_styles_selectBackground : '';
            var _this_styles_selectForeground;
            this.selectElement.style.color = (_this_styles_selectForeground = this.styles.selectForeground) !== null && _this_styles_selectForeground !== void 0 ? _this_styles_selectForeground : '';
            var _this_styles_selectBorder;
            this.selectElement.style.borderColor = (_this_styles_selectBorder = this.styles.selectBorder) !== null && _this_styles_selectBorder !== void 0 ? _this_styles_selectBorder : '';
        }
    }
    createOption(value, index, disabled) {
        const option = document.createElement('option');
        option.value = value;
        option.text = value;
        option.disabled = !!disabled;
        return option;
    }
    constructor(options, selected, styles, selectBoxOptions){
        super();
        this.selected = 0;
        this.selectBoxOptions = selectBoxOptions || Object.create(null);
        this.options = [];
        this.selectElement = document.createElement('select');
        this.selectElement.className = 'monaco-select-box';
        if (typeof this.selectBoxOptions.ariaLabel === 'string') {
            this.selectElement.setAttribute('aria-label', this.selectBoxOptions.ariaLabel);
        }
        if (typeof this.selectBoxOptions.ariaDescription === 'string') {
            this.selectElement.setAttribute('aria-description', this.selectBoxOptions.ariaDescription);
        }
        this._onDidSelect = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.styles = styles;
        this.registerListeners();
        this.setOptions(options, selected);
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBox.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "SelectBox": ()=>SelectBox
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$selectBox$2f$selectBoxCustom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBoxCustom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$selectBox$2f$selectBoxNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBoxNative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
;
;
;
;
;
class SelectBox extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Widget"] {
    // Public SelectBox Methods - routed through delegate interface
    get onDidSelect() {
        return this.selectBoxDelegate.onDidSelect;
    }
    setOptions(options, selected) {
        this.selectBoxDelegate.setOptions(options, selected);
    }
    select(index) {
        this.selectBoxDelegate.select(index);
    }
    focus() {
        this.selectBoxDelegate.focus();
    }
    blur() {
        this.selectBoxDelegate.blur();
    }
    setFocusable(focusable) {
        this.selectBoxDelegate.setFocusable(focusable);
    }
    render(container) {
        this.selectBoxDelegate.render(container);
    }
    constructor(options, selected, contextViewProvider, styles, selectBoxOptions){
        super();
        // Default to native SelectBox for OSX unless overridden
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] && !(selectBoxOptions === null || selectBoxOptions === void 0 ? void 0 : selectBoxOptions.useCustomDrawn)) {
            this.selectBoxDelegate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$selectBox$2f$selectBoxNative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectBoxNative"](options, selected, styles, selectBoxOptions);
        } else {
            this.selectBoxDelegate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$selectBox$2f$selectBoxCustom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectBoxList"](options, selected, contextViewProvider, styles, selectBoxOptions);
        }
        this._register(this.selectBoxDelegate);
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionViewItems.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ActionViewItem": ()=>ActionViewItem,
    "BaseActionViewItem": ()=>BaseActionViewItem,
    "SelectActionViewItem": ()=>SelectActionViewItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dnd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dnd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/touch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$selectBox$2f$selectBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegate2.js [app-client] (ecmascript)");
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
class BaseActionViewItem extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get action() {
        return this._action;
    }
    handleActionChangeEvent(event) {
        if (event.enabled !== undefined) {
            this.updateEnabled();
        }
        if (event.checked !== undefined) {
            this.updateChecked();
        }
        if (event.class !== undefined) {
            this.updateClass();
        }
        if (event.label !== undefined) {
            this.updateLabel();
            this.updateTooltip();
        }
        if (event.tooltip !== undefined) {
            this.updateTooltip();
        }
    }
    get actionRunner() {
        if (!this._actionRunner) {
            this._actionRunner = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionRunner"]());
        }
        return this._actionRunner;
    }
    set actionRunner(actionRunner) {
        this._actionRunner = actionRunner;
    }
    isEnabled() {
        return this._action.enabled;
    }
    setActionContext(newContext) {
        this._context = newContext;
    }
    render(container) {
        const element = this.element = container;
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gesture"].addTarget(container));
        const enableDragging = this.options && this.options.draggable;
        if (enableDragging) {
            container.draggable = true;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"]) {
                // Firefox: requires to set a text data transfer to get going
                this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(container, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].DRAG_START, (e)=>{
                    var _e_dataTransfer;
                    return (_e_dataTransfer = e.dataTransfer) === null || _e_dataTransfer === void 0 ? void 0 : _e_dataTransfer.setData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dnd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTransfers"].TEXT, this._action.label);
                }));
            }
        }
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Tap, (e)=>this.onClick(e, true))); // Preserve focus on tap #125470
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_DOWN, (e)=>{
            if (!enableDragging) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true); // do not run when dragging is on because that would disable it
            }
            if (this._action.enabled && e.button === 0) {
                element.classList.add('active');
            }
        }));
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"]) {
            // macOS: allow to trigger the button when holding Ctrl+key and pressing the
            // main mouse button. This is for scenarios where e.g. some interaction forces
            // the Ctrl+key to be pressed and hold but the user still wants to interact
            // with the actions (for example quick access in quick navigation mode).
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].CONTEXT_MENU, (e)=>{
                if (e.button === 0 && e.ctrlKey === true) {
                    this.onClick(e);
                }
            }));
        }
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].CLICK, (e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
            // menus do not use the click event
            if (!(this.options && this.options.isMenu)) {
                this.onClick(e);
            }
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].DBLCLICK, (e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
        }));
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_UP,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_OUT
        ].forEach((event)=>{
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(element, event, (e)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
                element.classList.remove('active');
            }));
        });
    }
    onClick(event) {
        let preserveFocus = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var _this_options;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(event, true);
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefinedOrNull"](this._context) ? ((_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.useEventAsContext) ? event : {
            preserveFocus
        } : this._context;
        this.actionRunner.run(this._action, context);
    }
    // Only set the tabIndex on the element once it is about to get focused
    // That way this element wont be a tab stop when it is not needed #106441
    focus() {
        if (this.element) {
            this.element.tabIndex = 0;
            this.element.focus();
            this.element.classList.add('focused');
        }
    }
    blur() {
        if (this.element) {
            this.element.blur();
            this.element.tabIndex = -1;
            this.element.classList.remove('focused');
        }
    }
    setFocusable(focusable) {
        if (this.element) {
            this.element.tabIndex = focusable ? 0 : -1;
        }
    }
    get trapsArrowNavigation() {
        return false;
    }
    updateEnabled() {
    // implement in subclass
    }
    updateLabel() {
    // implement in subclass
    }
    getClass() {
        return this.action.class;
    }
    getTooltip() {
        return this.action.tooltip;
    }
    updateTooltip() {
        var _this_options_hoverDelegate;
        if (!this.element) {
            return;
        }
        var _this_getTooltip;
        const title = (_this_getTooltip = this.getTooltip()) !== null && _this_getTooltip !== void 0 ? _this_getTooltip : '';
        this.updateAriaLabel();
        if ((_this_options_hoverDelegate = this.options.hoverDelegate) === null || _this_options_hoverDelegate === void 0 ? void 0 : _this_options_hoverDelegate.showNativeHover) {
            /* While custom hover is not inside custom hover */ this.element.title = title;
        } else {
            if (!this.customHover && title !== '') {
                var _this_options_hoverDelegate1;
                const hoverDelegate = (_this_options_hoverDelegate1 = this.options.hoverDelegate) !== null && _this_options_hoverDelegate1 !== void 0 ? _this_options_hoverDelegate1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('element');
                this.customHover = this._store.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLayerHoverDelegate"])().setupManagedHover(hoverDelegate, this.element, title));
            } else if (this.customHover) {
                this.customHover.update(title);
            }
        }
    }
    updateAriaLabel() {
        if (this.element) {
            var _this_getTooltip;
            const title = (_this_getTooltip = this.getTooltip()) !== null && _this_getTooltip !== void 0 ? _this_getTooltip : '';
            this.element.setAttribute('aria-label', title);
        }
    }
    updateClass() {
    // implement in subclass
    }
    updateChecked() {
    // implement in subclass
    }
    dispose() {
        if (this.element) {
            this.element.remove();
            this.element = undefined;
        }
        this._context = undefined;
        super.dispose();
    }
    constructor(context, action, options = {}){
        super();
        this.options = options;
        this._context = context || this;
        this._action = action;
        if (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"]) {
            this._register(action.onDidChange((event)=>{
                if (!this.element) {
                    // we have not been rendered yet, so there
                    // is no point in updating the UI
                    return;
                }
                this.handleActionChangeEvent(event);
            }));
        }
    }
}
class ActionViewItem extends BaseActionViewItem {
    render(container) {
        super.render(container);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertType"](this.element);
        const label = document.createElement('a');
        label.classList.add('action-label');
        label.setAttribute('role', this.getDefaultAriaRole());
        this.label = label;
        this.element.appendChild(label);
        if (this.options.label && this.options.keybinding) {
            const kbLabel = document.createElement('span');
            kbLabel.classList.add('keybinding');
            kbLabel.textContent = this.options.keybinding;
            this.element.appendChild(kbLabel);
        }
        this.updateClass();
        this.updateLabel();
        this.updateTooltip();
        this.updateEnabled();
        this.updateChecked();
    }
    getDefaultAriaRole() {
        if (this._action.id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].ID) {
            return 'presentation'; // A separator is a presentation item
        } else {
            if (this.options.isMenu) {
                return 'menuitem';
            } else if (this.options.isTabList) {
                return 'tab';
            } else {
                return 'button';
            }
        }
    }
    // Only set the tabIndex on the element once it is about to get focused
    // That way this element wont be a tab stop when it is not needed #106441
    focus() {
        if (this.label) {
            this.label.tabIndex = 0;
            this.label.focus();
        }
    }
    blur() {
        if (this.label) {
            this.label.tabIndex = -1;
        }
    }
    setFocusable(focusable) {
        if (this.label) {
            this.label.tabIndex = focusable ? 0 : -1;
        }
    }
    updateLabel() {
        if (this.options.label && this.label) {
            this.label.textContent = this.action.label;
        }
    }
    getTooltip() {
        let title = null;
        if (this.action.tooltip) {
            title = this.action.tooltip;
        } else if (!this.options.label && this.action.label && this.options.icon) {
            title = this.action.label;
            if (this.options.keybinding) {
                title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]({
                    key: 'titleLabel',
                    comment: [
                        'action title',
                        'action keybinding'
                    ]
                }, "{0} ({1})", title, this.options.keybinding);
            }
        }
        return title !== null && title !== void 0 ? title : undefined;
    }
    updateClass() {
        if (this.cssClass && this.label) {
            this.label.classList.remove(...this.cssClass.split(' '));
        }
        if (this.options.icon) {
            this.cssClass = this.getClass();
            if (this.label) {
                this.label.classList.add('codicon');
                if (this.cssClass) {
                    this.label.classList.add(...this.cssClass.split(' '));
                }
            }
            this.updateEnabled();
        } else {
            var _this_label;
            (_this_label = this.label) === null || _this_label === void 0 ? void 0 : _this_label.classList.remove('codicon');
        }
    }
    updateEnabled() {
        if (this.action.enabled) {
            var _this_element;
            if (this.label) {
                this.label.removeAttribute('aria-disabled');
                this.label.classList.remove('disabled');
            }
            (_this_element = this.element) === null || _this_element === void 0 ? void 0 : _this_element.classList.remove('disabled');
        } else {
            var _this_element1;
            if (this.label) {
                this.label.setAttribute('aria-disabled', 'true');
                this.label.classList.add('disabled');
            }
            (_this_element1 = this.element) === null || _this_element1 === void 0 ? void 0 : _this_element1.classList.add('disabled');
        }
    }
    updateAriaLabel() {
        if (this.label) {
            var _this_getTooltip;
            const title = (_this_getTooltip = this.getTooltip()) !== null && _this_getTooltip !== void 0 ? _this_getTooltip : '';
            this.label.setAttribute('aria-label', title);
        }
    }
    updateChecked() {
        if (this.label) {
            if (this.action.checked !== undefined) {
                this.label.classList.toggle('checked', this.action.checked);
                if (this.options.isTabList) {
                    this.label.setAttribute('aria-selected', this.action.checked ? 'true' : 'false');
                } else {
                    this.label.setAttribute('aria-checked', this.action.checked ? 'true' : 'false');
                    this.label.setAttribute('role', 'checkbox');
                }
            } else {
                this.label.classList.remove('checked');
                this.label.removeAttribute(this.options.isTabList ? 'aria-selected' : 'aria-checked');
                this.label.setAttribute('role', this.getDefaultAriaRole());
            }
        }
    }
    constructor(context, action, options){
        super(context, action, options);
        this.options = options;
        this.options.icon = options.icon !== undefined ? options.icon : false;
        this.options.label = options.label !== undefined ? options.label : true;
        this.cssClass = '';
    }
}
class SelectActionViewItem extends BaseActionViewItem {
    select(index) {
        this.selectBox.select(index);
    }
    registerListeners() {
        this._register(this.selectBox.onDidSelect((e)=>this.runAction(e.selected, e.index)));
    }
    runAction(option, index) {
        this.actionRunner.run(this._action, this.getActionContext(option, index));
    }
    getActionContext(option, index) {
        return option;
    }
    setFocusable(focusable) {
        this.selectBox.setFocusable(focusable);
    }
    focus() {
        var _this_selectBox;
        (_this_selectBox = this.selectBox) === null || _this_selectBox === void 0 ? void 0 : _this_selectBox.focus();
    }
    blur() {
        var _this_selectBox;
        (_this_selectBox = this.selectBox) === null || _this_selectBox === void 0 ? void 0 : _this_selectBox.blur();
    }
    render(container) {
        this.selectBox.render(container);
    }
    constructor(ctx, action, options, selected, contextViewProvider, styles, selectBoxOptions){
        super(ctx, action);
        this.selectBox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$selectBox$2f$selectBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectBox"](options, selected, contextViewProvider, styles, selectBoxOptions);
        this.selectBox.setFocusable(false);
        this._register(this.selectBox);
        this.registerListeners();
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ActionBar": ()=>ActionBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionViewItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class ActionBar extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    refreshRole() {
        if (this.length() >= 1) {
            this.actionsList.setAttribute('role', this.options.ariaRole || 'toolbar');
        } else {
            this.actionsList.setAttribute('role', 'presentation');
        }
    }
    // Some action bars should not be focusable at times
    // When an action bar is not focusable make sure to make all the elements inside it not focusable
    // When an action bar is focusable again, make sure the first item can be focused
    setFocusable(focusable) {
        this.focusable = focusable;
        if (this.focusable) {
            const firstEnabled = this.viewItems.find((vi)=>vi instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseActionViewItem"] && vi.isEnabled());
            if (firstEnabled instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseActionViewItem"]) {
                firstEnabled.setFocusable(true);
            }
        } else {
            this.viewItems.forEach((vi)=>{
                if (vi instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseActionViewItem"]) {
                    vi.setFocusable(false);
                }
            });
        }
    }
    isTriggerKeyEvent(event) {
        let ret = false;
        this._triggerKeys.keys.forEach((keyCode)=>{
            ret = ret || event.equals(keyCode);
        });
        return ret;
    }
    updateFocusedItem() {
        for(let i = 0; i < this.actionsList.children.length; i++){
            const elem = this.actionsList.children[i];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestor"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"](), elem)) {
                var _this_viewItems_this_focusedItem_showHover, _this_viewItems_this_focusedItem;
                this.focusedItem = i;
                (_this_viewItems_this_focusedItem = this.viewItems[this.focusedItem]) === null || _this_viewItems_this_focusedItem === void 0 ? void 0 : (_this_viewItems_this_focusedItem_showHover = _this_viewItems_this_focusedItem.showHover) === null || _this_viewItems_this_focusedItem_showHover === void 0 ? void 0 : _this_viewItems_this_focusedItem_showHover.call(_this_viewItems_this_focusedItem);
                break;
            }
        }
    }
    get context() {
        return this._context;
    }
    set context(context) {
        this._context = context;
        this.viewItems.forEach((i)=>i.setActionContext(context));
    }
    get actionRunner() {
        return this._actionRunner;
    }
    set actionRunner(actionRunner) {
        this._actionRunner = actionRunner;
        // when setting a new `IActionRunner` make sure to dispose old listeners and
        // start to forward events from the new listener
        this._actionRunnerDisposables.clear();
        this._actionRunnerDisposables.add(this._actionRunner.onDidRun((e)=>this._onDidRun.fire(e)));
        this._actionRunnerDisposables.add(this._actionRunner.onWillRun((e)=>this._onWillRun.fire(e)));
        this.viewItems.forEach((item)=>item.actionRunner = actionRunner);
    }
    getContainer() {
        return this.domNode;
    }
    getAction(indexOrElement) {
        // by index
        if (typeof indexOrElement === 'number') {
            var _this_viewItems_indexOrElement;
            return (_this_viewItems_indexOrElement = this.viewItems[indexOrElement]) === null || _this_viewItems_indexOrElement === void 0 ? void 0 : _this_viewItems_indexOrElement.action;
        }
        // by element
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"](indexOrElement)) {
            while(indexOrElement.parentElement !== this.actionsList){
                if (!indexOrElement.parentElement) {
                    return undefined;
                }
                indexOrElement = indexOrElement.parentElement;
            }
            for(let i = 0; i < this.actionsList.childNodes.length; i++){
                if (this.actionsList.childNodes[i] === indexOrElement) {
                    return this.viewItems[i].action;
                }
            }
        }
        return undefined;
    }
    push(arg) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const actions = Array.isArray(arg) ? arg : [
            arg
        ];
        let index = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"](options.index) ? options.index : null;
        actions.forEach((action)=>{
            const actionViewItemElement = document.createElement('li');
            actionViewItemElement.className = 'action-item';
            actionViewItemElement.setAttribute('role', 'presentation');
            let item;
            const viewItemOptions = {
                hoverDelegate: this._hoverDelegate,
                ...options,
                isTabList: this.options.ariaRole === 'tablist'
            };
            if (this.options.actionViewItemProvider) {
                item = this.options.actionViewItemProvider(action, viewItemOptions);
            }
            if (!item) {
                item = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionViewItem"](this.context, action, viewItemOptions);
            }
            // Prevent native context menu on actions
            if (!this.options.allowContextMenu) {
                this.viewItemDisposables.set(item, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](actionViewItemElement, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].CONTEXT_MENU, (e)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
                }));
            }
            item.actionRunner = this._actionRunner;
            item.setActionContext(this.context);
            item.render(actionViewItemElement);
            if (this.focusable && item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseActionViewItem"] && this.viewItems.length === 0) {
                // We need to allow for the first enabled item to be focused on using tab navigation #106441
                item.setFocusable(true);
            }
            if (index === null || index < 0 || index >= this.actionsList.children.length) {
                this.actionsList.appendChild(actionViewItemElement);
                this.viewItems.push(item);
            } else {
                this.actionsList.insertBefore(actionViewItemElement, this.actionsList.children[index]);
                this.viewItems.splice(index, 0, item);
                index++;
            }
        });
        if (typeof this.focusedItem === 'number') {
            // After a clear actions might be re-added to simply toggle some actions. We should preserve focus #97128
            this.focus(this.focusedItem);
        }
        this.refreshRole();
    }
    clear() {
        if (this.isEmpty()) {
            return;
        }
        this.viewItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this.viewItems);
        this.viewItemDisposables.clearAndDisposeAll();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNode"](this.actionsList);
        this.refreshRole();
    }
    length() {
        return this.viewItems.length;
    }
    isEmpty() {
        return this.viewItems.length === 0;
    }
    focus(arg) {
        let selectFirst = false;
        let index = undefined;
        if (arg === undefined) {
            selectFirst = true;
        } else if (typeof arg === 'number') {
            index = arg;
        } else if (typeof arg === 'boolean') {
            selectFirst = arg;
        }
        if (selectFirst && typeof this.focusedItem === 'undefined') {
            const firstEnabled = this.viewItems.findIndex((item)=>item.isEnabled());
            // Focus the first enabled item
            this.focusedItem = firstEnabled === -1 ? undefined : firstEnabled;
            this.updateFocus(undefined, undefined, true);
        } else {
            if (index !== undefined) {
                this.focusedItem = index;
            }
            this.updateFocus(undefined, undefined, true);
        }
    }
    focusFirst() {
        this.focusedItem = this.length() - 1;
        return this.focusNext(true);
    }
    focusLast() {
        this.focusedItem = 0;
        return this.focusPrevious(true);
    }
    focusNext(forceLoop, forceFocus) {
        if (typeof this.focusedItem === 'undefined') {
            this.focusedItem = this.viewItems.length - 1;
        } else if (this.viewItems.length <= 1) {
            return false;
        }
        const startIndex = this.focusedItem;
        let item;
        do {
            if (!forceLoop && this.options.preventLoopNavigation && this.focusedItem + 1 >= this.viewItems.length) {
                this.focusedItem = startIndex;
                return false;
            }
            this.focusedItem = (this.focusedItem + 1) % this.viewItems.length;
            item = this.viewItems[this.focusedItem];
        }while (this.focusedItem !== startIndex && (this.options.focusOnlyEnabledItems && !item.isEnabled() || item.action.id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].ID))
        this.updateFocus(undefined, undefined, forceFocus);
        return true;
    }
    focusPrevious(forceLoop) {
        if (typeof this.focusedItem === 'undefined') {
            this.focusedItem = 0;
        } else if (this.viewItems.length <= 1) {
            return false;
        }
        const startIndex = this.focusedItem;
        let item;
        do {
            this.focusedItem = this.focusedItem - 1;
            if (this.focusedItem < 0) {
                if (!forceLoop && this.options.preventLoopNavigation) {
                    this.focusedItem = startIndex;
                    return false;
                }
                this.focusedItem = this.viewItems.length - 1;
            }
            item = this.viewItems[this.focusedItem];
        }while (this.focusedItem !== startIndex && (this.options.focusOnlyEnabledItems && !item.isEnabled() || item.action.id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].ID))
        this.updateFocus(true);
        return true;
    }
    updateFocus(fromRight, preventScroll) {
        let forceFocus = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        if (typeof this.focusedItem === 'undefined') {
            this.actionsList.focus({
                preventScroll
            });
        }
        if (this.previouslyFocusedItem !== undefined && this.previouslyFocusedItem !== this.focusedItem) {
            var _this_viewItems_this_previouslyFocusedItem;
            (_this_viewItems_this_previouslyFocusedItem = this.viewItems[this.previouslyFocusedItem]) === null || _this_viewItems_this_previouslyFocusedItem === void 0 ? void 0 : _this_viewItems_this_previouslyFocusedItem.blur();
        }
        const actionViewItem = this.focusedItem !== undefined ? this.viewItems[this.focusedItem] : undefined;
        if (actionViewItem) {
            let focusItem = true;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](actionViewItem.focus)) {
                focusItem = false;
            }
            if (this.options.focusOnlyEnabledItems && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"](actionViewItem.isEnabled) && !actionViewItem.isEnabled()) {
                focusItem = false;
            }
            if (actionViewItem.action.id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].ID) {
                focusItem = false;
            }
            if (!focusItem) {
                this.actionsList.focus({
                    preventScroll
                });
                this.previouslyFocusedItem = undefined;
            } else if (forceFocus || this.previouslyFocusedItem !== this.focusedItem) {
                actionViewItem.focus(fromRight);
                this.previouslyFocusedItem = this.focusedItem;
            }
            if (focusItem) {
                var _actionViewItem_showHover;
                (_actionViewItem_showHover = actionViewItem.showHover) === null || _actionViewItem_showHover === void 0 ? void 0 : _actionViewItem_showHover.call(actionViewItem);
            }
        }
    }
    doTrigger(event) {
        if (typeof this.focusedItem === 'undefined') {
            return; //nothing to focus
        }
        // trigger action
        const actionViewItem = this.viewItems[this.focusedItem];
        if (actionViewItem instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseActionViewItem"]) {
            const context = actionViewItem._context === null || actionViewItem._context === undefined ? event : actionViewItem._context;
            this.run(actionViewItem._action, context);
        }
    }
    async run(action, context) {
        await this._actionRunner.run(action, context);
    }
    dispose() {
        this._context = undefined;
        this.viewItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this.viewItems);
        this.getContainer().remove();
        super.dispose();
    }
    constructor(container, options = {}){
        var _this_options_triggerKeys, _this_options_triggerKeys1;
        super();
        this._actionRunnerDisposables = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]());
        this.viewItemDisposables = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableMap"]());
        // Trigger Key Tracking
        this.triggerKeyDown = false;
        this.focusable = true;
        this._onDidBlur = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidBlur = this._onDidBlur.event;
        this._onDidCancel = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]({
            onWillAddFirstListener: ()=>this.cancelHasListener = true
        }));
        this.onDidCancel = this._onDidCancel.event;
        this.cancelHasListener = false;
        this._onDidRun = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidRun = this._onDidRun.event;
        this._onWillRun = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onWillRun = this._onWillRun.event;
        this.options = options;
        var _options_context;
        this._context = (_options_context = options.context) !== null && _options_context !== void 0 ? _options_context : null;
        var _this_options_orientation;
        this._orientation = (_this_options_orientation = this.options.orientation) !== null && _this_options_orientation !== void 0 ? _this_options_orientation : 0 /* ActionsOrientation.HORIZONTAL */ ;
        var _this_options_triggerKeys_keyDown, _this_options_triggerKeys_keys;
        this._triggerKeys = {
            keyDown: (_this_options_triggerKeys_keyDown = (_this_options_triggerKeys = this.options.triggerKeys) === null || _this_options_triggerKeys === void 0 ? void 0 : _this_options_triggerKeys.keyDown) !== null && _this_options_triggerKeys_keyDown !== void 0 ? _this_options_triggerKeys_keyDown : false,
            keys: (_this_options_triggerKeys_keys = (_this_options_triggerKeys1 = this.options.triggerKeys) === null || _this_options_triggerKeys1 === void 0 ? void 0 : _this_options_triggerKeys1.keys) !== null && _this_options_triggerKeys_keys !== void 0 ? _this_options_triggerKeys_keys : [
                3 /* KeyCode.Enter */ ,
                10 /* KeyCode.Space */ 
            ]
        };
        var _options_hoverDelegate;
        this._hoverDelegate = (_options_hoverDelegate = options.hoverDelegate) !== null && _options_hoverDelegate !== void 0 ? _options_hoverDelegate : this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInstantHoverDelegate"])());
        if (this.options.actionRunner) {
            this._actionRunner = this.options.actionRunner;
        } else {
            this._actionRunner = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionRunner"]();
            this._actionRunnerDisposables.add(this._actionRunner);
        }
        this._actionRunnerDisposables.add(this._actionRunner.onDidRun((e)=>this._onDidRun.fire(e)));
        this._actionRunnerDisposables.add(this._actionRunner.onWillRun((e)=>this._onWillRun.fire(e)));
        this.viewItems = [];
        this.focusedItem = undefined;
        this.domNode = document.createElement('div');
        this.domNode.className = 'monaco-action-bar';
        let previousKeys;
        let nextKeys;
        switch(this._orientation){
            case 0 /* ActionsOrientation.HORIZONTAL */ :
                previousKeys = [
                    15 /* KeyCode.LeftArrow */ 
                ];
                nextKeys = [
                    17 /* KeyCode.RightArrow */ 
                ];
                break;
            case 1 /* ActionsOrientation.VERTICAL */ :
                previousKeys = [
                    16 /* KeyCode.UpArrow */ 
                ];
                nextKeys = [
                    18 /* KeyCode.DownArrow */ 
                ];
                this.domNode.className += ' vertical';
                break;
        }
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
            const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            let eventHandled = true;
            const focusedItem = typeof this.focusedItem === 'number' ? this.viewItems[this.focusedItem] : undefined;
            if (previousKeys && (event.equals(previousKeys[0]) || event.equals(previousKeys[1]))) {
                eventHandled = this.focusPrevious();
            } else if (nextKeys && (event.equals(nextKeys[0]) || event.equals(nextKeys[1]))) {
                eventHandled = this.focusNext();
            } else if (event.equals(9 /* KeyCode.Escape */ ) && this.cancelHasListener) {
                this._onDidCancel.fire();
            } else if (event.equals(14 /* KeyCode.Home */ )) {
                eventHandled = this.focusFirst();
            } else if (event.equals(13 /* KeyCode.End */ )) {
                eventHandled = this.focusLast();
            } else if (event.equals(2 /* KeyCode.Tab */ ) && focusedItem instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseActionViewItem"] && focusedItem.trapsArrowNavigation) {
                // Tab, so forcibly focus next #219199
                eventHandled = this.focusNext(undefined, true);
            } else if (this.isTriggerKeyEvent(event)) {
                // Staying out of the else branch even if not triggered
                if (this._triggerKeys.keyDown) {
                    this.doTrigger(event);
                } else {
                    this.triggerKeyDown = true;
                }
            } else {
                eventHandled = false;
            }
            if (eventHandled) {
                event.preventDefault();
                event.stopPropagation();
            }
        }));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_UP, (e)=>{
            const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            // Run action on Enter/Space
            if (this.isTriggerKeyEvent(event)) {
                if (!this._triggerKeys.keyDown && this.triggerKeyDown) {
                    this.triggerKeyDown = false;
                    this.doTrigger(event);
                }
                event.preventDefault();
                event.stopPropagation();
            } else if (event.equals(2 /* KeyCode.Tab */ ) || event.equals(1024 /* KeyMod.Shift */  | 2 /* KeyCode.Tab */ ) || event.equals(16 /* KeyCode.UpArrow */ ) || event.equals(18 /* KeyCode.DownArrow */ ) || event.equals(15 /* KeyCode.LeftArrow */ ) || event.equals(17 /* KeyCode.RightArrow */ )) {
                this.updateFocusedItem();
            }
        }));
        this.focusTracker = this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFocus"](this.domNode));
        this._register(this.focusTracker.onDidBlur(()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"]() === this.domNode || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestor"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"](), this.domNode)) {
                this._onDidBlur.fire();
                this.previouslyFocusedItem = this.focusedItem;
                this.focusedItem = undefined;
                this.triggerKeyDown = false;
            }
        }));
        this._register(this.focusTracker.onDidFocus(()=>this.updateFocusedItem()));
        this.actionsList = document.createElement('ul');
        this.actionsList.className = 'actions-container';
        if (this.options.highlightToggledItems) {
            this.actionsList.classList.add('highlight-toggled');
        }
        this.actionsList.setAttribute('role', this.options.ariaRole || 'toolbar');
        if (this.options.ariaLabel) {
            this.actionsList.setAttribute('aria-label', this.options.ariaLabel);
        }
        this.domNode.appendChild(this.actionsList);
        container.appendChild(this.domNode);
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/dropdown/dropdown.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "DropdownMenu": ()=>DropdownMenu
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/touch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
;
;
;
;
;
;
class BaseDropdown extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionRunner"] {
    get element() {
        return this._element;
    }
    show() {
        if (!this.visible) {
            this.visible = true;
            this._onDidChangeVisibility.fire(true);
        }
    }
    hide() {
        if (this.visible) {
            this.visible = false;
            this._onDidChangeVisibility.fire(false);
        }
    }
    dispose() {
        super.dispose();
        this.hide();
        if (this.boxContainer) {
            this.boxContainer.remove();
            this.boxContainer = undefined;
        }
        if (this.contents) {
            this.contents.remove();
            this.contents = undefined;
        }
        if (this._label) {
            this._label.remove();
            this._label = undefined;
        }
    }
    constructor(container, options){
        super();
        this._onDidChangeVisibility = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidChangeVisibility = this._onDidChangeVisibility.event;
        this._element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.monaco-dropdown'));
        this._label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this._element, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.dropdown-label'));
        let labelRenderer = options.labelRenderer;
        if (!labelRenderer) {
            labelRenderer = (container)=>{
                container.textContent = options.label || '';
                return null;
            };
        }
        for (const event of [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].CLICK,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_DOWN,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Tap
        ]){
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.element, event, (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true))); // prevent default click behaviour to trigger
        }
        for (const event of [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_DOWN,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Tap
        ]){
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this._label, event, (e)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMouseEvent"])(e) && (e.detail > 1 || e.button !== 0)) {
                    // prevent right click trigger to allow separate context menu (https://github.com/microsoft/vscode/issues/151064)
                    // prevent multiple clicks to open multiple context menus (https://github.com/microsoft/vscode/issues/41363)
                    return;
                }
                if (this.visible) {
                    this.hide();
                } else {
                    this.show();
                }
            }));
        }
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this._label, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_UP, (e)=>{
            const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            if (event.equals(3 /* KeyCode.Enter */ ) || event.equals(10 /* KeyCode.Space */ )) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true); // https://github.com/microsoft/vscode/issues/57997
                if (this.visible) {
                    this.hide();
                } else {
                    this.show();
                }
            }
        }));
        const cleanupFn = labelRenderer(this._label);
        if (cleanupFn) {
            this._register(cleanupFn);
        }
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gesture"].addTarget(this._label));
    }
}
class DropdownMenu extends BaseDropdown {
    set menuOptions(options) {
        this._menuOptions = options;
    }
    get menuOptions() {
        return this._menuOptions;
    }
    get actions() {
        if (this._options.actionProvider) {
            return this._options.actionProvider.getActions();
        }
        return this._actions;
    }
    set actions(actions) {
        this._actions = actions;
    }
    show() {
        super.show();
        this.element.classList.add('active');
        this._options.contextMenuProvider.showContextMenu({
            getAnchor: ()=>this.element,
            getActions: ()=>this.actions,
            getActionsContext: ()=>this.menuOptions ? this.menuOptions.context : null,
            getActionViewItem: (action, options)=>this.menuOptions && this.menuOptions.actionViewItemProvider ? this.menuOptions.actionViewItemProvider(action, options) : undefined,
            getKeyBinding: (action)=>this.menuOptions && this.menuOptions.getKeyBinding ? this.menuOptions.getKeyBinding(action) : undefined,
            getMenuClassName: ()=>this._options.menuClassName || '',
            onHide: ()=>this.onHide(),
            actionRunner: this.menuOptions ? this.menuOptions.actionRunner : undefined,
            anchorAlignment: this.menuOptions ? this.menuOptions.anchorAlignment : 0 /* AnchorAlignment.LEFT */ ,
            domForShadowRoot: this._options.menuAsChild ? this.element : undefined,
            skipTelemetry: this._options.skipTelemetry
        });
    }
    hide() {
        super.hide();
    }
    onHide() {
        this.hide();
        this.element.classList.remove('active');
    }
    constructor(container, _options){
        super(container, _options);
        this._options = _options;
        this._actions = [];
        this.actions = _options.actions || [];
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/dropdown/dropdownActionViewItem.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DropdownMenuActionViewItem": ()=>DropdownMenuActionViewItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionViewItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$dropdown$2f$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/dropdown/dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegate2.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class DropdownMenuActionViewItem extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseActionViewItem"] {
    render(container) {
        this.actionItem = container;
        const labelRenderer = (el)=>{
            this.element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(el, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('a.action-label'));
            let classNames = [];
            if (typeof this.options.classNames === 'string') {
                classNames = this.options.classNames.split(/\s+/g).filter((s)=>!!s);
            } else if (this.options.classNames) {
                classNames = this.options.classNames;
            }
            // todo@aeschli: remove codicon, should come through `this.options.classNames`
            if (!classNames.find((c)=>c === 'icon')) {
                classNames.push('codicon');
            }
            this.element.classList.add(...classNames);
            this.element.setAttribute('role', 'button');
            this.element.setAttribute('aria-haspopup', 'true');
            this.element.setAttribute('aria-expanded', 'false');
            if (this._action.label) {
                var _this_options_hoverDelegate;
                this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLayerHoverDelegate"])().setupManagedHover((_this_options_hoverDelegate = this.options.hoverDelegate) !== null && _this_options_hoverDelegate !== void 0 ? _this_options_hoverDelegate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('mouse'), this.element, this._action.label));
            }
            this.element.ariaLabel = this._action.label || '';
            return null;
        };
        const isActionsArray = Array.isArray(this.menuActionsOrProvider);
        const options = {
            contextMenuProvider: this.contextMenuProvider,
            labelRenderer: labelRenderer,
            menuAsChild: this.options.menuAsChild,
            actions: isActionsArray ? this.menuActionsOrProvider : undefined,
            actionProvider: isActionsArray ? undefined : this.menuActionsOrProvider,
            skipTelemetry: this.options.skipTelemetry
        };
        this.dropdownMenu = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$dropdown$2f$dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"](container, options));
        this._register(this.dropdownMenu.onDidChangeVisibility((visible)=>{
            var _this_element;
            (_this_element = this.element) === null || _this_element === void 0 ? void 0 : _this_element.setAttribute('aria-expanded', "".concat(visible));
            this._onDidChangeVisibility.fire(visible);
        }));
        this.dropdownMenu.menuOptions = {
            actionViewItemProvider: this.options.actionViewItemProvider,
            actionRunner: this.actionRunner,
            getKeyBinding: this.options.keybindingProvider,
            context: this._context
        };
        if (this.options.anchorAlignmentProvider) {
            const that = this;
            this.dropdownMenu.menuOptions = {
                ...this.dropdownMenu.menuOptions,
                get anchorAlignment () {
                    return that.options.anchorAlignmentProvider();
                }
            };
        }
        this.updateTooltip();
        this.updateEnabled();
    }
    getTooltip() {
        let title = null;
        if (this.action.tooltip) {
            title = this.action.tooltip;
        } else if (this.action.label) {
            title = this.action.label;
        }
        return title !== null && title !== void 0 ? title : undefined;
    }
    setActionContext(newContext) {
        super.setActionContext(newContext);
        if (this.dropdownMenu) {
            if (this.dropdownMenu.menuOptions) {
                this.dropdownMenu.menuOptions.context = newContext;
            } else {
                this.dropdownMenu.menuOptions = {
                    context: newContext
                };
            }
        }
    }
    show() {
        var _this_dropdownMenu;
        (_this_dropdownMenu = this.dropdownMenu) === null || _this_dropdownMenu === void 0 ? void 0 : _this_dropdownMenu.show();
    }
    updateEnabled() {
        var _this_actionItem, _this_element;
        const disabled = !this.action.enabled;
        (_this_actionItem = this.actionItem) === null || _this_actionItem === void 0 ? void 0 : _this_actionItem.classList.toggle('disabled', disabled);
        (_this_element = this.element) === null || _this_element === void 0 ? void 0 : _this_element.classList.toggle('disabled', disabled);
    }
    constructor(action, menuActionsOrProvider, contextMenuProvider, options = Object.create(null)){
        super(null, action, options);
        this.actionItem = null;
        this._onDidChangeVisibility = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidChangeVisibility = this._onDidChangeVisibility.event;
        this.menuActionsOrProvider = menuActionsOrProvider;
        this.contextMenuProvider = contextMenuProvider;
        this.options = options;
        if (this.options.actionRunner) {
            this.actionRunner = this.options.actionRunner;
        }
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/menu/menu.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "HorizontalDirection": ()=>HorizontalDirection,
    "MENU_ESCAPED_MNEMONIC_REGEX": ()=>MENU_ESCAPED_MNEMONIC_REGEX,
    "MENU_MNEMONIC_REGEX": ()=>MENU_MNEMONIC_REGEX,
    "Menu": ()=>Menu,
    "VerticalDirection": ()=>VerticalDirection,
    "cleanMnemonic": ()=>cleanMnemonic,
    "formatRule": ()=>formatRule
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/touch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionViewItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$contextview$2f$contextview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/contextview/contextview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/codicons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codiconsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/codiconsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/themables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/iconLabels.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/strings.js [app-client] (ecmascript)");
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
const MENU_MNEMONIC_REGEX = /\(&([^\s&])\)|(^|[^&])&([^\s&])/;
const MENU_ESCAPED_MNEMONIC_REGEX = /(&amp;)?(&amp;)([^\s&])/g;
var HorizontalDirection;
(function(HorizontalDirection) {
    HorizontalDirection[HorizontalDirection["Right"] = 0] = "Right";
    HorizontalDirection[HorizontalDirection["Left"] = 1] = "Left";
})(HorizontalDirection || (HorizontalDirection = {}));
var VerticalDirection;
(function(VerticalDirection) {
    VerticalDirection[VerticalDirection["Above"] = 0] = "Above";
    VerticalDirection[VerticalDirection["Below"] = 1] = "Below";
})(VerticalDirection || (VerticalDirection = {}));
class Menu extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionBar"] {
    initializeOrUpdateStyleSheet(container, style) {
        if (!this.styleSheet) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInShadowDOM"])(container)) {
                this.styleSheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyleSheet"])(container);
            } else {
                if (!Menu.globalStyleSheet) {
                    Menu.globalStyleSheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyleSheet"])();
                }
                this.styleSheet = Menu.globalStyleSheet;
            }
        }
        this.styleSheet.textContent = getMenuWidgetCSS(style, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInShadowDOM"])(container));
    }
    styleScrollElement(scrollElement, style) {
        var _style_foregroundColor;
        const fgColor = (_style_foregroundColor = style.foregroundColor) !== null && _style_foregroundColor !== void 0 ? _style_foregroundColor : '';
        var _style_backgroundColor;
        const bgColor = (_style_backgroundColor = style.backgroundColor) !== null && _style_backgroundColor !== void 0 ? _style_backgroundColor : '';
        const border = style.borderColor ? "1px solid ".concat(style.borderColor) : '';
        const borderRadius = '5px';
        const shadow = style.shadowColor ? "0 2px 8px ".concat(style.shadowColor) : '';
        scrollElement.style.outline = border;
        scrollElement.style.borderRadius = borderRadius;
        scrollElement.style.color = fgColor;
        scrollElement.style.backgroundColor = bgColor;
        scrollElement.style.boxShadow = shadow;
    }
    getContainer() {
        return this.scrollableElement.getDomNode();
    }
    get onScroll() {
        return this.scrollableElement.onScroll;
    }
    focusItemByElement(element) {
        const lastFocusedItem = this.focusedItem;
        this.setFocusedItem(element);
        if (lastFocusedItem !== this.focusedItem) {
            this.updateFocus();
        }
    }
    setFocusedItem(element) {
        for(let i = 0; i < this.actionsList.children.length; i++){
            const elem = this.actionsList.children[i];
            if (element === elem) {
                this.focusedItem = i;
                break;
            }
        }
    }
    updateFocus(fromRight) {
        super.updateFocus(fromRight, true, true);
        if (typeof this.focusedItem !== 'undefined') {
            // Workaround for #80047 caused by an issue in chromium
            // https://bugs.chromium.org/p/chromium/issues/detail?id=414283
            // When that's fixed, just call this.scrollableElement.scanDomNode()
            this.scrollableElement.setScrollPosition({
                scrollTop: Math.round(this.menuElement.scrollTop)
            });
        }
    }
    doGetActionViewItem(action, options, parentData) {
        if (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"]) {
            return new MenuSeparatorActionViewItem(options.context, action, {
                icon: true
            }, this.menuStyles);
        } else if (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmenuAction"]) {
            const menuActionViewItem = new SubmenuMenuActionViewItem(action, action.actions, parentData, {
                ...options,
                submenuIds: new Set([
                    ...options.submenuIds || [],
                    action.id
                ])
            }, this.menuStyles);
            if (options.enableMnemonics) {
                const mnemonic = menuActionViewItem.getMnemonic();
                if (mnemonic && menuActionViewItem.isEnabled()) {
                    let actionViewItems = [];
                    if (this.mnemonics.has(mnemonic)) {
                        actionViewItems = this.mnemonics.get(mnemonic);
                    }
                    actionViewItems.push(menuActionViewItem);
                    this.mnemonics.set(mnemonic, actionViewItems);
                }
            }
            return menuActionViewItem;
        } else {
            const menuItemOptions = {
                enableMnemonics: options.enableMnemonics,
                useEventAsContext: options.useEventAsContext
            };
            if (options.getKeyBinding) {
                const keybinding = options.getKeyBinding(action);
                if (keybinding) {
                    const keybindingLabel = keybinding.getLabel();
                    if (keybindingLabel) {
                        menuItemOptions.keybinding = keybindingLabel;
                    }
                }
            }
            const menuActionViewItem = new BaseMenuActionViewItem(options.context, action, menuItemOptions, this.menuStyles);
            if (options.enableMnemonics) {
                const mnemonic = menuActionViewItem.getMnemonic();
                if (mnemonic && menuActionViewItem.isEnabled()) {
                    let actionViewItems = [];
                    if (this.mnemonics.has(mnemonic)) {
                        actionViewItems = this.mnemonics.get(mnemonic);
                    }
                    actionViewItems.push(menuActionViewItem);
                    this.mnemonics.set(mnemonic, actionViewItems);
                }
            }
            return menuActionViewItem;
        }
    }
    constructor(container, actions, options, menuStyles){
        container.classList.add('monaco-menu-container');
        container.setAttribute('role', 'presentation');
        const menuElement = document.createElement('div');
        menuElement.classList.add('monaco-menu');
        menuElement.setAttribute('role', 'presentation');
        super(menuElement, {
            orientation: 1 /* ActionsOrientation.VERTICAL */ ,
            actionViewItemProvider: (action)=>this.doGetActionViewItem(action, options, parentData),
            context: options.context,
            actionRunner: options.actionRunner,
            ariaLabel: options.ariaLabel,
            ariaRole: 'menu',
            focusOnlyEnabledItems: true,
            triggerKeys: {
                keys: [
                    3 /* KeyCode.Enter */ ,
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLinux"] ? [
                        10 /* KeyCode.Space */ 
                    ] : []
                ],
                keyDown: true
            }
        });
        this.menuStyles = menuStyles;
        this.menuElement = menuElement;
        this.actionsList.tabIndex = 0;
        this.initializeOrUpdateStyleSheet(container, menuStyles);
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gesture"].addTarget(menuElement));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(menuElement, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
            const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            // Stop tab navigation of menus
            if (event.equals(2 /* KeyCode.Tab */ )) {
                e.preventDefault();
            }
        }));
        if (options.enableMnemonics) {
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(menuElement, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
                const key = e.key.toLocaleLowerCase();
                if (this.mnemonics.has(key)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
                    const actions = this.mnemonics.get(key);
                    if (actions.length === 1) {
                        if (actions[0] instanceof SubmenuMenuActionViewItem && actions[0].container) {
                            this.focusItemByElement(actions[0].container);
                        }
                        actions[0].onClick(e);
                    }
                    if (actions.length > 1) {
                        const action = actions.shift();
                        if (action && action.container) {
                            this.focusItemByElement(action.container);
                            actions.push(action);
                        }
                        this.mnemonics.set(key, actions);
                    }
                }
            }));
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLinux"]) {
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(menuElement, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
                const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
                if (event.equals(14 /* KeyCode.Home */ ) || event.equals(11 /* KeyCode.PageUp */ )) {
                    this.focusedItem = this.viewItems.length - 1;
                    this.focusNext();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
                } else if (event.equals(13 /* KeyCode.End */ ) || event.equals(12 /* KeyCode.PageDown */ )) {
                    this.focusedItem = 0;
                    this.focusPrevious();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
                }
            }));
        }
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_OUT, (e)=>{
            const relatedTarget = e.relatedTarget;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestor"])(relatedTarget, this.domNode)) {
                this.focusedItem = undefined;
                this.updateFocus();
                e.stopPropagation();
            }
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.actionsList, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_OVER, (e)=>{
            let target = e.target;
            if (!target || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestor"])(target, this.actionsList) || target === this.actionsList) {
                return;
            }
            while(target.parentElement !== this.actionsList && target.parentElement !== null){
                target = target.parentElement;
            }
            if (target.classList.contains('action-item')) {
                const lastFocusedItem = this.focusedItem;
                this.setFocusedItem(target);
                if (lastFocusedItem !== this.focusedItem) {
                    this.updateFocus();
                }
            }
        }));
        // Support touch on actions list to focus items (needed for submenus)
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gesture"].addTarget(this.actionsList));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.actionsList, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Tap, (e)=>{
            let target = e.initialTarget;
            if (!target || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestor"])(target, this.actionsList) || target === this.actionsList) {
                return;
            }
            while(target.parentElement !== this.actionsList && target.parentElement !== null){
                target = target.parentElement;
            }
            if (target.classList.contains('action-item')) {
                const lastFocusedItem = this.focusedItem;
                this.setFocusedItem(target);
                if (lastFocusedItem !== this.focusedItem) {
                    this.updateFocus();
                }
            }
        }));
        const parentData = {
            parent: this
        };
        this.mnemonics = new Map();
        // Scroll Logic
        this.scrollableElement = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomScrollableElement"](menuElement, {
            alwaysConsumeMouseWheel: true,
            horizontal: 2 /* ScrollbarVisibility.Hidden */ ,
            vertical: 3 /* ScrollbarVisibility.Visible */ ,
            verticalScrollbarSize: 7,
            handleMouseWheel: true,
            useShadows: true
        }));
        const scrollElement = this.scrollableElement.getDomNode();
        scrollElement.style.position = '';
        this.styleScrollElement(scrollElement, menuStyles);
        // Support scroll on menu drag
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(menuElement, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Change, (e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
            const scrollTop = this.scrollableElement.getScrollPosition().scrollTop;
            this.scrollableElement.setScrollPosition({
                scrollTop: scrollTop - e.translationY
            });
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(scrollElement, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_UP, (e)=>{
            // Absorb clicks in menu dead space https://github.com/microsoft/vscode/issues/63575
            // We do this on the scroll element so the scroll bar doesn't dismiss the menu either
            e.preventDefault();
        }));
        const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(container);
        menuElement.style.maxHeight = "".concat(Math.max(10, window.innerHeight - container.getBoundingClientRect().top - 35), "px");
        actions = actions.filter((a, idx)=>{
            var _options_submenuIds;
            if ((_options_submenuIds = options.submenuIds) === null || _options_submenuIds === void 0 ? void 0 : _options_submenuIds.has(a.id)) {
                console.warn("Found submenu cycle: ".concat(a.id));
                return false;
            }
            // Filter out consecutive or useless separators
            if (a instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"]) {
                if (idx === actions.length - 1 || idx === 0) {
                    return false;
                }
                const prevAction = actions[idx - 1];
                if (prevAction instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"]) {
                    return false;
                }
            }
            return true;
        });
        this.push(actions, {
            icon: true,
            label: true,
            isMenu: true
        });
        container.appendChild(this.scrollableElement.getDomNode());
        this.scrollableElement.scanDomNode();
        this.viewItems.filter((item)=>!(item instanceof MenuSeparatorActionViewItem)).forEach((item, index, array)=>{
            item.updatePositionInSet(index + 1, array.length);
        });
    }
}
class BaseMenuActionViewItem extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseActionViewItem"] {
    render(container) {
        super.render(container);
        if (!this.element) {
            return;
        }
        this.container = container;
        this.item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this.element, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('a.action-menu-item'));
        if (this._action.id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].ID) {
            // A separator is a presentation item
            this.item.setAttribute('role', 'presentation');
        } else {
            this.item.setAttribute('role', 'menuitem');
            if (this.mnemonic) {
                this.item.setAttribute('aria-keyshortcuts', "".concat(this.mnemonic));
            }
        }
        this.check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this.item, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('span.menu-item-check' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asCSSSelector(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].menuSelection)));
        this.check.setAttribute('role', 'none');
        this.label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this.item, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('span.action-label'));
        if (this.options.label && this.options.keybinding) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this.item, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('span.keybinding')).textContent = this.options.keybinding;
        }
        // Adds mouse up listener to actually run the action
        this.runOnceToEnableMouseUp.schedule();
        this.updateClass();
        this.updateLabel();
        this.updateTooltip();
        this.updateEnabled();
        this.updateChecked();
        this.applyStyle();
    }
    blur() {
        super.blur();
        this.applyStyle();
    }
    focus() {
        var _this_item;
        super.focus();
        (_this_item = this.item) === null || _this_item === void 0 ? void 0 : _this_item.focus();
        this.applyStyle();
    }
    updatePositionInSet(pos, setSize) {
        if (this.item) {
            this.item.setAttribute('aria-posinset', "".concat(pos));
            this.item.setAttribute('aria-setsize', "".concat(setSize));
        }
    }
    updateLabel() {
        if (!this.label) {
            return;
        }
        if (this.options.label) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNode"])(this.label);
            let label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripIcons"])(this.action.label);
            if (label) {
                const cleanLabel = cleanMnemonic(label);
                if (!this.options.enableMnemonics) {
                    label = cleanLabel;
                }
                this.label.setAttribute('aria-label', cleanLabel.replace(/&&/g, '&'));
                const matches = MENU_MNEMONIC_REGEX.exec(label);
                if (matches) {
                    var _this_item;
                    label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escape"](label);
                    // This is global, reset it
                    MENU_ESCAPED_MNEMONIC_REGEX.lastIndex = 0;
                    let escMatch = MENU_ESCAPED_MNEMONIC_REGEX.exec(label);
                    // We can't use negative lookbehind so if we match our negative and skip
                    while(escMatch && escMatch[1]){
                        escMatch = MENU_ESCAPED_MNEMONIC_REGEX.exec(label);
                    }
                    const replaceDoubleEscapes = (str)=>str.replace(/&amp;&amp;/g, '&amp;');
                    if (escMatch) {
                        this.label.append(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ltrim"](replaceDoubleEscapes(label.substr(0, escMatch.index)), ' '), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('u', {
                            'aria-hidden': 'true'
                        }, escMatch[3]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rtrim"](replaceDoubleEscapes(label.substr(escMatch.index + escMatch[0].length)), ' '));
                    } else {
                        this.label.innerText = replaceDoubleEscapes(label).trim();
                    }
                    (_this_item = this.item) === null || _this_item === void 0 ? void 0 : _this_item.setAttribute('aria-keyshortcuts', (!!matches[1] ? matches[1] : matches[3]).toLocaleLowerCase());
                } else {
                    this.label.innerText = label.replace(/&&/g, '&').trim();
                }
            }
        }
    }
    updateTooltip() {
    // menus should function like native menus and they do not have tooltips
    }
    updateClass() {
        if (this.cssClass && this.item) {
            this.item.classList.remove(...this.cssClass.split(' '));
        }
        if (this.options.icon && this.label) {
            this.cssClass = this.action.class || '';
            this.label.classList.add('icon');
            if (this.cssClass) {
                this.label.classList.add(...this.cssClass.split(' '));
            }
            this.updateEnabled();
        } else if (this.label) {
            this.label.classList.remove('icon');
        }
    }
    updateEnabled() {
        if (this.action.enabled) {
            if (this.element) {
                this.element.classList.remove('disabled');
                this.element.removeAttribute('aria-disabled');
            }
            if (this.item) {
                this.item.classList.remove('disabled');
                this.item.removeAttribute('aria-disabled');
                this.item.tabIndex = 0;
            }
        } else {
            if (this.element) {
                this.element.classList.add('disabled');
                this.element.setAttribute('aria-disabled', 'true');
            }
            if (this.item) {
                this.item.classList.add('disabled');
                this.item.setAttribute('aria-disabled', 'true');
            }
        }
    }
    updateChecked() {
        if (!this.item) {
            return;
        }
        const checked = this.action.checked;
        this.item.classList.toggle('checked', !!checked);
        if (checked !== undefined) {
            this.item.setAttribute('role', 'menuitemcheckbox');
            this.item.setAttribute('aria-checked', checked ? 'true' : 'false');
        } else {
            this.item.setAttribute('role', 'menuitem');
            this.item.setAttribute('aria-checked', '');
        }
    }
    getMnemonic() {
        return this.mnemonic;
    }
    applyStyle() {
        const isSelected = this.element && this.element.classList.contains('focused');
        const fgColor = isSelected && this.menuStyle.selectionForegroundColor ? this.menuStyle.selectionForegroundColor : this.menuStyle.foregroundColor;
        const bgColor = isSelected && this.menuStyle.selectionBackgroundColor ? this.menuStyle.selectionBackgroundColor : undefined;
        const outline = isSelected && this.menuStyle.selectionBorderColor ? "1px solid ".concat(this.menuStyle.selectionBorderColor) : '';
        const outlineOffset = isSelected && this.menuStyle.selectionBorderColor ? "-1px" : '';
        if (this.item) {
            this.item.style.color = fgColor !== null && fgColor !== void 0 ? fgColor : '';
            this.item.style.backgroundColor = bgColor !== null && bgColor !== void 0 ? bgColor : '';
            this.item.style.outline = outline;
            this.item.style.outlineOffset = outlineOffset;
        }
        if (this.check) {
            this.check.style.color = fgColor !== null && fgColor !== void 0 ? fgColor : '';
        }
    }
    constructor(ctx, action, options, menuStyle){
        options.isMenu = true;
        super(action, action, options);
        this.menuStyle = menuStyle;
        this.options = options;
        this.options.icon = options.icon !== undefined ? options.icon : false;
        this.options.label = options.label !== undefined ? options.label : true;
        this.cssClass = '';
        // Set mnemonic
        if (this.options.label && options.enableMnemonics) {
            const label = this.action.label;
            if (label) {
                const matches = MENU_MNEMONIC_REGEX.exec(label);
                if (matches) {
                    this.mnemonic = (!!matches[1] ? matches[1] : matches[3]).toLocaleLowerCase();
                }
            }
        }
        // Add mouse up listener later to avoid accidental clicks
        this.runOnceToEnableMouseUp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunOnceScheduler"](()=>{
            if (!this.element) {
                return;
            }
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_UP, (e)=>{
                // removed default prevention as it conflicts
                // with BaseActionViewItem #101537
                // add back if issues arise and link new issue
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
                // See https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Interact_with_the_clipboard
                // > Writing to the clipboard
                // > You can use the "cut" and "copy" commands without any special
                // permission if you are using them in a short-lived event handler
                // for a user action (for example, a click handler).
                // => to get the Copy and Paste context menu actions working on Firefox,
                // there should be no timeout here
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"]) {
                    const mouseEvent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMouseEvent"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(this.element), e);
                    // Allowing right click to trigger the event causes the issue described below,
                    // but since the solution below does not work in FF, we must disable right click
                    if (mouseEvent.rightButton) {
                        return;
                    }
                    this.onClick(e);
                } else {
                    setTimeout(()=>{
                        this.onClick(e);
                    }, 0);
                }
            }));
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].CONTEXT_MENU, (e)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
            }));
        }, 100);
        this._register(this.runOnceToEnableMouseUp);
    }
}
class SubmenuMenuActionViewItem extends BaseMenuActionViewItem {
    render(container) {
        super.render(container);
        if (!this.element) {
            return;
        }
        if (this.item) {
            this.item.classList.add('monaco-submenu-item');
            this.item.tabIndex = 0;
            this.item.setAttribute('aria-haspopup', 'true');
            this.updateAriaExpanded('false');
            this.submenuIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this.item, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('span.submenu-indicator' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asCSSSelector(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].menuSubmenu)));
            this.submenuIndicator.setAttribute('aria-hidden', 'true');
        }
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_UP, (e)=>{
            const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            if (event.equals(17 /* KeyCode.RightArrow */ ) || event.equals(3 /* KeyCode.Enter */ )) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
                this.createSubmenu(true);
            }
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
            const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])() === this.item) {
                if (event.equals(17 /* KeyCode.RightArrow */ ) || event.equals(3 /* KeyCode.Enter */ )) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
                }
            }
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_OVER, (e)=>{
            if (!this.mouseOver) {
                this.mouseOver = true;
                this.showScheduler.schedule();
            }
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_LEAVE, (e)=>{
            this.mouseOver = false;
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].FOCUS_OUT, (e)=>{
            if (this.element && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestor"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])(), this.element)) {
                this.hideScheduler.schedule();
            }
        }));
        this._register(this.parentData.parent.onScroll(()=>{
            if (this.parentData.submenu === this.mysubmenu) {
                this.parentData.parent.focus(false);
                this.cleanupExistingSubmenu(true);
            }
        }));
    }
    updateEnabled() {
    // override on submenu entry
    // native menus do not observe enablement on sumbenus
    // we mimic that behavior
    }
    onClick(e) {
        // stop clicking from trying to run an action
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
        this.cleanupExistingSubmenu(false);
        this.createSubmenu(true);
    }
    cleanupExistingSubmenu(force) {
        if (this.parentData.submenu && (force || this.parentData.submenu !== this.mysubmenu)) {
            // disposal may throw if the submenu has already been removed
            try {
                this.parentData.submenu.dispose();
            } catch (e) {}
            this.parentData.submenu = undefined;
            this.updateAriaExpanded('false');
            if (this.submenuContainer) {
                this.submenuDisposables.clear();
                this.submenuContainer = undefined;
            }
        }
    }
    calculateSubmenuMenuLayout(windowDimensions, submenu, entry, expandDirection) {
        const ret = {
            top: 0,
            left: 0
        };
        // Start with horizontal
        ret.left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$contextview$2f$contextview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"])(windowDimensions.width, submenu.width, {
            position: expandDirection.horizontal === HorizontalDirection.Right ? 0 /* LayoutAnchorPosition.Before */  : 1 /* LayoutAnchorPosition.After */ ,
            offset: entry.left,
            size: entry.width
        });
        // We don't have enough room to layout the menu fully, so we are overlapping the menu
        if (ret.left >= entry.left && ret.left < entry.left + entry.width) {
            if (entry.left + 10 + submenu.width <= windowDimensions.width) {
                ret.left = entry.left + 10;
            }
            entry.top += 10;
            entry.height = 0;
        }
        // Now that we have a horizontal position, try layout vertically
        ret.top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$contextview$2f$contextview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"])(windowDimensions.height, submenu.height, {
            position: 0 /* LayoutAnchorPosition.Before */ ,
            offset: entry.top,
            size: 0
        });
        // We didn't have enough room below, but we did above, so we shift down to align the menu
        if (ret.top + submenu.height === entry.top && ret.top + entry.height + submenu.height <= windowDimensions.height) {
            ret.top += entry.height;
        }
        return ret;
    }
    createSubmenu() {
        let selectFirstItem = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        if (!this.element) {
            return;
        }
        if (!this.parentData.submenu) {
            this.updateAriaExpanded('true');
            this.submenuContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this.element, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('div.monaco-submenu'));
            this.submenuContainer.classList.add('menubar-menu-items-holder', 'context-view');
            // Set the top value of the menu container before construction
            // This allows the menu constructor to calculate the proper max height
            const computedStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(this.parentData.parent.domNode).getComputedStyle(this.parentData.parent.domNode);
            const paddingTop = parseFloat(computedStyles.paddingTop || '0') || 0;
            // this.submenuContainer.style.top = `${this.element.offsetTop - this.parentData.parent.scrollOffset - paddingTop}px`;
            this.submenuContainer.style.zIndex = '1';
            this.submenuContainer.style.position = 'fixed';
            this.submenuContainer.style.top = '0';
            this.submenuContainer.style.left = '0';
            this.parentData.submenu = new Menu(this.submenuContainer, this.submenuActions.length ? this.submenuActions : [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptySubmenuAction"]()
            ], this.submenuOptions, this.menuStyle);
            // layout submenu
            const entryBox = this.element.getBoundingClientRect();
            const entryBoxUpdated = {
                top: entryBox.top - paddingTop,
                left: entryBox.left,
                height: entryBox.height + 2 * paddingTop,
                width: entryBox.width
            };
            const viewBox = this.submenuContainer.getBoundingClientRect();
            const window = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(this.element);
            const { top, left } = this.calculateSubmenuMenuLayout(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](window.innerWidth, window.innerHeight), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"].lift(viewBox), entryBoxUpdated, this.expandDirection);
            // subtract offsets caused by transform parent
            this.submenuContainer.style.left = "".concat(left - viewBox.left, "px");
            this.submenuContainer.style.top = "".concat(top - viewBox.top, "px");
            this.submenuDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.submenuContainer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_UP, (e)=>{
                const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
                if (event.equals(15 /* KeyCode.LeftArrow */ )) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
                    this.parentData.parent.focus();
                    this.cleanupExistingSubmenu(true);
                }
            }));
            this.submenuDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.submenuContainer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
                const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
                if (event.equals(15 /* KeyCode.LeftArrow */ )) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true);
                }
            }));
            this.submenuDisposables.add(this.parentData.submenu.onDidCancel(()=>{
                this.parentData.parent.focus();
                this.cleanupExistingSubmenu(true);
            }));
            this.parentData.submenu.focus(selectFirstItem);
            this.mysubmenu = this.parentData.submenu;
        } else {
            this.parentData.submenu.focus(false);
        }
    }
    updateAriaExpanded(value) {
        if (this.item) {
            var _this_item;
            (_this_item = this.item) === null || _this_item === void 0 ? void 0 : _this_item.setAttribute('aria-expanded', value);
        }
    }
    applyStyle() {
        super.applyStyle();
        const isSelected = this.element && this.element.classList.contains('focused');
        const fgColor = isSelected && this.menuStyle.selectionForegroundColor ? this.menuStyle.selectionForegroundColor : this.menuStyle.foregroundColor;
        if (this.submenuIndicator) {
            this.submenuIndicator.style.color = fgColor !== null && fgColor !== void 0 ? fgColor : '';
        }
    }
    dispose() {
        super.dispose();
        this.hideScheduler.dispose();
        if (this.mysubmenu) {
            this.mysubmenu.dispose();
            this.mysubmenu = null;
        }
        if (this.submenuContainer) {
            this.submenuContainer = undefined;
        }
    }
    constructor(action, submenuActions, parentData, submenuOptions, menuStyles){
        super(action, action, submenuOptions, menuStyles);
        this.submenuActions = submenuActions;
        this.parentData = parentData;
        this.submenuOptions = submenuOptions;
        this.mysubmenu = null;
        this.submenuDisposables = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]());
        this.mouseOver = false;
        this.expandDirection = submenuOptions && submenuOptions.expandDirection !== undefined ? submenuOptions.expandDirection : {
            horizontal: HorizontalDirection.Right,
            vertical: VerticalDirection.Below
        };
        this.showScheduler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunOnceScheduler"](()=>{
            if (this.mouseOver) {
                this.cleanupExistingSubmenu(false);
                this.createSubmenu(false);
            }
        }, 250);
        this.hideScheduler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunOnceScheduler"](()=>{
            if (this.element && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestor"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])(), this.element) && this.parentData.submenu === this.mysubmenu) {
                this.parentData.parent.focus(false);
                this.cleanupExistingSubmenu(true);
            }
        }, 750);
    }
}
class MenuSeparatorActionViewItem extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionViewItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionViewItem"] {
    render(container) {
        super.render(container);
        if (this.label) {
            this.label.style.borderBottomColor = this.menuStyles.separatorColor ? "".concat(this.menuStyles.separatorColor) : '';
        }
    }
    constructor(context, action, options, menuStyles){
        super(context, action, options);
        this.menuStyles = menuStyles;
    }
}
function cleanMnemonic(label) {
    const regex = MENU_MNEMONIC_REGEX;
    const matches = regex.exec(label);
    if (!matches) {
        return label;
    }
    const mnemonicInText = !matches[1];
    return label.replace(regex, mnemonicInText ? '$2$3' : '').trim();
}
function formatRule(c) {
    const fontCharacter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codiconsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCodiconFontCharacters"])()[c.id];
    return ".codicon-".concat(c.id, ":before { content: '\\").concat(fontCharacter.toString(16), "'; }");
}
function getMenuWidgetCSS(style, isForShadowDom) {
    let result = /* css */ "\n.monaco-menu {\n	font-size: 13px;\n	border-radius: 5px;\n	min-width: 160px;\n}\n\n".concat(formatRule(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].menuSelection), "\n").concat(formatRule(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].menuSubmenu), "\n\n.monaco-menu .monaco-action-bar {\n	text-align: right;\n	overflow: hidden;\n	white-space: nowrap;\n}\n\n.monaco-menu .monaco-action-bar .actions-container {\n	display: flex;\n	margin: 0 auto;\n	padding: 0;\n	width: 100%;\n	justify-content: flex-end;\n}\n\n.monaco-menu .monaco-action-bar.vertical .actions-container {\n	display: inline-block;\n}\n\n.monaco-menu .monaco-action-bar.reverse .actions-container {\n	flex-direction: row-reverse;\n}\n\n.monaco-menu .monaco-action-bar .action-item {\n	cursor: pointer;\n	display: inline-block;\n	transition: transform 50ms ease;\n	position: relative;  /* DO NOT REMOVE - this is the key to preventing the ghosting icon bug in Chrome 42 */\n}\n\n.monaco-menu .monaco-action-bar .action-item.disabled {\n	cursor: default;\n}\n\n.monaco-menu .monaco-action-bar .action-item .icon,\n.monaco-menu .monaco-action-bar .action-item .codicon {\n	display: inline-block;\n}\n\n.monaco-menu .monaco-action-bar .action-item .codicon {\n	display: flex;\n	align-items: center;\n}\n\n.monaco-menu .monaco-action-bar .action-label {\n	font-size: 11px;\n	margin-right: 4px;\n}\n\n.monaco-menu .monaco-action-bar .action-item.disabled .action-label,\n.monaco-menu .monaco-action-bar .action-item.disabled .action-label:hover {\n	color: var(--vscode-disabledForeground);\n}\n\n/* Vertical actions */\n\n.monaco-menu .monaco-action-bar.vertical {\n	text-align: left;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item {\n	display: block;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label.separator {\n	display: block;\n	border-bottom: 1px solid var(--vscode-menu-separatorBackground);\n	padding-top: 1px;\n	padding: 30px;\n}\n\n.monaco-menu .secondary-actions .monaco-action-bar .action-label {\n	margin-left: 6px;\n}\n\n/* Action Items */\n.monaco-menu .monaco-action-bar .action-item.select-container {\n	overflow: hidden; /* somehow the dropdown overflows its container, we prevent it here to not push */\n	flex: 1;\n	max-width: 170px;\n	min-width: 60px;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	margin-right: 10px;\n}\n\n.monaco-menu .monaco-action-bar.vertical {\n	margin-left: 0;\n	overflow: visible;\n}\n\n.monaco-menu .monaco-action-bar.vertical .actions-container {\n	display: block;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item {\n	padding: 0;\n	transform: none;\n	display: flex;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item.active {\n	transform: none;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-menu-item {\n	flex: 1 1 auto;\n	display: flex;\n	height: 2em;\n	align-items: center;\n	position: relative;\n	margin: 0 4px;\n	border-radius: 4px;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-menu-item:hover .keybinding,\n.monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .keybinding {\n	opacity: unset;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label {\n	flex: 1 1 auto;\n	text-decoration: none;\n	padding: 0 1em;\n	background: none;\n	font-size: 12px;\n	line-height: 1;\n}\n\n.monaco-menu .monaco-action-bar.vertical .keybinding,\n.monaco-menu .monaco-action-bar.vertical .submenu-indicator {\n	display: inline-block;\n	flex: 2 1 auto;\n	padding: 0 1em;\n	text-align: right;\n	font-size: 12px;\n	line-height: 1;\n}\n\n.monaco-menu .monaco-action-bar.vertical .submenu-indicator {\n	height: 100%;\n}\n\n.monaco-menu .monaco-action-bar.vertical .submenu-indicator.codicon {\n	font-size: 16px !important;\n	display: flex;\n	align-items: center;\n}\n\n.monaco-menu .monaco-action-bar.vertical .submenu-indicator.codicon::before {\n	margin-left: auto;\n	margin-right: -20px;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item.disabled .keybinding,\n.monaco-menu .monaco-action-bar.vertical .action-item.disabled .submenu-indicator {\n	opacity: 0.4;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label:not(.separator) {\n	display: inline-block;\n	box-sizing: border-box;\n	margin: 0;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item {\n	position: static;\n	overflow: visible;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-item .monaco-submenu {\n	position: absolute;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label.separator {\n	width: 100%;\n	height: 0px !important;\n	opacity: 1;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label.separator.text {\n	padding: 0.7em 1em 0.1em 1em;\n	font-weight: bold;\n	opacity: 1;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label:hover {\n	color: inherit;\n}\n\n.monaco-menu .monaco-action-bar.vertical .menu-item-check {\n	position: absolute;\n	visibility: hidden;\n	width: 1em;\n	height: 100%;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-menu-item.checked .menu-item-check {\n	visibility: visible;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n}\n\n/* Context Menu */\n\n.context-view.monaco-menu-container {\n	outline: 0;\n	border: none;\n	animation: fadeIn 0.083s linear;\n	-webkit-app-region: no-drag;\n}\n\n.context-view.monaco-menu-container :focus,\n.context-view.monaco-menu-container .monaco-action-bar.vertical:focus,\n.context-view.monaco-menu-container .monaco-action-bar.vertical :focus {\n	outline: 0;\n}\n\n.hc-black .context-view.monaco-menu-container,\n.hc-light .context-view.monaco-menu-container,\n:host-context(.hc-black) .context-view.monaco-menu-container,\n:host-context(.hc-light) .context-view.monaco-menu-container {\n	box-shadow: none;\n}\n\n.hc-black .monaco-menu .monaco-action-bar.vertical .action-item.focused,\n.hc-light .monaco-menu .monaco-action-bar.vertical .action-item.focused,\n:host-context(.hc-black) .monaco-menu .monaco-action-bar.vertical .action-item.focused,\n:host-context(.hc-light) .monaco-menu .monaco-action-bar.vertical .action-item.focused {\n	background: none;\n}\n\n/* Vertical Action Bar Styles */\n\n.monaco-menu .monaco-action-bar.vertical {\n	padding: 4px 0;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-menu-item {\n	height: 2em;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label:not(.separator),\n.monaco-menu .monaco-action-bar.vertical .keybinding {\n	font-size: inherit;\n	padding: 0 2em;\n	max-height: 100%;\n}\n\n.monaco-menu .monaco-action-bar.vertical .menu-item-check {\n	font-size: inherit;\n	width: 2em;\n}\n\n.monaco-menu .monaco-action-bar.vertical .action-label.separator {\n	font-size: inherit;\n	margin: 5px 0 !important;\n	padding: 0;\n	border-radius: 0;\n}\n\n.linux .monaco-menu .monaco-action-bar.vertical .action-label.separator,\n:host-context(.linux) .monaco-menu .monaco-action-bar.vertical .action-label.separator {\n	margin-left: 0;\n	margin-right: 0;\n}\n\n.monaco-menu .monaco-action-bar.vertical .submenu-indicator {\n	font-size: 60%;\n	padding: 0 1.8em;\n}\n\n.linux .monaco-menu .monaco-action-bar.vertical .submenu-indicator,\n:host-context(.linux) .monaco-menu .monaco-action-bar.vertical .submenu-indicator {\n	height: 100%;\n	mask-size: 10px 10px;\n	-webkit-mask-size: 10px 10px;\n}\n\n.monaco-menu .action-item {\n	cursor: default;\n}");
    if (isForShadowDom) {
        // Only define scrollbar styles when used inside shadow dom,
        // otherwise leave their styling to the global workbench styling.
        result += "\n			/* Arrows */\n			.monaco-scrollable-element > .scrollbar > .scra {\n				cursor: pointer;\n				font-size: 11px !important;\n			}\n\n			.monaco-scrollable-element > .visible {\n				opacity: 1;\n\n				/* Background rule added for IE9 - to allow clicks on dom node */\n				background:rgba(0,0,0,0);\n\n				transition: opacity 100ms linear;\n			}\n			.monaco-scrollable-element > .invisible {\n				opacity: 0;\n				pointer-events: none;\n			}\n			.monaco-scrollable-element > .invisible.fade {\n				transition: opacity 800ms linear;\n			}\n\n			/* Scrollable Content Inset Shadow */\n			.monaco-scrollable-element > .shadow {\n				position: absolute;\n				display: none;\n			}\n			.monaco-scrollable-element > .shadow.top {\n				display: block;\n				top: 0;\n				left: 3px;\n				height: 3px;\n				width: 100%;\n			}\n			.monaco-scrollable-element > .shadow.left {\n				display: block;\n				top: 3px;\n				left: 0;\n				height: 100%;\n				width: 3px;\n			}\n			.monaco-scrollable-element > .shadow.top-left-corner {\n				display: block;\n				top: 0;\n				left: 0;\n				height: 3px;\n				width: 3px;\n			}\n		";
        // Scrollbars
        const scrollbarShadowColor = style.scrollbarShadow;
        if (scrollbarShadowColor) {
            result += "\n				.monaco-scrollable-element > .shadow.top {\n					box-shadow: ".concat(scrollbarShadowColor, " 0 6px 6px -6px inset;\n				}\n\n				.monaco-scrollable-element > .shadow.left {\n					box-shadow: ").concat(scrollbarShadowColor, " 6px 0 6px -6px inset;\n				}\n\n				.monaco-scrollable-element > .shadow.top.left {\n					box-shadow: ").concat(scrollbarShadowColor, " 6px 6px 6px -6px inset;\n				}\n			");
        }
        const scrollbarSliderBackgroundColor = style.scrollbarSliderBackground;
        if (scrollbarSliderBackgroundColor) {
            result += "\n				.monaco-scrollable-element > .scrollbar > .slider {\n					background: ".concat(scrollbarSliderBackgroundColor, ";\n				}\n			");
        }
        const scrollbarSliderHoverBackgroundColor = style.scrollbarSliderHoverBackground;
        if (scrollbarSliderHoverBackgroundColor) {
            result += "\n				.monaco-scrollable-element > .scrollbar > .slider:hover {\n					background: ".concat(scrollbarSliderHoverBackgroundColor, ";\n				}\n			");
        }
        const scrollbarSliderActiveBackgroundColor = style.scrollbarSliderActiveBackground;
        if (scrollbarSliderActiveBackgroundColor) {
            result += "\n				.monaco-scrollable-element > .scrollbar > .slider.active {\n					background: ".concat(scrollbarSliderActiveBackgroundColor, ";\n				}\n			");
        }
    }
    return result;
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/toggle/toggle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "Toggle": ()=>Toggle,
    "unthemedToggleStyles": ()=>unthemedToggleStyles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/themables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegate2.js [app-client] (ecmascript)");
;
;
;
;
;
;
const unthemedToggleStyles = {
    inputActiveOptionBorder: '#007ACC00',
    inputActiveOptionForeground: '#FFFFFF',
    inputActiveOptionBackground: '#0E639C50'
};
class Toggle extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Widget"] {
    get enabled() {
        return this.domNode.getAttribute('aria-disabled') !== 'true';
    }
    focus() {
        this.domNode.focus();
    }
    get checked() {
        return this._checked;
    }
    set checked(newIsChecked) {
        this._checked = newIsChecked;
        this.domNode.setAttribute('aria-checked', String(this._checked));
        this.domNode.classList.toggle('checked', this._checked);
        this.applyStyles();
    }
    width() {
        return 2 /*margin left*/  + 2 /*border*/  + 2 /*padding*/  + 16 /* icon width */ ;
    }
    applyStyles() {
        if (this.domNode) {
            this.domNode.style.borderColor = this._checked && this._opts.inputActiveOptionBorder || '';
            this.domNode.style.color = this._checked && this._opts.inputActiveOptionForeground || 'inherit';
            this.domNode.style.backgroundColor = this._checked && this._opts.inputActiveOptionBackground || '';
        }
    }
    enable() {
        this.domNode.setAttribute('aria-disabled', String(false));
    }
    disable() {
        this.domNode.setAttribute('aria-disabled', String(true));
    }
    constructor(opts){
        super();
        this._onChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onChange = this._onChange.event;
        this._onKeyDown = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onKeyDown = this._onKeyDown.event;
        this._opts = opts;
        this._checked = this._opts.isChecked;
        const classes = [
            'monaco-custom-toggle'
        ];
        if (this._opts.icon) {
            this._icon = this._opts.icon;
            classes.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassNameArray(this._icon));
        }
        if (this._opts.actionClassName) {
            classes.push(...this._opts.actionClassName.split(' '));
        }
        if (this._checked) {
            classes.push('checked');
        }
        this.domNode = document.createElement('div');
        var _opts_hoverDelegate;
        this._hover = this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLayerHoverDelegate"])().setupManagedHover((_opts_hoverDelegate = opts.hoverDelegate) !== null && _opts_hoverDelegate !== void 0 ? _opts_hoverDelegate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('mouse'), this.domNode, this._opts.title));
        this.domNode.classList.add(...classes);
        if (!this._opts.notFocusable) {
            this.domNode.tabIndex = 0;
        }
        this.domNode.setAttribute('role', 'checkbox');
        this.domNode.setAttribute('aria-checked', String(this._checked));
        this.domNode.setAttribute('aria-label', this._opts.title);
        this.applyStyles();
        this.onclick(this.domNode, (ev)=>{
            if (this.enabled) {
                this.checked = !this._checked;
                this._onChange.fire(false);
                ev.preventDefault();
            }
        });
        this._register(this.ignoreGesture(this.domNode));
        this.onkeydown(this.domNode, (keyboardEvent)=>{
            if (keyboardEvent.keyCode === 10 /* KeyCode.Space */  || keyboardEvent.keyCode === 3 /* KeyCode.Enter */ ) {
                this.checked = !this._checked;
                this._onChange.fire(true);
                keyboardEvent.preventDefault();
                keyboardEvent.stopPropagation();
                return;
            }
            this._onKeyDown.fire(keyboardEvent);
        });
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/button/button.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Button": ()=>Button,
    "unthemedButtonStyles": ()=>unthemedButtonStyles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dompurify$2f$dompurify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dompurify/dompurify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/markdownRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/touch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabels.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/themables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegate2.js [app-client] (ecmascript)");
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
const unthemedButtonStyles = {
    buttonBackground: '#0E639C',
    buttonHoverBackground: '#006BB3',
    buttonSeparator: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"].white.toString(),
    buttonForeground: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"].white.toString(),
    buttonBorder: undefined,
    buttonSecondaryBackground: undefined,
    buttonSecondaryForeground: undefined,
    buttonSecondaryHoverBackground: undefined
};
class Button extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get onDidClick() {
        return this._onDidClick.event;
    }
    dispose() {
        super.dispose();
        this._element.remove();
    }
    getContentElements(content) {
        const elements = [];
        for (let segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderLabelWithIcons"])(content)){
            if (typeof segment === 'string') {
                segment = segment.trim();
                // Ignore empty segment
                if (segment === '') {
                    continue;
                }
                // Convert string segments to <span> nodes
                const node = document.createElement('span');
                node.textContent = segment;
                elements.push(node);
            } else {
                elements.push(segment);
            }
        }
        return elements;
    }
    updateBackground(hover) {
        let background;
        if (this.options.secondary) {
            background = hover ? this.options.buttonSecondaryHoverBackground : this.options.buttonSecondaryBackground;
        } else {
            background = hover ? this.options.buttonHoverBackground : this.options.buttonBackground;
        }
        if (background) {
            this._element.style.backgroundColor = background;
        }
    }
    get element() {
        return this._element;
    }
    set label(value) {
        if (this._label === value) {
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMarkdownString"])(this._label) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMarkdownString"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markdownStringEqual"])(this._label, value)) {
            return;
        }
        this._element.classList.add('monaco-text-button');
        const labelElement = this.options.supportShortLabel ? this._labelElement : this._element;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$htmlContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMarkdownString"])(value)) {
            var _rendered_element_querySelector;
            const rendered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMarkdown"])(value, {
                inline: true
            });
            rendered.dispose();
            // Don't include outer `<p>`
            const root = (_rendered_element_querySelector = rendered.element.querySelector('p')) === null || _rendered_element_querySelector === void 0 ? void 0 : _rendered_element_querySelector.innerHTML;
            if (root) {
                // Only allow a very limited set of inline html tags
                const sanitized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dompurify$2f$dompurify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitize"])(root, {
                    ADD_TAGS: [
                        'b',
                        'i',
                        'u',
                        'code',
                        'span'
                    ],
                    ALLOWED_ATTR: [
                        'class'
                    ],
                    RETURN_TRUSTED_TYPE: true
                });
                labelElement.innerHTML = sanitized;
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reset"])(labelElement);
            }
        } else {
            if (this.options.supportIcons) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reset"])(labelElement, ...this.getContentElements(value));
            } else {
                labelElement.textContent = value;
            }
        }
        let title = '';
        if (typeof this.options.title === 'string') {
            title = this.options.title;
        } else if (this.options.title) {
            title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$markdownRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderStringAsPlaintext"])(value);
        }
        this.setTitle(title);
        if (typeof this.options.ariaLabel === 'string') {
            this._element.setAttribute('aria-label', this.options.ariaLabel);
        } else if (this.options.ariaLabel) {
            this._element.setAttribute('aria-label', title);
        }
        this._label = value;
    }
    get label() {
        return this._label;
    }
    set icon(icon) {
        this._element.classList.add(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassNameArray(icon));
    }
    set enabled(value) {
        if (value) {
            this._element.classList.remove('disabled');
            this._element.setAttribute('aria-disabled', String(false));
            this._element.tabIndex = 0;
        } else {
            this._element.classList.add('disabled');
            this._element.setAttribute('aria-disabled', String(true));
        }
    }
    get enabled() {
        return !this._element.classList.contains('disabled');
    }
    setTitle(title) {
        if (!this._hover && title !== '') {
            var _this_options_hoverDelegate;
            this._hover = this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLayerHoverDelegate"])().setupManagedHover((_this_options_hoverDelegate = this.options.hoverDelegate) !== null && _this_options_hoverDelegate !== void 0 ? _this_options_hoverDelegate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('mouse'), this._element, title));
        } else if (this._hover) {
            this._hover.update(title);
        }
    }
    constructor(container, options){
        super();
        this._label = '';
        this._onDidClick = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onDidEscape = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.options = options;
        this._element = document.createElement('a');
        this._element.classList.add('monaco-button');
        this._element.tabIndex = 0;
        this._element.setAttribute('role', 'button');
        this._element.classList.toggle('secondary', !!options.secondary);
        const background = options.secondary ? options.buttonSecondaryBackground : options.buttonBackground;
        const foreground = options.secondary ? options.buttonSecondaryForeground : options.buttonForeground;
        this._element.style.color = foreground || '';
        this._element.style.backgroundColor = background || '';
        if (options.supportShortLabel) {
            this._labelShortElement = document.createElement('div');
            this._labelShortElement.classList.add('monaco-button-label-short');
            this._element.appendChild(this._labelShortElement);
            this._labelElement = document.createElement('div');
            this._labelElement.classList.add('monaco-button-label');
            this._element.appendChild(this._labelElement);
            this._element.classList.add('monaco-text-button-with-short-label');
        }
        if (typeof options.title === 'string') {
            this.setTitle(options.title);
        }
        if (typeof options.ariaLabel === 'string') {
            this._element.setAttribute('aria-label', options.ariaLabel);
        }
        container.appendChild(this._element);
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gesture"].addTarget(this._element));
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].CLICK,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Tap
        ].forEach((eventType)=>{
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this._element, eventType, (e)=>{
                if (!this.enabled) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e);
                    return;
                }
                this._onDidClick.fire(e);
            }));
        });
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this._element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].KEY_DOWN, (e)=>{
            const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e);
            let eventHandled = false;
            if (this.enabled && (event.equals(3 /* KeyCode.Enter */ ) || event.equals(10 /* KeyCode.Space */ ))) {
                this._onDidClick.fire(e);
                eventHandled = true;
            } else if (event.equals(9 /* KeyCode.Escape */ )) {
                this._onDidEscape.fire(e);
                this._element.blur();
                eventHandled = true;
            }
            if (eventHandled) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(event, true);
            }
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this._element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_OVER, (e)=>{
            if (!this._element.classList.contains('disabled')) {
                this.updateBackground(true);
            }
        }));
        this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this._element, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].MOUSE_OUT, (e)=>{
            this.updateBackground(false); // restore standard styles
        }));
        // Also set hover background when button is focused for feedback
        this.focusTracker = this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackFocus"])(this._element));
        this._register(this.focusTracker.onDidFocus(()=>{
            if (this.enabled) {
                this.updateBackground(true);
            }
        }));
        this._register(this.focusTracker.onDidBlur(()=>{
            if (this.enabled) {
                this.updateBackground(false);
            }
        }));
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/countBadge/countBadge.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "CountBadge": ()=>CountBadge
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/strings.js [app-client] (ecmascript)");
;
;
;
class CountBadge {
    setCount(count) {
        this.count = count;
        this.render();
    }
    setTitleFormat(titleFormat) {
        this.titleFormat = titleFormat;
        this.render();
    }
    render() {
        this.element.textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])(this.countFormat, this.count);
        this.element.title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])(this.titleFormat, this.count);
        var _this_styles_badgeBackground;
        this.element.style.backgroundColor = (_this_styles_badgeBackground = this.styles.badgeBackground) !== null && _this_styles_badgeBackground !== void 0 ? _this_styles_badgeBackground : '';
        var _this_styles_badgeForeground;
        this.element.style.color = (_this_styles_badgeForeground = this.styles.badgeForeground) !== null && _this_styles_badgeForeground !== void 0 ? _this_styles_badgeForeground : '';
        if (this.styles.badgeBorder) {
            this.element.style.border = "1px solid ".concat(this.styles.badgeBorder);
        }
    }
    constructor(container, options, styles){
        this.options = options;
        this.styles = styles;
        this.count = 0;
        this.element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.monaco-count-badge'));
        this.countFormat = this.options.countFormat || '{0}';
        this.titleFormat = this.options.titleFormat || '';
        this.setCount(this.options.count || 0);
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/progressbar/progressbar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ProgressBar": ()=>ProgressBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
;
;
;
;
const CSS_DONE = 'done';
const CSS_ACTIVE = 'active';
const CSS_INFINITE = 'infinite';
const CSS_INFINITE_LONG_RUNNING = 'infinite-long-running';
const CSS_DISCRETE = 'discrete';
class ProgressBar extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    create(container, options) {
        this.element = document.createElement('div');
        this.element.classList.add('monaco-progress-container');
        this.element.setAttribute('role', 'progressbar');
        this.element.setAttribute('aria-valuemin', '0');
        container.appendChild(this.element);
        this.bit = document.createElement('div');
        this.bit.classList.add('progress-bit');
        this.bit.style.backgroundColor = (options === null || options === void 0 ? void 0 : options.progressBarBackground) || '#0E70C0';
        this.element.appendChild(this.bit);
    }
    off() {
        this.bit.style.width = 'inherit';
        this.bit.style.opacity = '1';
        this.element.classList.remove(CSS_ACTIVE, CSS_INFINITE, CSS_INFINITE_LONG_RUNNING, CSS_DISCRETE);
        this.workedVal = 0;
        this.totalWork = undefined;
        this.longRunningScheduler.cancel();
        this.progressSignal.clear();
    }
    /**
     * Stops the progressbar from showing any progress instantly without fading out.
     */ stop() {
        return this.doDone(false);
    }
    doDone(delayed) {
        this.element.classList.add(CSS_DONE);
        // discrete: let it grow to 100% width and hide afterwards
        if (!this.element.classList.contains(CSS_INFINITE)) {
            this.bit.style.width = 'inherit';
            if (delayed) {
                setTimeout(()=>this.off(), 200);
            } else {
                this.off();
            }
        } else {
            this.bit.style.opacity = '0';
            if (delayed) {
                setTimeout(()=>this.off(), 200);
            } else {
                this.off();
            }
        }
        return this;
    }
    /**
     * Use this mode to indicate progress that has no total number of work units.
     */ infinite() {
        this.bit.style.width = '2%';
        this.bit.style.opacity = '1';
        this.element.classList.remove(CSS_DISCRETE, CSS_DONE, CSS_INFINITE_LONG_RUNNING);
        this.element.classList.add(CSS_ACTIVE, CSS_INFINITE);
        this.longRunningScheduler.schedule();
        return this;
    }
    infiniteLongRunning() {
        this.element.classList.add(CSS_INFINITE_LONG_RUNNING);
    }
    getContainer() {
        return this.element;
    }
    constructor(container, options){
        super();
        this.progressSignal = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutableDisposable"]());
        this.workedVal = 0;
        this.showDelayedScheduler = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunOnceScheduler"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(this.element), 0));
        this.longRunningScheduler = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RunOnceScheduler"](()=>this.infiniteLongRunning(), ProgressBar.LONG_RUNNING_INFINITE_THRESHOLD));
        this.create(container, options);
    }
}
ProgressBar.LONG_RUNNING_INFINITE_THRESHOLD = 10000;
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInputToggles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "CaseSensitiveToggle": ()=>CaseSensitiveToggle,
    "RegexToggle": ()=>RegexToggle,
    "WholeWordsToggle": ()=>WholeWordsToggle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$toggle$2f$toggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/toggle/toggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/codicons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
;
;
;
;
const NLS_CASE_SENSITIVE_TOGGLE_LABEL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('caseDescription', "Match Case");
const NLS_WHOLE_WORD_TOGGLE_LABEL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('wordsDescription', "Match Whole Word");
const NLS_REGEX_TOGGLE_LABEL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('regexDescription', "Use Regular Expression");
class CaseSensitiveToggle extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$toggle$2f$toggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"] {
    constructor(opts){
        var _opts_hoverDelegate;
        super({
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].caseSensitive,
            title: NLS_CASE_SENSITIVE_TOGGLE_LABEL + opts.appendTitle,
            isChecked: opts.isChecked,
            hoverDelegate: (_opts_hoverDelegate = opts.hoverDelegate) !== null && _opts_hoverDelegate !== void 0 ? _opts_hoverDelegate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('element'),
            inputActiveOptionBorder: opts.inputActiveOptionBorder,
            inputActiveOptionForeground: opts.inputActiveOptionForeground,
            inputActiveOptionBackground: opts.inputActiveOptionBackground
        });
    }
}
class WholeWordsToggle extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$toggle$2f$toggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"] {
    constructor(opts){
        var _opts_hoverDelegate;
        super({
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].wholeWord,
            title: NLS_WHOLE_WORD_TOGGLE_LABEL + opts.appendTitle,
            isChecked: opts.isChecked,
            hoverDelegate: (_opts_hoverDelegate = opts.hoverDelegate) !== null && _opts_hoverDelegate !== void 0 ? _opts_hoverDelegate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('element'),
            inputActiveOptionBorder: opts.inputActiveOptionBorder,
            inputActiveOptionForeground: opts.inputActiveOptionForeground,
            inputActiveOptionBackground: opts.inputActiveOptionBackground
        });
    }
}
class RegexToggle extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$toggle$2f$toggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"] {
    constructor(opts){
        var _opts_hoverDelegate;
        super({
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].regex,
            title: NLS_REGEX_TOGGLE_LABEL + opts.appendTitle,
            isChecked: opts.isChecked,
            hoverDelegate: (_opts_hoverDelegate = opts.hoverDelegate) !== null && _opts_hoverDelegate !== void 0 ? _opts_hoverDelegate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('element'),
            inputActiveOptionBorder: opts.inputActiveOptionBorder,
            inputActiveOptionForeground: opts.inputActiveOptionForeground,
            inputActiveOptionBackground: opts.inputActiveOptionBackground
        });
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInput.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "FindInput": ()=>FindInput
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$findinput$2f$findInputToggles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInputToggles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$inputbox$2f$inputBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/inputbox/inputBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const NLS_DEFAULT_LABEL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('defaultLabel', "input");
class FindInput extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Widget"] {
    get onDidChange() {
        return this.inputBox.onDidChange;
    }
    layout(style) {
        this.inputBox.layout();
        this.updateInputBoxPadding(style.collapsedFindWidget);
    }
    enable() {
        var _this_regex, _this_wholeWords, _this_caseSensitive;
        this.domNode.classList.remove('disabled');
        this.inputBox.enable();
        (_this_regex = this.regex) === null || _this_regex === void 0 ? void 0 : _this_regex.enable();
        (_this_wholeWords = this.wholeWords) === null || _this_wholeWords === void 0 ? void 0 : _this_wholeWords.enable();
        (_this_caseSensitive = this.caseSensitive) === null || _this_caseSensitive === void 0 ? void 0 : _this_caseSensitive.enable();
        for (const toggle of this.additionalToggles){
            toggle.enable();
        }
    }
    disable() {
        var _this_regex, _this_wholeWords, _this_caseSensitive;
        this.domNode.classList.add('disabled');
        this.inputBox.disable();
        (_this_regex = this.regex) === null || _this_regex === void 0 ? void 0 : _this_regex.disable();
        (_this_wholeWords = this.wholeWords) === null || _this_wholeWords === void 0 ? void 0 : _this_wholeWords.disable();
        (_this_caseSensitive = this.caseSensitive) === null || _this_caseSensitive === void 0 ? void 0 : _this_caseSensitive.disable();
        for (const toggle of this.additionalToggles){
            toggle.disable();
        }
    }
    setFocusInputOnOptionClick(value) {
        this.fixFocusOnOptionClickEnabled = value;
    }
    setEnabled(enabled) {
        if (enabled) {
            this.enable();
        } else {
            this.disable();
        }
    }
    setAdditionalToggles(toggles) {
        for (const currentToggle of this.additionalToggles){
            currentToggle.domNode.remove();
        }
        this.additionalToggles = [];
        this.additionalTogglesDisposables.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        for (const toggle of toggles !== null && toggles !== void 0 ? toggles : []){
            this.additionalTogglesDisposables.value.add(toggle);
            this.controls.appendChild(toggle.domNode);
            this.additionalTogglesDisposables.value.add(toggle.onChange((viaKeyboard)=>{
                this._onDidOptionChange.fire(viaKeyboard);
                if (!viaKeyboard && this.fixFocusOnOptionClickEnabled) {
                    this.inputBox.focus();
                }
            }));
            this.additionalToggles.push(toggle);
        }
        if (this.additionalToggles.length > 0) {
            this.controls.style.display = '';
        }
        this.updateInputBoxPadding();
    }
    updateInputBoxPadding() {
        let controlsHidden = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (controlsHidden) {
            this.inputBox.paddingRight = 0;
        } else {
            var _this_caseSensitive, _this_wholeWords, _this_regex;
            var _this_caseSensitive_width, _this_wholeWords_width, _this_regex_width;
            this.inputBox.paddingRight = ((_this_caseSensitive_width = (_this_caseSensitive = this.caseSensitive) === null || _this_caseSensitive === void 0 ? void 0 : _this_caseSensitive.width()) !== null && _this_caseSensitive_width !== void 0 ? _this_caseSensitive_width : 0) + ((_this_wholeWords_width = (_this_wholeWords = this.wholeWords) === null || _this_wholeWords === void 0 ? void 0 : _this_wholeWords.width()) !== null && _this_wholeWords_width !== void 0 ? _this_wholeWords_width : 0) + ((_this_regex_width = (_this_regex = this.regex) === null || _this_regex === void 0 ? void 0 : _this_regex.width()) !== null && _this_regex_width !== void 0 ? _this_regex_width : 0) + this.additionalToggles.reduce((r, t)=>r + t.width(), 0);
        }
    }
    getValue() {
        return this.inputBox.value;
    }
    setValue(value) {
        if (this.inputBox.value !== value) {
            this.inputBox.value = value;
        }
    }
    select() {
        this.inputBox.select();
    }
    focus() {
        this.inputBox.focus();
    }
    getCaseSensitive() {
        var _this_caseSensitive;
        var _this_caseSensitive_checked;
        return (_this_caseSensitive_checked = (_this_caseSensitive = this.caseSensitive) === null || _this_caseSensitive === void 0 ? void 0 : _this_caseSensitive.checked) !== null && _this_caseSensitive_checked !== void 0 ? _this_caseSensitive_checked : false;
    }
    setCaseSensitive(value) {
        if (this.caseSensitive) {
            this.caseSensitive.checked = value;
        }
    }
    getWholeWords() {
        var _this_wholeWords;
        var _this_wholeWords_checked;
        return (_this_wholeWords_checked = (_this_wholeWords = this.wholeWords) === null || _this_wholeWords === void 0 ? void 0 : _this_wholeWords.checked) !== null && _this_wholeWords_checked !== void 0 ? _this_wholeWords_checked : false;
    }
    setWholeWords(value) {
        if (this.wholeWords) {
            this.wholeWords.checked = value;
        }
    }
    getRegex() {
        var _this_regex;
        var _this_regex_checked;
        return (_this_regex_checked = (_this_regex = this.regex) === null || _this_regex === void 0 ? void 0 : _this_regex.checked) !== null && _this_regex_checked !== void 0 ? _this_regex_checked : false;
    }
    setRegex(value) {
        if (this.regex) {
            this.regex.checked = value;
            this.validate();
        }
    }
    focusOnCaseSensitive() {
        var _this_caseSensitive;
        (_this_caseSensitive = this.caseSensitive) === null || _this_caseSensitive === void 0 ? void 0 : _this_caseSensitive.focus();
    }
    highlightFindOptions() {
        this.domNode.classList.remove('highlight-' + this._lastHighlightFindOptions);
        this._lastHighlightFindOptions = 1 - this._lastHighlightFindOptions;
        this.domNode.classList.add('highlight-' + this._lastHighlightFindOptions);
    }
    validate() {
        this.inputBox.validate();
    }
    showMessage(message) {
        this.inputBox.showMessage(message);
    }
    clearMessage() {
        this.inputBox.hideMessage();
    }
    constructor(parent, contextViewProvider, options){
        super();
        this.fixFocusOnOptionClickEnabled = true;
        this.imeSessionInProgress = false;
        this.additionalTogglesDisposables = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutableDisposable"]());
        this.additionalToggles = [];
        this._onDidOptionChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidOptionChange = this._onDidOptionChange.event;
        this._onKeyDown = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onKeyDown = this._onKeyDown.event;
        this._onMouseDown = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onMouseDown = this._onMouseDown.event;
        this._onInput = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onKeyUp = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onCaseSensitiveKeyDown = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onCaseSensitiveKeyDown = this._onCaseSensitiveKeyDown.event;
        this._onRegexKeyDown = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onRegexKeyDown = this._onRegexKeyDown.event;
        this._lastHighlightFindOptions = 0;
        this.placeholder = options.placeholder || '';
        this.validation = options.validation;
        this.label = options.label || NLS_DEFAULT_LABEL;
        this.showCommonFindToggles = !!options.showCommonFindToggles;
        const appendCaseSensitiveLabel = options.appendCaseSensitiveLabel || '';
        const appendWholeWordsLabel = options.appendWholeWordsLabel || '';
        const appendRegexLabel = options.appendRegexLabel || '';
        const history = options.history || [];
        const flexibleHeight = !!options.flexibleHeight;
        const flexibleWidth = !!options.flexibleWidth;
        const flexibleMaxHeight = options.flexibleMaxHeight;
        this.domNode = document.createElement('div');
        this.domNode.classList.add('monaco-findInput');
        this.inputBox = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$inputbox$2f$inputBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HistoryInputBox"](this.domNode, contextViewProvider, {
            placeholder: this.placeholder || '',
            ariaLabel: this.label || '',
            validationOptions: {
                validation: this.validation
            },
            history,
            showHistoryHint: options.showHistoryHint,
            flexibleHeight,
            flexibleWidth,
            flexibleMaxHeight,
            inputBoxStyles: options.inputBoxStyles
        }));
        const hoverDelegate = this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInstantHoverDelegate"])());
        if (this.showCommonFindToggles) {
            this.regex = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$findinput$2f$findInputToggles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegexToggle"]({
                appendTitle: appendRegexLabel,
                isChecked: false,
                hoverDelegate,
                ...options.toggleStyles
            }));
            this._register(this.regex.onChange((viaKeyboard)=>{
                this._onDidOptionChange.fire(viaKeyboard);
                if (!viaKeyboard && this.fixFocusOnOptionClickEnabled) {
                    this.inputBox.focus();
                }
                this.validate();
            }));
            this._register(this.regex.onKeyDown((e)=>{
                this._onRegexKeyDown.fire(e);
            }));
            this.wholeWords = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$findinput$2f$findInputToggles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WholeWordsToggle"]({
                appendTitle: appendWholeWordsLabel,
                isChecked: false,
                hoverDelegate,
                ...options.toggleStyles
            }));
            this._register(this.wholeWords.onChange((viaKeyboard)=>{
                this._onDidOptionChange.fire(viaKeyboard);
                if (!viaKeyboard && this.fixFocusOnOptionClickEnabled) {
                    this.inputBox.focus();
                }
                this.validate();
            }));
            this.caseSensitive = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$findinput$2f$findInputToggles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaseSensitiveToggle"]({
                appendTitle: appendCaseSensitiveLabel,
                isChecked: false,
                hoverDelegate,
                ...options.toggleStyles
            }));
            this._register(this.caseSensitive.onChange((viaKeyboard)=>{
                this._onDidOptionChange.fire(viaKeyboard);
                if (!viaKeyboard && this.fixFocusOnOptionClickEnabled) {
                    this.inputBox.focus();
                }
                this.validate();
            }));
            this._register(this.caseSensitive.onKeyDown((e)=>{
                this._onCaseSensitiveKeyDown.fire(e);
            }));
            // Arrow-Key support to navigate between options
            const indexes = [
                this.caseSensitive.domNode,
                this.wholeWords.domNode,
                this.regex.domNode
            ];
            this.onkeydown(this.domNode, (event)=>{
                if (event.equals(15 /* KeyCode.LeftArrow */ ) || event.equals(17 /* KeyCode.RightArrow */ ) || event.equals(9 /* KeyCode.Escape */ )) {
                    const index = indexes.indexOf(this.domNode.ownerDocument.activeElement);
                    if (index >= 0) {
                        let newIndex = -1;
                        if (event.equals(17 /* KeyCode.RightArrow */ )) {
                            newIndex = (index + 1) % indexes.length;
                        } else if (event.equals(15 /* KeyCode.LeftArrow */ )) {
                            if (index === 0) {
                                newIndex = indexes.length - 1;
                            } else {
                                newIndex = index - 1;
                            }
                        }
                        if (event.equals(9 /* KeyCode.Escape */ )) {
                            indexes[index].blur();
                            this.inputBox.focus();
                        } else if (newIndex >= 0) {
                            indexes[newIndex].focus();
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(event, true);
                    }
                }
            });
        }
        this.controls = document.createElement('div');
        this.controls.className = 'controls';
        this.controls.style.display = this.showCommonFindToggles ? '' : 'none';
        if (this.caseSensitive) {
            this.controls.append(this.caseSensitive.domNode);
        }
        if (this.wholeWords) {
            this.controls.appendChild(this.wholeWords.domNode);
        }
        if (this.regex) {
            this.controls.appendChild(this.regex.domNode);
        }
        this.setAdditionalToggles(options === null || options === void 0 ? void 0 : options.additionalToggles);
        if (this.controls) {
            this.domNode.appendChild(this.controls);
        }
        parent === null || parent === void 0 ? void 0 : parent.appendChild(this.domNode);
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.inputBox.inputElement, 'compositionstart', (e)=>{
            this.imeSessionInProgress = true;
        }));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"](this.inputBox.inputElement, 'compositionend', (e)=>{
            this.imeSessionInProgress = false;
            this._onInput.fire();
        }));
        this.onkeydown(this.inputBox.inputElement, (e)=>this._onKeyDown.fire(e));
        this.onkeyup(this.inputBox.inputElement, (e)=>this._onKeyUp.fire(e));
        this.oninput(this.inputBox.inputElement, (e)=>this._onInput.fire());
        this.onmousedown(this.inputBox.inputElement, (e)=>this._onMouseDown.fire(e));
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/replaceInput.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ReplaceInput": ()=>ReplaceInput
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$toggle$2f$toggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/toggle/toggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$inputbox$2f$inputBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/inputbox/inputBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/codicons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const NLS_DEFAULT_LABEL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('defaultLabel', "input");
const NLS_PRESERVE_CASE_LABEL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('label.preserveCaseToggle', "Preserve Case");
class PreserveCaseToggle extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$toggle$2f$toggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"] {
    constructor(opts){
        var _opts_hoverDelegate;
        super({
            // TODO: does this need its own icon?
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].preserveCase,
            title: NLS_PRESERVE_CASE_LABEL + opts.appendTitle,
            isChecked: opts.isChecked,
            hoverDelegate: (_opts_hoverDelegate = opts.hoverDelegate) !== null && _opts_hoverDelegate !== void 0 ? _opts_hoverDelegate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('element'),
            inputActiveOptionBorder: opts.inputActiveOptionBorder,
            inputActiveOptionForeground: opts.inputActiveOptionForeground,
            inputActiveOptionBackground: opts.inputActiveOptionBackground
        });
    }
}
class ReplaceInput extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Widget"] {
    enable() {
        this.domNode.classList.remove('disabled');
        this.inputBox.enable();
        this.preserveCase.enable();
    }
    disable() {
        this.domNode.classList.add('disabled');
        this.inputBox.disable();
        this.preserveCase.disable();
    }
    setEnabled(enabled) {
        if (enabled) {
            this.enable();
        } else {
            this.disable();
        }
    }
    select() {
        this.inputBox.select();
    }
    focus() {
        this.inputBox.focus();
    }
    getPreserveCase() {
        return this.preserveCase.checked;
    }
    setPreserveCase(value) {
        this.preserveCase.checked = value;
    }
    focusOnPreserve() {
        this.preserveCase.focus();
    }
    validate() {
        var _this_inputBox;
        (_this_inputBox = this.inputBox) === null || _this_inputBox === void 0 ? void 0 : _this_inputBox.validate();
    }
    set width(newWidth) {
        this.inputBox.paddingRight = this.cachedOptionsWidth;
        this.domNode.style.width = newWidth + 'px';
    }
    dispose() {
        super.dispose();
    }
    constructor(parent, contextViewProvider, _showOptionButtons, options){
        super();
        this._showOptionButtons = _showOptionButtons;
        this.fixFocusOnOptionClickEnabled = true;
        this.cachedOptionsWidth = 0;
        this._onDidOptionChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidOptionChange = this._onDidOptionChange.event;
        this._onKeyDown = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onKeyDown = this._onKeyDown.event;
        this._onMouseDown = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onInput = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onKeyUp = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onPreserveCaseKeyDown = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onPreserveCaseKeyDown = this._onPreserveCaseKeyDown.event;
        this.contextViewProvider = contextViewProvider;
        this.placeholder = options.placeholder || '';
        this.validation = options.validation;
        this.label = options.label || NLS_DEFAULT_LABEL;
        const appendPreserveCaseLabel = options.appendPreserveCaseLabel || '';
        const history = options.history || [];
        const flexibleHeight = !!options.flexibleHeight;
        const flexibleWidth = !!options.flexibleWidth;
        const flexibleMaxHeight = options.flexibleMaxHeight;
        this.domNode = document.createElement('div');
        this.domNode.classList.add('monaco-findInput');
        this.inputBox = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$inputbox$2f$inputBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HistoryInputBox"](this.domNode, this.contextViewProvider, {
            ariaLabel: this.label || '',
            placeholder: this.placeholder || '',
            validationOptions: {
                validation: this.validation
            },
            history,
            showHistoryHint: options.showHistoryHint,
            flexibleHeight,
            flexibleWidth,
            flexibleMaxHeight,
            inputBoxStyles: options.inputBoxStyles
        }));
        this.preserveCase = this._register(new PreserveCaseToggle({
            appendTitle: appendPreserveCaseLabel,
            isChecked: false,
            ...options.toggleStyles
        }));
        this._register(this.preserveCase.onChange((viaKeyboard)=>{
            this._onDidOptionChange.fire(viaKeyboard);
            if (!viaKeyboard && this.fixFocusOnOptionClickEnabled) {
                this.inputBox.focus();
            }
            this.validate();
        }));
        this._register(this.preserveCase.onKeyDown((e)=>{
            this._onPreserveCaseKeyDown.fire(e);
        }));
        if (this._showOptionButtons) {
            this.cachedOptionsWidth = this.preserveCase.width();
        } else {
            this.cachedOptionsWidth = 0;
        }
        // Arrow-Key support to navigate between options
        const indexes = [
            this.preserveCase.domNode
        ];
        this.onkeydown(this.domNode, (event)=>{
            if (event.equals(15 /* KeyCode.LeftArrow */ ) || event.equals(17 /* KeyCode.RightArrow */ ) || event.equals(9 /* KeyCode.Escape */ )) {
                const index = indexes.indexOf(this.domNode.ownerDocument.activeElement);
                if (index >= 0) {
                    let newIndex = -1;
                    if (event.equals(17 /* KeyCode.RightArrow */ )) {
                        newIndex = (index + 1) % indexes.length;
                    } else if (event.equals(15 /* KeyCode.LeftArrow */ )) {
                        if (index === 0) {
                            newIndex = indexes.length - 1;
                        } else {
                            newIndex = index - 1;
                        }
                    }
                    if (event.equals(9 /* KeyCode.Escape */ )) {
                        indexes[index].blur();
                        this.inputBox.focus();
                    } else if (newIndex >= 0) {
                        indexes[newIndex].focus();
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(event, true);
                }
            }
        });
        const controls = document.createElement('div');
        controls.className = 'controls';
        controls.style.display = this._showOptionButtons ? 'block' : 'none';
        controls.appendChild(this.preserveCase.domNode);
        this.domNode.appendChild(controls);
        parent === null || parent === void 0 ? void 0 : parent.appendChild(this.domNode);
        this.onkeydown(this.inputBox.inputElement, (e)=>this._onKeyDown.fire(e));
        this.onkeyup(this.inputBox.inputElement, (e)=>this._onKeyUp.fire(e));
        this.oninput(this.inputBox.inputElement, (e)=>this._onInput.fire());
        this.onmousedown(this.inputBox.inputElement, (e)=>this._onMouseDown.fire(e));
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/inputbox/inputBox.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "HistoryInputBox": ()=>HistoryInputBox,
    "InputBox": ()=>InputBox,
    "unthemedInboxStyles": ()=>unthemedInboxStyles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$formattedTextRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/formattedTextRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegate2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/history.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
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
const $ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"];
const unthemedInboxStyles = {
    inputBackground: '#3C3C3C',
    inputForeground: '#CCCCCC',
    inputValidationInfoBorder: '#55AAFF',
    inputValidationInfoBackground: '#063B49',
    inputValidationWarningBorder: '#B89500',
    inputValidationWarningBackground: '#352A05',
    inputValidationErrorBorder: '#BE1100',
    inputValidationErrorBackground: '#5A1D1D',
    inputBorder: undefined,
    inputValidationErrorForeground: undefined,
    inputValidationInfoForeground: undefined,
    inputValidationWarningForeground: undefined
};
class InputBox extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$widget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Widget"] {
    onBlur() {
        this._hideMessage();
        if (this.options.showPlaceholderOnFocus) {
            this.input.setAttribute('placeholder', '');
        }
    }
    onFocus() {
        this._showMessage();
        if (this.options.showPlaceholderOnFocus) {
            this.input.setAttribute('placeholder', this.placeholder || '');
        }
    }
    setPlaceHolder(placeHolder) {
        this.placeholder = placeHolder;
        this.input.setAttribute('placeholder', placeHolder);
    }
    setTooltip(tooltip) {
        this.tooltip = tooltip;
        if (!this.hover) {
            this.hover = this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLayerHoverDelegate"])().setupManagedHover((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('mouse'), this.input, tooltip));
        } else {
            this.hover.update(tooltip);
        }
    }
    get inputElement() {
        return this.input;
    }
    get value() {
        return this.input.value;
    }
    set value(newValue) {
        if (this.input.value !== newValue) {
            this.input.value = newValue;
            this.onValueChange();
        }
    }
    get height() {
        return typeof this.cachedHeight === 'number' ? this.cachedHeight : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalHeight"](this.element);
    }
    focus() {
        this.input.focus();
    }
    blur() {
        this.input.blur();
    }
    hasFocus() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActiveElement"](this.input);
    }
    select() {
        let range = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        this.input.select();
        if (range) {
            this.input.setSelectionRange(range.start, range.end);
            if (range.end === this.input.value.length) {
                this.input.scrollLeft = this.input.scrollWidth;
            }
        }
    }
    isSelectionAtEnd() {
        return this.input.selectionEnd === this.input.value.length && this.input.selectionStart === this.input.selectionEnd;
    }
    getSelection() {
        const selectionStart = this.input.selectionStart;
        if (selectionStart === null) {
            return null;
        }
        var _this_input_selectionEnd;
        const selectionEnd = (_this_input_selectionEnd = this.input.selectionEnd) !== null && _this_input_selectionEnd !== void 0 ? _this_input_selectionEnd : selectionStart;
        return {
            start: selectionStart,
            end: selectionEnd
        };
    }
    enable() {
        this.input.removeAttribute('disabled');
    }
    disable() {
        this.blur();
        this.input.disabled = true;
        this._hideMessage();
    }
    set paddingRight(paddingRight) {
        // Set width to avoid hint text overlapping buttons
        this.input.style.width = "calc(100% - ".concat(paddingRight, "px)");
        if (this.mirror) {
            this.mirror.style.paddingRight = paddingRight + 'px';
        }
    }
    updateScrollDimensions() {
        if (typeof this.cachedContentHeight !== 'number' || typeof this.cachedHeight !== 'number' || !this.scrollableElement) {
            return;
        }
        const scrollHeight = this.cachedContentHeight;
        const height = this.cachedHeight;
        const scrollTop = this.input.scrollTop;
        this.scrollableElement.setScrollDimensions({
            scrollHeight,
            height
        });
        this.scrollableElement.setScrollPosition({
            scrollTop
        });
    }
    showMessage(message, force) {
        if (this.state === 'open' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"])(this.message, message)) {
            // Already showing
            return;
        }
        this.message = message;
        this.element.classList.remove('idle');
        this.element.classList.remove('info');
        this.element.classList.remove('warning');
        this.element.classList.remove('error');
        this.element.classList.add(this.classForType(message.type));
        const styles = this.stylesForType(this.message.type);
        this.element.style.border = "1px solid ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCssValueWithDefault"](styles.border, 'transparent'));
        if (this.message.content && (this.hasFocus() || force)) {
            this._showMessage();
        }
    }
    hideMessage() {
        this.message = null;
        this.element.classList.remove('info');
        this.element.classList.remove('warning');
        this.element.classList.remove('error');
        this.element.classList.add('idle');
        this._hideMessage();
        this.applyStyles();
    }
    validate() {
        let errorMsg = null;
        if (this.validation) {
            errorMsg = this.validation(this.value);
            if (errorMsg) {
                this.inputElement.setAttribute('aria-invalid', 'true');
                this.showMessage(errorMsg);
            } else if (this.inputElement.hasAttribute('aria-invalid')) {
                this.inputElement.removeAttribute('aria-invalid');
                this.hideMessage();
            }
        }
        return errorMsg === null || errorMsg === void 0 ? void 0 : errorMsg.type;
    }
    stylesForType(type) {
        const styles = this.options.inputBoxStyles;
        switch(type){
            case 1 /* MessageType.INFO */ :
                return {
                    border: styles.inputValidationInfoBorder,
                    background: styles.inputValidationInfoBackground,
                    foreground: styles.inputValidationInfoForeground
                };
            case 2 /* MessageType.WARNING */ :
                return {
                    border: styles.inputValidationWarningBorder,
                    background: styles.inputValidationWarningBackground,
                    foreground: styles.inputValidationWarningForeground
                };
            default:
                return {
                    border: styles.inputValidationErrorBorder,
                    background: styles.inputValidationErrorBackground,
                    foreground: styles.inputValidationErrorForeground
                };
        }
    }
    classForType(type) {
        switch(type){
            case 1 /* MessageType.INFO */ :
                return 'info';
            case 2 /* MessageType.WARNING */ :
                return 'warning';
            default:
                return 'error';
        }
    }
    _showMessage() {
        if (!this.contextViewProvider || !this.message) {
            return;
        }
        let div;
        const layout = ()=>div.style.width = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalWidth"](this.element) + 'px';
        this.contextViewProvider.showContextView({
            getAnchor: ()=>this.element,
            anchorAlignment: 1 /* AnchorAlignment.RIGHT */ ,
            render: (container)=>{
                if (!this.message) {
                    return null;
                }
                div = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](container, $('.monaco-inputbox-container'));
                layout();
                const renderOptions = {
                    inline: true,
                    className: 'monaco-inputbox-message'
                };
                const spanElement = this.message.formatContent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$formattedTextRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderFormattedText"])(this.message.content, renderOptions) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$formattedTextRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderText"])(this.message.content, renderOptions);
                spanElement.classList.add(this.classForType(this.message.type));
                const styles = this.stylesForType(this.message.type);
                var _styles_background;
                spanElement.style.backgroundColor = (_styles_background = styles.background) !== null && _styles_background !== void 0 ? _styles_background : '';
                var _styles_foreground;
                spanElement.style.color = (_styles_foreground = styles.foreground) !== null && _styles_foreground !== void 0 ? _styles_foreground : '';
                spanElement.style.border = styles.border ? "1px solid ".concat(styles.border) : '';
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](div, spanElement);
                return null;
            },
            onHide: ()=>{
                this.state = 'closed';
            },
            layout: layout
        });
        // ARIA Support
        let alertText;
        if (this.message.type === 3 /* MessageType.ERROR */ ) {
            alertText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('alertErrorMessage', "Error: {0}", this.message.content);
        } else if (this.message.type === 2 /* MessageType.WARNING */ ) {
            alertText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('alertWarningMessage', "Warning: {0}", this.message.content);
        } else {
            alertText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('alertInfoMessage', "Info: {0}", this.message.content);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alert"](alertText);
        this.state = 'open';
    }
    _hideMessage() {
        if (!this.contextViewProvider) {
            return;
        }
        if (this.state === 'open') {
            this.contextViewProvider.hideContextView();
        }
        this.state = 'idle';
    }
    onValueChange() {
        this._onDidChange.fire(this.value);
        this.validate();
        this.updateMirror();
        this.input.classList.toggle('empty', !this.value);
        if (this.state === 'open' && this.contextViewProvider) {
            this.contextViewProvider.layout();
        }
    }
    updateMirror() {
        if (!this.mirror) {
            return;
        }
        const value = this.value;
        const lastCharCode = value.charCodeAt(value.length - 1);
        const suffix = lastCharCode === 10 ? ' ' : '';
        const mirrorTextContent = (value + suffix).replace(/\u000c/g, ''); // Don't measure with the form feed character, which messes up sizing
        if (mirrorTextContent) {
            this.mirror.textContent = value + suffix;
        } else {
            this.mirror.innerText = '\u00a0';
        }
        this.layout();
    }
    applyStyles() {
        const styles = this.options.inputBoxStyles;
        var _styles_inputBackground;
        const background = (_styles_inputBackground = styles.inputBackground) !== null && _styles_inputBackground !== void 0 ? _styles_inputBackground : '';
        var _styles_inputForeground;
        const foreground = (_styles_inputForeground = styles.inputForeground) !== null && _styles_inputForeground !== void 0 ? _styles_inputForeground : '';
        var _styles_inputBorder;
        const border = (_styles_inputBorder = styles.inputBorder) !== null && _styles_inputBorder !== void 0 ? _styles_inputBorder : '';
        this.element.style.backgroundColor = background;
        this.element.style.color = foreground;
        this.input.style.backgroundColor = 'inherit';
        this.input.style.color = foreground;
        // there's always a border, even if the color is not set.
        this.element.style.border = "1px solid ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCssValueWithDefault"](border, 'transparent'));
    }
    layout() {
        if (!this.mirror) {
            return;
        }
        const previousHeight = this.cachedContentHeight;
        this.cachedContentHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalHeight"](this.mirror);
        if (previousHeight !== this.cachedContentHeight) {
            this.cachedHeight = Math.min(this.cachedContentHeight, this.maxHeight);
            this.input.style.height = this.cachedHeight + 'px';
            this._onDidHeightChange.fire(this.cachedContentHeight);
        }
    }
    insertAtCursor(text) {
        const inputElement = this.inputElement;
        const start = inputElement.selectionStart;
        const end = inputElement.selectionEnd;
        const content = inputElement.value;
        if (start !== null && end !== null) {
            this.value = content.substr(0, start) + text + content.substr(end);
            inputElement.setSelectionRange(start + 1, start + 1);
            this.layout();
        }
    }
    dispose() {
        var _this_actionbar;
        this._hideMessage();
        this.message = null;
        (_this_actionbar = this.actionbar) === null || _this_actionbar === void 0 ? void 0 : _this_actionbar.dispose();
        super.dispose();
    }
    constructor(container, contextViewProvider, options){
        super();
        this.state = 'idle';
        this.maxHeight = Number.POSITIVE_INFINITY;
        this._onDidChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidChange = this._onDidChange.event;
        this._onDidHeightChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidHeightChange = this._onDidHeightChange.event;
        this.contextViewProvider = contextViewProvider;
        this.options = options;
        this.message = null;
        this.placeholder = this.options.placeholder || '';
        var _this_options_tooltip;
        this.tooltip = (_this_options_tooltip = this.options.tooltip) !== null && _this_options_tooltip !== void 0 ? _this_options_tooltip : this.placeholder || '';
        this.ariaLabel = this.options.ariaLabel || '';
        if (this.options.validationOptions) {
            this.validation = this.options.validationOptions.validation;
        }
        this.element = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](container, $('.monaco-inputbox.idle'));
        const tagName = this.options.flexibleHeight ? 'textarea' : 'input';
        const wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.element, $('.ibwrapper'));
        this.input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](wrapper, $(tagName + '.input.empty'));
        this.input.setAttribute('autocorrect', 'off');
        this.input.setAttribute('autocapitalize', 'off');
        this.input.setAttribute('spellcheck', 'false');
        this.onfocus(this.input, ()=>this.element.classList.add('synthetic-focus'));
        this.onblur(this.input, ()=>this.element.classList.remove('synthetic-focus'));
        if (this.options.flexibleHeight) {
            this.maxHeight = typeof this.options.flexibleMaxHeight === 'number' ? this.options.flexibleMaxHeight : Number.POSITIVE_INFINITY;
            this.mirror = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](wrapper, $('div.mirror'));
            this.mirror.innerText = '\u00a0';
            this.scrollableElement = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollableElement"](this.element, {
                vertical: 1 /* ScrollbarVisibility.Auto */ 
            });
            if (this.options.flexibleWidth) {
                this.input.setAttribute('wrap', 'off');
                this.mirror.style.whiteSpace = 'pre';
                this.mirror.style.wordWrap = 'initial';
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](container, this.scrollableElement.getDomNode());
            this._register(this.scrollableElement);
            // from ScrollableElement to DOM
            this._register(this.scrollableElement.onScroll((e)=>this.input.scrollTop = e.scrollTop));
            const onSelectionChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](container.ownerDocument, 'selectionchange'));
            const onAnchoredSelectionChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].filter(onSelectionChange.event, ()=>{
                const selection = container.ownerDocument.getSelection();
                return (selection === null || selection === void 0 ? void 0 : selection.anchorNode) === wrapper;
            });
            // from DOM to ScrollableElement
            this._register(onAnchoredSelectionChange(this.updateScrollDimensions, this));
            this._register(this.onDidHeightChange(this.updateScrollDimensions, this));
        } else {
            this.input.type = this.options.type || 'text';
            this.input.setAttribute('wrap', 'off');
        }
        if (this.ariaLabel) {
            this.input.setAttribute('aria-label', this.ariaLabel);
        }
        if (this.placeholder && !this.options.showPlaceholderOnFocus) {
            this.setPlaceHolder(this.placeholder);
        }
        if (this.tooltip) {
            this.setTooltip(this.tooltip);
        }
        this.oninput(this.input, ()=>this.onValueChange());
        this.onblur(this.input, ()=>this.onBlur());
        this.onfocus(this.input, ()=>this.onFocus());
        this._register(this.ignoreGesture(this.input));
        setTimeout(()=>this.updateMirror(), 0);
        // Support actions
        if (this.options.actions) {
            this.actionbar = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionBar"](this.element));
            this.actionbar.push(this.options.actions, {
                icon: true,
                label: false
            });
        }
        this.applyStyles();
    }
}
class HistoryInputBox extends InputBox {
    dispose() {
        super.dispose();
        if (this.observer) {
            this.observer.disconnect();
            this.observer = undefined;
        }
    }
    addToHistory(always) {
        if (this.value && (always || this.value !== this.getCurrentValue())) {
            this.history.add(this.value);
        }
    }
    isAtLastInHistory() {
        return this.history.isLast();
    }
    isNowhereInHistory() {
        return this.history.isNowhere();
    }
    showNextValue() {
        if (!this.history.has(this.value)) {
            this.addToHistory();
        }
        let next = this.getNextValue();
        if (next) {
            next = next === this.value ? this.getNextValue() : next;
        }
        this.value = next !== null && next !== void 0 ? next : '';
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["status"](this.value ? this.value : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('clearedInput', "Cleared Input"));
    }
    showPreviousValue() {
        if (!this.history.has(this.value)) {
            this.addToHistory();
        }
        let previous = this.getPreviousValue();
        if (previous) {
            previous = previous === this.value ? this.getPreviousValue() : previous;
        }
        if (previous) {
            this.value = previous;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["status"](this.value);
        }
    }
    setPlaceHolder(placeHolder) {
        super.setPlaceHolder(placeHolder);
        this.setTooltip(placeHolder);
    }
    onBlur() {
        super.onBlur();
        this._onDidBlur.fire();
    }
    onFocus() {
        super.onFocus();
        this._onDidFocus.fire();
    }
    getCurrentValue() {
        let currentValue = this.history.current();
        if (!currentValue) {
            currentValue = this.history.last();
            this.history.next();
        }
        return currentValue;
    }
    getPreviousValue() {
        return this.history.previous() || this.history.first();
    }
    getNextValue() {
        return this.history.next();
    }
    constructor(container, contextViewProvider, options){
        const NLS_PLACEHOLDER_HISTORY_HINT_SUFFIX_NO_PARENS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]({
            key: 'history.inputbox.hint.suffix.noparens',
            comment: [
                'Text is the suffix of an input field placeholder coming after the action the input field performs, this will be used when the input field ends in a closing parenthesis ")", for example "Filter (e.g. text, !exclude)". The character inserted into the final string is \u21C5 to represent the up and down arrow keys.'
            ]
        }, ' or {0} for history', "⇅");
        const NLS_PLACEHOLDER_HISTORY_HINT_SUFFIX_IN_PARENS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]({
            key: 'history.inputbox.hint.suffix.inparens',
            comment: [
                'Text is the suffix of an input field placeholder coming after the action the input field performs, this will be used when the input field does NOT end in a closing parenthesis (eg. "Find"). The character inserted into the final string is \u21C5 to represent the up and down arrow keys.'
            ]
        }, ' ({0} for history)', "⇅");
        super(container, contextViewProvider, options);
        this._onDidFocus = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidFocus = this._onDidFocus.event;
        this._onDidBlur = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.onDidBlur = this._onDidBlur.event;
        this.history = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HistoryNavigator"](options.history, 100);
        // Function to append the history suffix to the placeholder if necessary
        const addSuffix = ()=>{
            if (options.showHistoryHint && options.showHistoryHint() && !this.placeholder.endsWith(NLS_PLACEHOLDER_HISTORY_HINT_SUFFIX_NO_PARENS) && !this.placeholder.endsWith(NLS_PLACEHOLDER_HISTORY_HINT_SUFFIX_IN_PARENS) && this.history.getHistory().length) {
                const suffix = this.placeholder.endsWith(')') ? NLS_PLACEHOLDER_HISTORY_HINT_SUFFIX_NO_PARENS : NLS_PLACEHOLDER_HISTORY_HINT_SUFFIX_IN_PARENS;
                const suffixedPlaceholder = this.placeholder + suffix;
                if (options.showPlaceholderOnFocus && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActiveElement"](this.input)) {
                    this.placeholder = suffixedPlaceholder;
                } else {
                    this.setPlaceHolder(suffixedPlaceholder);
                }
            }
        };
        // Spot the change to the textarea class attribute which occurs when it changes between non-empty and empty,
        // and add the history suffix to the placeholder if not yet present
        this.observer = new MutationObserver((mutationList, observer)=>{
            mutationList.forEach((mutation)=>{
                if (!mutation.target.textContent) {
                    addSuffix();
                }
            });
        });
        this.observer.observe(this.input, {
            attributeFilter: [
                'class'
            ]
        });
        this.onfocus(this.input, ()=>addSuffix());
        this.onblur(this.input, ()=>{
            const resetPlaceholder = (historyHint)=>{
                if (!this.placeholder.endsWith(historyHint)) {
                    return false;
                } else {
                    const revertedPlaceholder = this.placeholder.slice(0, this.placeholder.length - historyHint.length);
                    if (options.showPlaceholderOnFocus) {
                        this.placeholder = revertedPlaceholder;
                    } else {
                        this.setPlaceHolder(revertedPlaceholder);
                    }
                    return true;
                }
            };
            if (!resetPlaceholder(NLS_PLACEHOLDER_HISTORY_HINT_SUFFIX_IN_PARENS)) {
                resetPlaceholder(NLS_PLACEHOLDER_HISTORY_HINT_SUFFIX_NO_PARENS);
            }
        });
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "OrthogonalEdge": ()=>OrthogonalEdge,
    "Sash": ()=>Sash
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/touch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __decorate = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
/**
 * Allow the sashes to be visible at runtime.
 * @remark Use for development purposes only.
 */ const DEBUG = false;
var OrthogonalEdge;
(function(OrthogonalEdge) {
    OrthogonalEdge["North"] = "north";
    OrthogonalEdge["South"] = "south";
    OrthogonalEdge["East"] = "east";
    OrthogonalEdge["West"] = "west";
})(OrthogonalEdge || (OrthogonalEdge = {}));
let globalSize = 4;
const onDidChangeGlobalSize = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
let globalHoverDelay = 300;
const onDidChangeHoverDelay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
class MouseEventFactory {
    get onPointerMove() {
        return this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(this.el), 'mousemove')).event;
    }
    get onPointerUp() {
        return this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(this.el), 'mouseup')).event;
    }
    dispose() {
        this.disposables.dispose();
    }
    constructor(el){
        this.el = el;
        this.disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    }
}
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], MouseEventFactory.prototype, "onPointerMove", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], MouseEventFactory.prototype, "onPointerUp", null);
class GestureEventFactory {
    get onPointerMove() {
        return this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.el, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Change)).event;
    }
    get onPointerUp() {
        return this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.el, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].End)).event;
    }
    dispose() {
        this.disposables.dispose();
    }
    constructor(el){
        this.el = el;
        this.disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
    }
}
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], GestureEventFactory.prototype, "onPointerMove", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], GestureEventFactory.prototype, "onPointerUp", null);
class OrthogonalPointerEventFactory {
    get onPointerMove() {
        return this.factory.onPointerMove;
    }
    get onPointerUp() {
        return this.factory.onPointerUp;
    }
    dispose() {
    // noop
    }
    constructor(factory){
        this.factory = factory;
    }
}
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], OrthogonalPointerEventFactory.prototype, "onPointerMove", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], OrthogonalPointerEventFactory.prototype, "onPointerUp", null);
const PointerEventsDisabledCssClass = 'pointer-events-disabled';
class Sash extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get state() {
        return this._state;
    }
    get orthogonalStartSash() {
        return this._orthogonalStartSash;
    }
    get orthogonalEndSash() {
        return this._orthogonalEndSash;
    }
    /**
     * The state of a sash defines whether it can be interacted with by the user
     * as well as what mouse cursor to use, when hovered.
     */ set state(state) {
        if (this._state === state) {
            return;
        }
        this.el.classList.toggle('disabled', state === 0 /* SashState.Disabled */ );
        this.el.classList.toggle('minimum', state === 1 /* SashState.AtMinimum */ );
        this.el.classList.toggle('maximum', state === 2 /* SashState.AtMaximum */ );
        this._state = state;
        this.onDidEnablementChange.fire(state);
    }
    /**
     * A reference to another sash, perpendicular to this one, which
     * aligns at the start of this one. A corner sash will be created
     * automatically at that location.
     *
     * The start of a horizontal sash is its left-most position.
     * The start of a vertical sash is its top-most position.
     */ set orthogonalStartSash(sash) {
        if (this._orthogonalStartSash === sash) {
            return;
        }
        this.orthogonalStartDragHandleDisposables.clear();
        this.orthogonalStartSashDisposables.clear();
        if (sash) {
            const onChange = (state)=>{
                this.orthogonalStartDragHandleDisposables.clear();
                if (state !== 0 /* SashState.Disabled */ ) {
                    this._orthogonalStartDragHandle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this.el, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.orthogonal-drag-handle.start'));
                    this.orthogonalStartDragHandleDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>this._orthogonalStartDragHandle.remove()));
                    this.orthogonalStartDragHandleDisposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this._orthogonalStartDragHandle, 'mouseenter')).event(()=>Sash.onMouseEnter(sash), undefined, this.orthogonalStartDragHandleDisposables);
                    this.orthogonalStartDragHandleDisposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this._orthogonalStartDragHandle, 'mouseleave')).event(()=>Sash.onMouseLeave(sash), undefined, this.orthogonalStartDragHandleDisposables);
                }
            };
            this.orthogonalStartSashDisposables.add(sash.onDidEnablementChange.event(onChange, this));
            onChange(sash.state);
        }
        this._orthogonalStartSash = sash;
    }
    /**
     * A reference to another sash, perpendicular to this one, which
     * aligns at the end of this one. A corner sash will be created
     * automatically at that location.
     *
     * The end of a horizontal sash is its right-most position.
     * The end of a vertical sash is its bottom-most position.
     */ set orthogonalEndSash(sash) {
        if (this._orthogonalEndSash === sash) {
            return;
        }
        this.orthogonalEndDragHandleDisposables.clear();
        this.orthogonalEndSashDisposables.clear();
        if (sash) {
            const onChange = (state)=>{
                this.orthogonalEndDragHandleDisposables.clear();
                if (state !== 0 /* SashState.Disabled */ ) {
                    this._orthogonalEndDragHandle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this.el, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.orthogonal-drag-handle.end'));
                    this.orthogonalEndDragHandleDisposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>this._orthogonalEndDragHandle.remove()));
                    this.orthogonalEndDragHandleDisposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this._orthogonalEndDragHandle, 'mouseenter')).event(()=>Sash.onMouseEnter(sash), undefined, this.orthogonalEndDragHandleDisposables);
                    this.orthogonalEndDragHandleDisposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this._orthogonalEndDragHandle, 'mouseleave')).event(()=>Sash.onMouseLeave(sash), undefined, this.orthogonalEndDragHandleDisposables);
                }
            };
            this.orthogonalEndSashDisposables.add(sash.onDidEnablementChange.event(onChange, this));
            onChange(sash.state);
        }
        this._orthogonalEndSash = sash;
    }
    onPointerStart(event, pointerEventFactory) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(event);
        let isMultisashResize = false;
        if (!event.__orthogonalSashEvent) {
            const orthogonalSash = this.getOrthogonalSash(event);
            if (orthogonalSash) {
                isMultisashResize = true;
                event.__orthogonalSashEvent = true;
                orthogonalSash.onPointerStart(event, new OrthogonalPointerEventFactory(pointerEventFactory));
            }
        }
        if (this.linkedSash && !event.__linkedSashEvent) {
            event.__linkedSashEvent = true;
            this.linkedSash.onPointerStart(event, new OrthogonalPointerEventFactory(pointerEventFactory));
        }
        if (!this.state) {
            return;
        }
        const iframes = this.el.ownerDocument.getElementsByTagName('iframe');
        for (const iframe of iframes){
            iframe.classList.add(PointerEventsDisabledCssClass); // disable mouse events on iframes as long as we drag the sash
        }
        const startX = event.pageX;
        const startY = event.pageY;
        const altKey = event.altKey;
        const startEvent = {
            startX,
            currentX: startX,
            startY,
            currentY: startY,
            altKey
        };
        this.el.classList.add('active');
        this._onDidStart.fire(startEvent);
        // fix https://github.com/microsoft/vscode/issues/21675
        const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyleSheet"])(this.el);
        const updateStyle = ()=>{
            let cursor = '';
            if (isMultisashResize) {
                cursor = 'all-scroll';
            } else if (this.orientation === 1 /* Orientation.HORIZONTAL */ ) {
                if (this.state === 1 /* SashState.AtMinimum */ ) {
                    cursor = 's-resize';
                } else if (this.state === 2 /* SashState.AtMaximum */ ) {
                    cursor = 'n-resize';
                } else {
                    cursor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] ? 'row-resize' : 'ns-resize';
                }
            } else {
                if (this.state === 1 /* SashState.AtMinimum */ ) {
                    cursor = 'e-resize';
                } else if (this.state === 2 /* SashState.AtMaximum */ ) {
                    cursor = 'w-resize';
                } else {
                    cursor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] ? 'col-resize' : 'ew-resize';
                }
            }
            style.textContent = "* { cursor: ".concat(cursor, " !important; }");
        };
        const disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        updateStyle();
        if (!isMultisashResize) {
            this.onDidEnablementChange.event(updateStyle, null, disposables);
        }
        const onPointerMove = (e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, false);
            const event = {
                startX,
                currentX: e.pageX,
                startY,
                currentY: e.pageY,
                altKey
            };
            this._onDidChange.fire(event);
        };
        const onPointerUp = (e)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, false);
            style.remove();
            this.el.classList.remove('active');
            this._onDidEnd.fire();
            disposables.dispose();
            for (const iframe of iframes){
                iframe.classList.remove(PointerEventsDisabledCssClass);
            }
        };
        pointerEventFactory.onPointerMove(onPointerMove, null, disposables);
        pointerEventFactory.onPointerUp(onPointerUp, null, disposables);
        disposables.add(pointerEventFactory);
    }
    onPointerDoublePress(e) {
        const orthogonalSash = this.getOrthogonalSash(e);
        if (orthogonalSash) {
            orthogonalSash._onDidReset.fire();
        }
        if (this.linkedSash) {
            this.linkedSash._onDidReset.fire();
        }
        this._onDidReset.fire();
    }
    static onMouseEnter(sash) {
        let fromLinkedSash = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (sash.el.classList.contains('active')) {
            sash.hoverDelayer.cancel();
            sash.el.classList.add('hover');
        } else {
            sash.hoverDelayer.trigger(()=>sash.el.classList.add('hover'), sash.hoverDelay).then(undefined, ()=>{});
        }
        if (!fromLinkedSash && sash.linkedSash) {
            Sash.onMouseEnter(sash.linkedSash, true);
        }
    }
    static onMouseLeave(sash) {
        let fromLinkedSash = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        sash.hoverDelayer.cancel();
        sash.el.classList.remove('hover');
        if (!fromLinkedSash && sash.linkedSash) {
            Sash.onMouseLeave(sash.linkedSash, true);
        }
    }
    /**
     * Forcefully stop any user interactions with this sash.
     * Useful when hiding a parent component, while the user is still
     * interacting with the sash.
     */ clearSashHoverState() {
        Sash.onMouseLeave(this);
    }
    /**
     * Layout the sash. The sash will size and position itself
     * based on its provided {@link ISashLayoutProvider layout provider}.
     */ layout() {
        if (this.orientation === 0 /* Orientation.VERTICAL */ ) {
            const verticalProvider = this.layoutProvider;
            this.el.style.left = verticalProvider.getVerticalSashLeft(this) - this.size / 2 + 'px';
            if (verticalProvider.getVerticalSashTop) {
                this.el.style.top = verticalProvider.getVerticalSashTop(this) + 'px';
            }
            if (verticalProvider.getVerticalSashHeight) {
                this.el.style.height = verticalProvider.getVerticalSashHeight(this) + 'px';
            }
        } else {
            const horizontalProvider = this.layoutProvider;
            this.el.style.top = horizontalProvider.getHorizontalSashTop(this) - this.size / 2 + 'px';
            if (horizontalProvider.getHorizontalSashLeft) {
                this.el.style.left = horizontalProvider.getHorizontalSashLeft(this) + 'px';
            }
            if (horizontalProvider.getHorizontalSashWidth) {
                this.el.style.width = horizontalProvider.getHorizontalSashWidth(this) + 'px';
            }
        }
    }
    getOrthogonalSash(e) {
        var _e_initialTarget;
        const target = (_e_initialTarget = e.initialTarget) !== null && _e_initialTarget !== void 0 ? _e_initialTarget : e.target;
        if (!target || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(target)) {
            return undefined;
        }
        if (target.classList.contains('orthogonal-drag-handle')) {
            return target.classList.contains('start') ? this.orthogonalStartSash : this.orthogonalEndSash;
        }
        return undefined;
    }
    dispose() {
        super.dispose();
        this.el.remove();
    }
    constructor(container, layoutProvider, options){
        super();
        this.hoverDelay = globalHoverDelay;
        this.hoverDelayer = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delayer"](this.hoverDelay));
        this._state = 3 /* SashState.Enabled */ ;
        this.onDidEnablementChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onDidStart = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onDidChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onDidReset = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onDidEnd = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this.orthogonalStartSashDisposables = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]());
        this.orthogonalStartDragHandleDisposables = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]());
        this.orthogonalEndSashDisposables = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]());
        this.orthogonalEndDragHandleDisposables = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]());
        /**
         * An event which fires whenever the user starts dragging this sash.
         */ this.onDidStart = this._onDidStart.event;
        /**
         * An event which fires whenever the user moves the mouse while
         * dragging this sash.
         */ this.onDidChange = this._onDidChange.event;
        /**
         * An event which fires whenever the user double clicks this sash.
         */ this.onDidReset = this._onDidReset.event;
        /**
         * An event which fires whenever the user stops dragging this sash.
         */ this.onDidEnd = this._onDidEnd.event;
        /**
         * A linked sash will be forwarded the same user interactions and events
         * so it moves exactly the same way as this sash.
         *
         * Useful in 2x2 grids. Not meant for widespread usage.
         */ this.linkedSash = undefined;
        this.el = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.monaco-sash'));
        if (options.orthogonalEdge) {
            this.el.classList.add("orthogonal-edge-".concat(options.orthogonalEdge));
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"]) {
            this.el.classList.add('mac');
        }
        const onMouseDown = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.el, 'mousedown')).event;
        this._register(onMouseDown((e)=>this.onPointerStart(e, new MouseEventFactory(container)), this));
        const onMouseDoubleClick = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.el, 'dblclick')).event;
        this._register(onMouseDoubleClick(this.onPointerDoublePress, this));
        const onMouseEnter = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.el, 'mouseenter')).event;
        this._register(onMouseEnter(()=>Sash.onMouseEnter(this)));
        const onMouseLeave = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.el, 'mouseleave')).event;
        this._register(onMouseLeave(()=>Sash.onMouseLeave(this)));
        this._register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gesture"].addTarget(this.el));
        const onTouchStart = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.el, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Start)).event;
        this._register(onTouchStart((e)=>this.onPointerStart(e, new GestureEventFactory(this.el)), this));
        const onTap = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.el, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Tap)).event;
        let doubleTapTimeout = undefined;
        this._register(onTap((event)=>{
            if (doubleTapTimeout) {
                clearTimeout(doubleTapTimeout);
                doubleTapTimeout = undefined;
                this.onPointerDoublePress(event);
                return;
            }
            clearTimeout(doubleTapTimeout);
            doubleTapTimeout = setTimeout(()=>doubleTapTimeout = undefined, 250);
        }, this));
        if (typeof options.size === 'number') {
            this.size = options.size;
            if (options.orientation === 0 /* Orientation.VERTICAL */ ) {
                this.el.style.width = "".concat(this.size, "px");
            } else {
                this.el.style.height = "".concat(this.size, "px");
            }
        } else {
            this.size = globalSize;
            this._register(onDidChangeGlobalSize.event((size)=>{
                this.size = size;
                this.layout();
            }));
        }
        this._register(onDidChangeHoverDelay.event((delay)=>this.hoverDelay = delay));
        this.layoutProvider = layoutProvider;
        this.orthogonalStartSash = options.orthogonalStartSash;
        this.orthogonalEndSash = options.orthogonalEndSash;
        this.orientation = options.orientation || 0 /* Orientation.VERTICAL */ ;
        if (this.orientation === 1 /* Orientation.HORIZONTAL */ ) {
            this.el.classList.add('horizontal');
            this.el.classList.remove('vertical');
        } else {
            this.el.classList.remove('horizontal');
            this.el.classList.add('vertical');
        }
        this.el.classList.toggle('debug', DEBUG);
        this.layout();
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/splitview/splitview.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "Sizing": ()=>Sizing,
    "SplitView": ()=>SplitView
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$sash$2f$sash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/numbers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$scrollable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/scrollable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
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
const defaultStyles = {
    separatorBorder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"].transparent
};
class ViewItem {
    set size(size) {
        this._size = size;
    }
    get size() {
        return this._size;
    }
    get visible() {
        return typeof this._cachedVisibleSize === 'undefined';
    }
    setVisible(visible, size) {
        if (visible === this.visible) {
            return;
        }
        if (visible) {
            this.size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize);
            this._cachedVisibleSize = undefined;
        } else {
            this._cachedVisibleSize = typeof size === 'number' ? size : this.size;
            this.size = 0;
        }
        this.container.classList.toggle('visible', visible);
        try {
            var _this_view_setVisible, _this_view;
            (_this_view_setVisible = (_this_view = this.view).setVisible) === null || _this_view_setVisible === void 0 ? void 0 : _this_view_setVisible.call(_this_view, visible);
        } catch (e) {
            console.error('Splitview: Failed to set visible view');
            console.error(e);
        }
    }
    get minimumSize() {
        return this.visible ? this.view.minimumSize : 0;
    }
    get viewMinimumSize() {
        return this.view.minimumSize;
    }
    get maximumSize() {
        return this.visible ? this.view.maximumSize : 0;
    }
    get viewMaximumSize() {
        return this.view.maximumSize;
    }
    get priority() {
        return this.view.priority;
    }
    get proportionalLayout() {
        var _this_view_proportionalLayout;
        return (_this_view_proportionalLayout = this.view.proportionalLayout) !== null && _this_view_proportionalLayout !== void 0 ? _this_view_proportionalLayout : true;
    }
    get snap() {
        return !!this.view.snap;
    }
    set enabled(enabled) {
        this.container.style.pointerEvents = enabled ? '' : 'none';
    }
    layout(offset, layoutContext) {
        this.layoutContainer(offset);
        try {
            this.view.layout(this.size, offset, layoutContext);
        } catch (e) {
            console.error('Splitview: Failed to layout view');
            console.error(e);
        }
    }
    dispose() {
        this.disposable.dispose();
    }
    constructor(container, view, size, disposable){
        this.container = container;
        this.view = view;
        this.disposable = disposable;
        this._cachedVisibleSize = undefined;
        if (typeof size === 'number') {
            this._size = size;
            this._cachedVisibleSize = undefined;
            container.classList.add('visible');
        } else {
            this._size = 0;
            this._cachedVisibleSize = size.cachedVisibleSize;
        }
    }
}
class VerticalViewItem extends ViewItem {
    layoutContainer(offset) {
        this.container.style.top = "".concat(offset, "px");
        this.container.style.height = "".concat(this.size, "px");
    }
}
class HorizontalViewItem extends ViewItem {
    layoutContainer(offset) {
        this.container.style.left = "".concat(offset, "px");
        this.container.style.width = "".concat(this.size, "px");
    }
}
var State;
(function(State) {
    State[State["Idle"] = 0] = "Idle";
    State[State["Busy"] = 1] = "Busy";
})(State || (State = {}));
var Sizing;
(function(Sizing) {
    /**
     * When adding or removing views, distribute the delta space among
     * all other views.
     */ Sizing.Distribute = {
        type: 'distribute'
    };
    /**
     * When adding or removing views, split the delta space with another
     * specific view, indexed by the provided `index`.
     */ function Split(index) {
        return {
            type: 'split',
            index
        };
    }
    Sizing.Split = Split;
    /**
     * When adding a view, use DistributeSizing when all pre-existing views are
     * distributed evenly, otherwise use SplitSizing.
     */ function Auto(index) {
        return {
            type: 'auto',
            index
        };
    }
    Sizing.Auto = Auto;
    /**
     * When adding or removing views, assume the view is invisible.
     */ function Invisible(cachedVisibleSize) {
        return {
            type: 'invisible',
            cachedVisibleSize
        };
    }
    Sizing.Invisible = Invisible;
})(Sizing || (Sizing = {}));
class SplitView extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get orthogonalStartSash() {
        return this._orthogonalStartSash;
    }
    get orthogonalEndSash() {
        return this._orthogonalEndSash;
    }
    get startSnappingEnabled() {
        return this._startSnappingEnabled;
    }
    get endSnappingEnabled() {
        return this._endSnappingEnabled;
    }
    /**
     * A reference to a sash, perpendicular to all sashes in this {@link SplitView},
     * located at the left- or top-most side of the SplitView.
     * Corner sashes will be created automatically at the intersections.
     */ set orthogonalStartSash(sash) {
        for (const sashItem of this.sashItems){
            sashItem.sash.orthogonalStartSash = sash;
        }
        this._orthogonalStartSash = sash;
    }
    /**
     * A reference to a sash, perpendicular to all sashes in this {@link SplitView},
     * located at the right- or bottom-most side of the SplitView.
     * Corner sashes will be created automatically at the intersections.
     */ set orthogonalEndSash(sash) {
        for (const sashItem of this.sashItems){
            sashItem.sash.orthogonalEndSash = sash;
        }
        this._orthogonalEndSash = sash;
    }
    /**
     * Enable/disable snapping at the beginning of this {@link SplitView}.
     */ set startSnappingEnabled(startSnappingEnabled) {
        if (this._startSnappingEnabled === startSnappingEnabled) {
            return;
        }
        this._startSnappingEnabled = startSnappingEnabled;
        this.updateSashEnablement();
    }
    /**
     * Enable/disable snapping at the end of this {@link SplitView}.
     */ set endSnappingEnabled(endSnappingEnabled) {
        if (this._endSnappingEnabled === endSnappingEnabled) {
            return;
        }
        this._endSnappingEnabled = endSnappingEnabled;
        this.updateSashEnablement();
    }
    style(styles) {
        if (styles.separatorBorder.isTransparent()) {
            this.el.classList.remove('separator-border');
            this.el.style.removeProperty('--separator-border');
        } else {
            this.el.classList.add('separator-border');
            this.el.style.setProperty('--separator-border', styles.separatorBorder.toString());
        }
    }
    /**
     * Add a {@link IView view} to this {@link SplitView}.
     *
     * @param view The view to add.
     * @param size Either a fixed size, or a dynamic {@link Sizing} strategy.
     * @param index The index to insert the view on.
     * @param skipLayout Whether layout should be skipped.
     */ addView(view, size) {
        let index = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.viewItems.length, skipLayout = arguments.length > 3 ? arguments[3] : void 0;
        this.doAddView(view, size, index, skipLayout);
    }
    /**
     * Layout the {@link SplitView}.
     *
     * @param size The entire size of the {@link SplitView}.
     * @param layoutContext An optional layout context to pass along to {@link IView views}.
     */ layout(size, layoutContext) {
        const previousSize = Math.max(this.size, this._contentSize);
        this.size = size;
        this.layoutContext = layoutContext;
        if (!this.proportions) {
            const indexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(this.viewItems.length);
            const lowPriorityIndexes = indexes.filter((i)=>this.viewItems[i].priority === 1 /* LayoutPriority.Low */ );
            const highPriorityIndexes = indexes.filter((i)=>this.viewItems[i].priority === 2 /* LayoutPriority.High */ );
            this.resize(this.viewItems.length - 1, size - previousSize, undefined, lowPriorityIndexes, highPriorityIndexes);
        } else {
            let total = 0;
            for(let i = 0; i < this.viewItems.length; i++){
                const item = this.viewItems[i];
                const proportion = this.proportions[i];
                if (typeof proportion === 'number') {
                    total += proportion;
                } else {
                    size -= item.size;
                }
            }
            for(let i = 0; i < this.viewItems.length; i++){
                const item = this.viewItems[i];
                const proportion = this.proportions[i];
                if (typeof proportion === 'number' && total > 0) {
                    item.size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.round(proportion * size / total), item.minimumSize, item.maximumSize);
                }
            }
        }
        this.distributeEmptySpace();
        this.layoutViews();
    }
    saveProportions() {
        if (this.proportionalLayout && this._contentSize > 0) {
            this.proportions = this.viewItems.map((v)=>v.proportionalLayout && v.visible ? v.size / this._contentSize : undefined);
        }
    }
    onSashStart(param) {
        let { sash, start, alt } = param;
        for (const item of this.viewItems){
            item.enabled = false;
        }
        const index = this.sashItems.findIndex((item)=>item.sash === sash);
        // This way, we can press Alt while we resize a sash, macOS style!
        const disposable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combinedDisposable"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.el.ownerDocument.body, 'keydown', (e)=>resetSashDragState(this.sashDragState.current, e.altKey)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.el.ownerDocument.body, 'keyup', ()=>resetSashDragState(this.sashDragState.current, false)));
        const resetSashDragState = (start, alt)=>{
            const sizes = this.viewItems.map((i)=>i.size);
            let minDelta = Number.NEGATIVE_INFINITY;
            let maxDelta = Number.POSITIVE_INFINITY;
            if (this.inverseAltBehavior) {
                alt = !alt;
            }
            if (alt) {
                // When we're using the last sash with Alt, we're resizing
                // the view to the left/up, instead of right/down as usual
                // Thus, we must do the inverse of the usual
                const isLastSash = index === this.sashItems.length - 1;
                if (isLastSash) {
                    const viewItem = this.viewItems[index];
                    minDelta = (viewItem.minimumSize - viewItem.size) / 2;
                    maxDelta = (viewItem.maximumSize - viewItem.size) / 2;
                } else {
                    const viewItem = this.viewItems[index + 1];
                    minDelta = (viewItem.size - viewItem.maximumSize) / 2;
                    maxDelta = (viewItem.size - viewItem.minimumSize) / 2;
                }
            }
            let snapBefore;
            let snapAfter;
            if (!alt) {
                const upIndexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(index, -1);
                const downIndexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(index + 1, this.viewItems.length);
                const minDeltaUp = upIndexes.reduce((r, i)=>r + (this.viewItems[i].minimumSize - sizes[i]), 0);
                const maxDeltaUp = upIndexes.reduce((r, i)=>r + (this.viewItems[i].viewMaximumSize - sizes[i]), 0);
                const maxDeltaDown = downIndexes.length === 0 ? Number.POSITIVE_INFINITY : downIndexes.reduce((r, i)=>r + (sizes[i] - this.viewItems[i].minimumSize), 0);
                const minDeltaDown = downIndexes.length === 0 ? Number.NEGATIVE_INFINITY : downIndexes.reduce((r, i)=>r + (sizes[i] - this.viewItems[i].viewMaximumSize), 0);
                const minDelta = Math.max(minDeltaUp, minDeltaDown);
                const maxDelta = Math.min(maxDeltaDown, maxDeltaUp);
                const snapBeforeIndex = this.findFirstSnapIndex(upIndexes);
                const snapAfterIndex = this.findFirstSnapIndex(downIndexes);
                if (typeof snapBeforeIndex === 'number') {
                    const viewItem = this.viewItems[snapBeforeIndex];
                    const halfSize = Math.floor(viewItem.viewMinimumSize / 2);
                    snapBefore = {
                        index: snapBeforeIndex,
                        limitDelta: viewItem.visible ? minDelta - halfSize : minDelta + halfSize,
                        size: viewItem.size
                    };
                }
                if (typeof snapAfterIndex === 'number') {
                    const viewItem = this.viewItems[snapAfterIndex];
                    const halfSize = Math.floor(viewItem.viewMinimumSize / 2);
                    snapAfter = {
                        index: snapAfterIndex,
                        limitDelta: viewItem.visible ? maxDelta + halfSize : maxDelta - halfSize,
                        size: viewItem.size
                    };
                }
            }
            this.sashDragState = {
                start,
                current: start,
                index,
                sizes,
                minDelta,
                maxDelta,
                alt,
                snapBefore,
                snapAfter,
                disposable
            };
        };
        resetSashDragState(start, alt);
    }
    onSashChange(param) {
        let { current } = param;
        const { index, start, sizes, alt, minDelta, maxDelta, snapBefore, snapAfter } = this.sashDragState;
        this.sashDragState.current = current;
        const delta = current - start;
        const newDelta = this.resize(index, delta, sizes, undefined, undefined, minDelta, maxDelta, snapBefore, snapAfter);
        if (alt) {
            const isLastSash = index === this.sashItems.length - 1;
            const newSizes = this.viewItems.map((i)=>i.size);
            const viewItemIndex = isLastSash ? index : index + 1;
            const viewItem = this.viewItems[viewItemIndex];
            const newMinDelta = viewItem.size - viewItem.maximumSize;
            const newMaxDelta = viewItem.size - viewItem.minimumSize;
            const resizeIndex = isLastSash ? index - 1 : index + 1;
            this.resize(resizeIndex, -newDelta, newSizes, undefined, undefined, newMinDelta, newMaxDelta);
        }
        this.distributeEmptySpace();
        this.layoutViews();
    }
    onSashEnd(index) {
        this._onDidSashChange.fire(index);
        this.sashDragState.disposable.dispose();
        this.saveProportions();
        for (const item of this.viewItems){
            item.enabled = true;
        }
    }
    onViewChange(item, size) {
        const index = this.viewItems.indexOf(item);
        if (index < 0 || index >= this.viewItems.length) {
            return;
        }
        size = typeof size === 'number' ? size : item.size;
        size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(size, item.minimumSize, item.maximumSize);
        if (this.inverseAltBehavior && index > 0) {
            // In this case, we want the view to grow or shrink both sides equally
            // so we just resize the "left" side by half and let `resize` do the clamping magic
            this.resize(index - 1, Math.floor((item.size - size) / 2));
            this.distributeEmptySpace();
            this.layoutViews();
        } else {
            item.size = size;
            this.relayout([
                index
            ], undefined);
        }
    }
    /**
     * Resize a {@link IView view} within the {@link SplitView}.
     *
     * @param index The {@link IView view} index.
     * @param size The {@link IView view} size.
     */ resizeView(index, size) {
        if (index < 0 || index >= this.viewItems.length) {
            return;
        }
        if (this.state !== State.Idle) {
            throw new Error('Cant modify splitview');
        }
        this.state = State.Busy;
        try {
            const indexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(this.viewItems.length).filter((i)=>i !== index);
            const lowPriorityIndexes = [
                ...indexes.filter((i)=>this.viewItems[i].priority === 1 /* LayoutPriority.Low */ ),
                index
            ];
            const highPriorityIndexes = indexes.filter((i)=>this.viewItems[i].priority === 2 /* LayoutPriority.High */ );
            const item = this.viewItems[index];
            size = Math.round(size);
            size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(size, item.minimumSize, Math.min(item.maximumSize, this.size));
            item.size = size;
            this.relayout(lowPriorityIndexes, highPriorityIndexes);
        } finally{
            this.state = State.Idle;
        }
    }
    /**
     * Distribute the entire {@link SplitView} size among all {@link IView views}.
     */ distributeViewSizes() {
        const flexibleViewItems = [];
        let flexibleSize = 0;
        for (const item of this.viewItems){
            if (item.maximumSize - item.minimumSize > 0) {
                flexibleViewItems.push(item);
                flexibleSize += item.size;
            }
        }
        const size = Math.floor(flexibleSize / flexibleViewItems.length);
        for (const item of flexibleViewItems){
            item.size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(size, item.minimumSize, item.maximumSize);
        }
        const indexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(this.viewItems.length);
        const lowPriorityIndexes = indexes.filter((i)=>this.viewItems[i].priority === 1 /* LayoutPriority.Low */ );
        const highPriorityIndexes = indexes.filter((i)=>this.viewItems[i].priority === 2 /* LayoutPriority.High */ );
        this.relayout(lowPriorityIndexes, highPriorityIndexes);
    }
    /**
     * Returns the size of a {@link IView view}.
     */ getViewSize(index) {
        if (index < 0 || index >= this.viewItems.length) {
            return -1;
        }
        return this.viewItems[index].size;
    }
    doAddView(view, size) {
        let index = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.viewItems.length, skipLayout = arguments.length > 3 ? arguments[3] : void 0;
        if (this.state !== State.Idle) {
            throw new Error('Cant modify splitview');
        }
        this.state = State.Busy;
        try {
            // Add view
            const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.split-view-view');
            if (index === this.viewItems.length) {
                this.viewContainer.appendChild(container);
            } else {
                this.viewContainer.insertBefore(container, this.viewContainer.children.item(index));
            }
            const onChangeDisposable = view.onDidChange((size)=>this.onViewChange(item, size));
            const containerDisposable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>container.remove());
            const disposable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combinedDisposable"])(onChangeDisposable, containerDisposable);
            let viewSize;
            if (typeof size === 'number') {
                viewSize = size;
            } else {
                if (size.type === 'auto') {
                    if (this.areViewsDistributed()) {
                        size = {
                            type: 'distribute'
                        };
                    } else {
                        size = {
                            type: 'split',
                            index: size.index
                        };
                    }
                }
                if (size.type === 'split') {
                    viewSize = this.getViewSize(size.index) / 2;
                } else if (size.type === 'invisible') {
                    viewSize = {
                        cachedVisibleSize: size.cachedVisibleSize
                    };
                } else {
                    viewSize = view.minimumSize;
                }
            }
            const item = this.orientation === 0 /* Orientation.VERTICAL */  ? new VerticalViewItem(container, view, viewSize, disposable) : new HorizontalViewItem(container, view, viewSize, disposable);
            this.viewItems.splice(index, 0, item);
            // Add sash
            if (this.viewItems.length > 1) {
                const opts = {
                    orthogonalStartSash: this.orthogonalStartSash,
                    orthogonalEndSash: this.orthogonalEndSash
                };
                const sash = this.orientation === 0 /* Orientation.VERTICAL */  ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$sash$2f$sash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sash"](this.sashContainer, {
                    getHorizontalSashTop: (s)=>this.getSashPosition(s),
                    getHorizontalSashWidth: this.getSashOrthogonalSize
                }, {
                    ...opts,
                    orientation: 1 /* Orientation.HORIZONTAL */ 
                }) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$sash$2f$sash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sash"](this.sashContainer, {
                    getVerticalSashLeft: (s)=>this.getSashPosition(s),
                    getVerticalSashHeight: this.getSashOrthogonalSize
                }, {
                    ...opts,
                    orientation: 0 /* Orientation.VERTICAL */ 
                });
                const sashEventMapper = this.orientation === 0 /* Orientation.VERTICAL */  ? (e)=>({
                        sash,
                        start: e.startY,
                        current: e.currentY,
                        alt: e.altKey
                    }) : (e)=>({
                        sash,
                        start: e.startX,
                        current: e.currentX,
                        alt: e.altKey
                    });
                const onStart = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(sash.onDidStart, sashEventMapper);
                const onStartDisposable = onStart(this.onSashStart, this);
                const onChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(sash.onDidChange, sashEventMapper);
                const onChangeDisposable = onChange(this.onSashChange, this);
                const onEnd = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(sash.onDidEnd, ()=>this.sashItems.findIndex((item)=>item.sash === sash));
                const onEndDisposable = onEnd(this.onSashEnd, this);
                const onDidResetDisposable = sash.onDidReset(()=>{
                    const index = this.sashItems.findIndex((item)=>item.sash === sash);
                    const upIndexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(index, -1);
                    const downIndexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(index + 1, this.viewItems.length);
                    const snapBeforeIndex = this.findFirstSnapIndex(upIndexes);
                    const snapAfterIndex = this.findFirstSnapIndex(downIndexes);
                    if (typeof snapBeforeIndex === 'number' && !this.viewItems[snapBeforeIndex].visible) {
                        return;
                    }
                    if (typeof snapAfterIndex === 'number' && !this.viewItems[snapAfterIndex].visible) {
                        return;
                    }
                    this._onDidSashReset.fire(index);
                });
                const disposable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combinedDisposable"])(onStartDisposable, onChangeDisposable, onEndDisposable, onDidResetDisposable, sash);
                const sashItem = {
                    sash,
                    disposable
                };
                this.sashItems.splice(index - 1, 0, sashItem);
            }
            container.appendChild(view.element);
            let highPriorityIndexes;
            if (typeof size !== 'number' && size.type === 'split') {
                highPriorityIndexes = [
                    size.index
                ];
            }
            if (!skipLayout) {
                this.relayout([
                    index
                ], highPriorityIndexes);
            }
            if (!skipLayout && typeof size !== 'number' && size.type === 'distribute') {
                this.distributeViewSizes();
            }
        } finally{
            this.state = State.Idle;
        }
    }
    relayout(lowPriorityIndexes, highPriorityIndexes) {
        const contentSize = this.viewItems.reduce((r, i)=>r + i.size, 0);
        this.resize(this.viewItems.length - 1, this.size - contentSize, undefined, lowPriorityIndexes, highPriorityIndexes);
        this.distributeEmptySpace();
        this.layoutViews();
        this.saveProportions();
    }
    resize(index, delta) {
        let sizes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.viewItems.map((i)=>i.size), lowPriorityIndexes = arguments.length > 3 ? arguments[3] : void 0, highPriorityIndexes = arguments.length > 4 ? arguments[4] : void 0, overloadMinDelta = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Number.NEGATIVE_INFINITY, overloadMaxDelta = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : Number.POSITIVE_INFINITY, snapBefore = arguments.length > 7 ? arguments[7] : void 0, snapAfter = arguments.length > 8 ? arguments[8] : void 0;
        if (index < 0 || index >= this.viewItems.length) {
            return 0;
        }
        const upIndexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(index, -1);
        const downIndexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(index + 1, this.viewItems.length);
        if (highPriorityIndexes) {
            for (const index of highPriorityIndexes){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushToStart"])(upIndexes, index);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushToStart"])(downIndexes, index);
            }
        }
        if (lowPriorityIndexes) {
            for (const index of lowPriorityIndexes){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushToEnd"])(upIndexes, index);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushToEnd"])(downIndexes, index);
            }
        }
        const upItems = upIndexes.map((i)=>this.viewItems[i]);
        const upSizes = upIndexes.map((i)=>sizes[i]);
        const downItems = downIndexes.map((i)=>this.viewItems[i]);
        const downSizes = downIndexes.map((i)=>sizes[i]);
        const minDeltaUp = upIndexes.reduce((r, i)=>r + (this.viewItems[i].minimumSize - sizes[i]), 0);
        const maxDeltaUp = upIndexes.reduce((r, i)=>r + (this.viewItems[i].maximumSize - sizes[i]), 0);
        const maxDeltaDown = downIndexes.length === 0 ? Number.POSITIVE_INFINITY : downIndexes.reduce((r, i)=>r + (sizes[i] - this.viewItems[i].minimumSize), 0);
        const minDeltaDown = downIndexes.length === 0 ? Number.NEGATIVE_INFINITY : downIndexes.reduce((r, i)=>r + (sizes[i] - this.viewItems[i].maximumSize), 0);
        const minDelta = Math.max(minDeltaUp, minDeltaDown, overloadMinDelta);
        const maxDelta = Math.min(maxDeltaDown, maxDeltaUp, overloadMaxDelta);
        let snapped = false;
        if (snapBefore) {
            const snapView = this.viewItems[snapBefore.index];
            const visible = delta >= snapBefore.limitDelta;
            snapped = visible !== snapView.visible;
            snapView.setVisible(visible, snapBefore.size);
        }
        if (!snapped && snapAfter) {
            const snapView = this.viewItems[snapAfter.index];
            const visible = delta < snapAfter.limitDelta;
            snapped = visible !== snapView.visible;
            snapView.setVisible(visible, snapAfter.size);
        }
        if (snapped) {
            return this.resize(index, delta, sizes, lowPriorityIndexes, highPriorityIndexes, overloadMinDelta, overloadMaxDelta);
        }
        delta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(delta, minDelta, maxDelta);
        for(let i = 0, deltaUp = delta; i < upItems.length; i++){
            const item = upItems[i];
            const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(upSizes[i] + deltaUp, item.minimumSize, item.maximumSize);
            const viewDelta = size - upSizes[i];
            deltaUp -= viewDelta;
            item.size = size;
        }
        for(let i = 0, deltaDown = delta; i < downItems.length; i++){
            const item = downItems[i];
            const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(downSizes[i] - deltaDown, item.minimumSize, item.maximumSize);
            const viewDelta = size - downSizes[i];
            deltaDown += viewDelta;
            item.size = size;
        }
        return delta;
    }
    distributeEmptySpace(lowPriorityIndex) {
        const contentSize = this.viewItems.reduce((r, i)=>r + i.size, 0);
        let emptyDelta = this.size - contentSize;
        const indexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(this.viewItems.length - 1, -1);
        const lowPriorityIndexes = indexes.filter((i)=>this.viewItems[i].priority === 1 /* LayoutPriority.Low */ );
        const highPriorityIndexes = indexes.filter((i)=>this.viewItems[i].priority === 2 /* LayoutPriority.High */ );
        for (const index of highPriorityIndexes){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushToStart"])(indexes, index);
        }
        for (const index of lowPriorityIndexes){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushToEnd"])(indexes, index);
        }
        if (typeof lowPriorityIndex === 'number') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushToEnd"])(indexes, lowPriorityIndex);
        }
        for(let i = 0; emptyDelta !== 0 && i < indexes.length; i++){
            const item = this.viewItems[indexes[i]];
            const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(item.size + emptyDelta, item.minimumSize, item.maximumSize);
            const viewDelta = size - item.size;
            emptyDelta -= viewDelta;
            item.size = size;
        }
    }
    layoutViews() {
        // Save new content size
        this._contentSize = this.viewItems.reduce((r, i)=>r + i.size, 0);
        // Layout views
        let offset = 0;
        for (const viewItem of this.viewItems){
            viewItem.layout(offset, this.layoutContext);
            offset += viewItem.size;
        }
        // Layout sashes
        this.sashItems.forEach((item)=>item.sash.layout());
        this.updateSashEnablement();
        this.updateScrollableElement();
    }
    updateScrollableElement() {
        if (this.orientation === 0 /* Orientation.VERTICAL */ ) {
            this.scrollableElement.setScrollDimensions({
                height: this.size,
                scrollHeight: this._contentSize
            });
        } else {
            this.scrollableElement.setScrollDimensions({
                width: this.size,
                scrollWidth: this._contentSize
            });
        }
    }
    updateSashEnablement() {
        let previous = false;
        const collapsesDown = this.viewItems.map((i)=>previous = i.size - i.minimumSize > 0 || previous);
        previous = false;
        const expandsDown = this.viewItems.map((i)=>previous = i.maximumSize - i.size > 0 || previous);
        const reverseViews = [
            ...this.viewItems
        ].reverse();
        previous = false;
        const collapsesUp = reverseViews.map((i)=>previous = i.size - i.minimumSize > 0 || previous).reverse();
        previous = false;
        const expandsUp = reverseViews.map((i)=>previous = i.maximumSize - i.size > 0 || previous).reverse();
        let position = 0;
        for(let index = 0; index < this.sashItems.length; index++){
            const { sash } = this.sashItems[index];
            const viewItem = this.viewItems[index];
            position += viewItem.size;
            const min = !(collapsesDown[index] && expandsUp[index + 1]);
            const max = !(expandsDown[index] && collapsesUp[index + 1]);
            if (min && max) {
                const upIndexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(index, -1);
                const downIndexes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(index + 1, this.viewItems.length);
                const snapBeforeIndex = this.findFirstSnapIndex(upIndexes);
                const snapAfterIndex = this.findFirstSnapIndex(downIndexes);
                const snappedBefore = typeof snapBeforeIndex === 'number' && !this.viewItems[snapBeforeIndex].visible;
                const snappedAfter = typeof snapAfterIndex === 'number' && !this.viewItems[snapAfterIndex].visible;
                if (snappedBefore && collapsesUp[index] && (position > 0 || this.startSnappingEnabled)) {
                    sash.state = 1 /* SashState.AtMinimum */ ;
                } else if (snappedAfter && collapsesDown[index] && (position < this._contentSize || this.endSnappingEnabled)) {
                    sash.state = 2 /* SashState.AtMaximum */ ;
                } else {
                    sash.state = 0 /* SashState.Disabled */ ;
                }
            } else if (min && !max) {
                sash.state = 1 /* SashState.AtMinimum */ ;
            } else if (!min && max) {
                sash.state = 2 /* SashState.AtMaximum */ ;
            } else {
                sash.state = 3 /* SashState.Enabled */ ;
            }
        }
    }
    getSashPosition(sash) {
        let position = 0;
        for(let i = 0; i < this.sashItems.length; i++){
            position += this.viewItems[i].size;
            if (this.sashItems[i].sash === sash) {
                return position;
            }
        }
        return 0;
    }
    findFirstSnapIndex(indexes) {
        // visible views first
        for (const index of indexes){
            const viewItem = this.viewItems[index];
            if (!viewItem.visible) {
                continue;
            }
            if (viewItem.snap) {
                return index;
            }
        }
        // then, hidden views
        for (const index of indexes){
            const viewItem = this.viewItems[index];
            if (viewItem.visible && viewItem.maximumSize - viewItem.minimumSize > 0) {
                return undefined;
            }
            if (!viewItem.visible && viewItem.snap) {
                return index;
            }
        }
        return undefined;
    }
    areViewsDistributed() {
        let min = undefined, max = undefined;
        for (const view of this.viewItems){
            min = min === undefined ? view.size : Math.min(min, view.size);
            max = max === undefined ? view.size : Math.max(max, view.size);
            if (max - min > 2) {
                return false;
            }
        }
        return true;
    }
    dispose() {
        var _this_sashDragState;
        (_this_sashDragState = this.sashDragState) === null || _this_sashDragState === void 0 ? void 0 : _this_sashDragState.disposable.dispose();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this.viewItems);
        this.viewItems = [];
        this.sashItems.forEach((i)=>i.disposable.dispose());
        this.sashItems = [];
        super.dispose();
    }
    /**
     * Create a new {@link SplitView} instance.
     */ constructor(container, options = {}){
        super();
        this.size = 0;
        this._contentSize = 0;
        this.proportions = undefined;
        this.viewItems = [];
        this.sashItems = []; // used in tests
        this.state = State.Idle;
        this._onDidSashChange = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._onDidSashReset = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]());
        this._startSnappingEnabled = true;
        this._endSnappingEnabled = true;
        /**
         * Fires whenever the user resizes a {@link Sash sash}.
         */ this.onDidSashChange = this._onDidSashChange.event;
        /**
         * Fires whenever the user double clicks a {@link Sash sash}.
         */ this.onDidSashReset = this._onDidSashReset.event;
        var _options_orientation;
        this.orientation = (_options_orientation = options.orientation) !== null && _options_orientation !== void 0 ? _options_orientation : 0 /* Orientation.VERTICAL */ ;
        var _options_inverseAltBehavior;
        this.inverseAltBehavior = (_options_inverseAltBehavior = options.inverseAltBehavior) !== null && _options_inverseAltBehavior !== void 0 ? _options_inverseAltBehavior : false;
        var _options_proportionalLayout;
        this.proportionalLayout = (_options_proportionalLayout = options.proportionalLayout) !== null && _options_proportionalLayout !== void 0 ? _options_proportionalLayout : true;
        this.getSashOrthogonalSize = options.getSashOrthogonalSize;
        this.el = document.createElement('div');
        this.el.classList.add('monaco-split-view2');
        this.el.classList.add(this.orientation === 0 /* Orientation.VERTICAL */  ? 'vertical' : 'horizontal');
        container.appendChild(this.el);
        this.sashContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this.el, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.sash-container'));
        this.viewContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.split-view-container');
        this.scrollable = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$scrollable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scrollable"]({
            forceIntegerValues: true,
            smoothScrollDuration: 125,
            scheduleAtNextAnimationFrame: (callback)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAtNextAnimationFrame"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(this.el), callback)
        }));
        var _options_scrollbarVisibility, _options_scrollbarVisibility1;
        this.scrollableElement = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmoothScrollableElement"](this.viewContainer, {
            vertical: this.orientation === 0 /* Orientation.VERTICAL */  ? (_options_scrollbarVisibility = options.scrollbarVisibility) !== null && _options_scrollbarVisibility !== void 0 ? _options_scrollbarVisibility : 1 /* ScrollbarVisibility.Auto */  : 2 /* ScrollbarVisibility.Hidden */ ,
            horizontal: this.orientation === 1 /* Orientation.HORIZONTAL */  ? (_options_scrollbarVisibility1 = options.scrollbarVisibility) !== null && _options_scrollbarVisibility1 !== void 0 ? _options_scrollbarVisibility1 : 1 /* ScrollbarVisibility.Auto */  : 2 /* ScrollbarVisibility.Hidden */ 
        }, this.scrollable));
        // https://github.com/microsoft/vscode/issues/157737
        const onDidScrollViewContainer = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.viewContainer, 'scroll')).event;
        this._register(onDidScrollViewContainer((_)=>{
            const position = this.scrollableElement.getScrollPosition();
            const scrollLeft = Math.abs(this.viewContainer.scrollLeft - position.scrollLeft) <= 1 ? undefined : this.viewContainer.scrollLeft;
            const scrollTop = Math.abs(this.viewContainer.scrollTop - position.scrollTop) <= 1 ? undefined : this.viewContainer.scrollTop;
            if (scrollLeft !== undefined || scrollTop !== undefined) {
                this.scrollableElement.setScrollPosition({
                    scrollLeft,
                    scrollTop
                });
            }
        }));
        this.onDidScroll = this.scrollableElement.onScroll;
        this._register(this.onDidScroll((e)=>{
            if (e.scrollTopChanged) {
                this.viewContainer.scrollTop = e.scrollTop;
            }
            if (e.scrollLeftChanged) {
                this.viewContainer.scrollLeft = e.scrollLeft;
            }
        }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(this.el, this.scrollableElement.getDomNode());
        this.style(options.styles || defaultStyles);
        // We have an existing set of view, add them now
        if (options.descriptor) {
            this.size = options.descriptor.size;
            options.descriptor.views.forEach((viewDescriptor, index)=>{
                const sizing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUndefined"](viewDescriptor.visible) || viewDescriptor.visible ? viewDescriptor.size : {
                    type: 'invisible',
                    cachedVisibleSize: viewDescriptor.size
                };
                const view = viewDescriptor.view;
                this.doAddView(view, sizing, index, true);
            });
            // Initialize content size and proportions for first layout
            this._contentSize = this.viewItems.reduce((r, i)=>r + i.size, 0);
            this.saveProportions();
        }
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/table/tableWidget.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "Table": ()=>Table
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegate2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$splitview$2f$splitview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/splitview/splitview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class TableListRenderer {
    renderTemplate(container) {
        const rowContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.monaco-table-tr'));
        const cellContainers = [];
        const cellTemplateData = [];
        for(let i = 0; i < this.columns.length; i++){
            const renderer = this.renderers[i];
            const cellContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(rowContainer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.monaco-table-td', {
                'data-col-index': i
            }));
            cellContainer.style.width = "".concat(this.getColumnSize(i), "px");
            cellContainers.push(cellContainer);
            cellTemplateData.push(renderer.renderTemplate(cellContainer));
        }
        const result = {
            container,
            cellContainers,
            cellTemplateData
        };
        this.renderedTemplates.add(result);
        return result;
    }
    renderElement(element, index, templateData, height) {
        for(let i = 0; i < this.columns.length; i++){
            const column = this.columns[i];
            const cell = column.project(element);
            const renderer = this.renderers[i];
            renderer.renderElement(cell, index, templateData.cellTemplateData[i], height);
        }
    }
    disposeElement(element, index, templateData, height) {
        for(let i = 0; i < this.columns.length; i++){
            const renderer = this.renderers[i];
            if (renderer.disposeElement) {
                const column = this.columns[i];
                const cell = column.project(element);
                renderer.disposeElement(cell, index, templateData.cellTemplateData[i], height);
            }
        }
    }
    disposeTemplate(templateData) {
        for(let i = 0; i < this.columns.length; i++){
            const renderer = this.renderers[i];
            renderer.disposeTemplate(templateData.cellTemplateData[i]);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNode"])(templateData.container);
        this.renderedTemplates.delete(templateData);
    }
    layoutColumn(index, size) {
        for (const { cellContainers } of this.renderedTemplates){
            cellContainers[index].style.width = "".concat(size, "px");
        }
    }
    constructor(columns, renderers, getColumnSize){
        this.columns = columns;
        this.getColumnSize = getColumnSize;
        this.templateId = TableListRenderer.TemplateId;
        this.renderedTemplates = new Set();
        const rendererMap = new Map(renderers.map((r)=>[
                r.templateId,
                r
            ]));
        this.renderers = [];
        for (const column of columns){
            const renderer = rendererMap.get(column.templateId);
            if (!renderer) {
                throw new Error("Table cell renderer for template id ".concat(column.templateId, " not found."));
            }
            this.renderers.push(renderer);
        }
    }
}
TableListRenderer.TemplateId = 'row';
function asListVirtualDelegate(delegate) {
    return {
        getHeight (row) {
            return delegate.getHeight(row);
        },
        getTemplateId () {
            return TableListRenderer.TemplateId;
        }
    };
}
class ColumnHeader extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get minimumSize() {
        var _this_column_minimumWidth;
        return (_this_column_minimumWidth = this.column.minimumWidth) !== null && _this_column_minimumWidth !== void 0 ? _this_column_minimumWidth : 120;
    }
    get maximumSize() {
        var _this_column_maximumWidth;
        return (_this_column_maximumWidth = this.column.maximumWidth) !== null && _this_column_maximumWidth !== void 0 ? _this_column_maximumWidth : Number.POSITIVE_INFINITY;
    }
    get onDidChange() {
        var _this_column_onDidChangeWidthConstraints;
        return (_this_column_onDidChangeWidthConstraints = this.column.onDidChangeWidthConstraints) !== null && _this_column_onDidChangeWidthConstraints !== void 0 ? _this_column_onDidChangeWidthConstraints : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].None;
    }
    layout(size) {
        this._onDidLayout.fire([
            this.index,
            size
        ]);
    }
    constructor(column, index){
        super();
        this.column = column;
        this.index = index;
        this._onDidLayout = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onDidLayout = this._onDidLayout.event;
        this.element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.monaco-table-th', {
            'data-col-index': index
        }, column.label);
        if (column.tooltip) {
            this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLayerHoverDelegate"])().setupManagedHover((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('mouse'), this.element, column.tooltip));
        }
    }
}
class Table {
    get onDidChangeFocus() {
        return this.list.onDidChangeFocus;
    }
    get onDidChangeSelection() {
        return this.list.onDidChangeSelection;
    }
    get onDidScroll() {
        return this.list.onDidScroll;
    }
    get onMouseDblClick() {
        return this.list.onMouseDblClick;
    }
    get onPointer() {
        return this.list.onPointer;
    }
    get onDidFocus() {
        return this.list.onDidFocus;
    }
    get scrollTop() {
        return this.list.scrollTop;
    }
    set scrollTop(scrollTop) {
        this.list.scrollTop = scrollTop;
    }
    get scrollHeight() {
        return this.list.scrollHeight;
    }
    get renderHeight() {
        return this.list.renderHeight;
    }
    get onDidDispose() {
        return this.list.onDidDispose;
    }
    updateOptions(options) {
        this.list.updateOptions(options);
    }
    splice(start, deleteCount) {
        let elements = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        this.list.splice(start, deleteCount, elements);
    }
    getHTMLElement() {
        return this.domNode;
    }
    style(styles) {
        const content = [];
        content.push(".monaco-table.".concat(this.domId, " > .monaco-split-view2 .monaco-sash.vertical::before {\n			top: ").concat(this.virtualDelegate.headerRowHeight + 1, "px;\n			height: calc(100% - ").concat(this.virtualDelegate.headerRowHeight, "px);\n		}"));
        this.styleElement.textContent = content.join('\n');
        this.list.style(styles);
    }
    getSelectedElements() {
        return this.list.getSelectedElements();
    }
    getSelection() {
        return this.list.getSelection();
    }
    getFocus() {
        return this.list.getFocus();
    }
    dispose() {
        this.disposables.dispose();
    }
    constructor(user, container, virtualDelegate, columns, renderers, _options){
        this.virtualDelegate = virtualDelegate;
        this.columns = columns;
        this.domId = "table_id_".concat(++Table.InstanceCount);
        this.disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this.cachedWidth = 0;
        this.cachedHeight = 0;
        this.domNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])(".monaco-table.".concat(this.domId)));
        const headers = columns.map((c, i)=>this.disposables.add(new ColumnHeader(c, i)));
        const descriptor = {
            size: headers.reduce((a, b)=>a + b.column.weight, 0),
            views: headers.map((view)=>({
                    size: view.column.weight,
                    view
                }))
        };
        this.splitview = this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$splitview$2f$splitview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitView"](this.domNode, {
            orientation: 1 /* Orientation.HORIZONTAL */ ,
            scrollbarVisibility: 2 /* ScrollbarVisibility.Hidden */ ,
            getSashOrthogonalSize: ()=>this.cachedHeight,
            descriptor
        }));
        this.splitview.el.style.height = "".concat(virtualDelegate.headerRowHeight, "px");
        this.splitview.el.style.lineHeight = "".concat(virtualDelegate.headerRowHeight, "px");
        const renderer = new TableListRenderer(columns, renderers, (i)=>this.splitview.getViewSize(i));
        this.list = this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"](user, this.domNode, asListVirtualDelegate(virtualDelegate), [
            renderer
        ], _options));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].any(...headers.map((h)=>h.onDidLayout))((param)=>{
            let [index, size] = param;
            return renderer.layoutColumn(index, size);
        }, null, this.disposables);
        this.splitview.onDidSashReset((index)=>{
            const totalWeight = columns.reduce((r, c)=>r + c.weight, 0);
            const size = columns[index].weight / totalWeight * this.cachedWidth;
            this.splitview.resizeView(index, size);
        }, null, this.disposables);
        this.styleElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyleSheet"])(this.domNode);
        this.style(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unthemedListStyles"]);
    }
}
Table.InstanceCount = 0;
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/highlightedlabel/highlightedLabel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "HighlightedLabel": ()=>HighlightedLabel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegate2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabels.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/objects.js [app-client] (ecmascript)");
;
;
;
;
;
;
class HighlightedLabel extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    /**
     * The label's DOM node.
     */ get element() {
        return this.domNode;
    }
    /**
     * Set the label and highlights.
     *
     * @param text The label to display.
     * @param highlights The ranges to highlight.
     * @param title An optional title for the hover tooltip.
     * @param escapeNewLines Whether to escape new lines.
     * @returns
     */ set(text) {
        let highlights = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], title = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', escapeNewLines = arguments.length > 3 ? arguments[3] : void 0;
        if (!text) {
            text = '';
        }
        if (escapeNewLines) {
            // adjusts highlights inplace
            text = HighlightedLabel.escapeNewLines(text, highlights);
        }
        if (this.didEverRender && this.text === text && this.title === title && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"](this.highlights, highlights)) {
            return;
        }
        this.text = text;
        this.title = title;
        this.highlights = highlights;
        this.render();
    }
    render() {
        var _this_options_hoverDelegate, _this_options;
        const children = [];
        let pos = 0;
        for (const highlight of this.highlights){
            if (highlight.end === highlight.start) {
                continue;
            }
            if (pos < highlight.start) {
                const substring = this.text.substring(pos, highlight.start);
                if (this.supportIcons) {
                    children.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderLabelWithIcons"])(substring));
                } else {
                    children.push(substring);
                }
                pos = highlight.start;
            }
            const substring = this.text.substring(pos, highlight.end);
            const element = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('span.highlight', undefined, ...this.supportIcons ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderLabelWithIcons"])(substring) : [
                substring
            ]);
            if (highlight.extraClasses) {
                element.classList.add(...highlight.extraClasses);
            }
            children.push(element);
            pos = highlight.end;
        }
        if (pos < this.text.length) {
            const substring = this.text.substring(pos);
            if (this.supportIcons) {
                children.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$iconLabel$2f$iconLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderLabelWithIcons"])(substring));
            } else {
                children.push(substring);
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reset"](this.domNode, ...children);
        if ((_this_options = this.options) === null || _this_options === void 0 ? void 0 : (_this_options_hoverDelegate = _this_options.hoverDelegate) === null || _this_options_hoverDelegate === void 0 ? void 0 : _this_options_hoverDelegate.showNativeHover) {
            /* While custom hover is not inside custom hover */ this.domNode.title = this.title;
        } else {
            if (!this.customHover && this.title !== '') {
                var _this_options1;
                var _this_options_hoverDelegate1;
                const hoverDelegate = (_this_options_hoverDelegate1 = (_this_options1 = this.options) === null || _this_options1 === void 0 ? void 0 : _this_options1.hoverDelegate) !== null && _this_options_hoverDelegate1 !== void 0 ? _this_options_hoverDelegate1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('mouse');
                this.customHover = this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLayerHoverDelegate"])().setupManagedHover(hoverDelegate, this.domNode, this.title));
            } else if (this.customHover) {
                this.customHover.update(this.title);
            }
        }
        this.didEverRender = true;
    }
    static escapeNewLines(text, highlights) {
        let total = 0;
        let extra = 0;
        return text.replace(/\r\n|\r|\n/g, (match, offset)=>{
            extra = match === '\r\n' ? -1 : 0;
            offset += total;
            for (const highlight of highlights){
                if (highlight.end <= offset) {
                    continue;
                }
                if (highlight.start >= offset) {
                    highlight.start += extra;
                }
                if (highlight.end >= offset) {
                    highlight.end += extra;
                }
            }
            total += extra;
            return '\u23CE';
        });
    }
    /**
     * Create a new {@link HighlightedLabel}.
     *
     * @param container The parent container to append to.
     */ constructor(container, options){
        super();
        this.options = options;
        this.text = '';
        this.title = '';
        this.highlights = [];
        this.didEverRender = false;
        var _options_supportIcons;
        this.supportIcons = (_options_supportIcons = options === null || options === void 0 ? void 0 : options.supportIcons) !== null && _options_supportIcons !== void 0 ? _options_supportIcons : false;
        this.domNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](container, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"]('span.monaco-highlighted-label'));
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/keybindingLabel/keybindingLabel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "KeybindingLabel": ()=>KeybindingLabel,
    "unthemedKeybindingLabelOptions": ()=>unthemedKeybindingLabelOptions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegate2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindingLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/keybindingLabels.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/objects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
const $ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"];
const unthemedKeybindingLabelOptions = {
    keybindingLabelBackground: undefined,
    keybindingLabelForeground: undefined,
    keybindingLabelBorder: undefined,
    keybindingLabelBottomBorder: undefined,
    keybindingLabelShadow: undefined
};
class KeybindingLabel extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    get element() {
        return this.domNode;
    }
    set(keybinding, matches) {
        if (this.didEverRender && this.keybinding === keybinding && KeybindingLabel.areSame(this.matches, matches)) {
            return;
        }
        this.keybinding = keybinding;
        this.matches = matches;
        this.render();
    }
    render() {
        this.clear();
        if (this.keybinding) {
            const chords = this.keybinding.getChords();
            if (chords[0]) {
                this.renderChord(this.domNode, chords[0], this.matches ? this.matches.firstPart : null);
            }
            for(let i = 1; i < chords.length; i++){
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](this.domNode, $('span.monaco-keybinding-key-chord-separator', undefined, ' '));
                this.renderChord(this.domNode, chords[i], this.matches ? this.matches.chordPart : null);
            }
            var _this_options_disableTitle;
            const title = ((_this_options_disableTitle = this.options.disableTitle) !== null && _this_options_disableTitle !== void 0 ? _this_options_disableTitle : false) ? undefined : this.keybinding.getAriaLabel() || undefined;
            this.hover.update(title);
            this.domNode.setAttribute('aria-label', title || '');
        } else if (this.options && this.options.renderUnboundKeybindings) {
            this.renderUnbound(this.domNode);
        }
        this.didEverRender = true;
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearNode"](this.domNode);
        this.keyElements.clear();
    }
    renderChord(parent, chord, match) {
        const modifierLabels = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$keybindingLabels$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UILabelProvider"].modifierLabels[this.os];
        if (chord.ctrlKey) {
            this.renderKey(parent, modifierLabels.ctrlKey, Boolean(match === null || match === void 0 ? void 0 : match.ctrlKey), modifierLabels.separator);
        }
        if (chord.shiftKey) {
            this.renderKey(parent, modifierLabels.shiftKey, Boolean(match === null || match === void 0 ? void 0 : match.shiftKey), modifierLabels.separator);
        }
        if (chord.altKey) {
            this.renderKey(parent, modifierLabels.altKey, Boolean(match === null || match === void 0 ? void 0 : match.altKey), modifierLabels.separator);
        }
        if (chord.metaKey) {
            this.renderKey(parent, modifierLabels.metaKey, Boolean(match === null || match === void 0 ? void 0 : match.metaKey), modifierLabels.separator);
        }
        const keyLabel = chord.keyLabel;
        if (keyLabel) {
            this.renderKey(parent, keyLabel, Boolean(match === null || match === void 0 ? void 0 : match.keyCode), '');
        }
    }
    renderKey(parent, label, highlight, separator) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](parent, this.createKeyElement(label, highlight ? '.highlight' : ''));
        if (separator) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](parent, $('span.monaco-keybinding-key-separator', undefined, separator));
        }
    }
    renderUnbound(parent) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](parent, this.createKeyElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"])('unbound', "Unbound")));
    }
    createKeyElement(label) {
        let extraClass = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
        const keyElement = $('span.monaco-keybinding-key' + extraClass, undefined, label);
        this.keyElements.add(keyElement);
        if (this.options.keybindingLabelBackground) {
            keyElement.style.backgroundColor = this.options.keybindingLabelBackground;
        }
        if (this.options.keybindingLabelBorder) {
            keyElement.style.borderColor = this.options.keybindingLabelBorder;
        }
        if (this.options.keybindingLabelBottomBorder) {
            keyElement.style.borderBottomColor = this.options.keybindingLabelBottomBorder;
        }
        if (this.options.keybindingLabelShadow) {
            keyElement.style.boxShadow = "inset 0 -1px 0 ".concat(this.options.keybindingLabelShadow);
        }
        return keyElement;
    }
    static areSame(a, b) {
        if (a === b || !a && !b) {
            return true;
        }
        return !!a && !!b && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"])(a.firstPart, b.firstPart) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$objects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"])(a.chordPart, b.chordPart);
    }
    constructor(container, os, options){
        super();
        this.os = os;
        this.keyElements = new Set();
        this.options = options || Object.create(null);
        const labelForeground = this.options.keybindingLabelForeground;
        this.domNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"](container, $('.monaco-keybinding'));
        if (labelForeground) {
            this.domNode.style.color = labelForeground;
        }
        this.hover = this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegate2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLayerHoverDelegate"])().setupManagedHover((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultHoverDelegate"])('mouse'), this.domNode, ''));
        this.didEverRender = false;
        container.appendChild(this.domNode);
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/mouseCursor/mouseCursor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "MOUSE_CURSOR_TEXT_CSS_CLASS_NAME": ()=>MOUSE_CURSOR_TEXT_CSS_CLASS_NAME
});
;
const MOUSE_CURSOR_TEXT_CSS_CLASS_NAME = "monaco-mouse-cursor-text";
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/toolbar/toolbar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ToggleMenuAction": ()=>ToggleMenuAction,
    "ToolBar": ()=>ToolBar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$dropdown$2f$dropdownActionViewItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/dropdown/dropdownActionViewItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/actions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/codicons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/themables.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/nls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverDelegateFactory.js [app-client] (ecmascript)");
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
class ToolBar extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"] {
    set actionRunner(actionRunner) {
        this.actionBar.actionRunner = actionRunner;
    }
    get actionRunner() {
        return this.actionBar.actionRunner;
    }
    getElement() {
        return this.element;
    }
    getItemAction(indexOrElement) {
        return this.actionBar.getAction(indexOrElement);
    }
    setActions(primaryActions, secondaryActions) {
        this.clear();
        const primaryActionsToSet = primaryActions ? primaryActions.slice(0) : [];
        // Inject additional action to open secondary actions if present
        this.hasSecondaryActions = !!(secondaryActions && secondaryActions.length > 0);
        if (this.hasSecondaryActions && secondaryActions) {
            this.toggleMenuAction.menuActions = secondaryActions.slice(0);
            primaryActionsToSet.push(this.toggleMenuAction);
        }
        primaryActionsToSet.forEach((action)=>{
            var _this_options_icon, _this_options_label;
            this.actionBar.push(action, {
                icon: (_this_options_icon = this.options.icon) !== null && _this_options_icon !== void 0 ? _this_options_icon : true,
                label: (_this_options_label = this.options.label) !== null && _this_options_label !== void 0 ? _this_options_label : false,
                keybinding: this.getKeybindingLabel(action)
            });
        });
    }
    getKeybindingLabel(action) {
        var _this_options_getKeyBinding, _this_options;
        const key = (_this_options_getKeyBinding = (_this_options = this.options).getKeyBinding) === null || _this_options_getKeyBinding === void 0 ? void 0 : _this_options_getKeyBinding.call(_this_options, action);
        var _key_getLabel;
        return (_key_getLabel = key === null || key === void 0 ? void 0 : key.getLabel()) !== null && _key_getLabel !== void 0 ? _key_getLabel : undefined;
    }
    clear() {
        this.submenuActionViewItems = [];
        this.disposables.clear();
        this.actionBar.clear();
    }
    dispose() {
        this.clear();
        this.disposables.dispose();
        super.dispose();
    }
    constructor(container, contextMenuProvider, options = {
        orientation: 0 /* ActionsOrientation.HORIZONTAL */ 
    }){
        super();
        this.submenuActionViewItems = [];
        this.hasSecondaryActions = false;
        this._onDidChangeDropdownVisibility = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventMultiplexer"]());
        this.onDidChangeDropdownVisibility = this._onDidChangeDropdownVisibility.event;
        this.disposables = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]());
        var _options_hoverDelegate;
        options.hoverDelegate = (_options_hoverDelegate = options.hoverDelegate) !== null && _options_hoverDelegate !== void 0 ? _options_hoverDelegate : this._register((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$hover$2f$hoverDelegateFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInstantHoverDelegate"])());
        this.options = options;
        this.toggleMenuAction = this._register(new ToggleMenuAction(()=>{
            var _this_toggleMenuActionViewItem;
            return (_this_toggleMenuActionViewItem = this.toggleMenuActionViewItem) === null || _this_toggleMenuActionViewItem === void 0 ? void 0 : _this_toggleMenuActionViewItem.show();
        }, options.toggleMenuTitle));
        this.element = document.createElement('div');
        this.element.className = 'monaco-toolbar';
        container.appendChild(this.element);
        this.actionBar = this._register(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$actionbar$2f$actionbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionBar"](this.element, {
            orientation: options.orientation,
            ariaLabel: options.ariaLabel,
            actionRunner: options.actionRunner,
            allowContextMenu: options.allowContextMenu,
            highlightToggledItems: options.highlightToggledItems,
            hoverDelegate: options.hoverDelegate,
            actionViewItemProvider: (action, viewItemOptions)=>{
                if (action.id === ToggleMenuAction.ID) {
                    var _options_moreIcon;
                    this.toggleMenuActionViewItem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$dropdown$2f$dropdownActionViewItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuActionViewItem"](action, action.menuActions, contextMenuProvider, {
                        actionViewItemProvider: this.options.actionViewItemProvider,
                        actionRunner: this.actionRunner,
                        keybindingProvider: this.options.getKeyBinding,
                        classNames: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$themables$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeIcon"].asClassNameArray((_options_moreIcon = options.moreIcon) !== null && _options_moreIcon !== void 0 ? _options_moreIcon : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$codicons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Codicon"].toolBarMore),
                        anchorAlignmentProvider: this.options.anchorAlignmentProvider,
                        menuAsChild: !!this.options.renderDropdownAsChildElement,
                        skipTelemetry: this.options.skipTelemetry,
                        isMenu: true,
                        hoverDelegate: this.options.hoverDelegate
                    });
                    this.toggleMenuActionViewItem.setActionContext(this.actionBar.context);
                    this.disposables.add(this._onDidChangeDropdownVisibility.add(this.toggleMenuActionViewItem.onDidChangeVisibility));
                    return this.toggleMenuActionViewItem;
                }
                if (options.actionViewItemProvider) {
                    const result = options.actionViewItemProvider(action, viewItemOptions);
                    if (result) {
                        return result;
                    }
                }
                if (action instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmenuAction"]) {
                    const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$dropdown$2f$dropdownActionViewItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuActionViewItem"](action, action.actions, contextMenuProvider, {
                        actionViewItemProvider: this.options.actionViewItemProvider,
                        actionRunner: this.actionRunner,
                        keybindingProvider: this.options.getKeyBinding,
                        classNames: action.class,
                        anchorAlignmentProvider: this.options.anchorAlignmentProvider,
                        menuAsChild: !!this.options.renderDropdownAsChildElement,
                        skipTelemetry: this.options.skipTelemetry,
                        hoverDelegate: this.options.hoverDelegate
                    });
                    result.setActionContext(this.actionBar.context);
                    this.submenuActionViewItems.push(result);
                    this.disposables.add(this._onDidChangeDropdownVisibility.add(result.onDidChangeVisibility));
                    return result;
                }
                return undefined;
            }
        }));
    }
}
class ToggleMenuAction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$actions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"] {
    async run() {
        this.toggleDropdownMenu();
    }
    get menuActions() {
        return this._menuActions;
    }
    set menuActions(actions) {
        this._menuActions = actions;
    }
    constructor(toggleDropdownMenu, title){
        title = title || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$nls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["localize"]('moreActions', "More Actions...");
        super(ToggleMenuAction.ID, title, undefined, true);
        this._menuActions = [];
        this.toggleDropdownMenu = toggleDropdownMenu;
    }
}
ToggleMenuAction.ID = 'toolbar.toggle.more';
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codiconStyles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({});
;
;
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/resizable/resizable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ResizableHTMLElement": ()=>ResizableHTMLElement
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$sash$2f$sash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
;
;
;
;
class ResizableHTMLElement {
    dispose() {
        this._northSash.dispose();
        this._southSash.dispose();
        this._eastSash.dispose();
        this._westSash.dispose();
        this._sashListener.dispose();
        this._onDidResize.dispose();
        this._onDidWillResize.dispose();
        this.domNode.remove();
    }
    enableSashes(north, east, south, west) {
        this._northSash.state = north ? 3 /* SashState.Enabled */  : 0 /* SashState.Disabled */ ;
        this._eastSash.state = east ? 3 /* SashState.Enabled */  : 0 /* SashState.Disabled */ ;
        this._southSash.state = south ? 3 /* SashState.Enabled */  : 0 /* SashState.Disabled */ ;
        this._westSash.state = west ? 3 /* SashState.Enabled */  : 0 /* SashState.Disabled */ ;
    }
    layout() {
        let height = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.size.height, width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.size.width;
        const { height: minHeight, width: minWidth } = this._minSize;
        const { height: maxHeight, width: maxWidth } = this._maxSize;
        height = Math.max(minHeight, Math.min(maxHeight, height));
        width = Math.max(minWidth, Math.min(maxWidth, width));
        const newSize = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](width, height);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"].equals(newSize, this._size)) {
            this.domNode.style.height = height + 'px';
            this.domNode.style.width = width + 'px';
            this._size = newSize;
            this._northSash.layout();
            this._eastSash.layout();
            this._southSash.layout();
            this._westSash.layout();
        }
    }
    clearSashHoverState() {
        this._eastSash.clearSashHoverState();
        this._westSash.clearSashHoverState();
        this._northSash.clearSashHoverState();
        this._southSash.clearSashHoverState();
    }
    get size() {
        return this._size;
    }
    set maxSize(value) {
        this._maxSize = value;
    }
    get maxSize() {
        return this._maxSize;
    }
    set minSize(value) {
        this._minSize = value;
    }
    get minSize() {
        return this._minSize;
    }
    set preferredSize(value) {
        this._preferredSize = value;
    }
    get preferredSize() {
        return this._preferredSize;
    }
    constructor(){
        this._onDidWillResize = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onDidWillResize = this._onDidWillResize.event;
        this._onDidResize = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onDidResize = this._onDidResize.event;
        this._sashListener = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._size = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](0, 0);
        this._minSize = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](0, 0);
        this._maxSize = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimension"](Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        this.domNode = document.createElement('div');
        this._eastSash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$sash$2f$sash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sash"](this.domNode, {
            getVerticalSashLeft: ()=>this._size.width
        }, {
            orientation: 0 /* Orientation.VERTICAL */ 
        });
        this._westSash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$sash$2f$sash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sash"](this.domNode, {
            getVerticalSashLeft: ()=>0
        }, {
            orientation: 0 /* Orientation.VERTICAL */ 
        });
        this._northSash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$sash$2f$sash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sash"](this.domNode, {
            getHorizontalSashTop: ()=>0
        }, {
            orientation: 1 /* Orientation.HORIZONTAL */ ,
            orthogonalEdge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$sash$2f$sash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthogonalEdge"].North
        });
        this._southSash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$sash$2f$sash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sash"](this.domNode, {
            getHorizontalSashTop: ()=>this._size.height
        }, {
            orientation: 1 /* Orientation.HORIZONTAL */ ,
            orthogonalEdge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$sash$2f$sash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthogonalEdge"].South
        });
        this._northSash.orthogonalStartSash = this._westSash;
        this._northSash.orthogonalEndSash = this._eastSash;
        this._southSash.orthogonalStartSash = this._westSash;
        this._southSash.orthogonalEndSash = this._eastSash;
        let currentSize;
        let deltaY = 0;
        let deltaX = 0;
        this._sashListener.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].any(this._northSash.onDidStart, this._eastSash.onDidStart, this._southSash.onDidStart, this._westSash.onDidStart)(()=>{
            if (currentSize === undefined) {
                this._onDidWillResize.fire();
                currentSize = this._size;
                deltaY = 0;
                deltaX = 0;
            }
        }));
        this._sashListener.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].any(this._northSash.onDidEnd, this._eastSash.onDidEnd, this._southSash.onDidEnd, this._westSash.onDidEnd)(()=>{
            if (currentSize !== undefined) {
                currentSize = undefined;
                deltaY = 0;
                deltaX = 0;
                this._onDidResize.fire({
                    dimension: this._size,
                    done: true
                });
            }
        }));
        this._sashListener.add(this._eastSash.onDidChange((e)=>{
            if (currentSize) {
                deltaX = e.currentX - e.startX;
                this.layout(currentSize.height + deltaY, currentSize.width + deltaX);
                this._onDidResize.fire({
                    dimension: this._size,
                    done: false,
                    east: true
                });
            }
        }));
        this._sashListener.add(this._westSash.onDidChange((e)=>{
            if (currentSize) {
                deltaX = -(e.currentX - e.startX);
                this.layout(currentSize.height + deltaY, currentSize.width + deltaX);
                this._onDidResize.fire({
                    dimension: this._size,
                    done: false,
                    west: true
                });
            }
        }));
        this._sashListener.add(this._northSash.onDidChange((e)=>{
            if (currentSize) {
                deltaY = -(e.currentY - e.startY);
                this.layout(currentSize.height + deltaY, currentSize.width + deltaX);
                this._onDidResize.fire({
                    dimension: this._size,
                    done: false,
                    north: true
                });
            }
        }));
        this._sashListener.add(this._southSash.onDidChange((e)=>{
            if (currentSize) {
                deltaY = e.currentY - e.startY;
                this.layout(currentSize.height + deltaY, currentSize.width + deltaX);
                this._onDidResize.fire({
                    dimension: this._size,
                    done: false,
                    south: true
                });
            }
        }));
        this._sashListener.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].any(this._eastSash.onDidReset, this._westSash.onDidReset)((e)=>{
            if (this._preferredSize) {
                this.layout(this._size.height, this._preferredSize.width);
                this._onDidResize.fire({
                    dimension: this._size,
                    done: true
                });
            }
        }));
        this._sashListener.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].any(this._northSash.onDidReset, this._southSash.onDidReset)((e)=>{
            if (this._preferredSize) {
                this.layout(this._preferredSize.height, this._size.width);
                this._onDidResize.fire({
                    dimension: this._size,
                    done: true
                });
            }
        }));
    }
}
}),
}]);

//# sourceMappingURL=afade_monaco-editor_esm_vs_base_browser_ui_bf424774._.js.map