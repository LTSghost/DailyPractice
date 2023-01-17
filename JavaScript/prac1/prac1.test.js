const bt1 = require('./prac1')

test('test btn', () => {
    document.body.innerHTML = `
    <input id="text1" type="text" value="abc"/>
    <input id="text2" type="text" value="123"/>
    <p id="show"</p>
    `;
    expect(bt1()).toBe("a1b2c3")
})