"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParseTreeTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ParseTreeTextarea extends _textarea.default {
    setParseTree(parseTree) {
        if (parseTree !== null) {
            parseTree.shiftLine(); //
            const parseTreeString = parseTree.asString(), value = parseTreeString; ///
            this.setValue(value);
        } else {
            this.clearParseTree();
        }
    }
    clearParseTree() {
        const value = _constants.EMPTY_STRING;
        this.setValue(value);
    }
    render(update) {
        const { className } = _textarea.default, { children } = this.props;
        return /*#__PURE__*/ React.createElement("textarea", {
            className: `${className} parse-tree`,
            spellCheck: "false",
            readOnly: true
        }, children);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3BhcnNlVHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gICAgaWYgKHBhcnNlVHJlZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCksXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IFRleHRhcmVhLFxuICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHBhcnNlLXRyZWVgfSBzcGVsbENoZWNrPVwiZmFsc2VcIiByZWFkT25seT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0YXJlYT5cblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYXJzZVRyZWVUZXh0YXJlYSIsIlRleHRhcmVhIiwic2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwiYXNTdHJpbmciLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2xlYXJQYXJzZVRyZWUiLCJFTVBUWV9TVFJJTkciLCJyZW5kZXIiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwidGV4dGFyZWEiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7aUVBSkE7MkJBRVE7Ozs7OztBQUVkLE1BQU1BLDBCQUEwQkMsaUJBQVE7SUFDckRDLGFBQWFDLFNBQVMsRUFBRTtRQUN0QixJQUFJQSxjQUFjLE1BQU07WUFDdEJBLFVBQVVDLFNBQVMsSUFBSyxFQUFFO1lBRTFCLE1BQU1DLGtCQUFrQkYsVUFBVUcsUUFBUSxJQUNwQ0MsUUFBUUYsaUJBQWtCLEdBQUc7WUFFbkMsSUFBSSxDQUFDRyxRQUFRLENBQUNEO1FBQ2hCLE9BQU87WUFDTCxJQUFJLENBQUNFLGNBQWM7UUFDckI7SUFDRjtJQUVBQSxpQkFBaUI7UUFDZixNQUFNRixRQUFRRyx1QkFBWTtRQUUxQixJQUFJLENBQUNGLFFBQVEsQ0FBQ0Q7SUFDaEI7SUFFQUksT0FBT0MsTUFBTSxFQUFFO1FBQ2IsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR1osaUJBQVEsRUFDeEIsRUFBRWEsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDQyxLQUFLO1FBRS9CLHFCQUVFLG9CQUFDQztZQUFTSCxXQUFXLEdBQUdBLFVBQVUsV0FBVyxDQUFDO1lBQUVJLFlBQVc7WUFBUUMsVUFBQUE7V0FDaEVKO0lBSVA7QUFDRiJ9