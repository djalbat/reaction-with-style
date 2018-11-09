'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spread = function () {
  function Spread(startIndex, endIndex) {
    _classCallCheck(this, Spread);

    this.startIndex = startIndex;
    this.endIndex = endIndex;

    this.index = 0;
  }

  _createClass(Spread, [{
    key: 'isBetween',
    value: function isBetween() {
      var between = this.index >= this.startIndex && this.index <= this.endIndex;

      return between;
    }
  }, {
    key: 'incrementIndex',
    value: function incrementIndex() {
      this.index += 1;
    }
  }], [{
    key: 'fromExpression',
    value: function fromExpression(expression) {
      var startIndex = -1,
          endIndex = Number.POSITIVE_INFINITY;

      if (expression !== undefined) {
        var regExp = /\[(\d+)?(\.\.\.)?(\d+)?\]/,
            matches = expression.match(regExp),
            secondMatch = second(matches),
            thirdMatch = third(matches),
            fourthMatch = fourth(matches);

        if (secondMatch !== undefined) {
          startIndex = parseInt(secondMatch);

          if (thirdMatch === undefined) {
            endIndex = startIndex;
          }
        }

        if (fourthMatch !== undefined) {
          endIndex = parseInt(fourthMatch);

          if (thirdMatch === undefined) {
            startIndex = endIndex;
          }
        }
      }

      var spread = new Spread(startIndex, endIndex);

      return spread;
    }
  }]);

  return Spread;
}();

module.exports = Spread;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
function fourth(array) {
  return array[3];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9fb2NjYW0tZG9tL3NwcmVhZC5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJpbmRleCIsImJldHdlZW4iLCJleHByZXNzaW9uIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJ1bmRlZmluZWQiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInRoaXJkTWF0Y2giLCJ0aGlyZCIsImZvdXJ0aE1hdGNoIiwiZm91cnRoIiwicGFyc2VJbnQiLCJzcHJlYWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxVQUFaLEVBQXdCQyxRQUF4QixFQUFrQztBQUFBOztBQUNoQyxTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixVQUFNQyxVQUFZLEtBQUtELEtBQUwsSUFBYyxLQUFLRixVQUFwQixJQUFvQyxLQUFLRSxLQUFMLElBQWMsS0FBS0QsUUFBeEU7O0FBRUEsYUFBT0UsT0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsV0FBS0QsS0FBTCxJQUFjLENBQWQ7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQ2hDLFVBQUlKLGFBQWEsQ0FBQyxDQUFsQjtBQUFBLFVBQ0lDLFdBQVdJLE9BQU9DLGlCQUR0Qjs7QUFHQSxVQUFJRixlQUFlRyxTQUFuQixFQUE4QjtBQUM1QixZQUFNQyxTQUFTLDJCQUFmO0FBQUEsWUFDSUMsVUFBVUwsV0FBV00sS0FBWCxDQUFpQkYsTUFBakIsQ0FEZDtBQUFBLFlBRUlHLGNBQWNDLE9BQU9ILE9BQVAsQ0FGbEI7QUFBQSxZQUdJSSxhQUFhQyxNQUFNTCxPQUFOLENBSGpCO0FBQUEsWUFJSU0sY0FBY0MsT0FBT1AsT0FBUCxDQUpsQjs7QUFNQSxZQUFJRSxnQkFBZ0JKLFNBQXBCLEVBQStCO0FBQzdCUCx1QkFBYWlCLFNBQVNOLFdBQVQsQ0FBYjs7QUFFQSxjQUFJRSxlQUFlTixTQUFuQixFQUE4QjtBQUM1Qk4sdUJBQVdELFVBQVg7QUFDRDtBQUNGOztBQUVELFlBQUllLGdCQUFnQlIsU0FBcEIsRUFBK0I7QUFDN0JOLHFCQUFXZ0IsU0FBU0YsV0FBVCxDQUFYOztBQUVBLGNBQUlGLGVBQWVOLFNBQW5CLEVBQThCO0FBQzVCUCx5QkFBYUMsUUFBYjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFNaUIsU0FBUyxJQUFJbkIsTUFBSixDQUFXQyxVQUFYLEVBQXVCQyxRQUF2QixDQUFmOztBQUVBLGFBQU9pQixNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCckIsTUFBakI7O0FBRUEsU0FBU2EsTUFBVCxDQUFnQlMsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTUCxLQUFULENBQWVPLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMxQyxTQUFTTCxNQUFULENBQWdCSyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InNwcmVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU3ByZWFkIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBzdGFydEluZGV4O1xuICAgIHRoaXMuZW5kSW5kZXggPSBlbmRJbmRleDtcblxuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgaXNCZXR3ZWVuKCkge1xuICAgIGNvbnN0IGJldHdlZW4gPSAoKHRoaXMuaW5kZXggPj0gdGhpcy5zdGFydEluZGV4KSAmJiAodGhpcy5pbmRleCA8PSB0aGlzLmVuZEluZGV4KSk7XG5cbiAgICByZXR1cm4gYmV0d2VlbjtcbiAgfVxuXG4gIGluY3JlbWVudEluZGV4KCkge1xuICAgIHRoaXMuaW5kZXggKz0gMTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgbGV0IHN0YXJ0SW5kZXggPSAtMSxcbiAgICAgICAgZW5kSW5kZXggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCByZWdFeHAgPSAvXFxbKFxcZCspPyhcXC5cXC5cXC4pPyhcXGQrKT9cXF0vLFxuICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpO1xuXG4gICAgICBpZiAoc2Vjb25kTWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGFydEluZGV4ID0gcGFyc2VJbnQoc2Vjb25kTWF0Y2gpO1xuXG4gICAgICAgIGlmICh0aGlyZE1hdGNoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlbmRJbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZvdXJ0aE1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW5kSW5kZXggPSBwYXJzZUludChmb3VydGhNYXRjaCk7XG5cbiAgICAgICAgaWYgKHRoaXJkTWF0Y2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0YXJ0SW5kZXggPSBlbmRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNwcmVhZCA9IG5ldyBTcHJlYWQoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuXG4gICAgcmV0dXJuIHNwcmVhZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwcmVhZDtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG4iXX0=