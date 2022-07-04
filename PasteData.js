import $ from 'jquery';

var Div = document.getElementById('PasteData');
console.log('PasteData');
var DATA = `<HTML><HEAD><TITLE>SyntaxEditor Code Snippet</TITLE></HEAD><BODY>\x3C!--StartFragment--><pre><span style="color: #D69D85; ">&quot;&lt;meta charset='utf-8'&gt;&lt;div class=\\&quot;col-md-2 col-lg-2 col-xl-2\\&quot; id=\\&quot;iNavigation\\&quot; style=\\&quot;box-sizing: border-box; position: relative; width: 239.078px; padding-right: 5.5px !important; padding-left: 5.5px !important; flex: 0 0 16.6667%; max-width: 16.6667%;\\&quot;&gt;&lt;div class=\\&quot;container-fluid-i toc-query-header\\&quot; style=\\&quot;box-sizing: border-box; width: 228.078px; margin-right: auto; margin-left: auto; padding-right: 0px; padding-left: 0px; background-color: rgb(255, 255, 255) !important; border-radius: 2px; border: 1px solid rgb(202, 202, 202); font-family: &amp;quot;Inter UI&amp;quot;, sans-serif !important; height: calc(100vh - 9.9em) !important;\\&quot;&gt;&lt;div class=\\&quot;active\\&quot; id=\\&quot;comment_panel\\&quot; style=\\&quot;box-sizing: border-box; display: flex !important; flex-direction: column !important;\\&quot;&gt;&lt;div class=\\&quot;comment-group\\&quot; id=\\&quot;comment\\&quot; style=\\&quot;box-sizing: border-box; width: 226.078px; position: relative; overflow: hidden auto; height: calc(100vh - 263px) !important; padding: 5px 2.75px !important; cursor: pointer !important;\\&quot;&gt;&lt;div class=\\&quot;comment-body\\&quot; style=\\&quot;box-sizing: border-box;\\&quot;&gt;&lt;div id=\\&quot;N8cdb\\&quot; class=\\&quot;query-div\\&quot; data-status=\\&quot;note\\&quot; style=\\&quot;box-sizing: border-box; margin-bottom: 10px; font-style: normal; width: 220.578px; padding: 0px 8px; font-size: 10.5px !important; border-radius: 3px; border: 0.5px solid rgb(222, 226, 230) !important; box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px;\\&quot;&gt;&lt;div class=\\&quot;query-items\\&quot; style=\\&quot;box-sizing: border-box; padding: 3px 0px;\\&quot;&gt;&lt;div class=\\&quot;query-reply-textarea\\&quot; style=\\&quot;box-sizing: border-box; border-top: none;\\&quot;&gt;&lt;div class=\\&quot;textArea\\&quot; onpaste=\\&quot;Qry_CMT_Paste(this); return false;\\&quot; data-label=\\&quot;Type your response...\\&quot; id=\\&quot;panel_textArea\\&quot; contenteditable=\\&quot;true\\&quot; style=\\&quot;box-sizing: border-box; min-width: 2rem; min-height: 3.5rem; padding-top: 0.125rem; padding-right: 0px !important; padding-bottom: 0.3rem; padding-left: 0px !important; max-height: 6rem; overflow-y: auto; font-size: 14px; cursor: text;\\&quot;&gt;&lt;br class=\\&quot;Apple-interchange-newline\\&quot;&gt;Department of Sociobehavioral and Administrative Pharmacy, Nova Southeastern University&#160;College of Pharmacy, Fort Lauderdale, FL, USA&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div id=\\&quot;pToolbar\\&quot; class=\\&quot;im-toolbar show\\&quot; style=\\&quot;box-sizing: border-box; height: 2.5rem; background: rgba(232, 232, 232, 0.2); box-shadow: rgba(0, 0, 0, 0.25) 2px -2px 4px -3px; display: flex !important; justify-content: space-between !important; align-items: center !important;\\&quot;&gt;&lt;button type=\\&quot;button\\&quot; class=\\&quot;btn btn-sm primary-btn attachNoteBtn\\&quot; btn-id=\\&quot;attachNoteBtn\\&quot; title=\\&quot;Attachment\\&quot; onclick=\\&quot;\\&quot; style=\\&quot;box-sizing: border-box; border-radius: 0.2rem; margin: 0px; font-family: inherit; font-size: 13px; line-height: 1.25; overflow: visible; text-transform: none; appearance: button; display: inline-block; font-weight: 500 !important; color: rgb(255, 255, 255); text-align: center; vertical-align: middle; user-select: none; background-color: rgb(255, 137, 41); border: none; padding-top: 0.25rem; padding-right: 2.5px !important; padding-bottom: 0.25rem; padding-left: 2.5px !important; transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; cursor: pointer;\\&quot;&gt;&lt;i class=\\&quot;fas fa-paperclip\\&quot; style=\\&quot;box-sizing: border-box; -webkit-font-smoothing: antialiased; display: inline-block; font-style: normal; font-variant: normal; text-rendering: auto; line-height: 1; font-family: &amp;quot;Font Awesome 5 Free&amp;quot;; font-weight: 900;\\&quot;&gt;&lt;/i&gt;&lt;span&gt;&#160;&lt;/span&gt;Upload&lt;/button&gt;&lt;button type=\\&quot;button\\&quot; class=\\&quot;btn btn-sm primary-btn savenote disabled\\&quot; btn-id=\\&quot;SaveNoteBtn\\&quot; title=\\&quot;Save\\&quot; onclick=\\&quot;NewQueryModule.InsertValidation(this)\\&quot; data-panel=\\&quot;s\\&quot; style=\\&quot;box-sizing: border-box; border-radius: 0.2rem; margin: 0px; font-family: inherit; font-size: 13px; line-height: 1.25; overflow: visible; text-transform: none; appearance: button; display: inline-block; font-weight: 500 !important; color: rgb(158, 158, 158) !important; text-align: center; vertical-align: middle; user-select: none; background-color: rgb(221, 220, 220) !important; border: none; padding-top: 0.25rem; padding-right: 2.5px !important; padding-bottom: 0.25rem; padding-left: 2.5px !important; transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; pointer-events: none; cursor: not-allowed; opacity: 0.65; box-shadow: none;\\&quot;&gt;Save&lt;/button&gt;&lt;button type=\\&quot;button\\&quot; class=\\&quot;btn btn-sm primary-btn clearnote\\&quot; btn-id=\\&quot;ClearNoteBtn\\&quot; title=\\&quot;Clear\\&quot; onclick=\\&quot;ClearNote(this)\\&quot; data-panel=\\&quot;s\\&quot; style=\\&quot;box-sizing: border-box; border-radius: 0.2rem; margin: 0px; font-family: inherit; font-size: 13px; line-height: 1.25; overflow: visible; text-transform: none; appearance: button; display: inline-block; font-weight: 500 !important; color: rgb(255, 255, 255); text-align: center; vertical-align: middle; user-select: none; background-color: rgb(255, 137, 41); border: none; padding-top: 0.25rem; padding-right: 2.5px !important; padding-bottom: 0.25rem; padding-left: 2.5px !important; transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; cursor: pointer;\\&quot;&gt;Clear&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=\\&quot;col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9\\&quot; id=\\&quot;iViewArea\\&quot; style=\\&quot;box-sizing: border-box; position: relative; width: 1075.88px; padding-right: 5.5px !important; padding-left: 5.5px !important; flex: 0 0 75%; max-width: 75%;\\&quot;&gt;&lt;div class=\\&quot;row\\&quot; style=\\&quot;box-sizing: border-box; display: flex; flex-wrap: wrap; margin-right: -7.5px; margin-left: -7.5px;\\&quot;&gt;&lt;div class=\\&quot;col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tour-step-backdrop tour-tour-element tour-tour-0-element\\&quot; id=\\&quot;iEditorSection\\&quot; aria-describedby=\\&quot;popover111744\\&quot; style=\\&quot;box-sizing: border-box; position: relative; width: 539.938px; padding-right: 5.5px !important; padding-left: 5.5px !important; flex: 0 0 50%; max-width: 50%;\\&quot;&gt;&lt;div class=\\&quot;row justify-content-lg-start justify-content-md-start justify-content-sm-start ck-menus\\&quot; id=\\&quot;ck-menus\\&quot; style=\\&quot;box-sizing: border-box; display: flex; flex-wrap: nowrap !important; margin-right: -7.5px; margin-left: -7.5px; justify-content: flex-start !important; margin-top: -0.355rem !important; width: fit-content !important;\\&quot;&gt;&lt;div class=\\&quot;col col-md-auto\\&quot; style=\\&quot;box-sizing: border-box; position: relative; width: auto; padding-right: 7.5px; padding-left: 7.5px; flex: 0 0 auto; max-width: 100%;\\&quot;&gt;&lt;div class=\\&quot;dropdown\\&quot; style=\\&quot;box-sizing: border-box; position: relative;\\&quot;&gt;&lt;button type=\\&quot;button\\&quot; class=\\&quot;btn dropdown-toggle\\&quot; data-toggle=\\&quot;dropdown\\&quot; data-hover=\\&quot;dropdown\\&quot; aria-expanded=\\&quot;false\\&quot; style=\\&quot;box-sizing: border-box; border-radius: 0.25rem; margin: 0px; font-family: &amp;quot;Inter UI&amp;quot;, sans-serif !important; font-size: 0.8125rem; line-height: 0.5; overflow: visible; text-transform: none; appearance: button; display: inline-block; font-weight: 400; color: rgb(108, 117, 125); text-align: center; vertical-align: middle; user-select: none; background-color: transparent; border: 1px solid transparent; padding: 0.25rem; transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; white-space: nowrap; cursor: pointer;\\&quot;&gt;&lt;img alt=\\&quot;\\&quot; class=\\&quot;small-icons-menu-link\\&quot; src=\\&quot;https://impact-ops.newgen.co/UI/svg/MenuLink.svg\\&quot; style=\\&quot;box-sizing: border-box; vertical-align: middle; border-style: none; margin-top: -2px; margin-left: 0px; padding-right: 3px; height: 14px; width: 22px;\\&quot;&gt;Link&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=\\&quot;col col-md-auto\\&quot; id=\\&quot;contentMenu\\&quot; style=\\&quot;box-sizing: border-box; position: relative; width: auto; padding-right: 7.5px; padding-left: 7.5px; flex: 0 0 auto; max-width: 100%;\\&quot;&gt;&lt;div class=\\&quot;dropdown\\&quot; style=\\&quot;box-sizing: border-box; position: relative;\\&quot;&gt;&lt;button type=\\&quot;button\\&quot; class=\\&quot;btn dropdown-toggle\\&quot; data-toggle=\\&quot;dropdown\\&quot; data-hover=\\&quot;dropdown\\&quot; aria-expanded=\\&quot;true\\&quot; style=\\&quot;box-sizing: border-box; border-radius: 0.25rem; margin: 0px; font-family: &amp;quot;Inter UI&amp;quot;, sans-serif !important; font-size: 0.8125rem; line-height: 0.5; overflow: visible; text-transform: none; appearance: button; display: inline-block; font-weight: 400; color: rgb(108, 117, 125); text-align: center; vertical-align: middle; user-select: none; background-color: transparent; border: 1px solid transparent; padding: 0.25rem; transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; white-space: nowrap; cursor: pointer;\\&quot;&gt;&lt;img alt=\\&quot;\\&quot; class=\\&quot;small-icons-menu\\&quot; src=\\&quot;https://impact-ops.newgen.co/UI/svg/MenuContent.svg\\&quot; style=\\&quot;box-sizing: border-box; vertical-align: middle; border-style: none; margin-top: -3px; margin-left: 0px; padding-right: 3px; height: 13px; width: 20px;\\&quot;&gt;Versions&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=\\&quot;col col-md-auto\\&quot; id=\\&quot;StyleMenu\\&quot; style=\\&quot;box-sizing: border-box; position: relative; width: auto; padding-right: 7.5px; padding-left: 7.5px; flex: 0 0 auto; max-width: 100%;\\&quot;&gt;&lt;div class=\\&quot;dropdown\\&quot; style=\\&quot;box-sizing: border-box; position: relative;\\&quot;&gt;&lt;button type=\\&quot;button\\&quot; class=\\&quot;btn dropdown-toggle\\&quot; data-toggle=\\&quot;dropdown\\&quot; data-hover=\\&quot;dropdown\\&quot; aria-expanded=\\&quot;false\\&quot; style=\\&quot;box-sizing: border-box; border-radius: 0.25rem; margin: 0px; font-family: &amp;quot;Inter UI&amp;quot;, sans-serif !important; font-size: 0.8125rem; line-height: 0.5; overflow: visible; text-transform: none; appearance: button; display: inline-block; font-weight: 400; color: rgb(108, 117, 125); text-align: center; vertical-align: middle; user-select: none; background-color: transparent; border: 1px solid transparent; padding: 0.25rem; transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; white-space: nowrap; cursor: pointer;\\&quot;&gt;&lt;img alt=\\&quot;\\&quot; class=\\&quot;small-icons-menu\\&quot; src=\\&quot;https://impact-ops.newgen.co/UI/svg/MenuApplyStyle.svg\\&quot; style=\\&quot;box-sizing: border-box; vertical-align: middle; border-style: none; margin-top: -3px; margin-left: 0px; padding-right: 3px; height: 13px; width: 20px;\\&quot;&gt;Style&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=\\&quot;col col-md-auto dropdown\\&quot; id=\\&quot;showTrackDiv\\&quot; onclick=\\&quot;ShowTrackOnOff(this);\\&quot; style=\\&quot;box-sizing: border-box; position: relative; width: auto; padding-right: 7.5px; padding-left: 7.5px; flex: 0 0 auto; max-width: 100%; margin-top: 1px; font-family: &amp;quot;Inter UI&amp;quot;, sans-serif !important;\\&quot;&gt;&lt;button type=\\&quot;button\\&quot; class=\\&quot;btn\\&quot; style=\\&quot;box-sizing: border-box; border-radius: 0.25rem; margin: 0px; font-family: &amp;quot;Inter UI&amp;quot;, sans-serif !important; font-size: 0.8125rem; line-height: 0.5; overflow: visible; text-transform: none; appearance: button; display: inline-block; font-weight: 400; color: rgb(108, 117, 125); text-align: center; vertical-align: middle; user-select: none; background-color: transparent; border: 1px solid transparent; padding: 0.25rem; transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; cursor: pointer;\\&quot;&gt;&lt;img alt=\\&quot;Show Markup\\&quot; class=\\&quot;small-icons-menu\\&quot; id=\\&quot;TrackImg\\&quot; src=\\&quot;https://impact-ops.newgen.co/UI/svg/MenuTrackON.svg\\&quot; style=\\&quot;box-sizing: border-box; vertical-align: middle; border-style: none; margin-top: -3px; margin-left: 0px; padding-right: 3px; height: 14px !important; width: 28px !important;\\&quot;&gt;Show Markup&lt;/button&gt;&lt;/div&gt;&lt;div class=\\&quot;col col-md-auto dropdown\\&quot; id=\\&quot;showSpellDiv\\&quot; onclick=\\&quot;iWSC.SpellCheckOnOff(this);\\&quot; style=\\&quot;box-sizing: border-box; position: relative; width: auto; padding-right: 7.5px; padding-left: 7.5px; flex: 0 0 auto; max-width: 100%;\\&quot;&gt;&lt;button type=\\&quot;button\\&quot; class=\\&quot;btn\\&quot; style=\\&quot;box-sizing: border-box; border-radius: 0.25rem; margin: 0px; font-family: &amp;quot;Inter UI&amp;quot;, sans-serif !important; font-size: 0.8125rem; line-height: 0.5; overflow: visible; text-transform: none; appearance: button; display: inline-block; font-weight: 400; color: rgb(108, 117, 125); text-align: center; vertical-align: middle; user-select: none; background-color: transparent; border: 1px solid transparent; padding: 0.25rem; transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s; cursor: pointer;\\&quot;&gt;&lt;img alt=\\&quot;Spell Check\\&quot; class=\\&quot;small-icons-menu\\&quot; id=\\&quot;spellCheckImg\\&quot; src=\\&quot;https://impact-ops.newgen.co/UI/svg/MenuTrackOFF.svg\\&quot; style=\\&quot;box-sizing: border-box; vertical-align: middle; border-style: none; margin-top: -3px; margin-left: 0px; padding-right: 3px; height: 14px !important; width: 28px !important;\\&quot;&gt;Spell Check&lt;/button&gt;&lt;/div&gt;&lt;/div&gt;&lt;div class=\\&quot;editor-section\\&quot; id=\\&quot;htmlcontent\\&quot; style=\\&quot;box-sizing: border-box; width: auto; position: relative; margin-top: 0px;\\&quot;&gt;&lt;div id=\\&quot;cke_maineditor\\&quot; class=\\&quot;cke_1 cke cke_reset cke_chrome cke_editor_maineditor cke_ltr cke_browser_webkit cke_hidpi\\&quot; dir=\\&quot;ltr\\&quot; lang=\\&quot;en\\&quot; role=\\&quot;application\\&quot; aria-labelledby=\\&quot;cke_maineditor_arialbl\\&quot; style=\\&quot;box-sizing: content-box; visibility: inherit; margin: 0px; padding: 0px; border: 1px solid rgb(202, 202, 202); background: transparent; text-decoration: none; width: 528.938px; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; display: block; border-radius: 2px;\\&quot;&gt;&lt;div class=\\&quot;cke_inner cke_reset\\&quot; role=\\&quot;presentation\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px 2px; border: 0px; background: rgb(255, 255, 255); text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; display: block;\\&quot;&gt;&lt;span id=\\&quot;cke_1_top\\&quot; class=\\&quot;cke_top cke_reset_all\\&quot; role=\\&quot;presentation\\&quot; style=\\&quot;box-sizing: content-box; padding: 6px 8px 2px; border-width: 0px 0px 1px; border-bottom-style: solid; border-bottom-color: rgb(209, 209, 209); margin: 0px; background: rgb(248, 248, 248); border-top-style: initial; border-right-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-left-color: initial; border-image: initial; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 400 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: normal; cursor: auto; float: none; display: block; overflow: hidden; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; user-select: none;\\&quot;&gt;&lt;span id=\\&quot;cke_1_toolbox\\&quot; class=\\&quot;cke_toolbox\\&quot; role=\\&quot;group\\&quot; aria-labelledby=\\&quot;cke_7\\&quot; onmousedown=\\&quot;return false;\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;span id=\\&quot;cke_8\\&quot; class=\\&quot;cke_toolbar\\&quot; aria-labelledby=\\&quot;cke_8_label\\&quot; role=\\&quot;toolbar\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;span class=\\&quot;cke_toolbar_start\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;/span&gt;&lt;span class=\\&quot;cke_toolgroup\\&quot; role=\\&quot;presentation\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 2px 6px 0px; padding: 0px 3px 0px 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;a id=\\&quot;cke_9\\&quot; class=\\&quot;cke_button cke_button__save cke_button_disabled\\&quot; href=\\&quot;javascript:void('Save')\\&quot; title=\\&quot;Save\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_9_label\\&quot; aria-describedby=\\&quot;cke_9_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(1,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(2,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(3,this);return false;\\&quot; aria-disabled=\\&quot;true\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__save_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/impact/icons/save.png?t=I63C&amp;quot;) 0px 0px / 16px no-repeat transparent; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block; opacity: 0.3;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;/span&gt;&lt;span class=\\&quot;cke_toolbar_end\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;span id=\\&quot;cke_10\\&quot; class=\\&quot;cke_toolbar\\&quot; aria-labelledby=\\&quot;cke_10_label\\&quot; role=\\&quot;toolbar\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;span class=\\&quot;cke_toolbar_start\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;/span&gt;&lt;span class=\\&quot;cke_toolgroup\\&quot; role=\\&quot;presentation\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 2px 6px 0px; padding: 0px 3px 0px 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;a id=\\&quot;cke_11\\&quot; class=\\&quot;cke_button cke_button__bold cke_button_off\\&quot; href=\\&quot;javascript:void('Bold')\\&quot; title=\\&quot;Bold (&#8984;+B)\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_11_label\\&quot; aria-describedby=\\&quot;cke_11_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(4,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(5,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(6,this);return false;\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__bold_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background-image: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/icons_hidpi.png?t=I63C&amp;quot;); background-position: 0px -24px; background-size: 16px; background-repeat: no-repeat !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important; background-color: initial !important; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;a id=\\&quot;cke_12\\&quot; class=\\&quot;cke_button cke_button__italic cke_button_off\\&quot; href=\\&quot;javascript:void('Italic')\\&quot; title=\\&quot;Italic (&#8984;+I)\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_12_label\\&quot; aria-describedby=\\&quot;cke_12_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(7,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(8,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(9,this);return false;\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__italic_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background-image: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/icons_hidpi.png?t=I63C&amp;quot;); background-position: 0px -48px; background-size: 16px; background-repeat: no-repeat !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important; background-color: initial !important; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;a id=\\&quot;cke_13\\&quot; class=\\&quot;cke_button cke_button__subscript cke_button_off\\&quot; href=\\&quot;javascript:void('Subscript')\\&quot; title=\\&quot;Subscript (Ctrl+Shift++)\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_13_label\\&quot; aria-describedby=\\&quot;cke_13_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(10,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(11,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(12,this);return false;\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__subscript_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background-image: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/icons_hidpi.png?t=I63C&amp;quot;); background-position: 0px -96px; background-size: 16px; background-repeat: no-repeat !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important; background-color: initial !important; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;a id=\\&quot;cke_14\\&quot; class=\\&quot;cke_button cke_button__superscript cke_button_off\\&quot; href=\\&quot;javascript:void('Superscript')\\&quot; title=\\&quot;Superscript (Ctrl++)\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_14_label\\&quot; aria-describedby=\\&quot;cke_14_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(13,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(14,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(15,this);return false;\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__superscript_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background-image: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/icons_hidpi.png?t=I63C&amp;quot;); background-position: 0px -120px; background-size: 16px; background-repeat: no-repeat !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important; background-color: initial !important; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;/span&gt;&lt;span class=\\&quot;cke_toolbar_end\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;span id=\\&quot;cke_15\\&quot; class=\\&quot;cke_toolbar\\&quot; aria-labelledby=\\&quot;cke_15_label\\&quot; role=\\&quot;toolbar\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;span class=\\&quot;cke_toolbar_start\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;/span&gt;&lt;span class=\\&quot;cke_toolgroup\\&quot; role=\\&quot;presentation\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 2px 6px 0px; padding: 0px 3px 0px 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;a id=\\&quot;cke_16\\&quot; class=\\&quot;cke_button cke_button__undo cke_button_disabled \\&quot; href=\\&quot;javascript:void('Undo')\\&quot; title=\\&quot;Undo (&#8984;+Z)\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_16_label\\&quot; aria-describedby=\\&quot;cke_16_description\\&quot; aria-haspopup=\\&quot;false\\&quot; aria-disabled=\\&quot;true\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(16,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(17,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(18,this);return false;\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__undo_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background-image: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/icons_hidpi.png?t=I63C&amp;quot;); background-position: 0px -1008px; background-size: 16px; background-repeat: no-repeat !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important; background-color: initial !important; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block; opacity: 0.3;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;a id=\\&quot;cke_17\\&quot; class=\\&quot;cke_button cke_button__redo cke_button_disabled \\&quot; href=\\&quot;javascript:void('Redo')\\&quot; title=\\&quot;Redo (&#8984;+Y)\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_17_label\\&quot; aria-describedby=\\&quot;cke_17_description\\&quot; aria-haspopup=\\&quot;false\\&quot; aria-disabled=\\&quot;true\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(19,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(20,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(21,this);return false;\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__redo_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background-image: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/icons_hidpi.png?t=I63C&amp;quot;); background-position: 0px -960px; background-size: 16px; background-repeat: no-repeat !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important; background-color: initial !important; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block; opacity: 0.3;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;/span&gt;&lt;span class=\\&quot;cke_toolbar_end\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;span id=\\&quot;cke_18\\&quot; class=\\&quot;cke_toolbar\\&quot; aria-labelledby=\\&quot;cke_18_label\\&quot; role=\\&quot;toolbar\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;span class=\\&quot;cke_toolbar_start\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;/span&gt;&lt;span class=\\&quot;cke_toolgroup\\&quot; role=\\&quot;presentation\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 2px 6px 0px; padding: 0px 3px 0px 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;a id=\\&quot;cke_19\\&quot; class=\\&quot;cke_button cke_button__symbol cke_button_off\\&quot; href=\\&quot;javascript:void('Insert symbol')\\&quot; title=\\&quot;Insert symbol\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_19_label\\&quot; aria-describedby=\\&quot;cke_19_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(22,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(23,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(24,this);return false;\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__symbol_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/symbol/icons/symbol.png?t=I63C&amp;quot;) 0px 0px / 16px no-repeat transparent; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;a id=\\&quot;cke_20\\&quot; class=\\&quot;cke_button cke_button__comment cke_button_off\\&quot; href=\\&quot;javascript:void('Add Comment')\\&quot; title=\\&quot;Add Comment\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_20_label\\&quot; aria-describedby=\\&quot;cke_20_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(25,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(26,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(27,this);return false;\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__comment_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/impact/icons/comment.png?t=I63C&amp;quot;) 0px 0px / 16px no-repeat transparent; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;/span&gt;&lt;span class=\\&quot;cke_toolbar_end\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;span id=\\&quot;cke_21\\&quot; class=\\&quot;cke_toolbar\\&quot; aria-labelledby=\\&quot;cke_21_label\\&quot; role=\\&quot;toolbar\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;span class=\\&quot;cke_toolbar_start\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;/span&gt;&lt;span class=\\&quot;cke_toolgroup\\&quot; role=\\&quot;presentation\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 2px 6px 0px; padding: 0px 3px 0px 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;a id=\\&quot;cke_22\\&quot; class=\\&quot;cke_button cke_button__numberedlist cke_button_disabled\\&quot; href=\\&quot;javascript:void('Insert/Remove Numbered List')\\&quot; title=\\&quot;Insert/Remove Numbered List\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_22_label\\&quot; aria-describedby=\\&quot;cke_22_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(28,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(29,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(30,this);return false;\\&quot; aria-disabled=\\&quot;true\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__numberedlist_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background-image: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/icons_hidpi.png?t=I63C&amp;quot;); background-position: 0px -648px; background-size: 16px; background-repeat: no-repeat !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important; background-color: initial !important; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block; opacity: 0.3;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;a id=\\&quot;cke_23\\&quot; class=\\&quot;cke_button cke_button__bulletedlist cke_button_disabled\\&quot; href=\\&quot;javascript:void('Insert/Remove Bulleted List')\\&quot; title=\\&quot;Insert/Remove Bulleted List\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_23_label\\&quot; aria-describedby=\\&quot;cke_23_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(31,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(32,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(33,this);return false;\\&quot; aria-disabled=\\&quot;true\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__bulletedlist_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background-image: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/icons_hidpi.png?t=I63C&amp;quot;); background-position: 0px -600px; background-size: 16px; background-repeat: no-repeat !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important; background-color: initial !important; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block; opacity: 0.3;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;span class=\\&quot;cke_toolbar_separator\\&quot; role=\\&quot;separator\\&quot; style=\\&quot;box-sizing: content-box; margin: 4px 2px 0px; padding: 0px; border: 0px; background: rgb(188, 188, 188); text-decoration: none; width: 1px; height: 18px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;/span&gt;&lt;a id=\\&quot;cke_24\\&quot; class=\\&quot;cke_button cke_button__find cke_button_off\\&quot; href=\\&quot;javascript:void('Find')\\&quot; title=\\&quot;Find and Replace\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_24_label\\&quot; aria-describedby=\\&quot;cke_24_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(34,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(35,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(36,this);return false;\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__find_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/find/icons/hidpi/find.png?t=I63C&amp;quot;) 0px 0px / 16px no-repeat transparent; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;/span&gt;&lt;span class=\\&quot;cke_toolbar_end\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;span id=\\&quot;cke_25\\&quot; class=\\&quot;cke_toolbar cke_toolbar_last\\&quot; aria-labelledby=\\&quot;cke_25_label\\&quot; role=\\&quot;toolbar\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;span class=\\&quot;cke_toolbar_start\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;/span&gt;&lt;span class=\\&quot;cke_toolgroup\\&quot; role=\\&quot;presentation\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 2px 6px 0px; padding: 0px 3px 0px 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: left;\\&quot;&gt;&lt;a id=\\&quot;cke_26\\&quot; class=\\&quot;cke_button cke_button__maximize cke_button_off\\&quot; href=\\&quot;javascript:void('Maximize')\\&quot; title=\\&quot;Maximize\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_26_label\\&quot; aria-describedby=\\&quot;cke_26_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(37,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(38,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(39,this);return false;\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__maximize_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background-image: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/icons_hidpi.png?t=I63C&amp;quot;); background-position: 0px -672px; background-size: 16px; background-repeat: no-repeat !important; background-attachment: initial !important; background-origin: initial !important; background-clip: initial !important; background-color: initial !important; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;a id=\\&quot;cke_27\\&quot; class=\\&quot;cke_button cke_button__zoomout cke_button_off\\&quot; href=\\&quot;javascript:void('Zoom Out')\\&quot; title=\\&quot;Zoom Out\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_27_label\\&quot; aria-describedby=\\&quot;cke_27_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(40,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(41,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(42,this);return false;\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__zoomout_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/impact/icons/zoomout.png?t=I63C&amp;quot;) 0px 0px / 16px no-repeat transparent; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;a id=\\&quot;cke_28\\&quot; class=\\&quot;cke_button cke_button__zoomin cke_button_off\\&quot; href=\\&quot;javascript:void('Zoom In')\\&quot; title=\\&quot;Zoom In\\&quot; tabindex=\\&quot;-1\\&quot; hidefocus=\\&quot;true\\&quot; role=\\&quot;button\\&quot; aria-labelledby=\\&quot;cke_28_label\\&quot; aria-describedby=\\&quot;cke_28_description\\&quot; aria-haspopup=\\&quot;false\\&quot; onkeydown=\\&quot;return CKEDITOR.tools.callFunction(43,event);\\&quot; onfocus=\\&quot;return CKEDITOR.tools.callFunction(44,event);\\&quot; onclick=\\&quot;CKEDITOR.tools.callFunction(45,this);return false;\\&quot; style=\\&quot;box-sizing: content-box; color: rgb(0, 0, 0); text-decoration: none; background: transparent; margin: 0px; padding: 4px 6px; border: 0px; width: auto; height: 18px; vertical-align: baseline; position: relative; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; text-align: left; white-space: nowrap; cursor: default; float: left; display: inline-block; outline: 0px;\\&quot;&gt;&lt;span class=\\&quot;cke_button_icon cke_button__zoomin_icon\\&quot; style=\\&quot;box-sizing: content-box; margin: 1px 0px 0px; padding: 0px; border: 0px; background: url(&amp;quot;https://impact-ops.newgen.co/ckeditor/plugins/impact/icons/zoomin.png?t=I63C&amp;quot;) 0px 0px / 16px no-repeat transparent; text-decoration: none; width: 16px; height: 16px; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: inherit; float: left; display: inline-block;\\&quot;&gt;&#160;&lt;/span&gt;&lt;/a&gt;&lt;/span&gt;&lt;span class=\\&quot;cke_toolbar_end\\&quot; style=\\&quot;box-sizing: content-box; margin: 0px; padding: 0px; border: 0px; background: transparent; text-decoration: none; width: auto; height: auto; vertical-align: baseline; position: static; transition: none 0s ease 0s; border-collapse: collapse; font: 12px Arial, Helvetica, Tahoma, Verdana, sans-serif; color: rgb(0, 0, 0); text-align: left; white-space: nowrap; cursor: auto; float: none;\\&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&lt;br class=\\&quot;Apple-interchange-newline\\&quot;&gt;&quot;</span></pre>\x3C!--EndFragment--></BODY></HTML>`;

DATA = DATA.replaceAll(`\\&quot;`, '"');
DATA = DATA.replaceAll(`&lt;`, '<');
DATA = DATA.replaceAll(`&gt;`, '>');
DATA = DATA.replaceAll(`&quot;`, '"');
DATA = DATA.replaceAll(`\x3C`, '<');
console.log('Paste');
const PasteFilter = {
  formatTagArr: [
    'bold',
    'strong',
    'b',
    'em',
    'italic',
    'i',
    'sup',
    'u',
    'sub',
    'super',
    'subscript',
    'superscript',
    'sc',
    'smallcaps',
    'underline',
  ],
  excludeNode: ['caption', 'title'],
  retainArr: ['text-decoration', 'font-style', 'font-weight', 'vertical-align'],
  SPACE: ' ',
  replace_empty_values: ['&nbsp;&nbsp;', '  ', '  '],
  remove_elm_tags: ['br', 'style', 'script'],
  empty_values: ['&nbsp;', '', ' '],
  tagsAsString: {
    '\\\\&quot;': '"',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '\\x3C;': '<',
  },
  escape_entity: [
    '\\u[a-fA-F0-9]{4}',
    '\\x[a-fA-F0-9]{2}',
    '\\(?:[1-7][0-7]{0,2}|[0-7]{2,3})',
  ],
  removeAttr: function (elem, _) {
    try {
      _ = this;
      if (elem.style.display != '' && elem.style.display == 'none') {
        elem.remove();
      } else {
        var Styles = elem.getAttribute('style');
        var StylesArr = [];
        if (!Styles) return;
        Styles.split(';').forEach((el) => {
          if (!el) return;
          var [property, value] = el.split(':');
          property = property.trim();
          var index = property.indexOf(`"`);
          if (index > -1) property = property.slice(1);
          if (_.retainArr.includes(property)) {
            value = value.trim();
            if (property == _.retainArr[2] && !isNaN(value)) {
              if (Number(value) > 400) {
                value = 'bold';
              } else return;
            } else if (_.retainArr.indexOf(property) && value == 'normal') {
              return;
            }
            StylesArr.push(`${property}: ${value}`);
          } else if (property) elem.style.removeProperty(property);
        });
        elem[StylesArr.length ? 'setAttribute' : 'removeAttribute'](
          'style',
          StylesArr.join(';')
        );
      }
    } catch (err) {
      this.ErrorEvent = !0;
      console.warn(err.message);
      ErrorLogTrace('removeAttr', err.message);
    }
  },
  check_NSNB: function (NODE) {
    try {
      var loop = 0;
      var IsElm = NODE.nodeType == 1 ? !0 : !1;
      var value = IsElm ? NODE.innerHTML : NODE.nodeValue;
      this.replace_empty_values.forEach((item, idx, arr) => {
        while (value.indexOf(item) > 0) {
          value = value.split(item).join(' ');
          if (IsElm) NODE.innerHTML = value;
          else NODE.nodeValue = value;
          if (loop > 10) {
            console.log('break_' + loop);
            break;
          } else loop++;
        }
      });
      if (value.indexOf('<!--') > -1 && value.indexOf('-->') > -1) {
        let dom = document.createElement('span');
        dom.innerHTML = value;
        if (
          this.empty_values.includes(dom.textContent) ||
          dom.textContent != value ||
          (dom.firstChild.nodeType == 8 && dom.children.length == 0)
        ) {
          value = '';
        }
      }
      return value;
    } catch (err) {
      this.ErrorEvent = !0;
      console.warn(err.message);
      ErrorLogTrace('check_NSNB', err.message);
    }
  },
  IsCitationAvailable: !1,
  Check_InnerHTML: function (NODE, _) {
    try {
      _ = this;
      var IsEmtpy =
        this.empty_values.includes(NODE.innerHTML) ||
        this.empty_values.includes(NODE.textContent);
      var Parent = NODE.parentElement;
      //var INNER_HTML = this.check_NSNB(NODE);
      //NODE.tagName
      if (Parent) {
        NODE.outerHTML = IsEmtpy ? this.SPACE : this.check_NSNB(NODE);
        if (Parent.innerHTML == this.SPACE) Parent.outerHTML = this.SPACE;
      } else if (IsEmtpy) {
        NODE.remove();
      }
    } catch (err) {
      this.ErrorEvent = !0;
      console.warn(err.message + NODE.innerHTML);
      ErrorLogTrace('InnerHTML', err.message + NODE.innerHTML);
    }
  },
  node2Text: function (el, _) {
    try {
      _ = this;
      // ! LOOP START
      let tag = el.tagName.toLocaleLowerCase();
      if (el.childNodes) _.LoopMethod(el);
      // ! LOOP END
      if (
        (el.hasAttribute('data-label') ||
          (el.hasAttribute('data-class') &&
            el.getAttribute('data-class') == 'ckcommentsfull')) &&
        el.tagName == 'SPAN'
      ) {
        let d_Name = el.getAttribute('data-name');
        if (
          (el.hasAttribute('data-name') && excludeNode.includes(d_Name)) ||
          el.hasAttribute('data-levels')
        ) {
          //el.outerHTML=el.innerHTML
          _.Check_InnerHTML(el);
        } else {
          el.remove();
        }
      } else if (['INSERT', 'DEL', 'DIV'].includes(el.tagName)) {
        // ? In -house Tags
        if (el.tagName == 'INSERT' || el.tagName == 'DIV') {
          //el.outerHTML=el.innerHTML
          _.Check_InnerHTML(el);
        } else if (el.tagName == 'DEL') {
          el.remove();
        }
      } else if (
        [
          'input',
          'label',
          'select',
          'button',
          'fieldset',
          'legend',
          'datalist',
          'output',
          'option',
          'optgroup',
          'textarea',
          'title',
        ].includes(el.tagName.toLocaleLowerCase())
      ) {
        //? 02-Jul-22
        if (el.tagName.toLocaleLowerCase() == 'textarea') {
          _.Check_InnerHTML(el);
        }
        el.remove();
      } else if (el.hasAttribute('data-css')) {
        if (el.getAttribute('data-css') == 'ice-format') {
          [...el.attributes].forEach((attr) => {
            if (attr.name != 'data-name') el.removeAttribute(attr.name);
          });
        } else if (el.getAttribute('data-css') == 'ice-reformat') {
          //el.outerHTML=el.innerHTML
          _.Check_InnerHTML(el);
        }
        // ! out of impact Tags
      } else if (
        _.formatTagArr.includes(tag) ||
        ['table', 'td', 'tr', 'thead'].includes(tag)
      ) {
        if (el.getAttribute('style') !== null) {
          _.removeAttr(el);
        }
      } else if (
        el.hasAttribute('data-user-comment-box') &&
        el.tagName == 'SPAN'
      ) {
        el.remove();
      } else if (el.getAttribute('style') !== null) {
        _.checkRemoveAttrivute(el);
      } else if (['a'].includes(tag) && this.eventhandler != 'query') {
        let validate = this.valid_xref();
        if (el.hasAttribute('rid') && validate) {
          let r = s4();
          commonMethods.SET_REMOVE_ATTR(el, { 'data-paste-id': r }, [
            'zrid',
            'ztxt',
          ]);
          if ([/* 'shortcut', */ 'query'].includes(this.eventhandler)) return;
          this.IsCitationAvailable =
            el.getAttribute('ref-type') == 'bibr' ? !0 : !1;
          this.Paste_Cite = {
            id: r,
            rid: el.getAttribute('rid'),
            type: el.getAttribute('ref-type'),
          };
          /* setTimeout((id) => {
                      GlobalEditor.fire( 'saveSnapshot' );
                      PasteFilter.after_paste_check_citation(id);
                      setTimeout((_id) => {
                          IMPACT_SELECTION.setCursor(GlobalEditor, {set_id:_id, find_attr:'data-paste-id'});
                      }, 100,id);
                      GlobalEditor.fire( 'updateSnapshot' );
                  }, 100, r); */
        } else _.Check_InnerHTML(el);
      } else {
        _.Check_InnerHTML(el);
      }
    } catch (err) {
      this.ErrorEvent = !0;
      console.warn(err.message);
      ErrorLogTrace('node2Text', err.message + el.innerHTML);
    }
  },
  checkRemoveAttrivute: function (el, _) {
    try {
      _ = this;
      if (el.getAttribute('style') !== null) {
        this.removeAttr(el);
      }
      let loop = 1;
      while (el.attributes.length > 1) {
        for (var i = 0; i < el.attributes.length; i++) {
          var attrib = el.attributes[i];
          if (
            (!['style', 'data-name', 'href', 'target', 'rel', 'id'].includes(
              attrib.name
            ) &&
              this.Option.query) ||
            attrib.name != 'style'
          ) {
            el.removeAttribute(attrib.name);
          }
        }
        if (loop > 5) break;
        else loop++;
      }
      if (el.getAttribute('style') == null) _.Check_InnerHTML(el);
    } catch (err) {
      this.ErrorEvent = !0;
      console.warn(err.message);
      ErrorLogTrace('checkRemoveAttrivute', err.message);
    }
  },
  LoopMethod: function (element, _) {
    try {
      _ = this;
      var arr = Array.from(element.childNodes),
        reverArr = arr.reverse();
      reverArr.forEach((node, ind, Arr) => {
        if (!node) return;
        if (
          [7, 4, 8, 10].includes(node.nodeType) ||
          (node.nodeType == 1 &&
            _.remove_elm_tags.includes(node.tagName.toLocaleLowerCase()))
        ) {
          node.parentElement.removeChild(node);
        } else if (node.nodeType == 3) {
          let trim = node.nodeValue.trim();
          if (['', ' ', '\\n', '\\n\\n'].includes(trim) || trim.length == 0) {
            node.parentElement.removeChild(node);
          } else _.check_NSNB(node);
        } else if (node.nodeType == 1) {
          _.node2Text(node);
        }
      });
    } catch (err) {
      this.ErrorEvent = !0;
      console.warn(err.message);
      ErrorLogTrace('LoopMethod', err.message);
    }
  },
  remoe_empty: function (i) {
    const divs = this.DOM.querySelectorAll('*');
    console.log(divs);
    Array.from(divs).forEach((div, idx, arr) => {
      if (!div.innerHTML) return;
      if (div.innerHTML === '') {
        while (div.parentElement && div.parentElement.innerHTML !== '') {
          div = div.parentElement;
          if (!div) break;
        }
        div.remove();
      }
    });
  },
  fire: function (data, Option) {
    try {
      this.Option = Option = Option ? Option : { event_from: null };
      this.eventhandler = Option.event_from;
      this.DOM = document.getElementById('ccc');
      if (data.match(/&lt|&gt|&quot|x3C/)) {
        // ? 02-jul-22
        for (let tag in this.tagsAsString) {
          data = data.replaceAllSplit(tag, this.tagsAsString[tag]);
        }
      }
      var frag = document.createRange().createContextualFragment(data);
      $(this.DOM).html('').append(frag);
      this.ErrorEvent = !1;
      if (this.DOM.childNodes.length > 0) {
        //this.valid_xref();
        this.LoopMethod(this.DOM);
        this.remoe_empty(0);
        var tempData = this.DOM.innerHTML.trim();
        this.DOM.innerHTML = '';
        this.Record(data, tempData);
        return tempData;
      } else return '';
    } catch (err) {
      console.warn(err.message);
      ErrorLogTrace('OnPaste_fire', err.message);
    }
  },
  valid_xref: function () {
    try {
      let missing = [];
      this.DOM.querySelectorAll('a.xref').forEach((el) => {
        let rid = el.getAttribute('rid');
        rid.split(' ').forEach((id) => {
          if (GlobalEditor.document.find(`#${id}`)) {
            c('element found');
          } else missing.push('id');
        });
      });
      return missing.length && !iREF_SCOPE.IS_NAME_DATE > 0 ? !1 : !0;
    } catch (err) {
      console.warn(err.message);
      ErrorLogTrace('valid_xref', err.message);
    }
  },
  after_paste_check_citation: function (_id) {
    try {
      /** 
              @params {_id} for pasted xref id
          */
      _id = this.Paste_Cite ? this.Paste_Cite.id : null;
      this.A_DOM = document.getElementById('aaa');
      $(this.A_DOM).html('');
      var gData = GlobalEditor.getData();
      let rData = CitationNewModule.RE_ORDER(gData);
      if (
        this.IsCitationAvailable &&
        Can_ReOrder_Ref_Section(CitationNewModule._.citation_order)
      ) {
        this.IsReNumber = !0;
        let re_order = window.ReOrderRefList(
          rData,
          CitationNewModule._.citation_order
        );
        if (re_order) {
          GlobalEditor.fire('saveSnapshot');
          GlobalEditor.setData(rData);
          GlobalEditor.fire('updateSnapshot');
          setTimeout(
            (id) => {
              IMPACT_SELECTION.setCursor(GlobalEditor, {
                set_id: id ? id : null,
                find_attr: 'data-paste-id',
              });
            },
            100,
            _id
          );
        }
      }
    } catch (err) {
      console.warn(err.message);
      ErrorLogTrace('after_paste_check_citation', err.message);
    }
  },
  Paste_DB_Record: function (response) {
    var STRINGY = JSON.stringify(response);
    try {
      console.info(response);
      if (response.r == 0) ErrorLogTrace('Paste_DB_Record_Response', STRINGY);
    } catch (err) {
      console.warn(err.message);
      ErrorLogTrace('Paste_DB_Record', err.message + STRINGY);
    }
  },
  histroy: {},
  Record: function (rawData, filterData) {
    try {
      if (this.histroy[filterData] && this.histroy[filterData] == rawData)
        return;
      else this.histroy[filterData] = rawData;
      let area = this.Option && this.Option.query ? 'QUERY' : 'EDITOR';
      var Paste_Json = {
        tbl: 'PasteLogs',
        docid: 'DOC_ID',
        raw_data: rawData,
        filter_data: filterData,
        Area: area,
        user: 'USER_INFO.MAIL_ID',
        _r: ['5af956974b4bb40a34648f8e'],
        _w: ['5af956974b4bb40a34648f8e'],
        status: this.ErrorEvent ? 'error' : 'pass',
      };
      //commonfn.callajax(Paste_Json, 'Paste_DB_Record', API_UPDATE_INSERT, this);
    } catch (err) {
      console.warn(err.message);
      ErrorLogTrace('Paste_Record', err.message);
    }
  },
  test1: function () {},
};
var ErrorLogTrace = function (para1, para11) {
  console.log('ErrorLogTrace');
};
var DataFilter = PasteFilter.fire(DATA, { event_from: 'shortcut' });
console.log(DataFilter);
Div.innerHTML = DataFilter;
