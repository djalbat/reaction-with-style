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
const { Component } = _reaction.React, { generateClassName } = _withstyle.classNameUtilities, { renderStyle, renderStyles, generateStyle, retrieveStyle } = _withstyle.stylesUtilities;
function withStyle(ClassOrFunction) {
    return function() {
        const args = [
            ...arguments
        ]; ///
        let { className = null } = ClassOrFunction;
        const superStyle = retrieveStyle(className);
        className = generateClassName();
        generateStyle(args, className, superStyle);
        const ClassOrFunctionClass = Component.isPrototypeOf(ClassOrFunction); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5pbXBvcnQgeyB0YWdOYW1lcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3QsXG4gICAgICB7IGdlbmVyYXRlQ2xhc3NOYW1lIH0gPSBjbGFzc05hbWVVdGlsaXRpZXMsXG4gICAgICB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMsIGdlbmVyYXRlU3R5bGUsIHJldHJpZXZlU3R5bGUgfSA9IHN0eWxlc1V0aWxpdGllcztcblxuZnVuY3Rpb24gd2l0aFN0eWxlKENsYXNzT3JGdW5jdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJncyA9IFsgLi4uYXJndW1lbnRzIF07ICAvLy9cblxuICAgIGxldCB7IGNsYXNzTmFtZSA9IG51bGwgfSA9IENsYXNzT3JGdW5jdGlvbjtcblxuICAgIGNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSk7XG5cbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUsIHN1cGVyU3R5bGUpO1xuXG4gICAgY29uc3QgQ2xhc3NPckZ1bmN0aW9uQ2xhc3MgPSBDb21wb25lbnQuaXNQcm90b3R5cGVPZihDbGFzc09yRnVuY3Rpb24pOyAgLy8vXG5cbiAgICBpZiAoQ2xhc3NPckZ1bmN0aW9uQ2xhc3MpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gQ2xhc3NPckZ1bmN0aW9uOyAgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IGNsYXNzIGV4dGVuZHMgQ2xhc3Mge1xuICAgICAgICByZW5kZXIodXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCB0aGlzLnByb3BzKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlci5yZW5kZXIodXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgRnVuY3Rpb24gPSBDbGFzc09yRnVuY3Rpb247IC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSAocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgcHJvcHMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgcHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBGdW5jdGlvbihwcm9wcywgY29udGV4dCwgZWxlbWVudCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oQ2xhc3NPckZ1bmN0aW9uLCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBDbGFzc09yRnVuY3Rpb247XG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24od2l0aFN0eWxlLCB7XG4gIHJlbmRlclN0eWxlLFxuICByZW5kZXJTdHlsZXNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGU7XG5cbnRhZ05hbWVzLmZvckVhY2goKHRhZ05hbWUpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpdGhTdHlsZSwgdGFnTmFtZSwge1xuICAgIGdldDogKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c10sICAvLy9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lKTtcblxuICAgICAgY29uc3QgRnVuY3Rpb24gPSAocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgICAgICAgcHJvcHMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgcHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbik7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuYXNzaWduKEZ1bmN0aW9uLCB7XG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBGdW5jdGlvbjtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcykge1xuICBwcm9wcyA9IHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpID8gcHJvcHMgOiB7Li4ucHJvcHMsIGNsYXNzTmFtZX07IC8vL1xuXG4gIHJldHVybiBwcm9wcztcbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJSZWFjdCIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiY2xhc3NOYW1lVXRpbGl0aWVzIiwicmVuZGVyU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJnZW5lcmF0ZVN0eWxlIiwicmV0cmlldmVTdHlsZSIsInN0eWxlc1V0aWxpdGllcyIsIndpdGhTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGFzc05hbWUiLCJzdXBlclN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uQ2xhc3MiLCJpc1Byb3RvdHlwZU9mIiwiQ2xhc3MiLCJyZW5kZXIiLCJ1cGRhdGUiLCJwcm9wcyIsImFwcGVuZENsYXNzTmFtZVRvUHJvcHMiLCJGdW5jdGlvbiIsImNvbnRleHQiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZXMiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdEQTs7O2VBQUE7OzswQkF0RHNCOzJCQUN3QztBQUU5RCxNQUFNLEVBQUVBLFNBQVMsRUFBRSxHQUFHQyxlQUFLLEVBQ3JCLEVBQUVDLGlCQUFpQixFQUFFLEdBQUdDLDZCQUFrQixFQUMxQyxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUUsR0FBR0MsMEJBQWU7QUFFbkYsU0FBU0MsVUFBVUMsZUFBZTtJQUNoQyxPQUFPO1FBQ0wsTUFBTUMsT0FBTztlQUFLQztTQUFXLEVBQUcsR0FBRztRQUVuQyxJQUFJLEVBQUVDLFlBQVksSUFBSSxFQUFFLEdBQUdIO1FBRTNCLE1BQU1JLGFBQWFQLGNBQWNNO1FBRWpDQSxZQUFZWDtRQUVaSSxjQUFjSyxNQUFNRSxXQUFXQztRQUUvQixNQUFNQyx1QkFBdUJmLFVBQVVnQixhQUFhLENBQUNOLGtCQUFtQixHQUFHO1FBRTNFLElBQUlLLHNCQUFzQjtZQUN4QixNQUFNRSxRQUFRUCxpQkFBa0IsR0FBRztZQUVuQ0Esa0JBQWtCLGNBQWNPO2dCQUM5QkMsT0FBT0MsTUFBTSxFQUFFO29CQUNiLElBQUksQ0FBQ0MsS0FBSyxHQUFHQyx1QkFBdUJSLFdBQVcsSUFBSSxDQUFDTyxLQUFLO29CQUV6RCxPQUFPLEtBQUssQ0FBQ0YsT0FBT0M7Z0JBQ3RCO1lBQ0Y7UUFDRixPQUFPO1lBQ0wsTUFBTUcsV0FBV1osaUJBQWlCLEdBQUc7WUFFckNBLGtCQUFrQixDQUFDVSxPQUFPRyxTQUFTQztnQkFDakNKLFFBQVFDLHVCQUF1QlIsV0FBV087Z0JBRTFDLE9BQU9FLFNBQVNGLE9BQU9HLFNBQVNDO1lBQ2xDO1FBQ0Y7UUFFQUMsT0FBT0MsTUFBTSxDQUFDaEIsaUJBQWlCO1lBQzdCRztRQUNGO1FBRUEsT0FBT0g7SUFDVDtBQUNGO0FBRUFlLE9BQU9DLE1BQU0sQ0FBQ2pCLFdBQVc7SUFDdkJMO0lBQ0FDO0FBQ0Y7TUFFQSxXQUFlSTtBQUVma0IsbUJBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDO0lBQ2hCSixPQUFPSyxjQUFjLENBQUNyQixXQUFXb0IsU0FBUztRQUN4Q0UsS0FBSyxJQUFNO2dCQUNULE1BQU1wQixPQUFPO3VCQUFJQztpQkFBVSxFQUNyQkMsWUFBWVg7Z0JBRWxCSSxjQUFjSyxNQUFNRTtnQkFFcEIsTUFBTVMsV0FBVyxDQUFDRixPQUFPRyxTQUFTQztvQkFDaEMsTUFBTSxFQUFFUSxRQUFRLEVBQUUsR0FBR1o7b0JBRXJCQSxRQUFRQyx1QkFBdUJSLFdBQVdPO29CQUUxQyxPQUFPbkIsZUFBSyxDQUFDZ0MsYUFBYSxDQUFDSixTQUFTVCxVQUFVWTtnQkFDaEQ7Z0JBRUFQLE9BQU9DLE1BQU0sQ0FBQ0osVUFBVTtvQkFDdEJUO2dCQUNGO2dCQUVBLE9BQU9TO1lBQ1Q7SUFDRjtBQUNGO0FBRUEsU0FBU0QsdUJBQXVCUixTQUFTLEVBQUVPLEtBQUs7SUFDOUNBLFFBQVFBLE1BQU1jLGNBQWMsQ0FBQyxlQUFlZCxRQUFRO1FBQUMsR0FBR0EsS0FBSztRQUFFUDtJQUFTLEdBQUcsR0FBRztJQUU5RSxPQUFPTztBQUNUIn0=