INSERT INTO snippets ( title, content ) VALUES ('vue production tip','Don''t show production tip in dev mode
Vue.config.productionTip = false');
INSERT INTO snippets ( title, content ) VALUES ('du -sh','> du -sh snippets/
197M	snippets/');
INSERT INTO snippets ( title, content ) VALUES ('npm latest','> npm install npm@latest -g');
INSERT INTO snippets ( title, content ) VALUES ('vue class binding','<div v-bind:class="{ active: isActive }"></div>');
INSERT INTO snippets ( title, content ) VALUES ('add instance properties to vue','Vue.prototype.$appName = ''Snippets''');
INSERT INTO snippets ( title, content ) VALUES ('empty file','> sudo bash -c ''> filename''');
INSERT INTO snippets ( title, content ) VALUES ('linux kernel version','> uname -r');
INSERT INTO snippets ( title, content ) VALUES ('vue is','component changes when currentView changes
<component v-bind:is="currentView"></component>
can be used as a simple router');
INSERT INTO snippets ( title, content ) VALUES ('vue version','> vue --version');
INSERT INTO snippets ( title, content ) VALUES ('vue server local','> npm install -g serve
> cd project
> serve -s dist');
INSERT INTO snippets ( title, content ) VALUES ('v-focus','Vue.directive( ''focus'', {
  inserted: function ( el ) {
    // Focus the element
    el.focus()
  }
})');
INSERT INTO snippets ( title, content ) VALUES ('vue devtools','Vue.config.devtools = true');
