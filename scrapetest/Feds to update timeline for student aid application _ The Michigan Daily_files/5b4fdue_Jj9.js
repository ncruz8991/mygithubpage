/*!CK:23150649!*//*1441681387,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["WeIzN"]); }

__d("ComposerTargetType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SELF_USER:"feed",OTHER_USER:"wall",GROUP:"group",PAGE:"page",EVENT:"event",RECOMMENDATION:"recommendation",FUNDRAISER:"fundraiser",EXAMPLE:"example"};},null,{});
__d("ComposerType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={INLINE:"inline",ADVANCED:"advanced",NORMAL:"normal"};},null,{});
__d("ComposerWaterfallEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER_CANCEL:"composer_cancel",COMPOSER_CANCEL_INTENT:"intent_composer_cancel",COMPOSER_ENTRY:"composer_entry",COMPOSER_NOT_RENDERED:"composer_not_renderer",COMPOSER_POST:"composer_post",COMPOSER_POST_CANCEL:"composer_post_cancel",COMPOSER_POST_FAILURE:"composer_post_failure",COMPOSER_POST_FAILURE_FATAL:"composer_post_fatal_failure",COMPOSER_POST_FAILURE_GIVEUP:"composer_post_giveup_failure",COMPOSER_POST_SUCCESS:"composer_post_success",COMPOSER_POST_COMPLETED:"composer_post_completed",COMPOSER_WRITTEN:"composer_written",ALBUM_ADD:"add_album",ALBUM_CANCEL:"cancel_album",ALBUM_INTENT:"intent_album",ALBUM_REMOVE:"remove_album",FRIEND_TAG_ADD:"add_friend_tag",FRIEND_TAG_CANCEL:"cancel_friend_tag",FRIEND_TAG_INTENT:"intent_friend_tag",FRIEND_TAG_REMOVE:"remove_friend_tag",FRIEND_TAG_SEARCH:"search_friend_tag",FRIEND_SHOW_MORE:"show_more_friend_tag",LOCATION_ADD:"add_location",LOCATION_CANCEL:"cancel_location",LOCATION_INTENT:"intent_location",LOCATION_REMOVE:"remove_location",LOCATION_SCROLL:"scroll_location",LOCATION_SEARCH:"search_location",EMBEDS_ADD:"add_embed",EMBEDS_CANCEL:"cancel_embed",EMBEDS_INTENT:"intent_embed",MINUTIAE_ADD:"add_minutiae",MINUTIAE_CANCEL:"cancel_minutiae",MINUTIAE_CHANGE_ICON:"change_icon_minutiae",MINUTIAE_CHANGE_ICON_CANCEL:"change_icon_cancel_minutiae",MINUTIAE_CHANGE_ICON_INTENT:"change_icon_intent_minutiae",MINUTIAE_CHANGE_ICON_SEARCH:"change_icon_search_minutiae",MINUTIAE_INTENT:"intent_minutiae",MINUTIAE_REMOVE:"remove_minutiae",MINUTIAE_SCROLL:"scroll_minutiae",MINUTIAE_SEARCH:"search_minutiae",MINUTIAE_TYPE_CLICK:"type_click_minutiae",MINUTIAE_SEE_MORE:"see_more_minutiae",MINUTIAE_CHAIN_SKIP:"skip_chain_minutiae",MINUTIAE_CHAIN_SUGGEST:"suggest_chain_minutiae",MINUTIAE_ICONPICKER_QUERY:"minutiae_iconpicker_query",MINUTIAE_ICONPICKER_BOOTSTRAP:"minutiae_iconpicker_bootstrap",MINUTIAE_ICONPICKER_SELECT:"minutiae_iconpicker_select",MEDIA_INTENT:"intent_media",MEDIA_CANCEL:"cancel_media",PHOTO_ADD:"add_photo",PHOTO_ADD_FAILURE:"add_photo_failure",PHOTO_ADD_SUCCESS:"add_photo_success",PHOTO_REMOVE:"remove_photo",PRIVACY_ADD:"add_privacy",PRIVACY_CANCEL:"cancel_privacy",PRIVACY_INTENT:"intent_privacy",PRIVACY_SCROLL:"scroll_privacy",PRIVACY_SEE_ALL_LISTS:"see_all_lists_privacy",SELECT_FRIEND_TIMELINE_INTENT:"intent_select_friend_timeline",SELECT_FRIEND_TIMELINE_ADD:"add_select_friend_timeline",SELECT_FRIEND_TIMELINE_CANCEL:"cancel_select_friend_timeline",SERVER_POST_BEGIN:"server_composer_post_begin",SERVER_POST_FAILURE:"server_composer_post_failure",SERVER_POST_SUCCESS:"server_composer_post_succeeded",POST_POST_WITH_TAG_BEGIN:"post_post_with_tag_begin",POST_POST_WITH_TAG_FAILURE:"post_post_with_tag_failure",POST_POST_WITH_TAG_SUCCESS:"post_post_with_tag_success",TARGET_SELECTOR_INTENT:"intent_target_selector",TARGET_SELECTOR_CANCEL:"cancel_target_selector",VIDEO_ADD:"add_video",VIDEO_ADD_FAILURE:"add_video_failure",VIDEO_ADD_SUCCESS:"add_video_success",VIDEO_REMOVE:"remove_video"};},null,{});
__d('ComposerXStore',['Arbiter','ge'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={};function k(m,n){return 'ComposerX/'+m+'/'+n;}var l={set:function(m,n,o){if(!j[m])j[m]={};j[m][n]=o;h.inform(k(m,n),{},h.BEHAVIOR_STATE);},get:function(m,n){if(j[m])return j[m][n];return null;},getAllForComposer:function(m){return j[m]||{};},waitForComponents:function(m,n,o){h.registerCallback(o,n.map(k.bind(null,m)));}};h.subscribe('page_transition',function(){for(var m in j)if(!i(m))delete j[m];});f.exports=l;},null);
__d('fileSliceName',['UserAgent_DEPRECATED'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='slice',j;if(j=h.chrome()){if(j<21)i='webkitSlice';}else if(j=h.firefox()){if(j<13)i='mozSlice';}else if(!(j=h.safari()))if(h.webkit())i='webkitSlice';f.exports=i;},null);
__d('fileSlice',['fileSliceName'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=b.File&&b.File.prototype[h];f.exports=i;},null);
__d('VideoUploadFeatureDetector',['UserAgent_DEPRECATED','fileSlice'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={supportsChunking:function(){return typeof i==='function'&&this.supportsXHR();},supportsFullProgress:function(){return !h.firefox();},supportsFileAPI:function(){return 'FileList' in window;},supportsFileReading:function(){return 'FileReader' in window&&'DataView' in window;},supportsXHR:function(){return 'FormData' in window;}};f.exports=j;},null);
__d('ComposerXDragDropUtils',['Arbiter','CSS','DOMQuery','Parent','VideoUploadFeatureDetector','csx','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={handleDragEnterAndLeave:function(p){var q=j.scry(k.byClass(p,"_119"),"._2wr");h.subscribe('dragenter',function(r,s){if(p==s.element)q.forEach(i.hide);});h.subscribe('dragleave',function(r,s){if(p==s.element)q.forEach(i.show);});},filterImages:function(p){var q=l.supportsFileAPI(),r=[];for(var s=0;s<p.length;s++)if(p[s].type.match('image/*')){r.push(p[s]);}else if(q&&p[s].type.match('video/*'))r.push(p[s]);return r;}};f.exports=o;},null);
__d('uuid',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(i){var j=Math.random()*16|0,k=i=='x'?j:j&3|8;return k.toString(16);});}f.exports=h;},null);
__d('ComposerXSessionIDs',['DOM','cx','uuid'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={},l={getSessionID:function(m){return k[m];},resetSessionID:function(m){k[m]=j();},createSessionIDInput:function(m){return h.create('input',{type:'hidden',name:'composer_session_id',className:"_5r_b",value:m});}};f.exports=l;},null);
__d('ShareModeConst',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={SELF_PAGE:'selfpage',PAGE:'page',SELF_POST:'self',FRIEND:'friend',GROUP:'group',ALBUM:'album',MESSAGE:'message',ONE_CLICK:'oneclick',EVENT:'event',UNKNOWN:'unknown'};f.exports=h;},null);
__d('ComposerXMarauderLogger',['Event','ComposerTargetType','ComposerType','ComposerWaterfallEvent','ComposerXSessionIDs','MarauderLogger','ShareModeConst'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={},p=j.NORMAL,q={logEvent:function(r,s,t){if(!t)t={};var u=o[s],v=l.getSessionID(s);if(!u||!v)return;if(t.logOncePerSession){if(!u.loggedEventTypes[v])u.loggedEventTypes[v]={};if(u.loggedEventTypes[v][r])return;u.loggedEventTypes[v][r]=true;}var w=babelHelpers._extends({},t.extraData,{composer_type:p,composer_version:u.composerVersion,target_type:u.targetType,target_id:u.targetID,ref:u.entryPointRef});if(t.logDetails){w.has_photo=u.hasPhoto;w.has_video=u.hasVideo;w.xy_tag_count=u.numXYTags;w.with_tag_count=u.numWithTags;w.tags_user=u.numUserTags;}m.log(r,'composer',w,undefined,undefined,v);},registerComposer:function(r,s,t,u,v){o[r.id]={targetID:v,targetType:s,entryPointRef:t,composerVersion:u,loggedEventTypes:{},hasPhoto:false,hasVideo:false,numWithTags:0,numXYTags:0,numUserTags:0};},getInstance:function(r){return o[r];},updateHasPhoto:function(r,s){if(!o[r])return;o[r].hasPhoto=s;},updateHasVideo:function(r,s){if(!o[r])return;o[r].hasVideo=s;},updateNumWithTags:function(r,s){if(!o[r])return;o[r].numWithTags=s;},updateNumXYTags:function(r,s){if(!o[r])return;o[r].numXYTags=s;o[r].numWithTags=o[r].numWithTags-s;},updateNumUserTags:function(r,s){if(!o[r])return;o[r].numUserTags=s;},listenForPostEvents:function(r,s){if(!s)return [];return [h.listen(s,'submit',function(){q.logPost(r);}),h.listen(s,'success',function(){q.logPostSuccess(r);}),h.listen(s,'error',function(event){q.logPostFailure(r,{error_info:{error_code:event.data.response.error,error_description:event.data.response.errorDescription,error_summary:event.data.response.errorSummary}});})];},setShareMode:function(r,s){var t=o[r];if(!t)return;switch(s){case n.SELF_POST:t.targetType=i.SELF_USER;break;case n.FRIEND:t.targetType=i.OTHER_USER;break;case n.PAGE:case n.SELF_PAGE:t.targetType=i.PAGE;break;case n.GROUP:t.targetType=i.GROUP;break;default:t.targetType=i.OTHER;}},logEntry:function(r,s){if(typeof s==='string')return;q.logEvent(k.COMPOSER_ENTRY,r,{logOncePerSession:true,extraData:s});},logCompleted:function(r,s){q.logEvent(k.COMPOSER_POST_COMPLETED,r,{extraData:s});},logPost:function(r,s){q.logEvent(k.COMPOSER_POST,r,{extraData:s});},logPostSuccess:function(r,s){q.logEvent(k.COMPOSER_POST_SUCCESS,r,{extraData:s});},logPostFailure:function(r,s){q.logEvent(k.COMPOSER_POST_FAILURE,r,{extraData:s});}};f.exports=q;},null);
__d('filterObject',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();'use strict';var h=Object.prototype.hasOwnProperty;function i(j,k,l){if(!j)return null;var m={};for(var n in j)if(h.call(j,n)&&k.call(l,j[n],n,j))m[n]=j[n];return m;}f.exports=i;},null);
__d('PhotosMimeType',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';if(this instanceof h===false)return new h(i);this.$PhotosMimeType1=i.split('/');}h.prototype.isImage=function(){'use strict';return this.$PhotosMimeType1[0]==='image';};h.prototype.isJpeg=function(){'use strict';return this.isImage()&&(this.$PhotosMimeType1[1]==='jpeg'||this.$PhotosMimeType1[1]==='pjpeg');};f.exports=h;},null);
__d('DataTransfer',['PhotosMimeType','createArrayFromMixed','emptyFunction'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=new RegExp('\u000D\u000A','g'),l='\u000A',m={'text/rtf':1,'text/html':1};function n(p){if(p.kind=='file')return p.getAsFile();}function o(p){'use strict';this.data=p;this.types=p.types?i(p.types):[];}o.prototype.isRichText=function(){'use strict';return this.types.some(function(p){return m[p];});};o.prototype.getText=function(){'use strict';var p;if(this.data.getData)if(!this.types.length){p=this.data.getData('Text');}else if(this.types.indexOf('text/plain')!=-1)p=this.data.getData('text/plain');return p?p.replace(k,l):null;};o.prototype.getHTML=function(){'use strict';if(this.data.getData)if(!this.types.length){return this.data.getData('Text');}else if(this.types.indexOf('text/html')!=-1)return this.data.getData('text/html');};o.prototype.isLink=function(){'use strict';return this.types.some(function(p){return p.indexOf('url')!=-1||p.indexOf('text/uri-list')!=-1;});};o.prototype.isImage=function(){'use strict';var p=this.types.some(function(t){return t.indexOf('application/x-moz-file')!=-1;});if(p)return true;var q=this.getFiles();for(var r=0;r<q.length;r++){var s=q[r].type;if(!h(s).isImage())return false;}return true;};o.prototype.getCount=function(){'use strict';if(this.data.hasOwnProperty('items')){return this.data.items.length;}else if(this.data.hasOwnProperty('mozItemCount')){return this.data.mozItemCount;}else if(this.data.files)return this.data.files.length;return null;};o.prototype.getFiles=function(){'use strict';if(this.data.items){return Array.prototype.slice.call(this.data.items).map(n).filter(j.thatReturnsArgument);}else if(this.data.files){return Array.prototype.slice.call(this.data.files);}else return [];};o.prototype.hasFiles=function(){'use strict';return this.getFiles().length>0;};f.exports=o;},null);
__d("DragDropFileUpload",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();g.isSupported=function(){return typeof FileList!=="undefined";};},null);
__d('DocumentDragDrop',['Event','Arbiter','CSS','DOM','DOMQuery','DragDropFileUpload','emptyFunction','getObjectValues'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p={},q=0;function r(){q=0;o(p).forEach(function(w){j.removeClass(w.element,w.className);i.inform('dragleave',{element:w.element});});}var s=null;function t(){s&&clearTimeout(s);s=setTimeout(function(){r();},500);}function u(){if(!m.isSupported())return;h.listen(document,'dragenter',function(w){if(q===0)o(p).forEach(function(x){j.addClass(x.element,x.className);i.inform('dragenter',{element:x.element,event:w});});q++;t();});h.listen(document,'dragleave',function(w){q--;if(q===0)r();t();});h.listen(document,'drop',function(w){r();var x=w.getTarget();if(l.isNodeOfType(w.getTarget(),'input'))if(x.type==='file')return;w.prevent();});h.listen(document,'dragover',h.prevent);document.addEventListener('dragover',t,true);u=n;}var v={init:function(){u();},registerStatusElement:function(w,x){u();p[k.getID(w)]={element:w,className:x};if(q>0)j.addClass(w,x);},removeStatusElement:function(w){var x=k.getID(w),y=p[x];if(y){j.removeClass(y.element,y.className);delete p[x];}}};f.exports=v;},null);
__d('DragDropTarget',['Arbiter','Event','SubscriptionsHandler','CSS','DataTransfer','DocumentDragDrop','DragDropFileUpload','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();function p(q){this._element=q;this._listeners=new j();this._statusElem=q;this._dragEnterCount=0;this._enabled=false;}Object.assign(p.prototype,{_onFilesDropCallback:o,_onURLDropCallback:o,_onPlainTextDropCallback:o,_onDropCallback:o,_fileFilterFn:o.thatReturnsArgument,setOnDocumentDragEnterCallback:function(q){this._onDocumentDragEnterCallback=q;return this;},setOnDocumentDragLeaveCallback:function(q){this._onDocumentDragLeaveCallback=q;return this;},setOnDragEnterCallback:function(q){this._onDragEnterCallback=q;return this;},setOnDragLeaveCallback:function(q){this._onDragLeaveCallback=q;return this;},setOnFilesDropCallback:function(q){this._onFilesDropCallback=q;return this;},setOnURLDropCallback:function(q){this._onURLDropCallback=q;return this;},setOnPlainTextDropCallback:function(q){this._onPlainTextDropCallback=q;return this;},setOnDropCallback:function(q){this._onDropCallback=q;return this;},enable:function(){if(!n.isSupported())return this;this._listeners.engage();m.registerStatusElement(this._statusElem,'fbWantsDragDrop');this._listeners.addSubscriptions(i.listen(this._element,'dragenter',this._onDragEnter.bind(this)),i.listen(this._element,'dragleave',this._onDragLeave.bind(this)),i.listen(this._element,'dragover',this._onDragOver.bind(this)),i.listen(this._element,'drop',(function(q){this._dragEnterCount=0;k.removeClass(this._statusElem,'fbDropReady');k.removeClass(this._statusElem,'fbDropReadyPhoto');k.removeClass(this._statusElem,'fbDropReadyPhotos');k.removeClass(this._statusElem,'fbDropReadyLink');var r={},s=false,t=this._fileFilterFn(q.dataTransfer.files);if(t.length){this._onFilesDropCallback(t,q);r.files=t;s=true;}var u=q.dataTransfer.getData('url')||q.dataTransfer.getData('text/uri-list');if(u){this._onURLDropCallback(u,q);r.url=u;s=true;}var v=q.dataTransfer.getData('text/plain');if(v){this._onPlainTextDropCallback(v,q);r.plainText=v;s=true;}if(s)this._onDropCallback(r,q);q.kill();}).bind(this)));this._listeners.addSubscriptions(h.subscribe('dragenter',this._onDocumentDragEnter.bind(this)),h.subscribe('dragleave',this._onDocumentDragLeave.bind(this)));this._enabled=true;return this;},disable:function(){if(!this._enabled)return this;m.removeStatusElement(this._statusElem,'fbWantsDragDrop');k.removeClass(this._statusElem,'fbDropReady');k.removeClass(this._statusElem,'fbDropReadyPhoto');k.removeClass(this._statusElem,'fbDropReadyPhotos');k.removeClass(this._statusElem,'fbDropReadyLink');this._listeners.release();this._enabled=false;return this;},setFileFilter:function(q){this._fileFilterFn=q;return this;},setStatusElement:function(q){this._statusElem=q;return this;},_onDragEnter:function(q){if(this._dragEnterCount===0){var r=new l(q.dataTransfer);k.addClass(this._statusElem,'fbDropReady');if(r.isLink()||!r.isImage()){k.addClass(this._statusElem,'fbDropReadyLink');}else if(r.getCount()>1){k.addClass(this._statusElem,'fbDropReadyPhotos');}else k.addClass(this._statusElem,'fbDropReadyPhoto');this._onDragEnterCallback&&this._onDragEnterCallback();}this._dragEnterCount++;q.preventDefault();},_onDragLeave:function(q){this._dragEnterCount=Math.max(this._dragEnterCount-1,0);if(this._dragEnterCount===0){k.removeClass(this._statusElem,'fbDropReady');k.removeClass(this._statusElem,'fbDropReadyPhoto');k.removeClass(this._statusElem,'fbDropReadyPhotos');k.removeClass(this._statusElem,'fbDropReadyLink');this._onDragLeaveCallback&&this._onDragLeaveCallback();}},_onDragOver:function(q){if(!q.dataTransfer){i.kill(q);return;}var r=q.dataTransfer.effectAllowed;q.dataTransfer.dropEffect=r=='move'||r=='linkMove'?'move':'copy';i.kill(q);},_onDocumentDragEnter:function(event,q){if(this._onDocumentDragEnterCallback&&q.element==this._element)this._onDocumentDragEnterCallback();},_onDocumentDragLeave:function(event,q){this._dragEnterCount=0;this._onDragLeave(event);if(this._onDocumentDragLeaveCallback&&q.element==this._element)this._onDocumentDragLeaveCallback();}});f.exports=p;},null);
__d('BookmarkFeedSorter',['Run'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j={init:function(k){i=k;h.onLeave(function(){i=null;});},setChecked:function(k){if(i)i.setValue(k);}};f.exports=j;},null);
__d('LitestandComposer',['Arbiter','Bootloader','ReactComposerIDGenerator','Run','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=600;function n(p,q){i.loadModules(["Animation","ComposerXController","ComposerXMarauderLogger","DOM","LitestandStream"],function(r,s,t,u,v){if(!j.isComposerID(p))s.reset(p);if(!v||!q)return;u.prependContent(v.getStreamRoot(),q);new r(q).from('opacity',0).to('opacity',1).duration(m).go();t.logCompleted(p);});}var o={initComposer:function(p){var q=new l();q.addSubscriptions(h.subscribe('LitestandComposer/publish',(function(r,s){if(s.composer_id===p)n(p,s.markup);}).bind(this)));k.onLeave(function(){q.release();});}};f.exports=o;},null);
__d('OnVisible',['Arbiter','DOM','Event','Parent','Run','Vector','ViewportBounds','coalesce','queryThenMutateDOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=[],r,s=0,t=[],u,v,w,x,y;function z(){q.forEach(function(fa){fa.remove();});if(v){v.remove();u.remove();r.unsubscribe();v=u=r=null;}s=0;q.length=0;}function aa(){if(!q.length){z();return;}t.length=0;w=m.getScrollPosition().y;x=m.getViewportDimensions().y;y=n.getTop();for(var fa=0;fa<q.length;++fa){var ga=q[fa];if(isNaN(ga.elementHeight))t.push(fa);ga.elementHeight=m.getElementDimensions(ga.element).y;ga.elementPos=m.getElementPosition(ga.element);ga.hidden=k.byClass(ga.element,'hidden_elem');if(ga.scrollArea){ga.scrollAreaHeight=m.getElementDimensions(ga.scrollArea).y;ga.scrollAreaY=m.getElementPosition(ga.scrollArea).y;}}s=fa;}function ba(){for(var fa=Math.min(q.length,s)-1;fa>=0;--fa){var ga=q[fa];if(!ga.elementPos||ga.removed){q.splice(fa,1);continue;}if(ga.hidden)continue;var ha=w+x+ga.buffer,ia=false;if(ha>ga.elementPos.y){var ja=w+y-ga.buffer,ka=w+y+x+ga.buffer,la=ga.elementPos.y+ga.elementHeight,ma=!ga.strict||ja<ga.elementPos.y&&ka>la;ia=ma;if(ia&&ga.scrollArea){var na=ga.scrollAreaY+ga.scrollAreaHeight+ga.buffer;ia=ga.elementPos.y>ga.scrollAreaY-ga.buffer&&ga.elementPos.y<na;}}if(ga.inverse?!ia:ia){ga.remove();ga.handler(t.indexOf(fa)!==-1);}}}function ca(){da();if(q.length)return;v=j.listen(window,'scroll',da);u=j.listen(window,'resize',da);r=h.subscribe('dom-scroll',da);}function da(){p(aa,ba,'OnVisible/positionCheck');}function ea(fa,ga,ha,ia,ja,ka){'use strict';this.element=fa;this.handler=ga;this.strict=ha;this.buffer=o(ia,300);this.inverse=o(ja,false);this.scrollArea=ka||null;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible1();if(q.length===0)l.onLeave(z);ca();q.push(this);}ea.prototype.remove=function(){'use strict';if(this.removed)return;this.removed=true;if(this.scrollAreaListener)this.scrollAreaListener.remove();};ea.prototype.reset=function(){'use strict';this.elementHeight=null;this.removed=false;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible1();q.indexOf(this)===-1&&q.push(this);ca();};ea.prototype.setBuffer=function(fa){'use strict';this.buffer=fa;da();};ea.prototype.checkBuffer=function(){'use strict';da();};ea.prototype.getElement=function(){'use strict';return this.element;};ea.prototype.$OnVisible1=function(){'use strict';return j.listen(i.find(this.scrollArea,'.uiScrollableAreaWrap'),'scroll',this.checkBuffer);};Object.assign(ea,{checkBuffer:da});f.exports=ea;},null);
__d('ScrollingPager',['Arbiter','CSS','DOM','OnVisible','UIPagelet','$','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={};function p(q,r,s,t){'use strict';this.scroll_loader_id=q;this.pagelet_src=r;this.data=s;this.options=t||{};if(this.options.target_id){this.target_id=this.options.target_id;this.options.append=true;}else this.target_id=q;this.scroll_area_id=this.options.scroll_area_id;this.handler=null;}p.prototype.setBuffer=function(q){'use strict';this.options.buffer=q;this.onvisible&&this.onvisible.setBuffer(q);};p.prototype.getBuffer=function(){'use strict';return this.options.buffer;};p.prototype.register=function(){'use strict';this.onvisible=new k(m(this.scroll_loader_id),this.getHandler(),false,this.options.buffer,false,n(this.scroll_area_id));o[this.scroll_loader_id]=this;h.inform(p.REGISTERED,{id:this.scroll_loader_id});};p.prototype.getInstance=function(q){'use strict';return o[q];};p.prototype.getHandler=function(){'use strict';if(this.handler)return this.handler;function q(r){var s=n(this.scroll_loader_id);if(!s){this.onvisible.remove();return;}i.addClass(s.firstChild,'async_saving');var t=this.options.handler,u=this.options.force_remove_pager&&this.scroll_loader_id!==this.target_id;this.options.handler=function(){h.inform('ScrollingPager/loadingComplete');t&&t.apply(null,arguments);if(u)j.remove(s);};if(r)this.data.pager_fired_on_init=true;l.loadFromEndpoint(this.pagelet_src,this.target_id,this.data,this.options);}return q.bind(this);};p.prototype.setHandler=function(q){'use strict';this.handler=q;};p.prototype.removeOnVisible=function(){'use strict';this.onvisible.remove();};p.prototype.checkBuffer=function(){'use strict';this.onvisible&&this.onvisible.checkBuffer();};p.getInstance=function(q){'use strict';return o[q];};Object.assign(p,{REGISTERED:'ScrollingPager/registered'});f.exports=p;},null);
__d('XUIError',['ARIA','Bootloader','CSS','DataStore','DOM','Event','Parent','Promise','cx','filterObject','getActiveElement','getElementText','invariant','isNode','memoize','nl2br'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();'use strict';var x='data-xui-error-alignh',y='XUIError',z='data-xui-error',aa="_1tp7",ba='data-xui-error-position';m.listen(document.documentElement,'mouseover',function(event){if(n.byClass(r(),aa))return;var oa=n.byClass(event.getTarget(),aa);if(oa){ka(oa);}else la();});m.listen(document.documentElement,'focusin',function(event){var oa=n.byClass(event.getTarget(),aa);if(oa){ka(oa);}else la();});m.listen(document.documentElement,'focusout',function(event){la();});var ca=v(function(){return new o(function(oa,pa){i.loadModules(["React","XUIErrorDialogImpl"],function(qa,ra){oa(babelHelpers._extends({React:qa},ra.getNewDialog()));});});}),da=null;function ea(oa){return babelHelpers._extends({message:oa.getAttribute(z),position:oa.getAttribute(ba),alignh:oa.getAttribute(x)},k.get(oa,y));}function fa(oa,pa){k.set(oa,y,pa);}function ga(oa,pa){k.set(oa,y,babelHelpers._extends({},k.get(oa,y),pa));}function ha(oa){k.remove(oa,y);}var ia=false,ja=false;function ka(oa){ca().done(function(pa){var qa=pa.React,ra=pa.dialog,sa=pa.dialogMessageNode,ta=ea(oa),ua=ta.message;if(ua==null)return;var va=qa.isValidElement(ua);if(ia&&!va)qa.unmountComponentAtNode(sa);if(va){qa.render(ua,sa);}else{!(typeof ua==='string'||u(ua))?t(0):undefined;if(typeof ua==='string')ua=w(ua);l.setContent(sa,ua);}ia=va;ra.setContext(oa).setPosition(ta.position||'right').setAlignment(ta.alignh||(ta.position==='above'||ta.position==='below'?'right':null)).show();h.notify(s(sa));da=oa;});ja=true;}function la(){if(!ja)return;ca().done(function(oa){var pa=oa.React,qa=oa.dialog,ra=oa.dialogMessageNode;if(!da)return;if(ia){pa.unmountComponentAtNode(ra);ia=false;}qa.hide();da=null;});}function ma(oa){if(l.contains(oa,r()))ka(oa);}var na={set:function(oa){var pa=oa.target,qa=oa.message,ra=oa.position,sa=oa.alignh;!(qa!==null)?t(0):undefined;j.addClass(pa,aa);ga(pa,q({message:qa,position:ra,alignh:sa},function(ta){return ta!==undefined;}));ma(pa);},clear:function(oa){j.removeClass(oa,aa);oa.removeAttribute(z);ha(oa);if(oa===da)la();},updatePosition:function(){if(!ja)return;ca().done(function(oa){var pa=oa.dialog;if(da)pa.updatePosition();});},__setReactError:function(oa,pa){var qa=pa.message,ra=pa.position,sa=pa.alignh;!(qa!==null)?t(0):undefined;fa(oa,{message:qa,position:ra,alignh:sa});ma(oa);},__clearReactError:function(oa){ha(oa);if(oa===da)la();}};f.exports=na;},null);