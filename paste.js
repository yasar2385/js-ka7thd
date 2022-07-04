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
      ErrorLogTrace('Paste_Record', err.message);
    }
  },
  test1: function () {},
};
