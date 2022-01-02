function Logger(out, ltype = 0)
{
    switch (ltype) {
        case 0:
            console.log(out);
            break;
        case 1:
            // pass object or array
            // var a = {id: 1, name: 'toto'};
            // var b = {id: 2, name: 'tutu'};
            // Logger({a, b})
            // or
            // Logger([a, b]);
            console.table(out);
            break;
        case 2:
            console.time(out);
            break;
        case 3:
            console.timeEnd(out);
            break;
        case 4:
            console.trace(out);
            break;
        default:
            console.log(out);
            break;
    }
}

const Utils = {
    rand: function(mn, mx)
    {
        return Math.floor(Math.random() * (mx - mn + 1)) + mn;
    },

    copy: function(target, callback)
    {
        //let elm = (/^#\w+/.test(target)) ? target : `#${target}`;

        document.querySelector(target).select();

        if (document.execCommand("copy"))
        {
            callback();
            return true;
        }
        else
        {
            return false;
        }
    }
};

export { Logger, Utils };
