import greeting from '../utils/HelloWorld';

it ("Should Output 'Hello Dallin!'", ()=>{
    
    const output = greeting();

    expect(output).toBe("Hello Dallin!");
});