class Parent {
    constructor () {
        console.log('I am constructor')
    }

    static printStatic(msg) {
        console.log('static', msg);
    }

    print(msg) {
        console.log(msg);
    }
}


class Child extends Parent{
    constructor () {
        super()
        this._msg = ' *_*'
    }

    print(msg) {
        super.print('Child: ' + msg + ' ' + this._msg)
    }
}


const instance = new Parent()
instance.print('1)')
const instanceChild = new Child()
instanceChild.print('2)')