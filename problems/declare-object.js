/////////////// part 1 ////////////////
const objConst = {body: {id: 1}}
let objLet = {body: {id: 1}}

// difference ?
objConst = 2
objLet = 2

// difference ?
objConst.body.id = 2
objLet.body.id = 2


////////////// part2.1  ///////////

const objConst = {body: {id: 1}}

const p1 = objConst.body
let p2 = objConst.body

// difference ?
p1 = 2
p2 = 3

// difference ?
p1.id = 2
p2.id = 3


////////////// part2.2  ///////////

const objConst = {body: {id: 1}}

const p1 = objConst.body
const {body: p2} = objConst

// difference ?
p1 = 2
p2 = 3

// difference ?
p1.id = 2
p2.id = 3


////////////// part3  ///////////

const objConst = {body: {id: 1}}

const p1 = objConst.body
const p2 = {...objConst.body}

// difference ?
p1 = 2
p2 = 2

// difference ?
p1.id = 2
p2.id = 2

