/**
 * Run command: make test-mocha-default
 * 
 */

var should = require('should');

var retZero = function () {
    return 0;
};

var retHello = function () {
    return 'hello';
};

describe('test/demo_01.test.js, part 1', function () {
    this.timeout(2 * 1000); // as cmd option -t
    this.slow(1000); // as cmd option -s

    after(() => {
        console.log('all after, part1');
    });

    describe('group 1', function () {
        this.timeout(500);

        after(() => {
            console.log('group 1 after');
        });

        it('test case 1', function () {
            retZero().should.be.equal(0);
        });
    });

    describe('group 2', function () {
        after(() => {
            console.log('group 2 after');
        });

        afterEach(() => console.log('group 2 each case after'));

        it('test case 2', function () {
            retHello().should.be.equal('hello');
        });

        it('test case 3', function () {
            retZero().should.be.equal(1);
        });
    });

    describe.skip('group 3, to be skip', function () {
        it('test case 4', function () {
            'abc'.should.be.match(/bc$/);
        });

        it('test case 5', function () {
            'abc'.should.match(/^ab/);
        });
    });
});

describe('test/demo_01.test.js, part 2', function () {
    after(() => {
        console.log('all after, part2');
    });

    describe('group 4', function () {
        it('test case 5', function () {
            'abc'.should.be.match(/bc$/);
        });

        it('test case 6', function () {
            'abc'.should.match(/^ab/);
        });
    });
});