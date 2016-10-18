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
        console.log(keyCode);

        if (
            keyCode === 13 || // enter
            keyCode === 8 || // backspace
            keyCode === 46 || // del
            keyCode === 37 || // left
            keyCode === 39 || // right
            keyCode === 9 || // tab
            keyCode === 27 || // esc
            keyCode === 36 || // home
            keyCode === 35 || // end
            keyCode === 116 // f5
        )
            return true;
        else
            return false;
    }
};
