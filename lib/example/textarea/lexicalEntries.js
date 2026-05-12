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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class LexicalEntriesTextarea extends _textarea.default {
    getLexicalEntries() {
        const value = this.getValue(), jsonString = value, json = JSON.parse(jsonString), lexicalEntries = json; ///
        return lexicalEntries;
    }
    setLexicalEntries(lexicalEntries) {
        const json = lexicalEntries, jsonString = JSON.stringify(json, null, 2), value = jsonString; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2xleGljYWxFbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExleGljYWxFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldExleGljYWxFbnRyaWVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGpzb25TdHJpbmcgPSB2YWx1ZSwgLy8vXG4gICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBqc29uOyAgLy8vXG5cbiAgICByZXR1cm4gbGV4aWNhbEVudHJpZXM7XG4gIH1cblxuICBzZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICAgIGNvbnN0IGpzb24gPSBsZXhpY2FsRW50cmllcywgIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKSxcbiAgICAgICAgICB2YWx1ZSA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IFRleHRhcmVhLFxuICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGxleGljYWwtZW50cmllc2B9IHNwZWxsQ2hlY2s9XCJmYWxzZVwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3RleHRhcmVhPlxuXG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldExleGljYWxFbnRyaWVzIiwidmFsdWUiLCJnZXRWYWx1ZSIsImpzb25TdHJpbmciLCJqc29uIiwiSlNPTiIsInBhcnNlIiwibGV4aWNhbEVudHJpZXMiLCJzZXRMZXhpY2FsRW50cmllcyIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwicmVuZGVyIiwidXBkYXRlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsInRleHRhcmVhIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztpRUFGQTs7Ozs7O0FBRU4sTUFBTUEsK0JBQStCQyxpQkFBUTtJQUMxREMsb0JBQW9CO1FBQ2xCLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxhQUFhRixPQUNiRyxPQUFPQyxLQUFLQyxLQUFLLENBQUNILGFBQ2xCSSxpQkFBaUJILE1BQU8sR0FBRztRQUVqQyxPQUFPRztJQUNUO0lBRUFDLGtCQUFrQkQsY0FBYyxFQUFFO1FBQ2hDLE1BQU1ILE9BQU9HLGdCQUNQSixhQUFhRSxLQUFLSSxTQUFTLENBQUNMLE1BQU0sTUFBTSxJQUN4Q0gsUUFBUUUsWUFBWSxHQUFHO1FBRTdCLElBQUksQ0FBQ08sUUFBUSxDQUFDVDtJQUNoQjtJQUVBVSxPQUFPQyxNQUFNLEVBQUU7UUFDYixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHZCxpQkFBUSxFQUN4QixFQUFFZSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUNDLEtBQUs7UUFFL0IscUJBRUUsb0JBQUNDO1lBQVNILFdBQVcsR0FBR0EsVUFBVSxnQkFBZ0IsQ0FBQztZQUFFSSxZQUFXO1dBQzdESDtJQUlQO0FBQ0YifQ==