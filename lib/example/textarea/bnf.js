"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BNFTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BNFTextarea extends _textarea.default {
    getBNF() {
        const value = this.getValue(), bnf = value; ///
        return bnf;
    }
    setBNF(bnf) {
        const value = bnf; ///
        this.setValue(value);
    }
    render(update) {
        const { className } = _textarea.default, { children } = this.props;
        return /*#__PURE__*/ React.createElement("textarea", {
            className: `${className} bnf`,
            spellCheck: "false"
        }, children);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0Qk5GKGJuZikge1xuICAgIGNvbnN0IHZhbHVlID0gYm5mOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gVGV4dGFyZWEsXG4gICAgICAgICAgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gYm5mYH0gc3BlbGxDaGVjaz1cImZhbHNlXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdGV4dGFyZWE+XG5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQk5GVGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldEJORiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJibmYiLCJzZXRCTkYiLCJzZXRWYWx1ZSIsInJlbmRlciIsInVwZGF0ZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ0ZXh0YXJlYSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7aUVBRkE7Ozs7OztBQUVOLE1BQU1BLG9CQUFvQkMsaUJBQVE7SUFDL0NDLFNBQVM7UUFDUCxNQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsTUFBTUYsT0FBUSxHQUFHO1FBRXZCLE9BQU9FO0lBQ1Q7SUFFQUMsT0FBT0QsR0FBRyxFQUFFO1FBQ1YsTUFBTUYsUUFBUUUsS0FBTSxHQUFHO1FBRXZCLElBQUksQ0FBQ0UsUUFBUSxDQUFDSjtJQUNoQjtJQUVBSyxPQUFPQyxNQUFNLEVBQUU7UUFDYixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHVCxpQkFBUSxFQUN4QixFQUFFVSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUNDLEtBQUs7UUFFL0IscUJBRUUsb0JBQUNDO1lBQVNILFdBQVcsR0FBR0EsVUFBVSxJQUFJLENBQUM7WUFBRUksWUFBVztXQUNqREg7SUFJUDtBQUNGIn0=