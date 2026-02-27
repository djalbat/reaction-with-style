"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LexicalEntriesTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class LexicalEntriesTextarea extends _textarea.default {
    getLexicalEntries() {
        const value = this.getValue(), lexicalEntries = JSON.parse(value);
        return lexicalEntries;
    }
    setLexicalEntries(lexicalEntries) {
        const value = JSON.stringify(lexicalEntries, null, _constants.DOUBLE_SPACE);
        this.setValue(value);
    }
    render(update) {
        const { className } = _textarea.default, { children } = this.props;
        return /*#__PURE__*/ React.createElement("textarea", {
            className: `${className} lexical-entries`,
            spellCheck: "false"
        }, children);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2xleGljYWxFbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBKU09OLnBhcnNlKHZhbHVlKTtcblxuICAgIHJldHVybiBsZXhpY2FsRW50cmllcztcbiAgfVxuXG4gIHNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgRE9VQkxFX1NQQUNFKTtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBUZXh0YXJlYSxcbiAgICAgICAgICB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBsZXhpY2FsLWVudHJpZXNgfSBzcGVsbENoZWNrPVwiZmFsc2VcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0YXJlYT5cblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiVGV4dGFyZWEiLCJnZXRMZXhpY2FsRW50cmllcyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsRW50cmllcyIsIkpTT04iLCJwYXJzZSIsInNldExleGljYWxFbnRyaWVzIiwic3RyaW5naWZ5IiwiRE9VQkxFX1NQQUNFIiwic2V0VmFsdWUiLCJyZW5kZXIiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwidGV4dGFyZWEiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O2lFQUpBOzJCQUVROzs7Ozs7QUFFZCxNQUFNQSwrQkFBK0JDLGlCQUFRO0lBQzFEQyxvQkFBb0I7UUFDbEIsTUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDSjtRQUVsQyxPQUFPRTtJQUNUO0lBRUFHLGtCQUFrQkgsY0FBYyxFQUFFO1FBQ2hDLE1BQU1GLFFBQVFHLEtBQUtHLFNBQVMsQ0FBQ0osZ0JBQWdCLE1BQU1LLHVCQUFZO1FBRS9ELElBQUksQ0FBQ0MsUUFBUSxDQUFDUjtJQUNoQjtJQUVBUyxPQUFPQyxNQUFNLEVBQUU7UUFDYixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHYixpQkFBUSxFQUN4QixFQUFFYyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUNDLEtBQUs7UUFFL0IscUJBRUUsb0JBQUNDO1lBQVNILFdBQVcsR0FBR0EsVUFBVSxnQkFBZ0IsQ0FBQztZQUFFSSxZQUFXO1dBQzdESDtJQUlQO0FBQ0YifQ==