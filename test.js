const { Linter } = require( 'eslint' );
const rules = require( './rules' );



const linter = new Linter();

const samples = {
    function: `
function func( n ) {

    if ( n < 2 ) {

        return n;

    }

    return func( n - 1 ) + func( n - 2 );

}
`,
    loop: `
for ( let i = 0; i < 10; i++ ) {

    console.log( ( !( i % 3 ) ? 'Fizz' : '' ) + ( !( i % 5 ) ? 'Buzz' : '' ) + i );

}
`,

    conditional: `
if ( ~( 2 ** 32 - 1 ) ) {

    console.log( 'ඞ' );

} else if ( ~( 2 ** 64 - 1 ) ) { // exceeds Number.MAX_SAFE_INTEGER

    console.log( '???' );

} else {

    console.log( '(^ ^)b' );

}
`,
    switch: `
switch ( true ) {

    case false:
        void 0;
        break;

    default:
        void 1;

}
`,
    'block-scope': `
let someGlobal = '';

class Test {

    constructor() {

        this.someProperty = '';

    }

    someMethod() {

        return this.someProperty;

    }

    get someGetter() {

        return someGlobal;

    }

    set someSetter( value ) {

        someGlobal = value;

    }

}

function func() {}
`,
    keywords: `
const a = 1;
const b = 2;

function test() {

    let c = 3;

    return a + b;

}
`,
    contructors: `
function UpperCaseContructor() {

    this.someProperty = '';

    return this;

}
`,
    operators: `
let i = 0;

i++;
i--;
++i;
--i;
i = ~i;
i = !i;
i = i + 1;
`
};



console.log( '[eslint-config-0x7844]', 'Starting tests...' );


let fails = 0;

for ( const [ name, sample ] of Object.entries( samples ) ) {

    const errors = linter.verify( sample, rules ).filter( m => m.severity === 2 /* error */ );

    if ( !errors.length ) {

        console.log( '✓', name );
        continue;

    }

    console.error( '[eslint-config-0x7844]', name + ' failed to pass.' );
    console.error( errors.map(error => `\n(${error.line}:${error.column})\t${error.message} (${error.ruleId})`).join('').split('\n').slice(1).join('\n') + '\n' );
    fails++;

}



if ( fails ) {

    console.error( '[eslint-config-noxar]', 'Process terminated.' );
    process.exit( 1 );

}


console.info( '[eslint-config-noxar]', 'Process completed.' );
