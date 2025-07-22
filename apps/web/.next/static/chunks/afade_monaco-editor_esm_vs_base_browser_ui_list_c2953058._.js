(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/splice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "CombinedSpliceable": ()=>CombinedSpliceable
});
class CombinedSpliceable {
    splice(start, deleteCount, elements) {
        this.spliceables.forEach((s)=>s.splice(start, deleteCount, elements));
    }
    constructor(spliceables){
        this.spliceables = spliceables;
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/list.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ListError": ()=>ListError
});
class ListError extends Error {
    constructor(user, message){
        super("ListError [".concat(user, "] ").concat(message));
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/rangeMap.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "RangeMap": ()=>RangeMap,
    "consolidate": ()=>consolidate,
    "groupIntersect": ()=>groupIntersect,
    "shift": ()=>shift
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/range.js [app-client] (ecmascript)");
;
function groupIntersect(range, groups) {
    const result = [];
    for (const r of groups){
        if (range.start >= r.range.end) {
            continue;
        }
        if (range.end < r.range.start) {
            break;
        }
        const intersection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].intersect(range, r.range);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].isEmpty(intersection)) {
            continue;
        }
        result.push({
            range: intersection,
            size: r.size
        });
    }
    return result;
}
function shift(param, much) {
    let { start, end } = param;
    return {
        start: start + much,
        end: end + much
    };
}
function consolidate(groups) {
    const result = [];
    let previousGroup = null;
    for (const group of groups){
        const start = group.range.start;
        const end = group.range.end;
        const size = group.size;
        if (previousGroup && size === previousGroup.size) {
            previousGroup.range.end = end;
            continue;
        }
        previousGroup = {
            range: {
                start,
                end
            },
            size
        };
        result.push(previousGroup);
    }
    return result;
}
/**
 * Concatenates several collections of ranged groups into a single
 * collection.
 */ function concat() {
    for(var _len = arguments.length, groups = new Array(_len), _key = 0; _key < _len; _key++){
        groups[_key] = arguments[_key];
    }
    return consolidate(groups.reduce((r, g)=>r.concat(g), []));
}
class RangeMap {
    get paddingTop() {
        return this._paddingTop;
    }
    set paddingTop(paddingTop) {
        this._size = this._size + paddingTop - this._paddingTop;
        this._paddingTop = paddingTop;
    }
    splice(index, deleteCount) {
        let items = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        const diff = items.length - deleteCount;
        const before = groupIntersect({
            start: 0,
            end: index
        }, this.groups);
        const after = groupIntersect({
            start: index + deleteCount,
            end: Number.POSITIVE_INFINITY
        }, this.groups).map((g)=>({
                range: shift(g.range, diff),
                size: g.size
            }));
        const middle = items.map((item, i)=>({
                range: {
                    start: index + i,
                    end: index + i + 1
                },
                size: item.size
            }));
        this.groups = concat(before, middle, after);
        this._size = this._paddingTop + this.groups.reduce((t, g)=>t + g.size * (g.range.end - g.range.start), 0);
    }
    /**
     * Returns the number of items in the range map.
     */ get count() {
        const len = this.groups.length;
        if (!len) {
            return 0;
        }
        return this.groups[len - 1].range.end;
    }
    /**
     * Returns the sum of the sizes of all items in the range map.
     */ get size() {
        return this._size;
    }
    /**
     * Returns the index of the item at the given position.
     */ indexAt(position) {
        if (position < 0) {
            return -1;
        }
        if (position < this._paddingTop) {
            return 0;
        }
        let index = 0;
        let size = this._paddingTop;
        for (const group of this.groups){
            const count = group.range.end - group.range.start;
            const newSize = size + count * group.size;
            if (position < newSize) {
                return index + Math.floor((position - size) / group.size);
            }
            index += count;
            size = newSize;
        }
        return index;
    }
    /**
     * Returns the index of the item right after the item at the
     * index of the given position.
     */ indexAfter(position) {
        return Math.min(this.indexAt(position) + 1, this.count);
    }
    /**
     * Returns the start position of the item at the given index.
     */ positionAt(index) {
        if (index < 0) {
            return -1;
        }
        let position = 0;
        let count = 0;
        for (const group of this.groups){
            const groupCount = group.range.end - group.range.start;
            const newCount = count + groupCount;
            if (index < newCount) {
                return this._paddingTop + position + (index - count) * group.size;
            }
            position += groupCount * group.size;
            count = newCount;
        }
        return -1;
    }
    constructor(topPadding){
        this.groups = [];
        this._size = 0;
        this._paddingTop = 0;
        this._paddingTop = topPadding !== null && topPadding !== void 0 ? topPadding : 0;
        this._size = this._paddingTop;
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/rowCache.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "RowCache": ()=>RowCache
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
;
class RowCache {
    /**
     * Returns a row either by creating a new one or reusing
     * a previously released row which shares the same templateId.
     *
     * @returns A row and `isReusingConnectedDomNode` if the row's node is already in the dom in a stale position.
     */ alloc(templateId) {
        let result = this.getTemplateCache(templateId).pop();
        let isStale = false;
        if (result) {
            isStale = this.transactionNodesPendingRemoval.has(result.domNode);
            if (isStale) {
                this.transactionNodesPendingRemoval.delete(result.domNode);
            }
        } else {
            const domNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.monaco-list-row');
            const renderer = this.getRenderer(templateId);
            const templateData = renderer.renderTemplate(domNode);
            result = {
                domNode,
                templateId,
                templateData
            };
        }
        return {
            row: result,
            isReusingConnectedDomNode: isStale
        };
    }
    /**
     * Releases the row for eventual reuse.
     */ release(row) {
        if (!row) {
            return;
        }
        this.releaseRow(row);
    }
    /**
     * Begin a set of changes that use the cache. This lets us skip work when a row is removed and then inserted again.
     */ transact(makeChanges) {
        if (this.inTransaction) {
            throw new Error('Already in transaction');
        }
        this.inTransaction = true;
        try {
            makeChanges();
        } finally{
            for (const domNode of this.transactionNodesPendingRemoval){
                this.doRemoveNode(domNode);
            }
            this.transactionNodesPendingRemoval.clear();
            this.inTransaction = false;
        }
    }
    releaseRow(row) {
        const { domNode, templateId } = row;
        if (domNode) {
            if (this.inTransaction) {
                this.transactionNodesPendingRemoval.add(domNode);
            } else {
                this.doRemoveNode(domNode);
            }
        }
        const cache = this.getTemplateCache(templateId);
        cache.push(row);
    }
    doRemoveNode(domNode) {
        domNode.classList.remove('scrolling');
        domNode.remove();
    }
    getTemplateCache(templateId) {
        let result = this.cache.get(templateId);
        if (!result) {
            result = [];
            this.cache.set(templateId, result);
        }
        return result;
    }
    dispose() {
        this.cache.forEach((cachedRows, templateId)=>{
            for (const cachedRow of cachedRows){
                const renderer = this.getRenderer(templateId);
                renderer.disposeTemplate(cachedRow.templateData);
                cachedRow.templateData = null;
            }
        });
        this.cache.clear();
        this.transactionNodesPendingRemoval.clear();
    }
    getRenderer(templateId) {
        const renderer = this.renderers.get(templateId);
        if (!renderer) {
            throw new Error("No renderer found for ".concat(templateId));
        }
        return renderer;
    }
    constructor(renderers){
        this.renderers = renderers;
        this.cache = new Map();
        this.transactionNodesPendingRemoval = new Set();
        this.inTransaction = false;
    }
}
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "ElementsDragAndDropData": ()=>ElementsDragAndDropData,
    "ExternalElementsDragAndDropData": ()=>ExternalElementsDragAndDropData,
    "ListView": ()=>ListView,
    "NativeDragAndDropData": ()=>NativeDragAndDropData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dnd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dnd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/touch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$scrollable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/scrollable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$rangeMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/rangeMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$rowCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/rowCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/numbers.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
const StaticDND = {
    CurrentDragAndDropData: undefined
};
const DefaultOptions = {
    useShadows: true,
    verticalScrollMode: 1 /* ScrollbarVisibility.Auto */ ,
    setRowLineHeight: true,
    setRowHeight: true,
    supportDynamicHeights: false,
    dnd: {
        getDragElements (e) {
            return [
                e
            ];
        },
        getDragURI () {
            return null;
        },
        onDragStart () {},
        onDragOver () {
            return false;
        },
        drop () {},
        dispose () {}
    },
    horizontalScrolling: false,
    transformOptimization: true,
    alwaysConsumeMouseWheel: true
};
class ElementsDragAndDropData {
    update() {}
    getData() {
        return this.elements;
    }
    constructor(elements){
        this.elements = elements;
    }
}
class ExternalElementsDragAndDropData {
    update() {}
    getData() {
        return this.elements;
    }
    constructor(elements){
        this.elements = elements;
    }
}
class NativeDragAndDropData {
    update(dataTransfer) {
        if (dataTransfer.types) {
            this.types.splice(0, this.types.length, ...dataTransfer.types);
        }
        if (dataTransfer.files) {
            this.files.splice(0, this.files.length);
            for(let i = 0; i < dataTransfer.files.length; i++){
                const file = dataTransfer.files.item(i);
                if (file && (file.size || file.type)) {
                    this.files.push(file);
                }
            }
        }
    }
    getData() {
        return {
            types: this.types,
            files: this.files
        };
    }
    constructor(){
        this.types = [];
        this.files = [];
    }
}
function equalsDragFeedback(f1, f2) {
    if (Array.isArray(f1) && Array.isArray(f2)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equals"])(f1, f2);
    }
    return f1 === f2;
}
class ListViewAccessibilityProvider {
    constructor(accessibilityProvider){
        if (accessibilityProvider === null || accessibilityProvider === void 0 ? void 0 : accessibilityProvider.getSetSize) {
            this.getSetSize = accessibilityProvider.getSetSize.bind(accessibilityProvider);
        } else {
            this.getSetSize = (e, i, l)=>l;
        }
        if (accessibilityProvider === null || accessibilityProvider === void 0 ? void 0 : accessibilityProvider.getPosInSet) {
            this.getPosInSet = accessibilityProvider.getPosInSet.bind(accessibilityProvider);
        } else {
            this.getPosInSet = (e, i)=>i + 1;
        }
        if (accessibilityProvider === null || accessibilityProvider === void 0 ? void 0 : accessibilityProvider.getRole) {
            this.getRole = accessibilityProvider.getRole.bind(accessibilityProvider);
        } else {
            this.getRole = (_)=>'listitem';
        }
        if (accessibilityProvider === null || accessibilityProvider === void 0 ? void 0 : accessibilityProvider.isChecked) {
            this.isChecked = accessibilityProvider.isChecked.bind(accessibilityProvider);
        } else {
            this.isChecked = (_)=>undefined;
        }
    }
}
class ListView {
    get contentHeight() {
        return this.rangeMap.size;
    }
    get onDidScroll() {
        return this.scrollableElement.onScroll;
    }
    get scrollableElementDomNode() {
        return this.scrollableElement.getDomNode();
    }
    get horizontalScrolling() {
        return this._horizontalScrolling;
    }
    set horizontalScrolling(value) {
        if (value === this._horizontalScrolling) {
            return;
        }
        if (value && this.supportDynamicHeights) {
            throw new Error('Horizontal scrolling and dynamic heights not supported simultaneously');
        }
        this._horizontalScrolling = value;
        this.domNode.classList.toggle('horizontal-scrolling', this._horizontalScrolling);
        if (this._horizontalScrolling) {
            for (const item of this.items){
                this.measureItemWidth(item);
            }
            this.updateScrollWidth();
            this.scrollableElement.setScrollDimensions({
                width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentWidth"])(this.domNode)
            });
            this.rowsContainer.style.width = "".concat(Math.max(this.scrollWidth || 0, this.renderWidth), "px");
        } else {
            this.scrollableElementWidthDelayer.cancel();
            this.scrollableElement.setScrollDimensions({
                width: this.renderWidth,
                scrollWidth: this.renderWidth
            });
            this.rowsContainer.style.width = '';
        }
    }
    updateOptions(options) {
        if (options.paddingBottom !== undefined) {
            this.paddingBottom = options.paddingBottom;
            this.scrollableElement.setScrollDimensions({
                scrollHeight: this.scrollHeight
            });
        }
        if (options.smoothScrolling !== undefined) {
            this.scrollable.setSmoothScrollDuration(options.smoothScrolling ? 125 : 0);
        }
        if (options.horizontalScrolling !== undefined) {
            this.horizontalScrolling = options.horizontalScrolling;
        }
        let scrollableOptions;
        if (options.scrollByPage !== undefined) {
            scrollableOptions = {
                ...scrollableOptions !== null && scrollableOptions !== void 0 ? scrollableOptions : {},
                scrollByPage: options.scrollByPage
            };
        }
        if (options.mouseWheelScrollSensitivity !== undefined) {
            scrollableOptions = {
                ...scrollableOptions !== null && scrollableOptions !== void 0 ? scrollableOptions : {},
                mouseWheelScrollSensitivity: options.mouseWheelScrollSensitivity
            };
        }
        if (options.fastScrollSensitivity !== undefined) {
            scrollableOptions = {
                ...scrollableOptions !== null && scrollableOptions !== void 0 ? scrollableOptions : {},
                fastScrollSensitivity: options.fastScrollSensitivity
            };
        }
        if (scrollableOptions) {
            this.scrollableElement.updateOptions(scrollableOptions);
        }
        if (options.paddingTop !== undefined && options.paddingTop !== this.rangeMap.paddingTop) {
            // trigger a rerender
            const lastRenderRange = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
            const offset = options.paddingTop - this.rangeMap.paddingTop;
            this.rangeMap.paddingTop = options.paddingTop;
            this.render(lastRenderRange, Math.max(0, this.lastRenderTop + offset), this.lastRenderHeight, undefined, undefined, true);
            this.setScrollTop(this.lastRenderTop);
            this.eventuallyUpdateScrollDimensions();
            if (this.supportDynamicHeights) {
                this._rerender(this.lastRenderTop, this.lastRenderHeight);
            }
        }
    }
    createRangeMap(paddingTop) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$rangeMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangeMap"](paddingTop);
    }
    splice(start, deleteCount) {
        let elements = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        if (this.splicing) {
            throw new Error('Can\'t run recursive splices.');
        }
        this.splicing = true;
        try {
            return this._splice(start, deleteCount, elements);
        } finally{
            this.splicing = false;
            this._onDidChangeContentHeight.fire(this.contentHeight);
        }
    }
    _splice(start, deleteCount) {
        let elements = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        const previousRenderRange = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
        const deleteRange = {
            start,
            end: start + deleteCount
        };
        const removeRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].intersect(previousRenderRange, deleteRange);
        // try to reuse rows, avoid removing them from DOM
        const rowsToDispose = new Map();
        for(let i = removeRange.end - 1; i >= removeRange.start; i--){
            const item = this.items[i];
            item.dragStartDisposable.dispose();
            item.checkedDisposable.dispose();
            if (item.row) {
                let rows = rowsToDispose.get(item.templateId);
                if (!rows) {
                    rows = [];
                    rowsToDispose.set(item.templateId, rows);
                }
                const renderer = this.renderers.get(item.templateId);
                if (renderer && renderer.disposeElement) {
                    renderer.disposeElement(item.element, i, item.row.templateData, item.size);
                }
                rows.unshift(item.row);
            }
            item.row = null;
            item.stale = true;
        }
        const previousRestRange = {
            start: start + deleteCount,
            end: this.items.length
        };
        const previousRenderedRestRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].intersect(previousRestRange, previousRenderRange);
        const previousUnrenderedRestRanges = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].relativeComplement(previousRestRange, previousRenderRange);
        const inserted = elements.map((element)=>({
                id: String(this.itemId++),
                element,
                templateId: this.virtualDelegate.getTemplateId(element),
                size: this.virtualDelegate.getHeight(element),
                width: undefined,
                hasDynamicHeight: !!this.virtualDelegate.hasDynamicHeight && this.virtualDelegate.hasDynamicHeight(element),
                lastDynamicHeightWidth: undefined,
                row: null,
                uri: undefined,
                dropTarget: false,
                dragStartDisposable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None,
                checkedDisposable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None,
                stale: false
            }));
        let deleted;
        // TODO@joao: improve this optimization to catch even more cases
        if (start === 0 && deleteCount >= this.items.length) {
            this.rangeMap = this.createRangeMap(this.rangeMap.paddingTop);
            this.rangeMap.splice(0, 0, inserted);
            deleted = this.items;
            this.items = inserted;
        } else {
            this.rangeMap.splice(start, deleteCount, inserted);
            deleted = this.items.splice(start, deleteCount, ...inserted);
        }
        const delta = elements.length - deleteCount;
        const renderRange = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
        const renderedRestRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$rangeMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shift"])(previousRenderedRestRange, delta);
        const updateRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].intersect(renderRange, renderedRestRange);
        for(let i = updateRange.start; i < updateRange.end; i++){
            this.updateItemInDOM(this.items[i], i);
        }
        const removeRanges = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].relativeComplement(renderedRestRange, renderRange);
        for (const range of removeRanges){
            for(let i = range.start; i < range.end; i++){
                this.removeItemFromDOM(i);
            }
        }
        const unrenderedRestRanges = previousUnrenderedRestRanges.map((r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$rangeMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shift"])(r, delta));
        const elementsRange = {
            start,
            end: start + elements.length
        };
        const insertRanges = [
            elementsRange,
            ...unrenderedRestRanges
        ].map((r)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].intersect(renderRange, r)).reverse();
        for (const range of insertRanges){
            for(let i = range.end - 1; i >= range.start; i--){
                const item = this.items[i];
                const rows = rowsToDispose.get(item.templateId);
                const row = rows === null || rows === void 0 ? void 0 : rows.pop();
                this.insertItemInDOM(i, row);
            }
        }
        for (const rows of rowsToDispose.values()){
            for (const row of rows){
                this.cache.release(row);
            }
        }
        this.eventuallyUpdateScrollDimensions();
        if (this.supportDynamicHeights) {
            this._rerender(this.scrollTop, this.renderHeight);
        }
        return deleted.map((i)=>i.element);
    }
    eventuallyUpdateScrollDimensions() {
        this._scrollHeight = this.contentHeight;
        this.rowsContainer.style.height = "".concat(this._scrollHeight, "px");
        if (!this.scrollableElementUpdateDisposable) {
            this.scrollableElementUpdateDisposable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAtNextAnimationFrame"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(this.domNode), ()=>{
                this.scrollableElement.setScrollDimensions({
                    scrollHeight: this.scrollHeight
                });
                this.updateScrollWidth();
                this.scrollableElementUpdateDisposable = null;
            });
        }
    }
    eventuallyUpdateScrollWidth() {
        if (!this.horizontalScrolling) {
            this.scrollableElementWidthDelayer.cancel();
            return;
        }
        this.scrollableElementWidthDelayer.trigger(()=>this.updateScrollWidth());
    }
    updateScrollWidth() {
        if (!this.horizontalScrolling) {
            return;
        }
        let scrollWidth = 0;
        for (const item of this.items){
            if (typeof item.width !== 'undefined') {
                scrollWidth = Math.max(scrollWidth, item.width);
            }
        }
        this.scrollWidth = scrollWidth;
        this.scrollableElement.setScrollDimensions({
            scrollWidth: scrollWidth === 0 ? 0 : scrollWidth + 10
        });
        this._onDidChangeContentWidth.fire(this.scrollWidth);
    }
    rerender() {
        if (!this.supportDynamicHeights) {
            return;
        }
        for (const item of this.items){
            item.lastDynamicHeightWidth = undefined;
        }
        this._rerender(this.lastRenderTop, this.lastRenderHeight);
    }
    get length() {
        return this.items.length;
    }
    get renderHeight() {
        const scrollDimensions = this.scrollableElement.getScrollDimensions();
        return scrollDimensions.height;
    }
    get firstVisibleIndex() {
        const range = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
        return range.start;
    }
    element(index) {
        return this.items[index].element;
    }
    indexOf(element) {
        return this.items.findIndex((item)=>item.element === element);
    }
    domElement(index) {
        const row = this.items[index].row;
        return row && row.domNode;
    }
    elementHeight(index) {
        return this.items[index].size;
    }
    elementTop(index) {
        return this.rangeMap.positionAt(index);
    }
    indexAt(position) {
        return this.rangeMap.indexAt(position);
    }
    indexAfter(position) {
        return this.rangeMap.indexAfter(position);
    }
    layout(height, width) {
        const scrollDimensions = {
            height: typeof height === 'number' ? height : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentHeight"])(this.domNode)
        };
        if (this.scrollableElementUpdateDisposable) {
            this.scrollableElementUpdateDisposable.dispose();
            this.scrollableElementUpdateDisposable = null;
            scrollDimensions.scrollHeight = this.scrollHeight;
        }
        this.scrollableElement.setScrollDimensions(scrollDimensions);
        if (typeof width !== 'undefined') {
            this.renderWidth = width;
            if (this.supportDynamicHeights) {
                this._rerender(this.scrollTop, this.renderHeight);
            }
        }
        if (this.horizontalScrolling) {
            this.scrollableElement.setScrollDimensions({
                width: typeof width === 'number' ? width : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentWidth"])(this.domNode)
            });
        }
    }
    // Render
    render(previousRenderRange, renderTop, renderHeight, renderLeft, scrollWidth) {
        let updateItemsInDOM = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
        const renderRange = this.getRenderRange(renderTop, renderHeight);
        const rangesToInsert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].relativeComplement(renderRange, previousRenderRange).reverse();
        const rangesToRemove = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].relativeComplement(previousRenderRange, renderRange);
        if (updateItemsInDOM) {
            const rangesToUpdate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].intersect(previousRenderRange, renderRange);
            for(let i = rangesToUpdate.start; i < rangesToUpdate.end; i++){
                this.updateItemInDOM(this.items[i], i);
            }
        }
        this.cache.transact(()=>{
            for (const range of rangesToRemove){
                for(let i = range.start; i < range.end; i++){
                    this.removeItemFromDOM(i);
                }
            }
            for (const range of rangesToInsert){
                for(let i = range.end - 1; i >= range.start; i--){
                    this.insertItemInDOM(i);
                }
            }
        });
        if (renderLeft !== undefined) {
            this.rowsContainer.style.left = "-".concat(renderLeft, "px");
        }
        this.rowsContainer.style.top = "-".concat(renderTop, "px");
        if (this.horizontalScrolling && scrollWidth !== undefined) {
            this.rowsContainer.style.width = "".concat(Math.max(scrollWidth, this.renderWidth), "px");
        }
        this.lastRenderTop = renderTop;
        this.lastRenderHeight = renderHeight;
    }
    // DOM operations
    insertItemInDOM(index, row) {
        const item = this.items[index];
        if (!item.row) {
            if (row) {
                item.row = row;
                item.stale = true;
            } else {
                var _item;
                const result = this.cache.alloc(item.templateId);
                item.row = result.row;
                (_item = item).stale || (_item.stale = result.isReusingConnectedDomNode);
            }
        }
        const role = this.accessibilityProvider.getRole(item.element) || 'listitem';
        item.row.domNode.setAttribute('role', role);
        const checked = this.accessibilityProvider.isChecked(item.element);
        if (typeof checked === 'boolean') {
            item.row.domNode.setAttribute('aria-checked', String(!!checked));
        } else if (checked) {
            const update = (checked)=>item.row.domNode.setAttribute('aria-checked', String(!!checked));
            update(checked.value);
            item.checkedDisposable = checked.onDidChange(()=>update(checked.value));
        }
        if (item.stale || !item.row.domNode.parentElement) {
            var _this_items_at_row, _this_items_at;
            var _this_items_at_row_domNode;
            const referenceNode = (_this_items_at_row_domNode = (_this_items_at = this.items.at(index + 1)) === null || _this_items_at === void 0 ? void 0 : (_this_items_at_row = _this_items_at.row) === null || _this_items_at_row === void 0 ? void 0 : _this_items_at_row.domNode) !== null && _this_items_at_row_domNode !== void 0 ? _this_items_at_row_domNode : null;
            if (item.row.domNode.parentElement !== this.rowsContainer || item.row.domNode.nextElementSibling !== referenceNode) {
                this.rowsContainer.insertBefore(item.row.domNode, referenceNode);
            }
            item.stale = false;
        }
        this.updateItemInDOM(item, index);
        const renderer = this.renderers.get(item.templateId);
        if (!renderer) {
            throw new Error("No renderer found for template id ".concat(item.templateId));
        }
        renderer === null || renderer === void 0 ? void 0 : renderer.renderElement(item.element, index, item.row.templateData, item.size);
        const uri = this.dnd.getDragURI(item.element);
        item.dragStartDisposable.dispose();
        item.row.domNode.draggable = !!uri;
        if (uri) {
            item.dragStartDisposable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(item.row.domNode, 'dragstart', (event)=>this.onDragStart(item.element, uri, event));
        }
        if (this.horizontalScrolling) {
            this.measureItemWidth(item);
            this.eventuallyUpdateScrollWidth();
        }
    }
    measureItemWidth(item) {
        if (!item.row || !item.row.domNode) {
            return;
        }
        item.row.domNode.style.width = 'fit-content';
        item.width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentWidth"])(item.row.domNode);
        const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(item.row.domNode).getComputedStyle(item.row.domNode);
        if (style.paddingLeft) {
            item.width += parseFloat(style.paddingLeft);
        }
        if (style.paddingRight) {
            item.width += parseFloat(style.paddingRight);
        }
        item.row.domNode.style.width = '';
    }
    updateItemInDOM(item, index) {
        item.row.domNode.style.top = "".concat(this.elementTop(index), "px");
        if (this.setRowHeight) {
            item.row.domNode.style.height = "".concat(item.size, "px");
        }
        if (this.setRowLineHeight) {
            item.row.domNode.style.lineHeight = "".concat(item.size, "px");
        }
        item.row.domNode.setAttribute('data-index', "".concat(index));
        item.row.domNode.setAttribute('data-last-element', index === this.length - 1 ? 'true' : 'false');
        item.row.domNode.setAttribute('data-parity', index % 2 === 0 ? 'even' : 'odd');
        item.row.domNode.setAttribute('aria-setsize', String(this.accessibilityProvider.getSetSize(item.element, index, this.length)));
        item.row.domNode.setAttribute('aria-posinset', String(this.accessibilityProvider.getPosInSet(item.element, index)));
        item.row.domNode.setAttribute('id', this.getElementDomId(index));
        item.row.domNode.classList.toggle('drop-target', item.dropTarget);
    }
    removeItemFromDOM(index) {
        const item = this.items[index];
        item.dragStartDisposable.dispose();
        item.checkedDisposable.dispose();
        if (item.row) {
            const renderer = this.renderers.get(item.templateId);
            if (renderer && renderer.disposeElement) {
                renderer.disposeElement(item.element, index, item.row.templateData, item.size);
            }
            this.cache.release(item.row);
            item.row = null;
        }
        if (this.horizontalScrolling) {
            this.eventuallyUpdateScrollWidth();
        }
    }
    getScrollTop() {
        const scrollPosition = this.scrollableElement.getScrollPosition();
        return scrollPosition.scrollTop;
    }
    setScrollTop(scrollTop, reuseAnimation) {
        if (this.scrollableElementUpdateDisposable) {
            this.scrollableElementUpdateDisposable.dispose();
            this.scrollableElementUpdateDisposable = null;
            this.scrollableElement.setScrollDimensions({
                scrollHeight: this.scrollHeight
            });
        }
        this.scrollableElement.setScrollPosition({
            scrollTop,
            reuseAnimation
        });
    }
    get scrollTop() {
        return this.getScrollTop();
    }
    set scrollTop(scrollTop) {
        this.setScrollTop(scrollTop);
    }
    get scrollHeight() {
        return this._scrollHeight + (this.horizontalScrolling ? 10 : 0) + this.paddingBottom;
    }
    // Events
    get onMouseClick() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.domNode, 'click')).event, (e)=>this.toMouseEvent(e), this.disposables);
    }
    get onMouseDblClick() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.domNode, 'dblclick')).event, (e)=>this.toMouseEvent(e), this.disposables);
    }
    get onMouseMiddleClick() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.domNode, 'auxclick')).event, (e)=>this.toMouseEvent(e), this.disposables), (e)=>e.browserEvent.button === 1, this.disposables);
    }
    get onMouseDown() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.domNode, 'mousedown')).event, (e)=>this.toMouseEvent(e), this.disposables);
    }
    get onMouseOver() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.domNode, 'mouseover')).event, (e)=>this.toMouseEvent(e), this.disposables);
    }
    get onMouseOut() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.domNode, 'mouseout')).event, (e)=>this.toMouseEvent(e), this.disposables);
    }
    get onContextMenu() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].any(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.domNode, 'contextmenu')).event, (e)=>this.toMouseEvent(e), this.disposables), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.domNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Contextmenu)).event, (e)=>this.toGestureEvent(e), this.disposables));
    }
    get onTouchStart() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.domNode, 'touchstart')).event, (e)=>this.toTouchEvent(e), this.disposables);
    }
    get onTap() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.rowsContainer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Tap)).event, (e)=>this.toGestureEvent(e), this.disposables);
    }
    toMouseEvent(browserEvent) {
        const index = this.getItemIndexFromEventTarget(browserEvent.target || null);
        const item = typeof index === 'undefined' ? undefined : this.items[index];
        const element = item && item.element;
        return {
            browserEvent,
            index,
            element
        };
    }
    toTouchEvent(browserEvent) {
        const index = this.getItemIndexFromEventTarget(browserEvent.target || null);
        const item = typeof index === 'undefined' ? undefined : this.items[index];
        const element = item && item.element;
        return {
            browserEvent,
            index,
            element
        };
    }
    toGestureEvent(browserEvent) {
        const index = this.getItemIndexFromEventTarget(browserEvent.initialTarget || null);
        const item = typeof index === 'undefined' ? undefined : this.items[index];
        const element = item && item.element;
        return {
            browserEvent,
            index,
            element
        };
    }
    toDragEvent(browserEvent) {
        const index = this.getItemIndexFromEventTarget(browserEvent.target || null);
        const item = typeof index === 'undefined' ? undefined : this.items[index];
        const element = item && item.element;
        const sector = this.getTargetSector(browserEvent, index);
        return {
            browserEvent,
            index,
            element,
            sector
        };
    }
    onScroll(e) {
        try {
            const previousRenderRange = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
            this.render(previousRenderRange, e.scrollTop, e.height, e.scrollLeft, e.scrollWidth);
            if (this.supportDynamicHeights) {
                this._rerender(e.scrollTop, e.height, e.inSmoothScrolling);
            }
        } catch (err) {
            console.error('Got bad scroll event:', e);
            throw err;
        }
    }
    onTouchChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.scrollTop -= event.translationY;
    }
    // DND
    onDragStart(element, uri, event) {
        var _this_dnd_onDragStart, _this_dnd;
        if (!event.dataTransfer) {
            return;
        }
        const elements = this.dnd.getDragElements(element);
        event.dataTransfer.effectAllowed = 'copyMove';
        event.dataTransfer.setData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dnd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTransfers"].TEXT, uri);
        if (event.dataTransfer.setDragImage) {
            let label;
            if (this.dnd.getDragLabel) {
                label = this.dnd.getDragLabel(elements, event);
            }
            if (typeof label === 'undefined') {
                label = String(elements.length);
            }
            const dragImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["$"])('.monaco-drag-image');
            dragImage.textContent = label;
            const getDragImageContainer = (e)=>{
                while(e && !e.classList.contains('monaco-workbench')){
                    e = e.parentElement;
                }
                return e || this.domNode.ownerDocument;
            };
            const container = getDragImageContainer(this.domNode);
            container.appendChild(dragImage);
            event.dataTransfer.setDragImage(dragImage, -10, -10);
            setTimeout(()=>dragImage.remove(), 0);
        }
        this.domNode.classList.add('dragging');
        this.currentDragData = new ElementsDragAndDropData(elements);
        StaticDND.CurrentDragAndDropData = new ExternalElementsDragAndDropData(elements);
        (_this_dnd_onDragStart = (_this_dnd = this.dnd).onDragStart) === null || _this_dnd_onDragStart === void 0 ? void 0 : _this_dnd_onDragStart.call(_this_dnd, this.currentDragData, event);
    }
    onDragOver(event) {
        var _result_effect;
        event.browserEvent.preventDefault(); // needed so that the drop event fires (https://stackoverflow.com/questions/21339924/drop-event-not-firing-in-chrome)
        this.onDragLeaveTimeout.dispose();
        if (StaticDND.CurrentDragAndDropData && StaticDND.CurrentDragAndDropData.getData() === 'vscode-ui') {
            return false;
        }
        this.setupDragAndDropScrollTopAnimation(event.browserEvent);
        if (!event.browserEvent.dataTransfer) {
            return false;
        }
        // Drag over from outside
        if (!this.currentDragData) {
            if (StaticDND.CurrentDragAndDropData) {
                // Drag over from another list
                this.currentDragData = StaticDND.CurrentDragAndDropData;
            } else {
                // Drag over from the desktop
                if (!event.browserEvent.dataTransfer.types) {
                    return false;
                }
                this.currentDragData = new NativeDragAndDropData();
            }
        }
        const result = this.dnd.onDragOver(this.currentDragData, event.element, event.index, event.sector, event.browserEvent);
        this.canDrop = typeof result === 'boolean' ? result : result.accept;
        if (!this.canDrop) {
            this.currentDragFeedback = undefined;
            this.currentDragFeedbackDisposable.dispose();
            return false;
        }
        event.browserEvent.dataTransfer.dropEffect = typeof result !== 'boolean' && ((_result_effect = result.effect) === null || _result_effect === void 0 ? void 0 : _result_effect.type) === 0 /* ListDragOverEffectType.Copy */  ? 'copy' : 'move';
        let feedback;
        if (typeof result !== 'boolean' && result.feedback) {
            feedback = result.feedback;
        } else {
            if (typeof event.index === 'undefined') {
                feedback = [
                    -1
                ];
            } else {
                feedback = [
                    event.index
                ];
            }
        }
        // sanitize feedback list
        feedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distinct"])(feedback).filter((i)=>i >= -1 && i < this.length).sort((a, b)=>a - b);
        feedback = feedback[0] === -1 ? [
            -1
        ] : feedback;
        let dragOverEffectPosition = typeof result !== 'boolean' && result.effect && result.effect.position ? result.effect.position : "drop-target" /* ListDragOverEffectPosition.Over */ ;
        if (equalsDragFeedback(this.currentDragFeedback, feedback) && this.currentDragFeedbackPosition === dragOverEffectPosition) {
            return true;
        }
        this.currentDragFeedback = feedback;
        this.currentDragFeedbackPosition = dragOverEffectPosition;
        this.currentDragFeedbackDisposable.dispose();
        if (feedback[0] === -1) {
            this.domNode.classList.add(dragOverEffectPosition);
            this.rowsContainer.classList.add(dragOverEffectPosition);
            this.currentDragFeedbackDisposable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
                this.domNode.classList.remove(dragOverEffectPosition);
                this.rowsContainer.classList.remove(dragOverEffectPosition);
            });
        } else {
            if (feedback.length > 1 && dragOverEffectPosition !== "drop-target" /* ListDragOverEffectPosition.Over */ ) {
                throw new Error('Can\'t use multiple feedbacks with position different than \'over\'');
            }
            // Make sure there is no flicker when moving between two items
            // Always use the before feedback if possible
            if (dragOverEffectPosition === "drop-target-after" /* ListDragOverEffectPosition.After */ ) {
                if (feedback[0] < this.length - 1) {
                    feedback[0] += 1;
                    dragOverEffectPosition = "drop-target-before" /* ListDragOverEffectPosition.Before */ ;
                }
            }
            for (const index of feedback){
                var _item_row;
                const item = this.items[index];
                item.dropTarget = true;
                (_item_row = item.row) === null || _item_row === void 0 ? void 0 : _item_row.domNode.classList.add(dragOverEffectPosition);
            }
            this.currentDragFeedbackDisposable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisposable"])(()=>{
                for (const index of feedback){
                    var _item_row;
                    const item = this.items[index];
                    item.dropTarget = false;
                    (_item_row = item.row) === null || _item_row === void 0 ? void 0 : _item_row.domNode.classList.remove(dragOverEffectPosition);
                }
            });
        }
        return true;
    }
    onDragLeave(event) {
        this.onDragLeaveTimeout.dispose();
        this.onDragLeaveTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposableTimeout"])(()=>this.clearDragOverFeedback(), 100, this.disposables);
        if (this.currentDragData) {
            var _this_dnd_onDragLeave, _this_dnd;
            (_this_dnd_onDragLeave = (_this_dnd = this.dnd).onDragLeave) === null || _this_dnd_onDragLeave === void 0 ? void 0 : _this_dnd_onDragLeave.call(_this_dnd, this.currentDragData, event.element, event.index, event.browserEvent);
        }
    }
    onDrop(event) {
        if (!this.canDrop) {
            return;
        }
        const dragData = this.currentDragData;
        this.teardownDragAndDropScrollTopAnimation();
        this.clearDragOverFeedback();
        this.domNode.classList.remove('dragging');
        this.currentDragData = undefined;
        StaticDND.CurrentDragAndDropData = undefined;
        if (!dragData || !event.browserEvent.dataTransfer) {
            return;
        }
        event.browserEvent.preventDefault();
        dragData.update(event.browserEvent.dataTransfer);
        this.dnd.drop(dragData, event.element, event.index, event.sector, event.browserEvent);
    }
    onDragEnd(event) {
        var _this_dnd_onDragEnd, _this_dnd;
        this.canDrop = false;
        this.teardownDragAndDropScrollTopAnimation();
        this.clearDragOverFeedback();
        this.domNode.classList.remove('dragging');
        this.currentDragData = undefined;
        StaticDND.CurrentDragAndDropData = undefined;
        (_this_dnd_onDragEnd = (_this_dnd = this.dnd).onDragEnd) === null || _this_dnd_onDragEnd === void 0 ? void 0 : _this_dnd_onDragEnd.call(_this_dnd, event);
    }
    clearDragOverFeedback() {
        this.currentDragFeedback = undefined;
        this.currentDragFeedbackPosition = undefined;
        this.currentDragFeedbackDisposable.dispose();
        this.currentDragFeedbackDisposable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
    }
    // DND scroll top animation
    setupDragAndDropScrollTopAnimation(event) {
        if (!this.dragOverAnimationDisposable) {
            const viewTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTopLeftOffset"])(this.domNode).top;
            this.dragOverAnimationDisposable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(this.domNode), this.animateDragAndDropScrollTop.bind(this, viewTop));
        }
        this.dragOverAnimationStopDisposable.dispose();
        this.dragOverAnimationStopDisposable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposableTimeout"])(()=>{
            if (this.dragOverAnimationDisposable) {
                this.dragOverAnimationDisposable.dispose();
                this.dragOverAnimationDisposable = undefined;
            }
        }, 1000, this.disposables);
        this.dragOverMouseY = event.pageY;
    }
    animateDragAndDropScrollTop(viewTop) {
        if (this.dragOverMouseY === undefined) {
            return;
        }
        const diff = this.dragOverMouseY - viewTop;
        const upperLimit = this.renderHeight - 35;
        if (diff < 35) {
            this.scrollTop += Math.max(-14, Math.floor(0.3 * (diff - 35)));
        } else if (diff > upperLimit) {
            this.scrollTop += Math.min(14, Math.floor(0.3 * (diff - upperLimit)));
        }
    }
    teardownDragAndDropScrollTopAnimation() {
        this.dragOverAnimationStopDisposable.dispose();
        if (this.dragOverAnimationDisposable) {
            this.dragOverAnimationDisposable.dispose();
            this.dragOverAnimationDisposable = undefined;
        }
    }
    // Util
    getTargetSector(browserEvent, targetIndex) {
        if (targetIndex === undefined) {
            return undefined;
        }
        const relativePosition = browserEvent.offsetY / this.items[targetIndex].size;
        const sector = Math.floor(relativePosition / 0.25);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(sector, 0, 3);
    }
    getItemIndexFromEventTarget(target) {
        const scrollableElement = this.scrollableElement.getDomNode();
        let element = target;
        while(((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGElement"])(element)) && element !== this.rowsContainer && scrollableElement.contains(element)){
            const rawIndex = element.getAttribute('data-index');
            if (rawIndex) {
                const index = Number(rawIndex);
                if (!isNaN(index)) {
                    return index;
                }
            }
            element = element.parentElement;
        }
        return undefined;
    }
    getRenderRange(renderTop, renderHeight) {
        return {
            start: this.rangeMap.indexAt(renderTop),
            end: this.rangeMap.indexAfter(renderTop + renderHeight - 1)
        };
    }
    /**
     * Given a stable rendered state, checks every rendered element whether it needs
     * to be probed for dynamic height. Adjusts scroll height and top if necessary.
     */ _rerender(renderTop, renderHeight, inSmoothScrolling) {
        const previousRenderRange = this.getRenderRange(renderTop, renderHeight);
        // Let's remember the second element's position, this helps in scrolling up
        // and preserving a linear upwards scroll movement
        let anchorElementIndex;
        let anchorElementTopDelta;
        if (renderTop === this.elementTop(previousRenderRange.start)) {
            anchorElementIndex = previousRenderRange.start;
            anchorElementTopDelta = 0;
        } else if (previousRenderRange.end - previousRenderRange.start > 1) {
            anchorElementIndex = previousRenderRange.start + 1;
            anchorElementTopDelta = this.elementTop(anchorElementIndex) - renderTop;
        }
        let heightDiff = 0;
        while(true){
            const renderRange = this.getRenderRange(renderTop, renderHeight);
            let didChange = false;
            for(let i = renderRange.start; i < renderRange.end; i++){
                const diff = this.probeDynamicHeight(i);
                if (diff !== 0) {
                    this.rangeMap.splice(i, 1, [
                        this.items[i]
                    ]);
                }
                heightDiff += diff;
                didChange = didChange || diff !== 0;
            }
            if (!didChange) {
                if (heightDiff !== 0) {
                    this.eventuallyUpdateScrollDimensions();
                }
                const unrenderRanges = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].relativeComplement(previousRenderRange, renderRange);
                for (const range of unrenderRanges){
                    for(let i = range.start; i < range.end; i++){
                        if (this.items[i].row) {
                            this.removeItemFromDOM(i);
                        }
                    }
                }
                const renderRanges = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"].relativeComplement(renderRange, previousRenderRange).reverse();
                for (const range of renderRanges){
                    for(let i = range.end - 1; i >= range.start; i--){
                        this.insertItemInDOM(i);
                    }
                }
                for(let i = renderRange.start; i < renderRange.end; i++){
                    if (this.items[i].row) {
                        this.updateItemInDOM(this.items[i], i);
                    }
                }
                if (typeof anchorElementIndex === 'number') {
                    // To compute a destination scroll top, we need to take into account the current smooth scrolling
                    // animation, and then reuse it with a new target (to avoid prolonging the scroll)
                    // See https://github.com/microsoft/vscode/issues/104144
                    // See https://github.com/microsoft/vscode/pull/104284
                    // See https://github.com/microsoft/vscode/issues/107704
                    const deltaScrollTop = this.scrollable.getFutureScrollPosition().scrollTop - renderTop;
                    const newScrollTop = this.elementTop(anchorElementIndex) - anchorElementTopDelta + deltaScrollTop;
                    this.setScrollTop(newScrollTop, inSmoothScrolling);
                }
                this._onDidChangeContentHeight.fire(this.contentHeight);
                return;
            }
        }
    }
    probeDynamicHeight(index) {
        var _renderer_disposeElement, _this_virtualDelegate_setDynamicHeight, _this_virtualDelegate;
        const item = this.items[index];
        if (!!this.virtualDelegate.getDynamicHeight) {
            const newSize = this.virtualDelegate.getDynamicHeight(item.element);
            if (newSize !== null) {
                const size = item.size;
                item.size = newSize;
                item.lastDynamicHeightWidth = this.renderWidth;
                return newSize - size;
            }
        }
        if (!item.hasDynamicHeight || item.lastDynamicHeightWidth === this.renderWidth) {
            return 0;
        }
        if (!!this.virtualDelegate.hasDynamicHeight && !this.virtualDelegate.hasDynamicHeight(item.element)) {
            return 0;
        }
        const size = item.size;
        if (item.row) {
            item.row.domNode.style.height = '';
            item.size = item.row.domNode.offsetHeight;
            if (item.size === 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAncestor"])(item.row.domNode, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(item.row.domNode).document.body)) {
                console.warn('Measuring item node that is not in DOM! Add ListView to the DOM before measuring row height!', new Error().stack);
            }
            item.lastDynamicHeightWidth = this.renderWidth;
            return item.size - size;
        }
        const { row } = this.cache.alloc(item.templateId);
        row.domNode.style.height = '';
        this.rowsContainer.appendChild(row.domNode);
        const renderer = this.renderers.get(item.templateId);
        if (!renderer) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BugIndicatingError"]('Missing renderer for templateId: ' + item.templateId);
        }
        renderer.renderElement(item.element, index, row.templateData, undefined);
        item.size = row.domNode.offsetHeight;
        (_renderer_disposeElement = renderer.disposeElement) === null || _renderer_disposeElement === void 0 ? void 0 : _renderer_disposeElement.call(renderer, item.element, index, row.templateData, undefined);
        (_this_virtualDelegate_setDynamicHeight = (_this_virtualDelegate = this.virtualDelegate).setDynamicHeight) === null || _this_virtualDelegate_setDynamicHeight === void 0 ? void 0 : _this_virtualDelegate_setDynamicHeight.call(_this_virtualDelegate, item.element, item.size);
        item.lastDynamicHeightWidth = this.renderWidth;
        row.domNode.remove();
        this.cache.release(row);
        return item.size - size;
    }
    getElementDomId(index) {
        return "".concat(this.domId, "_").concat(index);
    }
    // Dispose
    dispose() {
        var _this_domNode, _this_dragOverAnimationDisposable;
        for (const item of this.items){
            item.dragStartDisposable.dispose();
            item.checkedDisposable.dispose();
            if (item.row) {
                const renderer = this.renderers.get(item.row.templateId);
                if (renderer) {
                    var _renderer_disposeElement;
                    (_renderer_disposeElement = renderer.disposeElement) === null || _renderer_disposeElement === void 0 ? void 0 : _renderer_disposeElement.call(renderer, item.element, -1, item.row.templateData, undefined);
                    renderer.disposeTemplate(item.row.templateData);
                }
            }
        }
        this.items = [];
        (_this_domNode = this.domNode) === null || _this_domNode === void 0 ? void 0 : _this_domNode.remove();
        (_this_dragOverAnimationDisposable = this.dragOverAnimationDisposable) === null || _this_dragOverAnimationDisposable === void 0 ? void 0 : _this_dragOverAnimationDisposable.dispose();
        this.disposables.dispose();
    }
    constructor(container, virtualDelegate, renderers, options = DefaultOptions){
        var _options_initialSize, _options_initialSize1;
        this.virtualDelegate = virtualDelegate;
        this.domId = "list_id_".concat(++ListView.InstanceCount);
        this.renderers = new Map();
        this.renderWidth = 0;
        this._scrollHeight = 0;
        this.scrollableElementUpdateDisposable = null;
        this.scrollableElementWidthDelayer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delayer"](50);
        this.splicing = false;
        this.dragOverAnimationStopDisposable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
        this.dragOverMouseY = 0;
        this.canDrop = false;
        this.currentDragFeedbackDisposable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
        this.onDragLeaveTimeout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None;
        this.disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._onDidChangeContentHeight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this._onDidChangeContentWidth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onDidChangeContentHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].latch(this._onDidChangeContentHeight.event, undefined, this.disposables);
        this._horizontalScrolling = false;
        if (options.horizontalScrolling && options.supportDynamicHeights) {
            throw new Error('Horizontal scrolling and dynamic heights not supported simultaneously');
        }
        this.items = [];
        this.itemId = 0;
        var _options_paddingTop;
        this.rangeMap = this.createRangeMap((_options_paddingTop = options.paddingTop) !== null && _options_paddingTop !== void 0 ? _options_paddingTop : 0);
        for (const renderer of renderers){
            this.renderers.set(renderer.templateId, renderer);
        }
        this.cache = this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$rowCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RowCache"](this.renderers));
        this.lastRenderTop = 0;
        this.lastRenderHeight = 0;
        this.domNode = document.createElement('div');
        this.domNode.className = 'monaco-list';
        this.domNode.classList.add(this.domId);
        this.domNode.tabIndex = 0;
        this.domNode.classList.toggle('mouse-support', typeof options.mouseSupport === 'boolean' ? options.mouseSupport : true);
        var _options_horizontalScrolling;
        this._horizontalScrolling = (_options_horizontalScrolling = options.horizontalScrolling) !== null && _options_horizontalScrolling !== void 0 ? _options_horizontalScrolling : DefaultOptions.horizontalScrolling;
        this.domNode.classList.toggle('horizontal-scrolling', this._horizontalScrolling);
        this.paddingBottom = typeof options.paddingBottom === 'undefined' ? 0 : options.paddingBottom;
        this.accessibilityProvider = new ListViewAccessibilityProvider(options.accessibilityProvider);
        this.rowsContainer = document.createElement('div');
        this.rowsContainer.className = 'monaco-list-rows';
        var _options_transformOptimization;
        const transformOptimization = (_options_transformOptimization = options.transformOptimization) !== null && _options_transformOptimization !== void 0 ? _options_transformOptimization : DefaultOptions.transformOptimization;
        if (transformOptimization) {
            this.rowsContainer.style.transform = 'translate3d(0px, 0px, 0px)';
            this.rowsContainer.style.overflow = 'hidden';
            this.rowsContainer.style.contain = 'strict';
        }
        this.disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gesture"].addTarget(this.rowsContainer));
        var _options_smoothScrolling;
        this.scrollable = this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$scrollable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scrollable"]({
            forceIntegerValues: true,
            smoothScrollDuration: ((_options_smoothScrolling = options.smoothScrolling) !== null && _options_smoothScrolling !== void 0 ? _options_smoothScrolling : false) ? 125 : 0,
            scheduleAtNextAnimationFrame: (cb)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleAtNextAnimationFrame"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(this.domNode), cb)
        }));
        var _options_alwaysConsumeMouseWheel, _options_verticalScrollMode, _options_useShadows;
        this.scrollableElement = this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$scrollbar$2f$scrollableElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmoothScrollableElement"](this.rowsContainer, {
            alwaysConsumeMouseWheel: (_options_alwaysConsumeMouseWheel = options.alwaysConsumeMouseWheel) !== null && _options_alwaysConsumeMouseWheel !== void 0 ? _options_alwaysConsumeMouseWheel : DefaultOptions.alwaysConsumeMouseWheel,
            horizontal: 1 /* ScrollbarVisibility.Auto */ ,
            vertical: (_options_verticalScrollMode = options.verticalScrollMode) !== null && _options_verticalScrollMode !== void 0 ? _options_verticalScrollMode : DefaultOptions.verticalScrollMode,
            useShadows: (_options_useShadows = options.useShadows) !== null && _options_useShadows !== void 0 ? _options_useShadows : DefaultOptions.useShadows,
            mouseWheelScrollSensitivity: options.mouseWheelScrollSensitivity,
            fastScrollSensitivity: options.fastScrollSensitivity,
            scrollByPage: options.scrollByPage
        }, this.scrollable));
        this.domNode.appendChild(this.scrollableElement.getDomNode());
        container.appendChild(this.domNode);
        this.scrollableElement.onScroll(this.onScroll, this, this.disposables);
        this.disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.rowsContainer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventType"].Change, (e)=>this.onTouchChange(e)));
        // Prevent the monaco-scrollable-element from scrolling
        // https://github.com/microsoft/vscode/issues/44181
        this.disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.scrollableElement.getDomNode(), 'scroll', (e)=>e.target.scrollTop = 0));
        this.disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.domNode, 'dragover', (e)=>this.onDragOver(this.toDragEvent(e))));
        this.disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.domNode, 'drop', (e)=>this.onDrop(this.toDragEvent(e))));
        this.disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.domNode, 'dragleave', (e)=>this.onDragLeave(this.toDragEvent(e))));
        this.disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDisposableListener"])(this.domNode, 'dragend', (e)=>this.onDragEnd(e)));
        var _options_setRowLineHeight;
        this.setRowLineHeight = (_options_setRowLineHeight = options.setRowLineHeight) !== null && _options_setRowLineHeight !== void 0 ? _options_setRowLineHeight : DefaultOptions.setRowLineHeight;
        var _options_setRowHeight;
        this.setRowHeight = (_options_setRowHeight = options.setRowHeight) !== null && _options_setRowHeight !== void 0 ? _options_setRowHeight : DefaultOptions.setRowHeight;
        var _options_supportDynamicHeights;
        this.supportDynamicHeights = (_options_supportDynamicHeights = options.supportDynamicHeights) !== null && _options_supportDynamicHeights !== void 0 ? _options_supportDynamicHeights : DefaultOptions.supportDynamicHeights;
        var _options_dnd;
        this.dnd = (_options_dnd = options.dnd) !== null && _options_dnd !== void 0 ? _options_dnd : this.disposables.add(DefaultOptions.dnd);
        this.layout((_options_initialSize = options.initialSize) === null || _options_initialSize === void 0 ? void 0 : _options_initialSize.height, (_options_initialSize1 = options.initialSize) === null || _options_initialSize1 === void 0 ? void 0 : _options_initialSize1.width);
    }
}
ListView.InstanceCount = 0;
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], ListView.prototype, "onMouseClick", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], ListView.prototype, "onMouseDblClick", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], ListView.prototype, "onMouseMiddleClick", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], ListView.prototype, "onMouseDown", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], ListView.prototype, "onMouseOver", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], ListView.prototype, "onMouseOut", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], ListView.prototype, "onContextMenu", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], ListView.prototype, "onTouchStart", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], ListView.prototype, "onTap", null);
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "DefaultKeyboardNavigationDelegate": ()=>DefaultKeyboardNavigationDelegate,
    "DefaultStyleController": ()=>DefaultStyleController,
    "List": ()=>List,
    "MouseController": ()=>MouseController,
    "TypeNavigationMode": ()=>TypeNavigationMode,
    "isActionItem": ()=>isActionItem,
    "isButton": ()=>isButton,
    "isInputElement": ()=>isInputElement,
    "isMonacoCustomToggle": ()=>isMonacoCustomToggle,
    "isMonacoEditor": ()=>isMonacoEditor,
    "isSelectionRangeChangeEvent": ()=>isSelectionRangeChangeEvent,
    "isSelectionSingleChangeEvent": ()=>isSelectionSingleChangeEvent,
    "isStickyScrollContainer": ()=>isStickyScrollContainer,
    "isStickyScrollElement": ()=>isStickyScrollElement,
    "unthemedListStyles": ()=>unthemedListStyles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/touch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$splice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/splice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/async.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$filters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/filters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/numbers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/platform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observable.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/autorun.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/observableInternal/utils.js [app-client] (ecmascript)");
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
class TraitRenderer {
    get templateId() {
        return "template:".concat(this.trait.name);
    }
    renderTemplate(container) {
        return container;
    }
    renderElement(element, index, templateData) {
        const renderedElementIndex = this.renderedElements.findIndex((el)=>el.templateData === templateData);
        if (renderedElementIndex >= 0) {
            const rendered = this.renderedElements[renderedElementIndex];
            this.trait.unrender(templateData);
            rendered.index = index;
        } else {
            const rendered = {
                index,
                templateData
            };
            this.renderedElements.push(rendered);
        }
        this.trait.renderIndex(index, templateData);
    }
    splice(start, deleteCount, insertCount) {
        const rendered = [];
        for (const renderedElement of this.renderedElements){
            if (renderedElement.index < start) {
                rendered.push(renderedElement);
            } else if (renderedElement.index >= start + deleteCount) {
                rendered.push({
                    index: renderedElement.index + insertCount - deleteCount,
                    templateData: renderedElement.templateData
                });
            }
        }
        this.renderedElements = rendered;
    }
    renderIndexes(indexes) {
        for (const { index, templateData } of this.renderedElements){
            if (indexes.indexOf(index) > -1) {
                this.trait.renderIndex(index, templateData);
            }
        }
    }
    disposeTemplate(templateData) {
        const index = this.renderedElements.findIndex((el)=>el.templateData === templateData);
        if (index < 0) {
            return;
        }
        this.renderedElements.splice(index, 1);
    }
    constructor(trait){
        this.trait = trait;
        this.renderedElements = [];
    }
}
class Trait {
    get name() {
        return this._trait;
    }
    get renderer() {
        return new TraitRenderer(this);
    }
    splice(start, deleteCount, elements) {
        const diff = elements.length - deleteCount;
        const end = start + deleteCount;
        const sortedIndexes = [];
        let i = 0;
        while(i < this.sortedIndexes.length && this.sortedIndexes[i] < start){
            sortedIndexes.push(this.sortedIndexes[i++]);
        }
        for(let j = 0; j < elements.length; j++){
            if (elements[j]) {
                sortedIndexes.push(j + start);
            }
        }
        while(i < this.sortedIndexes.length && this.sortedIndexes[i] >= end){
            sortedIndexes.push(this.sortedIndexes[i++] + diff);
        }
        this.renderer.splice(start, deleteCount, elements.length);
        this._set(sortedIndexes, sortedIndexes);
    }
    renderIndex(index, container) {
        container.classList.toggle(this._trait, this.contains(index));
    }
    unrender(container) {
        container.classList.remove(this._trait);
    }
    /**
     * Sets the indexes which should have this trait.
     *
     * @param indexes Indexes which should have this trait.
     * @return The old indexes which had this trait.
     */ set(indexes, browserEvent) {
        return this._set(indexes, [
            ...indexes
        ].sort(numericSort), browserEvent);
    }
    _set(indexes, sortedIndexes, browserEvent) {
        const result = this.indexes;
        const sortedResult = this.sortedIndexes;
        this.indexes = indexes;
        this.sortedIndexes = sortedIndexes;
        const toRender = disjunction(sortedResult, indexes);
        this.renderer.renderIndexes(toRender);
        this._onChange.fire({
            indexes,
            browserEvent
        });
        return result;
    }
    get() {
        return this.indexes;
    }
    contains(index) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearch"])(this.sortedIndexes, index, numericSort) >= 0;
    }
    dispose() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this._onChange);
    }
    constructor(_trait){
        this._trait = _trait;
        this.indexes = [];
        this.sortedIndexes = [];
        this._onChange = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onChange = this._onChange.event;
    }
}
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], Trait.prototype, "renderer", null);
class SelectionTrait extends Trait {
    renderIndex(index, container) {
        super.renderIndex(index, container);
        if (this.setAriaSelected) {
            if (this.contains(index)) {
                container.setAttribute('aria-selected', 'true');
            } else {
                container.setAttribute('aria-selected', 'false');
            }
        }
    }
    constructor(setAriaSelected){
        super('selected');
        this.setAriaSelected = setAriaSelected;
    }
}
/**
 * The TraitSpliceable is used as a util class to be able
 * to preserve traits across splice calls, given an identity
 * provider.
 */ class TraitSpliceable {
    splice(start, deleteCount, elements) {
        if (!this.identityProvider) {
            return this.trait.splice(start, deleteCount, new Array(elements.length).fill(false));
        }
        const pastElementsWithTrait = this.trait.get().map((i)=>this.identityProvider.getId(this.view.element(i)).toString());
        if (pastElementsWithTrait.length === 0) {
            return this.trait.splice(start, deleteCount, new Array(elements.length).fill(false));
        }
        const pastElementsWithTraitSet = new Set(pastElementsWithTrait);
        const elementsWithTrait = elements.map((e)=>pastElementsWithTraitSet.has(this.identityProvider.getId(e).toString()));
        this.trait.splice(start, deleteCount, elementsWithTrait);
    }
    constructor(trait, view, identityProvider){
        this.trait = trait;
        this.view = view;
        this.identityProvider = identityProvider;
    }
}
function isInputElement(e) {
    return e.tagName === 'INPUT' || e.tagName === 'TEXTAREA';
}
function isListElementDescendantOfClass(e, className) {
    if (e.classList.contains(className)) {
        return true;
    }
    if (e.classList.contains('monaco-list')) {
        return false;
    }
    if (!e.parentElement) {
        return false;
    }
    return isListElementDescendantOfClass(e.parentElement, className);
}
function isMonacoEditor(e) {
    return isListElementDescendantOfClass(e, 'monaco-editor');
}
function isMonacoCustomToggle(e) {
    return isListElementDescendantOfClass(e, 'monaco-custom-toggle');
}
function isActionItem(e) {
    return isListElementDescendantOfClass(e, 'action-item');
}
function isStickyScrollElement(e) {
    return isListElementDescendantOfClass(e, 'monaco-tree-sticky-row');
}
function isStickyScrollContainer(e) {
    return e.classList.contains('monaco-tree-sticky-container');
}
function isButton(e) {
    if (e.tagName === 'A' && e.classList.contains('monaco-button') || e.tagName === 'DIV' && e.classList.contains('monaco-button-dropdown')) {
        return true;
    }
    if (e.classList.contains('monaco-list')) {
        return false;
    }
    if (!e.parentElement) {
        return false;
    }
    return isButton(e.parentElement);
}
class KeyboardController {
    get onKeyDown() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.view.domNode, 'keydown')).event, ($)=>$.filter((e)=>!isInputElement(e.target)).map((e)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e)));
    }
    updateOptions(optionsUpdate) {
        if (optionsUpdate.multipleSelectionSupport !== undefined) {
            this.multipleSelectionSupport = optionsUpdate.multipleSelectionSupport;
        }
    }
    onEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        this.list.setSelection(this.list.getFocus(), e.browserEvent);
    }
    onUpArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        this.list.focusPrevious(1, false, e.browserEvent);
        const el = this.list.getFocus()[0];
        this.list.setAnchor(el);
        this.list.reveal(el);
        this.view.domNode.focus();
    }
    onDownArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        this.list.focusNext(1, false, e.browserEvent);
        const el = this.list.getFocus()[0];
        this.list.setAnchor(el);
        this.list.reveal(el);
        this.view.domNode.focus();
    }
    onPageUpArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        this.list.focusPreviousPage(e.browserEvent);
        const el = this.list.getFocus()[0];
        this.list.setAnchor(el);
        this.list.reveal(el);
        this.view.domNode.focus();
    }
    onPageDownArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        this.list.focusNextPage(e.browserEvent);
        const el = this.list.getFocus()[0];
        this.list.setAnchor(el);
        this.list.reveal(el);
        this.view.domNode.focus();
    }
    onCtrlA(e) {
        e.preventDefault();
        e.stopPropagation();
        this.list.setSelection((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(this.list.length), e.browserEvent);
        this.list.setAnchor(undefined);
        this.view.domNode.focus();
    }
    onEscape(e) {
        if (this.list.getSelection().length) {
            e.preventDefault();
            e.stopPropagation();
            this.list.setSelection([], e.browserEvent);
            this.list.setAnchor(undefined);
            this.view.domNode.focus();
        }
    }
    dispose() {
        this.disposables.dispose();
        this.multipleSelectionDisposables.dispose();
    }
    constructor(list, view, options){
        this.list = list;
        this.view = view;
        this.disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this.multipleSelectionDisposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this.multipleSelectionSupport = options.multipleSelectionSupport;
        this.disposables.add(this.onKeyDown((e)=>{
            switch(e.keyCode){
                case 3 /* KeyCode.Enter */ :
                    return this.onEnter(e);
                case 16 /* KeyCode.UpArrow */ :
                    return this.onUpArrow(e);
                case 18 /* KeyCode.DownArrow */ :
                    return this.onDownArrow(e);
                case 11 /* KeyCode.PageUp */ :
                    return this.onPageUpArrow(e);
                case 12 /* KeyCode.PageDown */ :
                    return this.onPageDownArrow(e);
                case 9 /* KeyCode.Escape */ :
                    return this.onEscape(e);
                case 31 /* KeyCode.KeyA */ :
                    if (this.multipleSelectionSupport && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] ? e.metaKey : e.ctrlKey)) {
                        this.onCtrlA(e);
                    }
            }
        }));
    }
}
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], KeyboardController.prototype, "onKeyDown", null);
var TypeNavigationMode;
(function(TypeNavigationMode) {
    TypeNavigationMode[TypeNavigationMode["Automatic"] = 0] = "Automatic";
    TypeNavigationMode[TypeNavigationMode["Trigger"] = 1] = "Trigger";
})(TypeNavigationMode || (TypeNavigationMode = {}));
var TypeNavigationControllerState;
(function(TypeNavigationControllerState) {
    TypeNavigationControllerState[TypeNavigationControllerState["Idle"] = 0] = "Idle";
    TypeNavigationControllerState[TypeNavigationControllerState["Typing"] = 1] = "Typing";
})(TypeNavigationControllerState || (TypeNavigationControllerState = {}));
const DefaultKeyboardNavigationDelegate = new class {
    mightProducePrintableCharacter(event) {
        if (event.ctrlKey || event.metaKey || event.altKey) {
            return false;
        }
        return event.keyCode >= 31 /* KeyCode.KeyA */  && event.keyCode <= 56 /* KeyCode.KeyZ */  || event.keyCode >= 21 /* KeyCode.Digit0 */  && event.keyCode <= 30 /* KeyCode.Digit9 */  || event.keyCode >= 98 /* KeyCode.Numpad0 */  && event.keyCode <= 107 /* KeyCode.Numpad9 */  || event.keyCode >= 85 /* KeyCode.Semicolon */  && event.keyCode <= 95 /* KeyCode.Quote */ ;
    }
};
class TypeNavigationController {
    updateOptions(options) {
        var _options_typeNavigationEnabled;
        if ((_options_typeNavigationEnabled = options.typeNavigationEnabled) !== null && _options_typeNavigationEnabled !== void 0 ? _options_typeNavigationEnabled : true) {
            this.enable();
        } else {
            this.disable();
        }
        var _options_typeNavigationMode;
        this.mode = (_options_typeNavigationMode = options.typeNavigationMode) !== null && _options_typeNavigationMode !== void 0 ? _options_typeNavigationMode : TypeNavigationMode.Automatic;
    }
    enable() {
        if (this.enabled) {
            return;
        }
        let typing = false;
        const onChar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(this.enabledDisposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.view.domNode, 'keydown')).event, ($)=>$.filter((e)=>!isInputElement(e.target)).filter(()=>this.mode === TypeNavigationMode.Automatic || this.triggered).map((event)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](event)).filter((e)=>typing || this.keyboardNavigationEventFilter(e)).filter((e)=>this.delegate.mightProducePrintableCharacter(e)).forEach((e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true)).map((event)=>event.browserEvent.key));
        const onClear = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].debounce(onChar, ()=>null, 800, undefined, undefined, undefined, this.enabledDisposables);
        const onInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].reduce(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].any(onChar, onClear), (r, i)=>i === null ? null : (r || '') + i, undefined, this.enabledDisposables);
        onInput(this.onInput, this, this.enabledDisposables);
        onClear(this.onClear, this, this.enabledDisposables);
        onChar(()=>typing = true, undefined, this.enabledDisposables);
        onClear(()=>typing = false, undefined, this.enabledDisposables);
        this.enabled = true;
        this.triggered = false;
    }
    disable() {
        if (!this.enabled) {
            return;
        }
        this.enabledDisposables.clear();
        this.enabled = false;
        this.triggered = false;
    }
    onClear() {
        const focus = this.list.getFocus();
        if (focus.length > 0 && focus[0] === this.previouslyFocused) {
            var _this_list_options_accessibilityProvider;
            // List: re-announce element on typing end since typed keys will interrupt aria label of focused element
            // Do not announce if there was a focus change at the end to prevent duplication https://github.com/microsoft/vscode/issues/95961
            const ariaLabel = (_this_list_options_accessibilityProvider = this.list.options.accessibilityProvider) === null || _this_list_options_accessibilityProvider === void 0 ? void 0 : _this_list_options_accessibilityProvider.getAriaLabel(this.list.element(focus[0]));
            if (typeof ariaLabel === 'string') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alert"])(ariaLabel);
            } else if (ariaLabel) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$aria$2f$aria$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alert"])(ariaLabel.get());
            }
        }
        this.previouslyFocused = -1;
    }
    onInput(word) {
        if (!word) {
            this.state = TypeNavigationControllerState.Idle;
            this.triggered = false;
            return;
        }
        const focus = this.list.getFocus();
        const start = focus.length > 0 ? focus[0] : 0;
        const delta = this.state === TypeNavigationControllerState.Idle ? 1 : 0;
        this.state = TypeNavigationControllerState.Typing;
        for(let i = 0; i < this.list.length; i++){
            const index = (start + i + delta) % this.list.length;
            const label = this.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(this.view.element(index));
            const labelStr = label && label.toString();
            if (this.list.options.typeNavigationEnabled) {
                if (typeof labelStr !== 'undefined') {
                    // If prefix is found, focus and return early
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$filters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesPrefix"])(word, labelStr)) {
                        this.previouslyFocused = start;
                        this.list.setFocus([
                            index
                        ]);
                        this.list.reveal(index);
                        return;
                    }
                    const fuzzy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$filters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesFuzzy2"])(word, labelStr);
                    if (fuzzy) {
                        const fuzzyScore = fuzzy[0].end - fuzzy[0].start;
                        // ensures that when fuzzy matching, doesn't clash with prefix matching (1 input vs 1+ should be prefix and fuzzy respecitvely). Also makes sure that exact matches are prioritized.
                        if (fuzzyScore > 1 && fuzzy.length === 1) {
                            this.previouslyFocused = start;
                            this.list.setFocus([
                                index
                            ]);
                            this.list.reveal(index);
                            return;
                        }
                    }
                }
            } else if (typeof labelStr === 'undefined' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$filters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchesPrefix"])(word, labelStr)) {
                this.previouslyFocused = start;
                this.list.setFocus([
                    index
                ]);
                this.list.reveal(index);
                return;
            }
        }
    }
    dispose() {
        this.disable();
        this.enabledDisposables.dispose();
        this.disposables.dispose();
    }
    constructor(list, view, keyboardNavigationLabelProvider, keyboardNavigationEventFilter, delegate){
        this.list = list;
        this.view = view;
        this.keyboardNavigationLabelProvider = keyboardNavigationLabelProvider;
        this.keyboardNavigationEventFilter = keyboardNavigationEventFilter;
        this.delegate = delegate;
        this.enabled = false;
        this.state = TypeNavigationControllerState.Idle;
        this.mode = TypeNavigationMode.Automatic;
        this.triggered = false;
        this.previouslyFocused = -1;
        this.enabledDisposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this.disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this.updateOptions(list.options);
    }
}
class DOMFocusController {
    onTab(e) {
        if (e.target !== this.view.domNode) {
            return;
        }
        const focus = this.list.getFocus();
        if (focus.length === 0) {
            return;
        }
        const focusedDomElement = this.view.domElement(focus[0]);
        if (!focusedDomElement) {
            return;
        }
        const tabIndexElement = focusedDomElement.querySelector('[tabIndex]');
        if (!tabIndexElement || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(tabIndexElement) || tabIndexElement.tabIndex === -1) {
            return;
        }
        const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(tabIndexElement).getComputedStyle(tabIndexElement);
        if (style.visibility === 'hidden' || style.display === 'none') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        tabIndexElement.focus();
    }
    dispose() {
        this.disposables.dispose();
    }
    constructor(list, view){
        this.list = list;
        this.view = view;
        this.disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        const onKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](view.domNode, 'keydown')).event, ($)=>$.filter((e)=>!isInputElement(e.target)).map((e)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e)));
        const onTab = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(onKeyDown, ($)=>$.filter((e)=>e.keyCode === 2 /* KeyCode.Tab */  && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey));
        onTab(this.onTab, this, this.disposables);
    }
}
function isSelectionSingleChangeEvent(event) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$platform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacintosh"] ? event.browserEvent.metaKey : event.browserEvent.ctrlKey;
}
function isSelectionRangeChangeEvent(event) {
    return event.browserEvent.shiftKey;
}
function isMouseRightClick(event) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMouseEvent"])(event) && event.button === 2;
}
const DefaultMultipleSelectionController = {
    isSelectionSingleChangeEvent,
    isSelectionRangeChangeEvent
};
class MouseController {
    updateOptions(optionsUpdate) {
        if (optionsUpdate.multipleSelectionSupport !== undefined) {
            this.multipleSelectionController = undefined;
            if (optionsUpdate.multipleSelectionSupport) {
                this.multipleSelectionController = this.list.options.multipleSelectionController || DefaultMultipleSelectionController;
            }
        }
    }
    isSelectionSingleChangeEvent(event) {
        if (!this.multipleSelectionController) {
            return false;
        }
        return this.multipleSelectionController.isSelectionSingleChangeEvent(event);
    }
    isSelectionRangeChangeEvent(event) {
        if (!this.multipleSelectionController) {
            return false;
        }
        return this.multipleSelectionController.isSelectionRangeChangeEvent(event);
    }
    isSelectionChangeEvent(event) {
        return this.isSelectionSingleChangeEvent(event) || this.isSelectionRangeChangeEvent(event);
    }
    onMouseDown(e) {
        if (isMonacoEditor(e.browserEvent.target)) {
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])() !== e.browserEvent.target) {
            this.list.domFocus();
        }
    }
    onContextMenu(e) {
        if (isInputElement(e.browserEvent.target) || isMonacoEditor(e.browserEvent.target)) {
            return;
        }
        const focus = typeof e.index === 'undefined' ? [] : [
            e.index
        ];
        this.list.setFocus(focus, e.browserEvent);
    }
    onViewPointer(e) {
        if (!this.mouseSupport) {
            return;
        }
        if (isInputElement(e.browserEvent.target) || isMonacoEditor(e.browserEvent.target)) {
            return;
        }
        if (e.browserEvent.isHandledByList) {
            return;
        }
        e.browserEvent.isHandledByList = true;
        const focus = e.index;
        if (typeof focus === 'undefined') {
            this.list.setFocus([], e.browserEvent);
            this.list.setSelection([], e.browserEvent);
            this.list.setAnchor(undefined);
            return;
        }
        if (this.isSelectionChangeEvent(e)) {
            return this.changeSelection(e);
        }
        this.list.setFocus([
            focus
        ], e.browserEvent);
        this.list.setAnchor(focus);
        if (!isMouseRightClick(e.browserEvent)) {
            this.list.setSelection([
                focus
            ], e.browserEvent);
        }
        this._onPointer.fire(e);
    }
    onDoubleClick(e) {
        if (isInputElement(e.browserEvent.target) || isMonacoEditor(e.browserEvent.target)) {
            return;
        }
        if (this.isSelectionChangeEvent(e)) {
            return;
        }
        if (e.browserEvent.isHandledByList) {
            return;
        }
        e.browserEvent.isHandledByList = true;
        const focus = this.list.getFocus();
        this.list.setSelection(focus, e.browserEvent);
    }
    changeSelection(e) {
        const focus = e.index;
        let anchor = this.list.getAnchor();
        if (this.isSelectionRangeChangeEvent(e)) {
            if (typeof anchor === 'undefined') {
                const currentFocus = this.list.getFocus()[0];
                anchor = currentFocus !== null && currentFocus !== void 0 ? currentFocus : focus;
                this.list.setAnchor(anchor);
            }
            const min = Math.min(anchor, focus);
            const max = Math.max(anchor, focus);
            const rangeSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(min, max + 1);
            const selection = this.list.getSelection();
            const contiguousRange = getContiguousRangeContaining(disjunction(selection, [
                anchor
            ]), anchor);
            if (contiguousRange.length === 0) {
                return;
            }
            const newSelection = disjunction(rangeSelection, relativeComplement(selection, contiguousRange));
            this.list.setSelection(newSelection, e.browserEvent);
            this.list.setFocus([
                focus
            ], e.browserEvent);
        } else if (this.isSelectionSingleChangeEvent(e)) {
            const selection = this.list.getSelection();
            const newSelection = selection.filter((i)=>i !== focus);
            this.list.setFocus([
                focus
            ]);
            this.list.setAnchor(focus);
            if (selection.length === newSelection.length) {
                this.list.setSelection([
                    ...newSelection,
                    focus
                ], e.browserEvent);
            } else {
                this.list.setSelection(newSelection, e.browserEvent);
            }
        }
    }
    dispose() {
        this.disposables.dispose();
    }
    constructor(list){
        this.list = list;
        this.disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._onPointer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onPointer = this._onPointer.event;
        if (list.options.multipleSelectionSupport !== false) {
            this.multipleSelectionController = this.list.options.multipleSelectionController || DefaultMultipleSelectionController;
        }
        this.mouseSupport = typeof list.options.mouseSupport === 'undefined' || !!list.options.mouseSupport;
        if (this.mouseSupport) {
            list.onMouseDown(this.onMouseDown, this, this.disposables);
            list.onContextMenu(this.onContextMenu, this, this.disposables);
            list.onMouseDblClick(this.onDoubleClick, this, this.disposables);
            list.onTouchStart(this.onMouseDown, this, this.disposables);
            this.disposables.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$touch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gesture"].addTarget(list.getHTMLElement()));
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].any(list.onMouseClick, list.onMouseMiddleClick, list.onTap)(this.onViewPointer, this, this.disposables);
    }
}
class DefaultStyleController {
    style(styles) {
        const suffix = this.selectorSuffix && ".".concat(this.selectorSuffix);
        const content = [];
        if (styles.listBackground) {
            content.push(".monaco-list".concat(suffix, " .monaco-list-rows { background: ").concat(styles.listBackground, "; }"));
        }
        if (styles.listFocusBackground) {
            content.push(".monaco-list".concat(suffix, ":focus .monaco-list-row.focused { background-color: ").concat(styles.listFocusBackground, "; }"));
            content.push(".monaco-list".concat(suffix, ":focus .monaco-list-row.focused:hover { background-color: ").concat(styles.listFocusBackground, "; }")); // overwrite :hover style in this case!
        }
        if (styles.listFocusForeground) {
            content.push(".monaco-list".concat(suffix, ":focus .monaco-list-row.focused { color: ").concat(styles.listFocusForeground, "; }"));
        }
        if (styles.listActiveSelectionBackground) {
            content.push(".monaco-list".concat(suffix, ":focus .monaco-list-row.selected { background-color: ").concat(styles.listActiveSelectionBackground, "; }"));
            content.push(".monaco-list".concat(suffix, ":focus .monaco-list-row.selected:hover { background-color: ").concat(styles.listActiveSelectionBackground, "; }")); // overwrite :hover style in this case!
        }
        if (styles.listActiveSelectionForeground) {
            content.push(".monaco-list".concat(suffix, ":focus .monaco-list-row.selected { color: ").concat(styles.listActiveSelectionForeground, "; }"));
        }
        if (styles.listActiveSelectionIconForeground) {
            content.push(".monaco-list".concat(suffix, ":focus .monaco-list-row.selected .codicon { color: ").concat(styles.listActiveSelectionIconForeground, "; }"));
        }
        if (styles.listFocusAndSelectionBackground) {
            content.push("\n				.monaco-drag-image,\n				.monaco-list".concat(suffix, ":focus .monaco-list-row.selected.focused { background-color: ").concat(styles.listFocusAndSelectionBackground, "; }\n			"));
        }
        if (styles.listFocusAndSelectionForeground) {
            content.push("\n				.monaco-drag-image,\n				.monaco-list".concat(suffix, ":focus .monaco-list-row.selected.focused { color: ").concat(styles.listFocusAndSelectionForeground, "; }\n			"));
        }
        if (styles.listInactiveFocusForeground) {
            content.push(".monaco-list".concat(suffix, " .monaco-list-row.focused { color:  ").concat(styles.listInactiveFocusForeground, "; }"));
            content.push(".monaco-list".concat(suffix, " .monaco-list-row.focused:hover { color:  ").concat(styles.listInactiveFocusForeground, "; }")); // overwrite :hover style in this case!
        }
        if (styles.listInactiveSelectionIconForeground) {
            content.push(".monaco-list".concat(suffix, " .monaco-list-row.focused .codicon { color:  ").concat(styles.listInactiveSelectionIconForeground, "; }"));
        }
        if (styles.listInactiveFocusBackground) {
            content.push(".monaco-list".concat(suffix, " .monaco-list-row.focused { background-color:  ").concat(styles.listInactiveFocusBackground, "; }"));
            content.push(".monaco-list".concat(suffix, " .monaco-list-row.focused:hover { background-color:  ").concat(styles.listInactiveFocusBackground, "; }")); // overwrite :hover style in this case!
        }
        if (styles.listInactiveSelectionBackground) {
            content.push(".monaco-list".concat(suffix, " .monaco-list-row.selected { background-color:  ").concat(styles.listInactiveSelectionBackground, "; }"));
            content.push(".monaco-list".concat(suffix, " .monaco-list-row.selected:hover { background-color:  ").concat(styles.listInactiveSelectionBackground, "; }")); // overwrite :hover style in this case!
        }
        if (styles.listInactiveSelectionForeground) {
            content.push(".monaco-list".concat(suffix, " .monaco-list-row.selected { color: ").concat(styles.listInactiveSelectionForeground, "; }"));
        }
        if (styles.listHoverBackground) {
            content.push(".monaco-list".concat(suffix, ":not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { background-color: ").concat(styles.listHoverBackground, "; }"));
        }
        if (styles.listHoverForeground) {
            content.push(".monaco-list".concat(suffix, ":not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { color:  ").concat(styles.listHoverForeground, "; }"));
        }
        var _styles_listFocusOutline;
        /**
         * Outlines
         */ const focusAndSelectionOutline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCssValueWithDefault"])(styles.listFocusAndSelectionOutline, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCssValueWithDefault"])(styles.listSelectionOutline, (_styles_listFocusOutline = styles.listFocusOutline) !== null && _styles_listFocusOutline !== void 0 ? _styles_listFocusOutline : ''));
        if (focusAndSelectionOutline) {
            content.push(".monaco-list".concat(suffix, ":focus .monaco-list-row.focused.selected { outline: 1px solid ").concat(focusAndSelectionOutline, "; outline-offset: -1px;}"));
        }
        if (styles.listFocusOutline) {
            content.push("\n				.monaco-drag-image,\n				.monaco-list".concat(suffix, ":focus .monaco-list-row.focused { outline: 1px solid ").concat(styles.listFocusOutline, "; outline-offset: -1px; }\n				.monaco-workbench.context-menu-visible .monaco-list").concat(suffix, ".last-focused .monaco-list-row.focused { outline: 1px solid ").concat(styles.listFocusOutline, "; outline-offset: -1px; }\n			"));
        }
        var _styles_listInactiveFocusOutline;
        const inactiveFocusAndSelectionOutline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asCssValueWithDefault"])(styles.listSelectionOutline, (_styles_listInactiveFocusOutline = styles.listInactiveFocusOutline) !== null && _styles_listInactiveFocusOutline !== void 0 ? _styles_listInactiveFocusOutline : '');
        if (inactiveFocusAndSelectionOutline) {
            content.push(".monaco-list".concat(suffix, " .monaco-list-row.focused.selected { outline: 1px dotted ").concat(inactiveFocusAndSelectionOutline, "; outline-offset: -1px; }"));
        }
        if (styles.listSelectionOutline) {
            content.push(".monaco-list".concat(suffix, " .monaco-list-row.selected { outline: 1px dotted ").concat(styles.listSelectionOutline, "; outline-offset: -1px; }"));
        }
        if (styles.listInactiveFocusOutline) {
            content.push(".monaco-list".concat(suffix, " .monaco-list-row.focused { outline: 1px dotted ").concat(styles.listInactiveFocusOutline, "; outline-offset: -1px; }"));
        }
        if (styles.listHoverOutline) {
            content.push(".monaco-list".concat(suffix, " .monaco-list-row:hover { outline: 1px dashed ").concat(styles.listHoverOutline, "; outline-offset: -1px; }"));
        }
        if (styles.listDropOverBackground) {
            content.push("\n				.monaco-list".concat(suffix, ".drop-target,\n				.monaco-list").concat(suffix, " .monaco-list-rows.drop-target,\n				.monaco-list").concat(suffix, " .monaco-list-row.drop-target { background-color: ").concat(styles.listDropOverBackground, " !important; color: inherit !important; }\n			"));
        }
        if (styles.listDropBetweenBackground) {
            content.push("\n			.monaco-list".concat(suffix, " .monaco-list-rows.drop-target-before .monaco-list-row:first-child::before,\n			.monaco-list").concat(suffix, ' .monaco-list-row.drop-target-before::before {\n				content: ""; position: absolute; top: 0px; left: 0px; width: 100%; height: 1px;\n				background-color: ').concat(styles.listDropBetweenBackground, ";\n			}"));
            content.push("\n			.monaco-list".concat(suffix, " .monaco-list-rows.drop-target-after .monaco-list-row:last-child::after,\n			.monaco-list").concat(suffix, ' .monaco-list-row.drop-target-after::after {\n				content: ""; position: absolute; bottom: 0px; left: 0px; width: 100%; height: 1px;\n				background-color: ').concat(styles.listDropBetweenBackground, ";\n			}"));
        }
        if (styles.tableColumnsBorder) {
            content.push("\n				.monaco-table > .monaco-split-view2,\n				.monaco-table > .monaco-split-view2 .monaco-sash.vertical::before,\n				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2,\n				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2 .monaco-sash.vertical::before {\n					border-color: ".concat(styles.tableColumnsBorder, ";\n				}\n\n				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2,\n				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {\n					border-color: transparent;\n				}\n			"));
        }
        if (styles.tableOddRowsBackgroundColor) {
            content.push("\n				.monaco-table .monaco-list-row[data-parity=odd]:not(.focused):not(.selected):not(:hover) .monaco-table-tr,\n				.monaco-table .monaco-list:not(:focus) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr,\n				.monaco-table .monaco-list:not(.focused) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr {\n					background-color: ".concat(styles.tableOddRowsBackgroundColor, ";\n				}\n			"));
        }
        this.styleElement.textContent = content.join('\n');
    }
    constructor(styleElement, selectorSuffix){
        this.styleElement = styleElement;
        this.selectorSuffix = selectorSuffix;
    }
}
const unthemedListStyles = {
    listFocusBackground: '#7FB0D0',
    listActiveSelectionBackground: '#0E639C',
    listActiveSelectionForeground: '#FFFFFF',
    listActiveSelectionIconForeground: '#FFFFFF',
    listFocusAndSelectionOutline: '#90C2F9',
    listFocusAndSelectionBackground: '#094771',
    listFocusAndSelectionForeground: '#FFFFFF',
    listInactiveSelectionBackground: '#3F3F46',
    listInactiveSelectionIconForeground: '#FFFFFF',
    listHoverBackground: '#2A2D2E',
    listDropOverBackground: '#383B3D',
    listDropBetweenBackground: '#EEEEEE',
    treeIndentGuidesStroke: '#a9a9a9',
    treeInactiveIndentGuidesStroke: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"].fromHex('#a9a9a9').transparent(0.4).toString(),
    tableColumnsBorder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"].fromHex('#cccccc').transparent(0.2).toString(),
    tableOddRowsBackgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"].fromHex('#cccccc').transparent(0.04).toString(),
    listBackground: undefined,
    listFocusForeground: undefined,
    listInactiveSelectionForeground: undefined,
    listInactiveFocusForeground: undefined,
    listInactiveFocusBackground: undefined,
    listHoverForeground: undefined,
    listFocusOutline: undefined,
    listInactiveFocusOutline: undefined,
    listSelectionOutline: undefined,
    listHoverOutline: undefined,
    treeStickyScrollBackground: undefined,
    treeStickyScrollBorder: undefined,
    treeStickyScrollShadow: undefined
};
const DefaultOptions = {
    keyboardSupport: true,
    mouseSupport: true,
    multipleSelectionSupport: true,
    dnd: {
        getDragURI () {
            return null;
        },
        onDragStart () {},
        onDragOver () {
            return false;
        },
        drop () {},
        dispose () {}
    }
};
// TODO@Joao: move these utils into a SortedArray class
function getContiguousRangeContaining(range, value) {
    const index = range.indexOf(value);
    if (index === -1) {
        return [];
    }
    const result = [];
    let i = index - 1;
    while(i >= 0 && range[i] === value - (index - i)){
        result.push(range[i--]);
    }
    result.reverse();
    i = index;
    while(i < range.length && range[i] === value + (i - index)){
        result.push(range[i++]);
    }
    return result;
}
/**
 * Given two sorted collections of numbers, returns the intersection
 * between them (OR).
 */ function disjunction(one, other) {
    const result = [];
    let i = 0, j = 0;
    while(i < one.length || j < other.length){
        if (i >= one.length) {
            result.push(other[j++]);
        } else if (j >= other.length) {
            result.push(one[i++]);
        } else if (one[i] === other[j]) {
            result.push(one[i]);
            i++;
            j++;
            continue;
        } else if (one[i] < other[j]) {
            result.push(one[i++]);
        } else {
            result.push(other[j++]);
        }
    }
    return result;
}
/**
 * Given two sorted collections of numbers, returns the relative
 * complement between them (XOR).
 */ function relativeComplement(one, other) {
    const result = [];
    let i = 0, j = 0;
    while(i < one.length || j < other.length){
        if (i >= one.length) {
            result.push(other[j++]);
        } else if (j >= other.length) {
            result.push(one[i++]);
        } else if (one[i] === other[j]) {
            i++;
            j++;
            continue;
        } else if (one[i] < other[j]) {
            result.push(one[i++]);
        } else {
            j++;
        }
    }
    return result;
}
const numericSort = (a, b)=>a - b;
class PipelineRenderer {
    get templateId() {
        return this._templateId;
    }
    renderTemplate(container) {
        return this.renderers.map((r)=>r.renderTemplate(container));
    }
    renderElement(element, index, templateData, height) {
        let i = 0;
        for (const renderer of this.renderers){
            renderer.renderElement(element, index, templateData[i++], height);
        }
    }
    disposeElement(element, index, templateData, height) {
        let i = 0;
        for (const renderer of this.renderers){
            var _renderer_disposeElement;
            (_renderer_disposeElement = renderer.disposeElement) === null || _renderer_disposeElement === void 0 ? void 0 : _renderer_disposeElement.call(renderer, element, index, templateData[i], height);
            i += 1;
        }
    }
    disposeTemplate(templateData) {
        let i = 0;
        for (const renderer of this.renderers){
            renderer.disposeTemplate(templateData[i++]);
        }
    }
    constructor(_templateId, renderers){
        this._templateId = _templateId;
        this.renderers = renderers;
    }
}
class AccessibiltyRenderer {
    renderTemplate(container) {
        return {
            container,
            disposables: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]()
        };
    }
    renderElement(element, index, data) {
        const ariaLabel = this.accessibilityProvider.getAriaLabel(element);
        const observable = ariaLabel && typeof ariaLabel !== 'string' ? ariaLabel : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constObservable"])(ariaLabel);
        data.disposables.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$observableInternal$2f$autorun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["autorun"])((reader)=>{
            this.setAriaLabel(reader.readObservable(observable), data.container);
        }));
        const ariaLevel = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(element);
        if (typeof ariaLevel === 'number') {
            data.container.setAttribute('aria-level', "".concat(ariaLevel));
        } else {
            data.container.removeAttribute('aria-level');
        }
    }
    setAriaLabel(ariaLabel, element) {
        if (ariaLabel) {
            element.setAttribute('aria-label', ariaLabel);
        } else {
            element.removeAttribute('aria-label');
        }
    }
    disposeElement(element, index, templateData, height) {
        templateData.disposables.clear();
    }
    disposeTemplate(templateData) {
        templateData.disposables.dispose();
    }
    constructor(accessibilityProvider){
        this.accessibilityProvider = accessibilityProvider;
        this.templateId = 'a18n';
    }
}
class ListViewDragAndDrop {
    getDragElements(element) {
        const selection = this.list.getSelectedElements();
        const elements = selection.indexOf(element) > -1 ? selection : [
            element
        ];
        return elements;
    }
    getDragURI(element) {
        return this.dnd.getDragURI(element);
    }
    getDragLabel(elements, originalEvent) {
        if (this.dnd.getDragLabel) {
            return this.dnd.getDragLabel(elements, originalEvent);
        }
        return undefined;
    }
    onDragStart(data, originalEvent) {
        var _this_dnd_onDragStart, _this_dnd;
        (_this_dnd_onDragStart = (_this_dnd = this.dnd).onDragStart) === null || _this_dnd_onDragStart === void 0 ? void 0 : _this_dnd_onDragStart.call(_this_dnd, data, originalEvent);
    }
    onDragOver(data, targetElement, targetIndex, targetSector, originalEvent) {
        return this.dnd.onDragOver(data, targetElement, targetIndex, targetSector, originalEvent);
    }
    onDragLeave(data, targetElement, targetIndex, originalEvent) {
        var _this_dnd_onDragLeave, _this_dnd;
        (_this_dnd_onDragLeave = (_this_dnd = this.dnd).onDragLeave) === null || _this_dnd_onDragLeave === void 0 ? void 0 : _this_dnd_onDragLeave.call(_this_dnd, data, targetElement, targetIndex, originalEvent);
    }
    onDragEnd(originalEvent) {
        var _this_dnd_onDragEnd, _this_dnd;
        (_this_dnd_onDragEnd = (_this_dnd = this.dnd).onDragEnd) === null || _this_dnd_onDragEnd === void 0 ? void 0 : _this_dnd_onDragEnd.call(_this_dnd, originalEvent);
    }
    drop(data, targetElement, targetIndex, targetSector, originalEvent) {
        this.dnd.drop(data, targetElement, targetIndex, targetSector, originalEvent);
    }
    dispose() {
        this.dnd.dispose();
    }
    constructor(list, dnd){
        this.list = list;
        this.dnd = dnd;
    }
}
class List {
    get onDidChangeFocus() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.eventBufferer.wrapEvent(this.focus.onChange), (e)=>this.toListEvent(e), this.disposables);
    }
    get onDidChangeSelection() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.eventBufferer.wrapEvent(this.selection.onChange), (e)=>this.toListEvent(e), this.disposables);
    }
    get domId() {
        return this.view.domId;
    }
    get onDidScroll() {
        return this.view.onDidScroll;
    }
    get onMouseClick() {
        return this.view.onMouseClick;
    }
    get onMouseDblClick() {
        return this.view.onMouseDblClick;
    }
    get onMouseMiddleClick() {
        return this.view.onMouseMiddleClick;
    }
    get onPointer() {
        return this.mouseController.onPointer;
    }
    get onMouseDown() {
        return this.view.onMouseDown;
    }
    get onMouseOver() {
        return this.view.onMouseOver;
    }
    get onMouseOut() {
        return this.view.onMouseOut;
    }
    get onTouchStart() {
        return this.view.onTouchStart;
    }
    get onTap() {
        return this.view.onTap;
    }
    /**
     * Possible context menu trigger events:
     * - ContextMenu key
     * - Shift F10
     * - Ctrl Option Shift M (macOS with VoiceOver)
     * - Mouse right click
     */ get onContextMenu() {
        let didJustPressContextMenuKey = false;
        const fromKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.view.domNode, 'keydown')).event, ($)=>$.map((e)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e)).filter((e)=>didJustPressContextMenuKey = e.keyCode === 58 /* KeyCode.ContextMenu */  || e.shiftKey && e.keyCode === 68 /* KeyCode.F10 */ ).map((e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true)).filter(()=>false));
        const fromKeyUp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.view.domNode, 'keyup')).event, ($)=>$.forEach(()=>didJustPressContextMenuKey = false).map((e)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$keyboardEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardKeyboardEvent"](e)).filter((e)=>e.keyCode === 58 /* KeyCode.ContextMenu */  || e.shiftKey && e.keyCode === 68 /* KeyCode.F10 */ ).map((e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventHelper"].stop(e, true)).map((param)=>{
                let { browserEvent } = param;
                const focus = this.getFocus();
                const index = focus.length ? focus[0] : undefined;
                const element = typeof index !== 'undefined' ? this.view.element(index) : undefined;
                const anchor = typeof index !== 'undefined' ? this.view.domElement(index) : this.view.domNode;
                return {
                    index,
                    element,
                    anchor,
                    browserEvent
                };
            }));
        const fromMouse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].chain(this.view.onContextMenu, ($)=>$.filter((_)=>!didJustPressContextMenuKey).map((param)=>{
                let { element, index, browserEvent } = param;
                return {
                    element,
                    index,
                    anchor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$mouseEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardMouseEvent"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(this.view.domNode), browserEvent),
                    browserEvent
                };
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].any(fromKeyDown, fromKeyUp, fromMouse);
    }
    get onKeyDown() {
        return this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.view.domNode, 'keydown')).event;
    }
    get onDidFocus() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].signal(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.view.domNode, 'focus', true)).event);
    }
    get onDidBlur() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].signal(this.disposables.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomEmitter"](this.view.domNode, 'blur', true)).event);
    }
    createListView(container, virtualDelegate, renderers, viewOptions) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListView"](container, virtualDelegate, renderers, viewOptions);
    }
    createMouseController(options) {
        return new MouseController(this);
    }
    updateOptions() {
        let optionsUpdate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _this_typeNavigationController, _this_keyboardController;
        this._options = {
            ...this._options,
            ...optionsUpdate
        };
        (_this_typeNavigationController = this.typeNavigationController) === null || _this_typeNavigationController === void 0 ? void 0 : _this_typeNavigationController.updateOptions(this._options);
        if (this._options.multipleSelectionController !== undefined) {
            if (this._options.multipleSelectionSupport) {
                this.view.domNode.setAttribute('aria-multiselectable', 'true');
            } else {
                this.view.domNode.removeAttribute('aria-multiselectable');
            }
        }
        this.mouseController.updateOptions(optionsUpdate);
        (_this_keyboardController = this.keyboardController) === null || _this_keyboardController === void 0 ? void 0 : _this_keyboardController.updateOptions(optionsUpdate);
        this.view.updateOptions(optionsUpdate);
    }
    get options() {
        return this._options;
    }
    splice(start, deleteCount) {
        let elements = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        if (start < 0 || start > this.view.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListError"](this.user, "Invalid start index: ".concat(start));
        }
        if (deleteCount < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListError"](this.user, "Invalid delete count: ".concat(deleteCount));
        }
        if (deleteCount === 0 && elements.length === 0) {
            return;
        }
        this.eventBufferer.bufferEvents(()=>this.spliceable.splice(start, deleteCount, elements));
    }
    rerender() {
        this.view.rerender();
    }
    element(index) {
        return this.view.element(index);
    }
    indexOf(element) {
        return this.view.indexOf(element);
    }
    indexAt(position) {
        return this.view.indexAt(position);
    }
    get length() {
        return this.view.length;
    }
    get contentHeight() {
        return this.view.contentHeight;
    }
    get onDidChangeContentHeight() {
        return this.view.onDidChangeContentHeight;
    }
    get scrollTop() {
        return this.view.getScrollTop();
    }
    set scrollTop(scrollTop) {
        this.view.setScrollTop(scrollTop);
    }
    get scrollHeight() {
        return this.view.scrollHeight;
    }
    get renderHeight() {
        return this.view.renderHeight;
    }
    get firstVisibleIndex() {
        return this.view.firstVisibleIndex;
    }
    get ariaLabel() {
        return this._ariaLabel;
    }
    set ariaLabel(value) {
        this._ariaLabel = value;
        this.view.domNode.setAttribute('aria-label', value);
    }
    domFocus() {
        this.view.domNode.focus({
            preventScroll: true
        });
    }
    layout(height, width) {
        this.view.layout(height, width);
    }
    setSelection(indexes, browserEvent) {
        for (const index of indexes){
            if (index < 0 || index >= this.length) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListError"](this.user, "Invalid index ".concat(index));
            }
        }
        this.selection.set(indexes, browserEvent);
    }
    getSelection() {
        return this.selection.get();
    }
    getSelectedElements() {
        return this.getSelection().map((i)=>this.view.element(i));
    }
    setAnchor(index) {
        if (typeof index === 'undefined') {
            this.anchor.set([]);
            return;
        }
        if (index < 0 || index >= this.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListError"](this.user, "Invalid index ".concat(index));
        }
        this.anchor.set([
            index
        ]);
    }
    getAnchor() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firstOrDefault"])(this.anchor.get(), undefined);
    }
    getAnchorElement() {
        const anchor = this.getAnchor();
        return typeof anchor === 'undefined' ? undefined : this.element(anchor);
    }
    setFocus(indexes, browserEvent) {
        for (const index of indexes){
            if (index < 0 || index >= this.length) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListError"](this.user, "Invalid index ".concat(index));
            }
        }
        this.focus.set(indexes, browserEvent);
    }
    focusNext() {
        let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, loop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, browserEvent = arguments.length > 2 ? arguments[2] : void 0, filter = arguments.length > 3 ? arguments[3] : void 0;
        if (this.length === 0) {
            return;
        }
        const focus = this.focus.get();
        const index = this.findNextIndex(focus.length > 0 ? focus[0] + n : 0, loop, filter);
        if (index > -1) {
            this.setFocus([
                index
            ], browserEvent);
        }
    }
    focusPrevious() {
        let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, loop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, browserEvent = arguments.length > 2 ? arguments[2] : void 0, filter = arguments.length > 3 ? arguments[3] : void 0;
        if (this.length === 0) {
            return;
        }
        const focus = this.focus.get();
        const index = this.findPreviousIndex(focus.length > 0 ? focus[0] - n : 0, loop, filter);
        if (index > -1) {
            this.setFocus([
                index
            ], browserEvent);
        }
    }
    async focusNextPage(browserEvent, filter) {
        let lastPageIndex = this.view.indexAt(this.view.getScrollTop() + this.view.renderHeight);
        lastPageIndex = lastPageIndex === 0 ? 0 : lastPageIndex - 1;
        const currentlyFocusedElementIndex = this.getFocus()[0];
        if (currentlyFocusedElementIndex !== lastPageIndex && (currentlyFocusedElementIndex === undefined || lastPageIndex > currentlyFocusedElementIndex)) {
            const lastGoodPageIndex = this.findPreviousIndex(lastPageIndex, false, filter);
            if (lastGoodPageIndex > -1 && currentlyFocusedElementIndex !== lastGoodPageIndex) {
                this.setFocus([
                    lastGoodPageIndex
                ], browserEvent);
            } else {
                this.setFocus([
                    lastPageIndex
                ], browserEvent);
            }
        } else {
            const previousScrollTop = this.view.getScrollTop();
            let nextpageScrollTop = previousScrollTop + this.view.renderHeight;
            if (lastPageIndex > currentlyFocusedElementIndex) {
                // scroll last page element to the top only if the last page element is below the focused element
                nextpageScrollTop -= this.view.elementHeight(lastPageIndex);
            }
            this.view.setScrollTop(nextpageScrollTop);
            if (this.view.getScrollTop() !== previousScrollTop) {
                this.setFocus([]);
                // Let the scroll event listener run
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeout"])(0);
                await this.focusNextPage(browserEvent, filter);
            }
        }
    }
    async focusPreviousPage(browserEvent, filter) {
        let getPaddingTop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ()=>0;
        let firstPageIndex;
        const paddingTop = getPaddingTop();
        const scrollTop = this.view.getScrollTop() + paddingTop;
        if (scrollTop === 0) {
            firstPageIndex = this.view.indexAt(scrollTop);
        } else {
            firstPageIndex = this.view.indexAfter(scrollTop - 1);
        }
        const currentlyFocusedElementIndex = this.getFocus()[0];
        if (currentlyFocusedElementIndex !== firstPageIndex && (currentlyFocusedElementIndex === undefined || currentlyFocusedElementIndex >= firstPageIndex)) {
            const firstGoodPageIndex = this.findNextIndex(firstPageIndex, false, filter);
            if (firstGoodPageIndex > -1 && currentlyFocusedElementIndex !== firstGoodPageIndex) {
                this.setFocus([
                    firstGoodPageIndex
                ], browserEvent);
            } else {
                this.setFocus([
                    firstPageIndex
                ], browserEvent);
            }
        } else {
            const previousScrollTop = scrollTop;
            this.view.setScrollTop(scrollTop - this.view.renderHeight - paddingTop);
            if (this.view.getScrollTop() + getPaddingTop() !== previousScrollTop) {
                this.setFocus([]);
                // Let the scroll event listener run
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$async$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeout"])(0);
                await this.focusPreviousPage(browserEvent, filter, getPaddingTop);
            }
        }
    }
    focusLast(browserEvent, filter) {
        if (this.length === 0) {
            return;
        }
        const index = this.findPreviousIndex(this.length - 1, false, filter);
        if (index > -1) {
            this.setFocus([
                index
            ], browserEvent);
        }
    }
    focusFirst(browserEvent, filter) {
        this.focusNth(0, browserEvent, filter);
    }
    focusNth(n, browserEvent, filter) {
        if (this.length === 0) {
            return;
        }
        const index = this.findNextIndex(n, false, filter);
        if (index > -1) {
            this.setFocus([
                index
            ], browserEvent);
        }
    }
    findNextIndex(index) {
        let loop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, filter = arguments.length > 2 ? arguments[2] : void 0;
        for(let i = 0; i < this.length; i++){
            if (index >= this.length && !loop) {
                return -1;
            }
            index = index % this.length;
            if (!filter || filter(this.element(index))) {
                return index;
            }
            index++;
        }
        return -1;
    }
    findPreviousIndex(index) {
        let loop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, filter = arguments.length > 2 ? arguments[2] : void 0;
        for(let i = 0; i < this.length; i++){
            if (index < 0 && !loop) {
                return -1;
            }
            index = (this.length + index % this.length) % this.length;
            if (!filter || filter(this.element(index))) {
                return index;
            }
            index--;
        }
        return -1;
    }
    getFocus() {
        return this.focus.get();
    }
    getFocusedElements() {
        return this.getFocus().map((i)=>this.view.element(i));
    }
    reveal(index, relativeTop) {
        let paddingTop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        if (index < 0 || index >= this.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListError"](this.user, "Invalid index ".concat(index));
        }
        const scrollTop = this.view.getScrollTop();
        const elementTop = this.view.elementTop(index);
        const elementHeight = this.view.elementHeight(index);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(relativeTop)) {
            // y = mx + b
            const m = elementHeight - this.view.renderHeight + paddingTop;
            this.view.setScrollTop(m * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$numbers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(relativeTop, 0, 1) + elementTop - paddingTop);
        } else {
            const viewItemBottom = elementTop + elementHeight;
            const scrollBottom = scrollTop + this.view.renderHeight;
            if (elementTop < scrollTop + paddingTop && viewItemBottom >= scrollBottom) {
            // The element is already overflowing the viewport, no-op
            } else if (elementTop < scrollTop + paddingTop || viewItemBottom >= scrollBottom && elementHeight >= this.view.renderHeight) {
                this.view.setScrollTop(elementTop - paddingTop);
            } else if (viewItemBottom >= scrollBottom) {
                this.view.setScrollTop(viewItemBottom - this.view.renderHeight);
            }
        }
    }
    /**
     * Returns the relative position of an element rendered in the list.
     * Returns `null` if the element isn't *entirely* in the visible viewport.
     */ getRelativeTop(index) {
        let paddingTop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (index < 0 || index >= this.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListError"](this.user, "Invalid index ".concat(index));
        }
        const scrollTop = this.view.getScrollTop();
        const elementTop = this.view.elementTop(index);
        const elementHeight = this.view.elementHeight(index);
        if (elementTop < scrollTop + paddingTop || elementTop + elementHeight > scrollTop + this.view.renderHeight) {
            return null;
        }
        // y = mx + b
        const m = elementHeight - this.view.renderHeight + paddingTop;
        return Math.abs((scrollTop + paddingTop - elementTop) / m);
    }
    getHTMLElement() {
        return this.view.domNode;
    }
    getScrollableElement() {
        return this.view.scrollableElementDomNode;
    }
    getElementID(index) {
        return this.view.getElementDomId(index);
    }
    getElementTop(index) {
        return this.view.elementTop(index);
    }
    style(styles) {
        this.styleController.style(styles);
    }
    toListEvent(param) {
        let { indexes, browserEvent } = param;
        return {
            indexes,
            elements: indexes.map((i)=>this.view.element(i)),
            browserEvent
        };
    }
    _onFocusChange() {
        const focus = this.focus.get();
        this.view.domNode.classList.toggle('element-focused', focus.length > 0);
        this.onDidChangeActiveDescendant();
    }
    onDidChangeActiveDescendant() {
        const focus = this.focus.get();
        if (focus.length > 0) {
            var _this_accessibilityProvider;
            let id;
            if ((_this_accessibilityProvider = this.accessibilityProvider) === null || _this_accessibilityProvider === void 0 ? void 0 : _this_accessibilityProvider.getActiveDescendantId) {
                id = this.accessibilityProvider.getActiveDescendantId(this.view.element(focus[0]));
            }
            this.view.domNode.setAttribute('aria-activedescendant', id || this.view.getElementDomId(focus[0]));
        } else {
            this.view.domNode.removeAttribute('aria-activedescendant');
        }
    }
    _onSelectionChange() {
        const selection = this.selection.get();
        this.view.domNode.classList.toggle('selection-none', selection.length === 0);
        this.view.domNode.classList.toggle('selection-single', selection.length === 1);
        this.view.domNode.classList.toggle('selection-multiple', selection.length > 1);
    }
    dispose() {
        this._onDidDispose.fire();
        this.disposables.dispose();
        this._onDidDispose.dispose();
    }
    constructor(user, container, virtualDelegate, renderers, _options = DefaultOptions){
        var _this__options_accessibilityProvider;
        this.user = user;
        this._options = _options;
        this.focus = new Trait('focused');
        this.anchor = new Trait('anchor');
        this.eventBufferer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventBufferer"]();
        this._ariaLabel = '';
        this.disposables = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisposableStore"]();
        this._onDidDispose = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"]();
        this.onDidDispose = this._onDidDispose.event;
        const role = this._options.accessibilityProvider && this._options.accessibilityProvider.getWidgetRole ? (_this__options_accessibilityProvider = this._options.accessibilityProvider) === null || _this__options_accessibilityProvider === void 0 ? void 0 : _this__options_accessibilityProvider.getWidgetRole() : 'list';
        this.selection = new SelectionTrait(role !== 'listbox');
        const baseRenderers = [
            this.focus.renderer,
            this.selection.renderer
        ];
        this.accessibilityProvider = _options.accessibilityProvider;
        if (this.accessibilityProvider) {
            var _this_accessibilityProvider_onDidChangeActiveDescendant, _this_accessibilityProvider;
            baseRenderers.push(new AccessibiltyRenderer(this.accessibilityProvider));
            (_this_accessibilityProvider_onDidChangeActiveDescendant = (_this_accessibilityProvider = this.accessibilityProvider).onDidChangeActiveDescendant) === null || _this_accessibilityProvider_onDidChangeActiveDescendant === void 0 ? void 0 : _this_accessibilityProvider_onDidChangeActiveDescendant.call(_this_accessibilityProvider, this.onDidChangeActiveDescendant, this, this.disposables);
        }
        renderers = renderers.map((r)=>new PipelineRenderer(r.templateId, [
                ...baseRenderers,
                r
            ]));
        const viewOptions = {
            ..._options,
            dnd: _options.dnd && new ListViewDragAndDrop(this, _options.dnd)
        };
        this.view = this.createListView(container, virtualDelegate, renderers, viewOptions);
        this.view.domNode.setAttribute('role', role);
        if (_options.styleController) {
            this.styleController = _options.styleController(this.view.domId);
        } else {
            const styleElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyleSheet"])(this.view.domNode);
            this.styleController = new DefaultStyleController(styleElement, this.view.domId);
        }
        this.spliceable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$splice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CombinedSpliceable"]([
            new TraitSpliceable(this.focus, this.view, _options.identityProvider),
            new TraitSpliceable(this.selection, this.view, _options.identityProvider),
            new TraitSpliceable(this.anchor, this.view, _options.identityProvider),
            this.view
        ]);
        this.disposables.add(this.focus);
        this.disposables.add(this.selection);
        this.disposables.add(this.anchor);
        this.disposables.add(this.view);
        this.disposables.add(this._onDidDispose);
        this.disposables.add(new DOMFocusController(this, this.view));
        if (typeof _options.keyboardSupport !== 'boolean' || _options.keyboardSupport) {
            this.keyboardController = new KeyboardController(this, this.view, _options);
            this.disposables.add(this.keyboardController);
        }
        if (_options.keyboardNavigationLabelProvider) {
            const delegate = _options.keyboardNavigationDelegate || DefaultKeyboardNavigationDelegate;
            var _options_keyboardNavigationEventFilter;
            this.typeNavigationController = new TypeNavigationController(this, this.view, _options.keyboardNavigationLabelProvider, (_options_keyboardNavigationEventFilter = _options.keyboardNavigationEventFilter) !== null && _options_keyboardNavigationEventFilter !== void 0 ? _options_keyboardNavigationEventFilter : ()=>true, delegate);
            this.disposables.add(this.typeNavigationController);
        }
        this.mouseController = this.createMouseController(_options);
        this.disposables.add(this.mouseController);
        this.onDidChangeFocus(this._onFocusChange, this, this.disposables);
        this.onDidChangeSelection(this._onSelectionChange, this, this.disposables);
        if (this.accessibilityProvider) {
            this.ariaLabel = this.accessibilityProvider.getWidgetAriaLabel();
        }
        if (this._options.multipleSelectionSupport !== false) {
            this.view.domNode.setAttribute('aria-multiselectable', 'true');
        }
    }
}
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], List.prototype, "onDidChangeFocus", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], List.prototype, "onDidChangeSelection", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], List.prototype, "onContextMenu", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], List.prototype, "onKeyDown", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], List.prototype, "onDidFocus", null);
__decorate([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memoize"]
], List.prototype, "onDidBlur", null);
}),
"[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listPaging.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/ __turbopack_context__.s({
    "PagedList": ()=>PagedList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/arrays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/cancellation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/monaco-editor@0.52.2/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js [app-client] (ecmascript)");
;
;
;
;
;
;
class PagedRenderer {
    get templateId() {
        return this.renderer.templateId;
    }
    renderTemplate(container) {
        const data = this.renderer.renderTemplate(container);
        return {
            data,
            disposable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$lifecycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disposable"].None
        };
    }
    renderElement(index, _, data, height) {
        var _data_disposable;
        (_data_disposable = data.disposable) === null || _data_disposable === void 0 ? void 0 : _data_disposable.dispose();
        if (!data.data) {
            return;
        }
        const model = this.modelProvider();
        if (model.isResolved(index)) {
            return this.renderer.renderElement(model.get(index), index, data.data, height);
        }
        const cts = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$cancellation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CancellationTokenSource"]();
        const promise = model.resolve(index, cts.token);
        data.disposable = {
            dispose: ()=>cts.cancel()
        };
        this.renderer.renderPlaceholder(index, data.data);
        promise.then((entry)=>this.renderer.renderElement(entry, index, data.data, height));
    }
    disposeTemplate(data) {
        if (data.disposable) {
            data.disposable.dispose();
            data.disposable = undefined;
        }
        if (data.data) {
            this.renderer.disposeTemplate(data.data);
            data.data = undefined;
        }
    }
    constructor(renderer, modelProvider){
        this.renderer = renderer;
        this.modelProvider = modelProvider;
    }
}
class PagedAccessibilityProvider {
    getWidgetAriaLabel() {
        return this.accessibilityProvider.getWidgetAriaLabel();
    }
    getAriaLabel(index) {
        const model = this.modelProvider();
        if (!model.isResolved(index)) {
            return null;
        }
        return this.accessibilityProvider.getAriaLabel(model.get(index));
    }
    constructor(modelProvider, accessibilityProvider){
        this.modelProvider = modelProvider;
        this.accessibilityProvider = accessibilityProvider;
    }
}
function fromPagedListOptions(modelProvider, options) {
    return {
        ...options,
        accessibilityProvider: options.accessibilityProvider && new PagedAccessibilityProvider(modelProvider, options.accessibilityProvider)
    };
}
class PagedList {
    updateOptions(options) {
        this.list.updateOptions(options);
    }
    getHTMLElement() {
        return this.list.getHTMLElement();
    }
    get onDidFocus() {
        return this.list.onDidFocus;
    }
    get widget() {
        return this.list;
    }
    get onDidDispose() {
        return this.list.onDidDispose;
    }
    get onMouseDblClick() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.list.onMouseDblClick, (param)=>{
            let { element, index, browserEvent } = param;
            return {
                element: element === undefined ? undefined : this._model.get(element),
                index,
                browserEvent
            };
        });
    }
    get onPointer() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.list.onPointer, (param)=>{
            let { element, index, browserEvent } = param;
            return {
                element: element === undefined ? undefined : this._model.get(element),
                index,
                browserEvent
            };
        });
    }
    get onDidChangeSelection() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Event"].map(this.list.onDidChangeSelection, (param)=>{
            let { elements, indexes, browserEvent } = param;
            return {
                elements: elements.map((e)=>this._model.get(e)),
                indexes,
                browserEvent
            };
        });
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
        this.list.splice(0, this.list.length, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$common$2f$arrays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(model.length));
    }
    getFocus() {
        return this.list.getFocus();
    }
    getSelection() {
        return this.list.getSelection();
    }
    getSelectedElements() {
        return this.getSelection().map((i)=>this.model.get(i));
    }
    style(styles) {
        this.list.style(styles);
    }
    dispose() {
        this.list.dispose();
    }
    constructor(user, container, virtualDelegate, renderers, options = {}){
        const modelProvider = ()=>this.model;
        const pagedRenderers = renderers.map((r)=>new PagedRenderer(r, modelProvider));
        this.list = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$monaco$2d$editor$40$0$2e$52$2e$2$2f$node_modules$2f$monaco$2d$editor$2f$esm$2f$vs$2f$base$2f$browser$2f$ui$2f$list$2f$listWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"](user, container, virtualDelegate, pagedRenderers, fromPagedListOptions(modelProvider, options));
    }
}
}),
}]);

//# sourceMappingURL=afade_monaco-editor_esm_vs_base_browser_ui_list_c2953058._.js.map