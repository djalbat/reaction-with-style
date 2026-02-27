"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _reaction = require("reaction");
const _withstyle = require("with-style");
const _class = require("./utilities/class");
const { generateClassName } = _withstyle.classNameUtilities, { renderStyle, renderStyles, generateStyle, retrieveStyle } = _withstyle.stylesUtilities;
function withStyle(ClassOrFunction) {
    return function() {
        const args = [
            ...arguments
        ]; ///
        let { className = null } = ClassOrFunction;
        const superStyle = retrieveStyle(className);
        className = generateClassName();
        generateStyle(args, className, superStyle);
        const ClassOrFunctionClass = (0, _class.isClass)(ClassOrFunction);
        if (ClassOrFunctionClass) {
            const Class = ClassOrFunction; ///
            ClassOrFunction = class extends Class {
                render(update) {
                    this.props = appendClassNameToProps(className, this.props);
                    return super.render(update);
                }
            };
        } else {
            const Function = ClassOrFunction; ///
            ClassOrFunction = (props, context, element)=>{
                props = appendClassNameToProps(className, props);
                return Function(props, context, element);
            };
        }
        Object.assign(ClassOrFunction, {
            className
        });
        return ClassOrFunction;
    };
}
Object.assign(withStyle, {
    renderStyle,
    renderStyles
});
const _default = withStyle;
_withstyle.tagNames.forEach((tagName)=>{
    Object.defineProperty(withStyle, tagName, {
        get: ()=>function() {
                const args = [
                    ...arguments
                ], className = generateClassName();
                generateStyle(args, className);
                const Function = (props, context, element)=>{
                    const { children } = props;
                    props = appendClassNameToProps(className, props);
                    return _reaction.React.createElement(tagName, props, ...children);
                };
                Object.assign(Function, {
                    className
                });
                return Function;
            }
    });
});
function appendClassNameToProps(className, props) {
    props = props.hasOwnProperty("className") ? props : {
        ...props,
        className
    }; ///
    return props;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5pbXBvcnQgeyB0YWdOYW1lcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5cbmNvbnN0IHsgZ2VuZXJhdGVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWyAuLi5hcmd1bWVudHMgXTsgIC8vL1xuXG4gICAgbGV0IHsgY2xhc3NOYW1lID0gbnVsbCB9ID0gQ2xhc3NPckZ1bmN0aW9uO1xuXG4gICAgY29uc3Qgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcblxuICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSwgc3VwZXJTdHlsZSk7XG5cbiAgICBjb25zdCBDbGFzc09yRnVuY3Rpb25DbGFzcyA9IGlzQ2xhc3MoQ2xhc3NPckZ1bmN0aW9uKTtcblxuICAgIGlmIChDbGFzc09yRnVuY3Rpb25DbGFzcykge1xuICAgICAgY29uc3QgQ2xhc3MgPSBDbGFzc09yRnVuY3Rpb247ICAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gY2xhc3MgZXh0ZW5kcyBDbGFzcyB7XG4gICAgICAgIHJlbmRlcih1cGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHRoaXMucHJvcHMpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcih1cGRhdGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBGdW5jdGlvbiA9IENsYXNzT3JGdW5jdGlvbjsgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IChwcm9wcywgY29udGV4dCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBwcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihDbGFzc09yRnVuY3Rpb24sIHtcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIENsYXNzT3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgcmVuZGVyU3R5bGUsXG4gIHJlbmRlclN0eWxlc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZTtcblxudGFnTmFtZXMuZm9yRWFjaCgodGFnTmFtZSkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2l0aFN0eWxlLCB0YWdOYW1lLCB7XG4gICAgZ2V0OiAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXSwgIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUpO1xuXG4gICAgICBjb25zdCBGdW5jdGlvbiA9IChwcm9wcywgY29udGV4dCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgICAgICBwcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oRnVuY3Rpb24sIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIEZ1bmN0aW9uO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHByb3BzKSB7XG4gIHByb3BzID0gcHJvcHMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikgPyBwcm9wcyA6IHsuLi5wcm9wcywgY2xhc3NOYW1lfTsgLy8vXG5cbiAgcmV0dXJuIHByb3BzO1xufVxuIl0sIm5hbWVzIjpbImdlbmVyYXRlQ2xhc3NOYW1lIiwiY2xhc3NOYW1lVXRpbGl0aWVzIiwicmVuZGVyU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJnZW5lcmF0ZVN0eWxlIiwicmV0cmlldmVTdHlsZSIsInN0eWxlc1V0aWxpdGllcyIsIndpdGhTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGFzc05hbWUiLCJzdXBlclN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uQ2xhc3MiLCJpc0NsYXNzIiwiQ2xhc3MiLCJyZW5kZXIiLCJ1cGRhdGUiLCJwcm9wcyIsImFwcGVuZENsYXNzTmFtZVRvUHJvcHMiLCJGdW5jdGlvbiIsImNvbnRleHQiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZXMiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiY2hpbGRyZW4iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeURBOzs7ZUFBQTs7OzBCQXZEc0I7MkJBQ3dDO3VCQUV0QztBQUV4QixNQUFNLEVBQUVBLGlCQUFpQixFQUFFLEdBQUdDLDZCQUFrQixFQUMxQyxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUUsR0FBR0MsMEJBQWU7QUFFbkYsU0FBU0MsVUFBVUMsZUFBZTtJQUNoQyxPQUFPO1FBQ0wsTUFBTUMsT0FBTztlQUFLQztTQUFXLEVBQUcsR0FBRztRQUVuQyxJQUFJLEVBQUVDLFlBQVksSUFBSSxFQUFFLEdBQUdIO1FBRTNCLE1BQU1JLGFBQWFQLGNBQWNNO1FBRWpDQSxZQUFZWDtRQUVaSSxjQUFjSyxNQUFNRSxXQUFXQztRQUUvQixNQUFNQyx1QkFBdUJDLElBQUFBLGNBQU8sRUFBQ047UUFFckMsSUFBSUssc0JBQXNCO1lBQ3hCLE1BQU1FLFFBQVFQLGlCQUFrQixHQUFHO1lBRW5DQSxrQkFBa0IsY0FBY087Z0JBQzlCQyxPQUFPQyxNQUFNLEVBQUU7b0JBQ2IsSUFBSSxDQUFDQyxLQUFLLEdBQUdDLHVCQUF1QlIsV0FBVyxJQUFJLENBQUNPLEtBQUs7b0JBRXpELE9BQU8sS0FBSyxDQUFDRixPQUFPQztnQkFDdEI7WUFDRjtRQUNGLE9BQU87WUFDTCxNQUFNRyxXQUFXWixpQkFBaUIsR0FBRztZQUVyQ0Esa0JBQWtCLENBQUNVLE9BQU9HLFNBQVNDO2dCQUNqQ0osUUFBUUMsdUJBQXVCUixXQUFXTztnQkFFMUMsT0FBT0UsU0FBU0YsT0FBT0csU0FBU0M7WUFDbEM7UUFDRjtRQUVBQyxPQUFPQyxNQUFNLENBQUNoQixpQkFBaUI7WUFDN0JHO1FBQ0Y7UUFFQSxPQUFPSDtJQUNUO0FBQ0Y7QUFFQWUsT0FBT0MsTUFBTSxDQUFDakIsV0FBVztJQUN2Qkw7SUFDQUM7QUFDRjtNQUVBLFdBQWVJO0FBRWZrQixtQkFBUSxDQUFDQyxPQUFPLENBQUMsQ0FBQ0M7SUFDaEJKLE9BQU9LLGNBQWMsQ0FBQ3JCLFdBQVdvQixTQUFTO1FBQ3hDRSxLQUFLLElBQU07Z0JBQ1QsTUFBTXBCLE9BQU87dUJBQUlDO2lCQUFVLEVBQ3JCQyxZQUFZWDtnQkFFbEJJLGNBQWNLLE1BQU1FO2dCQUVwQixNQUFNUyxXQUFXLENBQUNGLE9BQU9HLFNBQVNDO29CQUNoQyxNQUFNLEVBQUVRLFFBQVEsRUFBRSxHQUFHWjtvQkFFckJBLFFBQVFDLHVCQUF1QlIsV0FBV087b0JBRTFDLE9BQU9hLGVBQUssQ0FBQ0MsYUFBYSxDQUFDTCxTQUFTVCxVQUFVWTtnQkFDaEQ7Z0JBRUFQLE9BQU9DLE1BQU0sQ0FBQ0osVUFBVTtvQkFDdEJUO2dCQUNGO2dCQUVBLE9BQU9TO1lBQ1Q7SUFDRjtBQUNGO0FBRUEsU0FBU0QsdUJBQXVCUixTQUFTLEVBQUVPLEtBQUs7SUFDOUNBLFFBQVFBLE1BQU1lLGNBQWMsQ0FBQyxlQUFlZixRQUFRO1FBQUMsR0FBR0EsS0FBSztRQUFFUDtJQUFTLEdBQUcsR0FBRztJQUU5RSxPQUFPTztBQUNUIn0=