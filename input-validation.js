var inputValidation = {
    isInteger: function(value) {
        var key = window.event.key,
            keyCode = window.event.keyCode;

        if (
            !isNaN(Number(key)) ||
            inputValidation.isStandard(value)
        )
            return true;
        else
            return false;
    },

    isDecimal: function(value, separator) {
        var key = window.event.key,
            keyCode = window.event.keyCode;

        if (
            !isNaN(Number(key)) ||
            (key === "," && !value.match(",")) ||
            inputValidation.isStandard(value)
        )
            return true;
        else
            return false;
    },

    isStandard: function(value) {
        var keyCode = window.event.keyCode;

        if (
            keyCode === 8 || // backspace
            keyCode === 37 || // left
            keyCode === 39 || // right
            keyCode === 46 // del
        )
            return true;
        else
            return false;
    }
};
