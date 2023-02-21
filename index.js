// Import stylesheets
import './style.css';
import './PasteData.js';
import './data.json';

import $ from 'jquery';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var DATA = '';
var p = document.createElement('p');

var text =
  '<!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}-->';
p.textContent = text;

appDiv.appendChild(p);

var q = document.createElement('span');
q.innerHTML = text;
appDiv.appendChild(q);
console.log(q.innerHTML);
console.log(text.split('--'));

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
  default_params: {
    event_from: null,
    plain_text: false,
    setData: false,
    e: null,
  },
  removeAttr: function (elem, _) {
    _ = PasteFilter;
    try {
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
      this.ErrorEvent = true;
      console.warn(err.message);
      //ErrorLogTrace('removeAttr', err.message);
    }
  },
  check_NSNB: function (NODE, _) {
    _ = PasteFilter;
    try {
      var loop = 0;
      var IsElm = NODE.nodeType == 1 ? true : false;
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
      this.ErrorEvent = true;
      console.warn(err.message);
      //ErrorLogTrace('check_NSNB', err.message);
    }
  },
  IsCitationAvailable: false,
  Check_InnerHTML: function (NODE, _) {
    _ = PasteFilter;
    try {
      var IsEmtpy =
        this.empty_values.includes(NODE.innerHTML) ||
        this.empty_values.includes(NODE.textContent);
      var Parent = NODE.parentElement;
      // ? 16_NOV_22 -
      if (Parent && this.eventhandler != 'copy') {
        NODE.outerHTML = IsEmtpy ? this.SPACE : this.check_NSNB(NODE);
        if (Parent.innerHTML == this.SPACE) Parent.outerHTML = this.SPACE;
      } else if (IsEmtpy) {
        NODE.remove();
      }
    } catch (err) {
      this.ErrorEvent = true;
      console.warn(err.message + NODE.innerHTML);
      //ErrorLogTrace('InnerHTML', err.message + NODE.innerHTML);
    }
  },
  node2Text: function (el, _) {
    _ = PasteFilter;
    try {
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
      } else if (
        ['a'].includes(tag) &&
        !['query'].includes(this.eventhandler) &&
        !['copy'].includes(this.e.name)
      ) {
        let validate = this.valid_xref();
        if (el.hasAttribute('rid') && validate) {
          let r = s4();
          commonMethods.SET_REMOVE_ATTR(
            el,
            {
              'data-paste-id': r,
            },
            ['zrid', 'ztxt']
          );
          if (
            [/* 'shortcut', */ 'query'].includes(this.eventhandler) ||
            ['copy'].includes(this.e.name)
          )
            return;
          this.IsCitationAvailable =
            el.getAttribute('ref-type') == 'bibr' ? true : false;
          this.Paste_Cite = {
            id: r,
            rid: el.getAttribute('rid'),
            type: el.getAttribute('ref-type'),
          };
        } else _.Check_InnerHTML(el);
      } else {
        _.Check_InnerHTML(el);
      }
    } catch (err) {
      this.ErrorEvent = true;
      console.warn(err.message);
      //ErrorLogTrace('node2Text', err.message + el.innerHTML);
    }
  },
  checkRemoveAttrivute: function (el, _) {
    _ = PasteFilter;
    try {
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
      this.ErrorEvent = true;
      console.warn(err.message);
      //ErrorLogTrace('checkRemoveAttrivute', err.message);
    }
  },
  LoopMethod: function (element, _) {
    _ = PasteFilter;
    try {
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
      this.ErrorEvent = true;
      console.warn(err.message);
      //ErrorLogTrace('LoopMethod', err.message);
    }
  },
  css_to_text: function (el, _) {
    _ = this;
    try {
      // '[data-pistart], [data-name="aff"] [data-label], [data-name="fn"] [data-label], [data-name="caption"] [data-label]'
      let IsLab = el.hasAttribute('data-label');
      let get_value = el.getAttribute(IsLab ? 'data-label' : 'data-pistart');
      if (el.classList.contains('delimt') && el.closest('.kwd-group')) return;
      let frag = document.createRange().createContextualFragment(get_value);
      let fragNode = frag.firstChild.nodeValue;
      if (
        el.firstChild &&
        el.firstChild.nodeType == 1 &&
        el.firstChild.textContent == '' &&
        !el.firstChild.hasAttribute('data-pistart')
      )
        el.removeChild(el.firstChild);
      if (IsLab) {
        el.firstChild.textContent = fragNode.concat(
          ' ',
          el.firstChild.textContent
        );
      } else {
        let [prev, count] = [el.previousSibling, 0];
        while (prev && prev.nodeType == 1) {
          prev = prev.lastChild;
          count++;
          if (!prev || count > 10) break;
        }
        if (prev) prev.textContent = prev.textContent.concat('', fragNode);
        else el.before(frag);
      }
      if (
        el.closest('.contrib') &&
        el.previousSibling.nodeType == 1 &&
        el.previousSibling.tagName == 'A'
      ) {
        let name = el.closest('.contrib').querySelector('.name');
        name.append(el.previousSibling);
      }
    } catch (err) {
      console.warn(err.message);
      //ErrorLogTrace('css_to_text', el.outerHTML + '>--->' + err.message);
    }
  },
  remove_empty: function (Options = {}, _) {
    _ = this;
    try {
      if (['copy', 'docStatics'].includes(this.e.name)) {
        let removeItem = commonMethods.removeHiddenItems.clean.split(',');
        removeItem.shift();
        Array.from([
          removeItem.join(','),
          commonMethods.removeHiddenItems.copy_clean,
          commonMethods.removeHiddenItems.copy,
        ]).forEach((find, index, array) => {
          this.DOM.querySelectorAll(find).forEach((el, idx, arr) => {
            if ([0, 1].includes(index)) {
              // ? return journal front matter meta elements only need to remove || not in reference part (e.g. 'del, .pub-date, .history, .permissions, .volume, .issue, .fpage, .lpage')
              if (index == 1 && el.closest('.ref') && el.tagName != 'DEL')
                return;
              el.remove();
            } else {
              _.css_to_text(el);
            }
          });
        });
        // ? LABEL SPLIT FROM TITLE
        this.DOM.querySelectorAll('div.ref span.label').forEach((el) => {
          el.firstChild.textContent = el.firstChild.textContent.concat('', ' ');
        });
      }
      var divs = this.DOM.querySelectorAll('span,div,p,td,th,a,input');
      Array.from(divs).forEach((el, idx, arr) => {
        if (el.textContent === '') {
          if (el.parentElement.textContent === '') el.parentElement.remove();
          else el.remove();
        } else {
          if (el.tagName == 'TD') {
            debug.log([el.textContent, el.textContent.length]);
          }
        }
      });
    } catch (err) {
      console.warn(err.message);
      //ErrorLogTrace('remove_empty', err.message);
    }
  },
  GET_SET_CURSOR: function (el, Option) {
    try {
      // ? GET POSTION
      var range,
        sel,
        caretPos = 0;
      // ? SET || https://stackoverflow.com/questions/6249095/how-to-set-the-caret-cursor-position-in-a-contenteditable-element-div
      if (el != null) {
        if (el.tagName == 'INPUT') {
          if (el.createTextRange) {
            range = el.createTextRange();
            range.move('character', caretPos);
            range.select();
          } else {
            if (el.selectionStart) {
              el.focus();
              el.setSelectionRange(caretPos, caretPos);
            } else el.focus();
          }
        } else {
          // ? textare
          range = document.createRange();
          sel = window.getSelection();
          range.setStart(Option.childNode, Option.caretPos);
          range.collapse(true);
          debug.warn('removeAllRanges');
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    } catch (err) {
      console.warn(err.message);
      //ErrorLogTrace('GET_SET_CURSOR', err.message);
    }
  },
  Update_Selection: function (filterData) {
    try {
      // ? https://stackoverflow.com/questions/3597116/insert-html-after-a-selection
      var sel, range, node;
      if (window.getSelection) {
        sel = window.getSelection();
        sel.deleteFromDocument();
        if (sel.getRangeAt && sel.rangeCount) {
          range = window.getSelection().getRangeAt(0);
          range.collapse(false);
          // Range.createContextualFragment() would be useful here but is
          // non-standard and not supported in all browsers (IE9, for one)
          var el = document.createElement('div');
          el.innerHTML = filterData;
          var frag = document.createDocumentFragment(),
            node,
            lastNode;
          while ((node = el.firstChild)) {
            lastNode = frag.appendChild(node);
          }
          range.insertNode(frag);
        }
      } else if (document.selection && document.selection.createRange) {
        sel = document.selection();
        sel.deleteFromDocument();
        range = document.selection.createRange();
        range.collapse(false);
        range.pasteHTML(filterData);
      }
    } catch (err) {
      console.warn(err.message);
      //ErrorLogTrace('Update_Selection', err.message);
    }
  },
  Get_Set_PasteData: function (event) {
    try {
      var Type = (
        window.clipboardData ||
        (event && event.clipboardData)
      ).types.includes('text/html')
        ? 'text/html'
        : 'text/plain';
      var paste_Data = (
        window.clipboardData ||
        (event && event.clipboardData)
      ).getData(Type);
      debug.log(paste_Data);
      return paste_Data;
    } catch (err) {
      console.warn(err.message);
      //ErrorLogTrace('get_PasteData', err.message);
    }
  },
  fire: function (data, Option, _) {
    _ = PasteFilter;
    /* 
          LAST_UPDATE ==> 07_FEB_23-YA ==> PASTE IN QRY.CMD DIALOG
          https://javascript.info/selection-range
          https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event
          https://developer.mozilla.org/en-US/docs/Web/API/Selection/deleteFromDocument
      */
    try {
      _.Option = Option = Option ? Option : _.default_params;
      [_.eventhandler, _.e] = [Option.event_from, Option.e];
      _.DOM = document.getElementById('ccc');
      if (!data) {
        data = _.Get_Set_PasteData(_.e, {
          getData: true,
        });
      }
      let sel = document.getSelection();
      let IsWindowSelection = sel.toString().length > 0 ? true : false;
      if (typeof data == 'string') {
        if (
          data.match(/&lt|&gt|&quot|x3C/) &&
          !['copy', 'docStatics'].includes(this.e.name)
        ) {
          // ? 02-jul-22
          for (let tag in this.tagsAsString) {
            data = data.replaceAllSplit(tag, this.tagsAsString[tag]);
          }
        }
        var frag = document.createRange().createContextualFragment(data);
        $(_.DOM).html('').append(frag);
      }
      _.ErrorEvent = false;
      var reTurnData = '';
      if (Option.plain_text) {
        reTurnData = _.DOM.textContent.trim();
        // return  (IsWindowSelection) ? _.Update_Selection(text) :  text;
      }
      if (_.DOM.childNodes.length > 0) {
        //this.valid_xref();
        reTurnData = data;
        // ? 17_NOV_22 COPT - PASTE - DATA FILTTER METHOD -  YA
        if (['copy', 'docStatics'].includes(_.e.name)) {
          _.remove_empty();
          reTurnData = _.DOM.innerHTML.trim();
          if (!['docStatics'].includes(_.e.name)) _.DOM.innerHTML = '';
        } else {
          _.LoopMethod(_.DOM);
          _.remove_empty();
          reTurnData = _.DOM.innerHTML.trim();
          //? Remove Char code 0-8 As per srini instruction DR_23_01_23/06_FEB_23_YA
          for (let index = 0; index <= 8; index++) {
            reTurnData = reTurnData.replaceAllSplit(
              String.fromCharCode(index.toString()),
              ''
            );
          }
          _.DOM.innerHTML = '';
          _.Record(data, reTurnData);
        }
        //Option = _.default_params;
        // return  IsWindowSelection ? _.Update_Selection(tempData) :  tempData;
      } /* else return  IsWindowSelection ? _.Update_Selection('') :  ''; */
      if (Option.setData && reTurnData.length > 0) {
        _.Update_Selection(reTurnData);
      }
      return reTurnData;
    } catch (err) {
      console.warn(err.message);
      _.Record(data, '');
      //ErrorLogTrace(
        'OnPaste_fire',
        err.message + '-data-' + data + '-Options-' + JSON.stringify(Option)
      );
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
      return missing.length && !iREF_SCOPE.IS_NAME_DATE > 0 ? false : true;
    } catch (err) {
      console.warn(err.message);
      //ErrorLogTrace('valid_xref', err.message);
    }
  },
  after_paste_check_citation: function (_id) {
    try {
      /** 
              @params {_id} for pasted xref id
          */
      _id = this.Paste_Cite ? this.Paste_Cite.id : null;
      this.A_DOM = document.getElementById('aaa');
      var gData = GlobalEditor.getData();
      let XREFS_LIST = GlobalEditor.document.find(`[data-paste-id="${_id}"]`).$
        .length;
      $(this.A_DOM).html('').append(gData);
      if (this.IsCitationAvailable) {
        IMPACT_SELECTION._SNAPSHOT({
          lock: true,
          SAVE: true,
        });
        //tempElm.classList.add('active'); tempElm is not defined
        let rData = CitationNewModule['M_FUN'].CHECK_REF_CITATION_SEQUENCE(
          this.A_DOM,
          {
            del_id: null,
            reorder: true,
          }
        );
        GlobalEditor.setData(rData);
        IMPACT_SELECTION._SNAPSHOT({
          unlock: true,
          SAVE: true,
        });
        setTimeout(
          (_id) => {
            IMPACT_SELECTION.setCursor(GlobalEditor, {
              set_id: _id ? _id : null,
              find_attr: 'data-paste-id',
            });
          },
          100,
          _id
        );
      }
    } catch (err) {
      console.warn(err.message);
      //ErrorLogTrace('after_paste_check_citation', err.message);
    }
  },
  Paste_DB_Record: function (response) {
    var STRINGY = JSON.stringify(response);
    try {
      console.info(response);
      if (response.r == 0) //ErrorLogTrace('Paste_DB_Record_Response', STRINGY);
    } catch (err) {
      console.warn(err.message);
      //ErrorLogTrace('Paste_DB_Record', err.message + STRINGY);
    }
  },
  histroy: {},
  Record: function (rawData, filterData) {
    try {
      if (IS_LOCAL_HOST) return;
      if (this.histroy[filterData] && this.histroy[filterData] == rawData)
        return;
      else this.histroy[filterData] = rawData;
      let area = this.Option && this.Option.query ? 'QUERY' : 'EDITOR';
      var Paste_Json = {
        tbl: 'PasteLogs',
        docid: DOC_ID,
        raw_data: rawData,
        filter_data: filterData,
        Area: area,
        user: USER_INFO.MAIL_ID,
        _r: ['5af956974b4bb40a34648f8e'],
        _w: ['5af956974b4bb40a34648f8e'],
        status: this.ErrorEvent ? 'error' : 'pass',
      };
      commonfn.callajax(Paste_Json, 'Paste_DB_Record', API_UPDATE_INSERT, this);
    } catch (err) {
      console.warn(err.message);
      //ErrorLogTrace('Paste_Record', err.message);
    }
  },
  test1: function () {},
};
setTimeout(() => {
  console.log(DATA);

  var DataFilter = PasteFilter.fire(DATA, { event_from: 'shortcut' });
  console.log(DataFilter);
  Div.innerHTML = DataFilter;
}, 2500);

DATA =
  '<html xmlns:o="urn:schemas-microsoft-com:office:office"\r\nxmlns:w="urn:schemas-microsoft-com:office:word"\r\nxmlns:m="http://schemas.microsoft.com/office/2004/12/omml"\r\nxmlns="http://www.w3.org/TR/REC-html40">\r\n\r\n<head>\r\n<meta http-equiv=Content-Type content="text/html; charset=utf-8">\r\n<meta name=ProgId content=Word.Document>\r\n<meta name=Generator content="Microsoft Word 15">\r\n<meta name=Originator content="Microsoft Word 15">\r\n<link rel=File-List\r\nhref="file:///C:/Users/EBPLR-~1/AppData/Local/Temp/msohtmlclip1/01/clip_filelist.xml">\r\n<!--[if gte mso 9]><xml>\r\n <o:OfficeDocumentSettings>\r\n  <o:AllowPNG/>\r\n </o:OfficeDocumentSettings>\r\n</xml><![endif]-->\r\n<link rel=themeData\r\nhref="file:///C:/Users/EBPLR-~1/AppData/Local/Temp/msohtmlclip1/01/clip_themedata.thmx">\r\n<link rel=colorSchemeMapping\r\nhref="file:///C:/Users/EBPLR-~1/AppData/Local/Temp/msohtmlclip1/01/clip_colorschememapping.xml">\r\n<!--[if gte mso 9]><xml>\r\n <w:WordDocument>\r\n  <w:View>Normal</w:View>\r\n  <w:Zoom>0</w:Zoom>\r\n  <w:TrackMoves/>\r\n  <w:TrackFormatting/>\r\n  <w:PunctuationKerning/>\r\n  <w:ValidateAgainstSchemas/>\r\n  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>\r\n  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>\r\n  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>\r\n  <w:DoNotPromoteQF/>\r\n  <w:LidThemeOther>EN-US</w:LidThemeOther>\r\n  <w:LidThemeAsian>X-NONE</w:LidThemeAsian>\r\n  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>\r\n  <w:Compatibility>\r\n   <w:BreakWrappedTables/>\r\n   <w:SnapToGridInCell/>\r\n   <w:WrapTextWithPunct/>\r\n   <w:UseAsianBreakRules/>\r\n   <w:DontGrowAutofit/>\r\n   <w:SplitPgBreakAndParaMark/>\r\n   <w:EnableOpenTypeKerning/>\r\n   <w:DontFlipMirrorIndents/>\r\n   <w:OverrideTableStyleHps/>\r\n  </w:Compatibility>\r\n  <m:mathPr>\r\n   <m:mathFont m:val="Cambria Math"/>\r\n   <m:brkBin m:val="before"/>\r\n   <m:brkBinSub m:val="&#45;-"/>\r\n   <m:smallFrac m:val="off"/>\r\n   <m:dispDef/>\r\n   <m:lMargin m:val="0"/>\r\n   <m:rMargin m:val="0"/>\r\n   <m:defJc m:val="centerGroup"/>\r\n   <m:wrapIndent m:val="1440"/>\r\n   <m:intLim m:val="subSup"/>\r\n   <m:naryLim m:val="undOvr"/>\r\n  </m:mathPr></w:WordDocument>\r\n</xml><![endif]--><!--[if gte mso 9]><xml>\r\n <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false"\r\n  DefSemiHidden="false" DefQFormat="false" DefPriority="99"\r\n  LatentStyleCount="376">\r\n  <w:LsdException Locked="false" Priority="0" QFormat="true" Name="Normal"/>\r\n  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 1"/>\r\n  <w:LsdException Locked="false" Priority="9" SemiHidden="true"\r\n   UnhideWhenUsed="true" QFormat="true" Name="heading 2"/>\r\n  <w:LsdException Locked="false" Priority="9" SemiHidden="true"\r\n   UnhideWhenUsed="true" QFormat="true" Name="heading 3"/>\r\n  <w:LsdException Locked="false" Priority="9" SemiHidden="true"\r\n   UnhideWhenUsed="true" QFormat="true" Name="heading 4"/>\r\n  <w:LsdException Locked="false" Priority="9" SemiHidden="true"\r\n   UnhideWhenUsed="true" QFormat="true" Name="heading 5"/>\r\n  <w:LsdException Locked="false" Priority="9" SemiHidden="true"\r\n   UnhideWhenUsed="true" QFormat="true" Name="heading 6"/>\r\n  <w:LsdException Locked="false" Priority="9" SemiHidden="true"\r\n   UnhideWhenUsed="true" QFormat="true" Name="heading 7"/>\r\n  <w:LsdException Locked="false" Priority="9" SemiHidden="true"\r\n   UnhideWhenUsed="true" QFormat="true" Name="heading 8"/>\r\n  <w:LsdException Locked="false" Priority="9" SemiHidden="true"\r\n   UnhideWhenUsed="true" QFormat="true" Name="heading 9"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="index 1"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="index 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="index 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="index 4"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="index 5"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="index 6"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="index 7"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="index 8"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="index 9"/>\r\n  <w:LsdException Locked="false" Priority="39" SemiHidden="true"\r\n   UnhideWhenUsed="true" Name="toc 1"/>\r\n  <w:LsdException Locked="false" Priority="39" SemiHidden="true"\r\n   UnhideWhenUsed="true" Name="toc 2"/>\r\n  <w:LsdException Locked="false" Priority="39" SemiHidden="true"\r\n   UnhideWhenUsed="true" Name="toc 3"/>\r\n  <w:LsdException Locked="false" Priority="39" SemiHidden="true"\r\n   UnhideWhenUsed="true" Name="toc 4"/>\r\n  <w:LsdException Locked="false" Priority="39" SemiHidden="true"\r\n   UnhideWhenUsed="true" Name="toc 5"/>\r\n  <w:LsdException Locked="false" Priority="39" SemiHidden="true"\r\n   UnhideWhenUsed="true" Name="toc 6"/>\r\n  <w:LsdException Locked="false" Priority="39" SemiHidden="true"\r\n   UnhideWhenUsed="true" Name="toc 7"/>\r\n  <w:LsdException Locked="false" Priority="39" SemiHidden="true"\r\n   UnhideWhenUsed="true" Name="toc 8"/>\r\n  <w:LsdException Locked="false" Priority="39" SemiHidden="true"\r\n   UnhideWhenUsed="true" Name="toc 9"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Normal Indent"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="footnote text"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="annotation text"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="header"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="footer"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="index heading"/>\r\n  <w:LsdException Locked="false" Priority="35" SemiHidden="true"\r\n   UnhideWhenUsed="true" QFormat="true" Name="caption"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="table of figures"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="envelope address"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="envelope return"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="footnote reference"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="annotation reference"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="line number"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="page number"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="endnote reference"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="endnote text"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="table of authorities"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="macro"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="toa heading"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Bullet"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Number"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List 4"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List 5"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Bullet 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Bullet 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Bullet 4"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Bullet 5"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Number 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Number 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Number 4"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Number 5"/>\r\n  <w:LsdException Locked="false" Priority="10" QFormat="true" Name="Title"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Closing"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Signature"/>\r\n  <w:LsdException Locked="false" Priority="1" SemiHidden="true"\r\n   UnhideWhenUsed="true" Name="Default Paragraph Font"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Body Text"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Body Text Indent"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Continue"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Continue 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Continue 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Continue 4"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="List Continue 5"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Message Header"/>\r\n  <w:LsdException Locked="false" Priority="11" QFormat="true" Name="Subtitle"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Salutation"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Date"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Body Text First Indent"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Body Text First Indent 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Note Heading"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Body Text 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Body Text 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Body Text Indent 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Body Text Indent 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Block Text"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Hyperlink"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="FollowedHyperlink"/>\r\n  <w:LsdException Locked="false" Priority="22" QFormat="true" Name="Strong"/>\r\n  <w:LsdException Locked="false" Priority="20" QFormat="true" Name="Emphasis"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Document Map"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Plain Text"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="E-mail Signature"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="HTML Top of Form"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="HTML Bottom of Form"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Normal (Web)"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="HTML Acronym"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="HTML Address"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="HTML Cite"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="HTML Code"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="HTML Definition"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="HTML Keyboard"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="HTML Preformatted"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="HTML Sample"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="HTML Typewriter"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="HTML Variable"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Normal Table"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="annotation subject"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="No List"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Outline List 1"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Outline List 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Outline List 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Simple 1"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Simple 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Simple 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Classic 1"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Classic 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Classic 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Classic 4"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Colorful 1"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Colorful 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Colorful 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Columns 1"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Columns 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Columns 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Columns 4"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Columns 5"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Grid 1"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Grid 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Grid 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Grid 4"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Grid 5"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Grid 6"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Grid 7"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Grid 8"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table List 1"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table List 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table List 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table List 4"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table List 5"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table List 6"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table List 7"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table List 8"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table 3D effects 1"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table 3D effects 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table 3D effects 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Contemporary"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Elegant"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Professional"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Subtle 1"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Subtle 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Web 1"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Web 2"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Web 3"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Balloon Text"/>\r\n  <w:LsdException Locked="false" Priority="39" Name="Table Grid"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Table Theme"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" Name="Placeholder Text"/>\r\n  <w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/>\r\n  <w:LsdException Locked="false" Priority="60" Name="Light Shading"/>\r\n  <w:LsdException Locked="false" Priority="61" Name="Light List"/>\r\n  <w:LsdException Locked="false" Priority="62" Name="Light Grid"/>\r\n  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/>\r\n  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/>\r\n  <w:LsdException Locked="false" Priority="65" Name="Medium List 1"/>\r\n  <w:LsdException Locked="false" Priority="66" Name="Medium List 2"/>\r\n  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/>\r\n  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/>\r\n  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/>\r\n  <w:LsdException Locked="false" Priority="70" Name="Dark List"/>\r\n  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/>\r\n  <w:LsdException Locked="false" Priority="72" Name="Colorful List"/>\r\n  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/>\r\n  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" Name="Revision"/>\r\n  <w:LsdException Locked="false" Priority="34" QFormat="true"\r\n   Name="List Paragraph"/>\r\n  <w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/>\r\n  <w:LsdException Locked="false" Priority="30" QFormat="true"\r\n   Name="Intense Quote"/>\r\n  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="19" QFormat="true"\r\n   Name="Subtle Emphasis"/>\r\n  <w:LsdException Locked="false" Priority="21" QFormat="true"\r\n   Name="Intense Emphasis"/>\r\n  <w:LsdException Locked="false" Priority="31" QFormat="true"\r\n   Name="Subtle Reference"/>\r\n  <w:LsdException Locked="false" Priority="32" QFormat="true"\r\n   Name="Intense Reference"/>\r\n  <w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/>\r\n  <w:LsdException Locked="false" Priority="37" SemiHidden="true"\r\n   UnhideWhenUsed="true" Name="Bibliography"/>\r\n  <w:LsdException Locked="false" Priority="39" SemiHidden="true"\r\n   UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/>\r\n  <w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/>\r\n  <w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/>\r\n  <w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/>\r\n  <w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/>\r\n  <w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/>\r\n  <w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/>\r\n  <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/>\r\n  <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/>\r\n  <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/>\r\n  <w:LsdException Locked="false" Priority="46"\r\n   Name="Grid Table 1 Light Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="51"\r\n   Name="Grid Table 6 Colorful Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="52"\r\n   Name="Grid Table 7 Colorful Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="46"\r\n   Name="Grid Table 1 Light Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="51"\r\n   Name="Grid Table 6 Colorful Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="52"\r\n   Name="Grid Table 7 Colorful Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="46"\r\n   Name="Grid Table 1 Light Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="51"\r\n   Name="Grid Table 6 Colorful Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="52"\r\n   Name="Grid Table 7 Colorful Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="46"\r\n   Name="Grid Table 1 Light Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="51"\r\n   Name="Grid Table 6 Colorful Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="52"\r\n   Name="Grid Table 7 Colorful Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="46"\r\n   Name="Grid Table 1 Light Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="51"\r\n   Name="Grid Table 6 Colorful Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="52"\r\n   Name="Grid Table 7 Colorful Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="46"\r\n   Name="Grid Table 1 Light Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="51"\r\n   Name="Grid Table 6 Colorful Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="52"\r\n   Name="Grid Table 7 Colorful Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="List Table 2"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="List Table 3"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="List Table 4"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/>\r\n  <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/>\r\n  <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/>\r\n  <w:LsdException Locked="false" Priority="46"\r\n   Name="List Table 1 Light Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="51"\r\n   Name="List Table 6 Colorful Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="52"\r\n   Name="List Table 7 Colorful Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="46"\r\n   Name="List Table 1 Light Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="51"\r\n   Name="List Table 6 Colorful Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="52"\r\n   Name="List Table 7 Colorful Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="46"\r\n   Name="List Table 1 Light Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="51"\r\n   Name="List Table 6 Colorful Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="52"\r\n   Name="List Table 7 Colorful Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="46"\r\n   Name="List Table 1 Light Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="51"\r\n   Name="List Table 6 Colorful Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="52"\r\n   Name="List Table 7 Colorful Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="46"\r\n   Name="List Table 1 Light Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="51"\r\n   Name="List Table 6 Colorful Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="52"\r\n   Name="List Table 7 Colorful Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="46"\r\n   Name="List Table 1 Light Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="51"\r\n   Name="List Table 6 Colorful Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="52"\r\n   Name="List Table 7 Colorful Accent 6"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Mention"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Smart Hyperlink"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Hashtag"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Unresolved Mention"/>\r\n  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"\r\n   Name="Smart Link"/>\r\n </w:LatentStyles>\r\n</xml><![endif]-->\r\n<style>\r\n<!--\r\n /* Font Definitions */\r\n @font-face\r\n\t{font-family:"Cambria Math";\r\n\tpanose-1:2 4 5 3 5 4 6 3 2 4;\r\n\tmso-font-charset:0;\r\n\tmso-generic-font-family:roman;\r\n\tmso-font-pitch:variable;\r\n\tmso-font-signature:-536869121 1107305727 33554432 0 415 0;}\r\n@font-face\r\n\t{font-family:Calibri;\r\n\tpanose-1:2 15 5 2 2 2 4 3 2 4;\r\n\tmso-font-charset:0;\r\n\tmso-generic-font-family:swiss;\r\n\tmso-font-pitch:variable;\r\n\tmso-font-signature:-469750017 -1073732485 9 0 511 0;}\r\n /* Style Definitions */\r\n p.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{mso-style-unhide:no;\r\n\tmso-style-qformat:yes;\r\n\tmso-style-parent:"";\r\n\tmargin-top:0in;\r\n\tmargin-right:0in;\r\n\tmargin-bottom:8.0pt;\r\n\tmargin-left:0in;\r\n\tline-height:107%;\r\n\tmso-pagination:widow-orphan;\r\n\tfont-size:11.0pt;\r\n\tfont-family:"Calibri",sans-serif;\r\n\tmso-ascii-font-family:Calibri;\r\n\tmso-ascii-theme-font:minor-latin;\r\n\tmso-fareast-font-family:Calibri;\r\n\tmso-fareast-theme-font:minor-latin;\r\n\tmso-hansi-font-family:Calibri;\r\n\tmso-hansi-theme-font:minor-latin;\r\n\tmso-bidi-font-family:"Times New Roman";\r\n\tmso-bidi-theme-font:minor-bidi;}\r\n.MsoChpDefault\r\n\t{mso-style-type:export-only;\r\n\tmso-default-props:yes;\r\n\tfont-family:"Calibri",sans-serif;\r\n\tmso-ascii-font-family:Calibri;\r\n\tmso-ascii-theme-font:minor-latin;\r\n\tmso-fareast-font-family:Calibri;\r\n\tmso-fareast-theme-font:minor-latin;\r\n\tmso-hansi-font-family:Calibri;\r\n\tmso-hansi-theme-font:minor-latin;\r\n\tmso-bidi-font-family:"Times New Roman";\r\n\tmso-bidi-theme-font:minor-bidi;}\r\n.MsoPapDefault\r\n\t{mso-style-type:export-only;\r\n\tmargin-bottom:8.0pt;\r\n\tline-height:107%;}\r\n@page WordSection1\r\n\t{size:8.5in 11.0in;\r\n\tmargin:1.0in 1.0in 1.0in 1.0in;\r\n\tmso-header-margin:.5in;\r\n\tmso-footer-margin:.5in;\r\n\tmso-paper-source:0;}\r\ndiv.WordSection1\r\n\t{page:WordSection1;}\r\n-->\r\n</style>\r\n<!--[if gte mso 10]>\r\n<style>\r\n /* Style Definitions */\r\n table.MsoNormalTable\r\n\t{mso-style-name:"Table Normal";\r\n\tmso-tstyle-rowband-size:0;\r\n\tmso-tstyle-colband-size:0;\r\n\tmso-style-noshow:yes;\r\n\tmso-style-priority:99;\r\n\tmso-style-parent:"";\r\n\tmso-padding-alt:0in 5.4pt 0in 5.4pt;\r\n\tmso-para-margin-top:0in;\r\n\tmso-para-margin-right:0in;\r\n\tmso-para-margin-bottom:8.0pt;\r\n\tmso-para-margin-left:0in;\r\n\tline-height:107%;\r\n\tmso-pagination:widow-orphan;\r\n\tfont-size:11.0pt;\r\n\tfont-family:"Calibri",sans-serif;\r\n\tmso-ascii-font-family:Calibri;\r\n\tmso-ascii-theme-font:minor-latin;\r\n\tmso-hansi-font-family:Calibri;\r\n\tmso-hansi-theme-font:minor-latin;\r\n\tmso-bidi-font-family:"Times New Roman";\r\n\tmso-bidi-theme-font:minor-bidi;}\r\n</style>\r\n<![endif]-->\r\n</head>\r\n\r\n<body lang=EN-US style=\'tab-interval:.5in;word-wrap:break-word\'>\r\n<!--StartFragment-->\r\n\r\n<p class=MsoNormal style=\'text-align:justify;line-height:150%\'><b><span\r\nstyle=\'font-size:12.0pt;line-height:150%;mso-bidi-font-family:Calibri;\r\nmso-bidi-theme-font:minor-latin\'>Absent: </span></b><span style=\'font-size:\r\n12.0pt;line-height:150%;mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin\'>An\r\nHrC score of <2 is indicative of the absence of cancer. <b><o:p></o:p></b></span></p>\r\n\r\n<p class=MsoNormal style=\'margin-bottom:0in;margin-bottom:0in;margin-top:0in;\r\nmso-margin-bottom-alt:8.0pt;mso-margin-top-alt:0in;mso-add-space:auto;\r\ntext-align:justify;line-height:150%\'><b><span style=\'font-size:12.0pt;\r\nline-height:150%;mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin\'>Low\r\nlikelihood of cancer: </span></b><span style=\'font-size:12.0pt;line-height:\r\n150%;mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin\'>An HrC score\r\nbetween 2 and 6 suggests a low likelihood of cancer. <b><o:p></o:p></b></span></p>\r\n\r\n<p class=MsoNormal style=\'margin-bottom:0in;margin-bottom:0in;margin-top:0in;\r\nmso-margin-bottom-alt:8.0pt;mso-margin-top-alt:0in;mso-add-space:auto;\r\ntext-align:justify;line-height:150%\'><b><span style=\'font-size:12.0pt;\r\nline-height:150%;mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin\'>Moderate\r\nlikelihood of cancer: </span></b><span style=\'font-size:12.0pt;line-height:\r\n150%;mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin\'>An HrC score\r\nbetween 6 and 10 suggests moderate risk of developing cancer.<b><o:p></o:p></b></span></p>\r\n\r\n<p class=MsoNormal style=\'margin-bottom:0in;margin-bottom:0in;margin-top:0in;\r\nmso-margin-bottom-alt:8.0pt;mso-margin-top-alt:0in;mso-add-space:auto;\r\ntext-align:justify;line-height:150%\'><b><span style=\'font-size:12.0pt;\r\nline-height:150%;mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin\'>High\r\nlikelihood of cancer:<span style=\'mso-spacerun:yes\'>  </span></span></b><span\r\nstyle=\'font-size:12.0pt;line-height:150%;mso-bidi-font-family:Calibri;\r\nmso-bidi-theme-font:minor-latin\'>An HrC score of >10 is indicative of cancer\r\npresence. <o:p></o:p></span></p>\r\n\r\n<!--EndFragment-->\r\n</body>\r\n\r\n</html>\r\n';
// -------------------
