import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

// describe('Our first test', () => {
//     it('should pass', (done) => {
//         expect(true).to.equal(true);
//         const index = fs.readFileSync('./src/index.html', "utf-8");
//         jsdom.env(index, function(err, window) { // this means it is asynchronus
//            const h1 = window.document.getElementsByTagName('h1')[0];
//            expect(h1.innerHTML).to.equal("Hello World!");
//            done();
//            window.close();
//         });
//     });
// });