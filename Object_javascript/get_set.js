 var obj = {
        get prop() {
            return "Getter";
        },
        set prop(value) {
            console.log("Setter: "+value);
        }
    }

console.log(obj.prop)
obj.prop = 3