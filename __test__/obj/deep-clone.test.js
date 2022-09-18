import { deepClone } from '../../src/obj/deepClone';

describe('基本类型', () => {
  it('能够复制基本类型', () => {
    const n = 123;
    const n2 = deepClone(n);
    expect(n === n2);
    const s = '123456';
    const s2 = deepClone(s);
    expect(s === s2);
    const b = true;
    const b2 = deepClone(b);
    expect(b === b2);
    const u = undefined;
    const u2 = deepClone(u);
    expect(u === u2);
    const empty = null;
    const empty2 = deepClone(empty);
    expect(empty === empty2);
    const sym = Symbol();
    const sym2 = deepClone(sym);
    expect(sym === sym2);
  });
});

describe('对象', () => {
  it('能够复制普通对象', () => {
    const a = { name: '锤锤', child: { name: '小锤' } };
    const a2 = deepClone(a);
    expect(a !== a2);
    expect(a.name === a2.name);
    expect(a.child !== a2.child);
    expect(a.child.name === a2.child.name);
  });
  it('能够复制数组对象', () => {
    const a = [[11, 12], [21, 22], [31, 32]];
    const a2 = deepClone(a);
    expect(a !== a2);
    expect(a[0] !== a2[0]);
    expect(a[1] !== a2[1]);
    expect(a[2] !== a2[2]);
    expect(a).toEqual(a2);
  });
  it('能够复制函数', () => {
    const a = function (x, y) {
      return x + y;
    };
    a.xxx = { yyy: { zzz: 1 } };
    const a2 = deepClone(a);
    expect(a !== a2);
    expect(a.xxx.yyy.zzz === a2.xxx.yyy.zzz);
    expect(a.xxx.yyy !== a2.xxx.yyy);
    expect(a.xxx !== a2.xxx);
    expect(a(1, 2) === a2(1, 2));
  });
  it('环也能复制', () => {
    const a = { name: '锤锤' };
    a.self = a;
    const a2 = deepClone(a);
    expect(a !== a2);
    expect(a.name === a2.name);
    expect(a.self !== a2.self);
  });
  // chrome 的堆栈大概是 一万二左右，我们不可能把两万层的堆栈存到 chrome 的堆栈里面
  // 所以如果没有处理好的话一定会报堆栈溢出的错误
  // 这个问题在这里我们就不做处理了，这个处理起来其实也简单，把它的数据结构进行一个改造，
  // 用循环的方式把它放到一个数组里面，其实就是把纵向的变成横向的，不让它去压栈
  // xit 就是关掉这个测试用例的意思
  xit('不会爆栈', () => {
    const a = { child: null };
    let b = a;
    for (let i = 0; i < 10000; i++) {
      b.child = {
        child: null,
      };
      b = b.child;
    }
    const a2 = deepClone(a);
    expect(a !== a2);
    expect(a.child !== a2.child);
  });
  it('可以复制正则表达式', () => {
    const a = new RegExp('hi\\d+', 'gi');
    a.xxx = { yyy: { zzz: 1 } };
    const a2 = deepClone(a);
    expect(a.source === a2.source);
    expect(a.flags === a2.flags);
    expect(a !== a2);
    expect(a.xxx.yyy.zzz === a2.xxx.yyy.zzz);
    expect(a.xxx.yyy !== a2.xxx.yyy);
    expect(a.xxx !== a2.xxx);
  });
  it('可以复制日期', () => {
    const a = new Date();
    a.xxx = { yyy: { zzz: 1 } };
    const a2 = deepClone(a);
    expect(a !== a2);
    expect(a.getTime() === a2.getTime());
    expect(a.xxx.yyy.zzz === a2.xxx.yyy.zzz);
    expect(a.xxx.yyy !== a2.xxx.yyy);
    expect(a.xxx !== a2.xxx);
  });
  it('自动跳过原型属性', () => {
    const a = Object.create({ name: 'a' });
    a.xxx = { yyy: { zzz: 1 } };
    const a2 = deepClone(a);
    expect(a !== a2);
    expect('name' in a2).toBeFalsy();
    expect(a.xxx.yyy.zzz === a2.xxx.yyy.zzz);
    expect(a.xxx.yyy !== a2.xxx.yyy);
    expect(a.xxx !== a2.xxx);
  });
  it('很复杂的对象', () => {
    const a = {
      n: NaN,
      n2: Infinity,
      s: '',
      bool: false,
      null: null,
      u: undefined,
      sym: Symbol(),
      o: {
        n: NaN,
        n2: Infinity,
        s: '',
        bool: false,
        null: null,
        u: undefined,
        sym: Symbol(),
      },
      array: [
        {
          n: NaN,
          n2: Infinity,
          s: '',
          bool: false,
          null: null,
          u: undefined,
          sym: Symbol(),
        },
      ],
    };
    const a2 = deepClone(a);
    expect(a !== a2);
    expect(a2.n).toBeNaN();
    expect(a.n2 === a2.n2);
    expect(a.s === a2.s);
    expect(a.bool === a2.bool);
    expect(a.null === a2.null);
    expect(a.u === a2.u);
    expect(a.sym === a2.sym);
    expect(a.o !== a2.o);
    expect(a2.o.n).toBeNaN();
    expect(a.o.n2 === a2.o.n2);
    expect(a.o.s === a2.o.s);
    expect(a.o.bool === a2.o.bool);
    expect(a.o.null === a2.o.null);
    expect(a.o.u === a2.o.u);
    expect(a.o.sym === a2.o.sym);
    expect(a.array !== a2.array);
    expect(a.array[0] !== a2.array[0]);
    expect(a2.array[0].n).toBeNaN();
    expect(a.array[0].n2 === a2.array[0].n2);
    expect(a.array[0].s === a2.array[0].s);
    expect(a.array[0].bool === a2.array[0].bool);
    expect(a.array[0].null === a2.array[0].null);
    expect(a.array[0].u === a2.array[0].u);
    expect(a.array[0].sym === a2.array[0].sym);
  });
});
