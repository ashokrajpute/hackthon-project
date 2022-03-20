const pupt = require('puppeteer');
const qut = require('./answer.js');
let page;
console.log("before");
let bwblp = pupt.launch({ headless: false, defaultViewport: null, rgs: ['--start-maximized'] });

bwblp.then(function (browserinstinct) {
  let newpg = browserinstinct.newPage();
  return newpg;
}).then(function (newpg) {
  console.log("new page opened");
  page = newpg;
  let pgwopen = newpg.goto('https://www.hackerrank.com/auth/login');
  return pgwopen;
}).then(function (website) {
  let emailpromise = page.type("[id=input-1]", 'fesagom584@chatich.com',);
  return emailpromise;
}
).then(function () {
  let passpromise = page.type("[id=input-2]", 'pepcoding123',);
  return passpromise;
}).then(function (pasprom) {
  let loginpromise = page.click("[data-analytics='LoginPassword']");//[data-analytics='LoginPassword']
  console.log("done------")
  return loginpromise;
}).then(function () {
  let algowillbeclicked = waitansclick('a[data-attr1="algorithms"]', page);
  return algowillbeclicked;
}).then(function () {
  let clickwarmup = waitansclick('input[value="warmup"]', page)
  return clickwarmup;   //.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled
}).then(function () {
  let arr = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
  return arr;
}).then(function (Qarr) {
  console.log(Qarr.length);
  let k;
  console.log(qut.str.length);

   k = Qclick(Qarr[0], page, qut.str[0]);
  return k;
})




console.log('after');//kajapo8815@chatich.com
//a[data-attr1="algorithms"]
//input[value="warmup"]



function waitansclick(source, cpage) {
  return new Promise(
    function (resolve, reject) {
      let waitfpromise = cpage.waitForSelector(source);
      waitfpromise.then(function (kl) { let t = cpage.click(source); return t; })
        .then(function () { resolve(); }).catch(function () { reject(); });
    });



}
function Qclick(lnk, cpage, ans) {
  return new Promise(function (resolve, reject) {
    let t = lnk.click();
    t.then(function () { let h = waitansclick('[type="checkbox"]', cpage); return h; }).
      then(function () {
        let prwait = cpage.waitForSelector('[type="checkbox"]');
        return prwait;
      }).then(function () {
        let typed = cpage.type('[type="checkbox"]', ans);
        console.log("yoooo");
        return typed;
      }).then(function () {
        let selectall = cpage.keyboard.down('Control');
        console.log('Control');
        return selectall;
      }).then(function () {
        let Apress = cpage.keyboard.press('A', { delay: 200 });
        console.log('A pressed')
        return Apress;
      }).then(function () {

        let cpy = cpage.keyboard.press('C', { delay: 200 });
        return cpy;
      })
      .then(function () {
        let Xpy = cpage.keyboard.press('X', { delay: 2000 });
        console.log("cut");
        cpage.keyboard.up('Control');
        return Xpy;
      })
      .then(function () {
        let el = '.monaco-scrollable-element.editor-scrollable.vs';//'.monaco-editor.no-user-select.vs';//'.monaco-scrollable-element.editor-scrollable.vs';
        let t = waitansclick(el, cpage);
        return t;
      })
      .then(function () {
        let selectall = cpage.keyboard.down('Control', { delay: 200 });
        return selectall;
      })
      .then(function () {
        let t = cpage.keyboard.press('A', { delay: 500 });
        return t;
      })
      .then(function () {
        let copied = cpage.keyboard.press('V', { delay: 20 });
        console.log('pasted');
        return copied;
      }).then(function () {
        let unpress = cpage.keyboard.up('Control', { delay: 10 });
        return unpress;
      }).then(function () {
        //submit; .pmR.pmL.pmB.plT.run-code-wrapper
        let smit = waitansclick('.pmR.pmL.pmB.plT.run-code-wrapper .ui-text', cpage);

        return smit;
      }).then(function () { console.log('submit');
    
    
    })
      .catch(function () { reject(); })

  });

}


// function questionatmp(lnk,cpage){
//   return new Promise(function(resolve,reject){
// let sbmt=cpage.waitForSelector(lnk);
// sbmt.then(function(){
//   let clk=cpage.click(lnk);
//   console.log('clickrd')
//   return clk;
// }).then(function(){resolve();})
// .catch(function(){reject();});
// })

// }


