define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/components/lxl-container.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/lxl-container.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/lxl-container.js should pass jshint.');
  });
});
define('dummy/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('dummy/tests/controllers/lxl-tags/pause.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/lxl-tags/pause.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/lxl-tags/pause.js should pass jshint.');
  });
});
define('dummy/tests/controllers/usage/callbacks.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/usage/callbacks.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/usage/callbacks.js should pass jshint.');
  });
});
define('dummy/tests/controllers/usage/keys.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/usage/keys.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/usage/keys.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember', 'ember-keyboard'], function (exports, _ember, _emberKeyboard) {

  var keyEvent = function keyEvent(app, attributes, type) {
    var event = attributes.split('+').reduce(function (event, attribute) {
      if (['ctrl', 'meta', 'alt', 'shift'].indexOf(attribute) > -1) {
        event[attribute + 'Key'] = true;
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(document, type, event);
  };

  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('keyDown', function (app, attributes) {
      return keyEvent(app, attributes, 'keydown');
    });

    _ember['default'].Test.registerAsyncHelper('keyUp', function (app, attributes) {
      return keyEvent(app, attributes, 'keyup');
    });

    _ember['default'].Test.registerAsyncHelper('keyPress', function (app, attributes) {
      return keyEvent(app, attributes, 'keypress');
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _dummyTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/ember-lxl-test', ['exports', 'ember', 'ember-qunit', 'ember-letter-by-letter'], function (exports, _ember, _emberQunit, _emberLetterByLetter) {
  var getOwner = _ember['default'].getOwner;
  var set = _ember['default'].set;
  var later = _ember['default'].run.later;

  (0, _emberQunit.moduleForComponent)('ember-lxl', 'Integration | Component | ember lxl', {
    integration: true,

    beforeEach: function beforeEach() {
      (0, _emberLetterByLetter.initialize)(getOwner(this));
    }
  });

  (0, _emberQunit.test)('it parses words into word and letter spans', function (assert) {
    assert.expect(2);

    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 41
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-lxl', [], ['text', 'Word, I have a word.'], ['loc', [null, [1, 0], [1, 41]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('.lxl-word').length, 5, 'it wraps words');
    assert.equal(this.$('.lxl-word:first .lxl-letter').length, 5, 'it wraps characters into spans');
  });

  (0, _emberQunit.test)('tags are respected', function (assert) {
    assert.expect(8);

    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 92
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-lxl', [], ['text', 'Outside <span id=\'span\'>inside <strong id=\'strong\'>bold</strong></span>'], ['loc', [null, [1, 0], [1, 92]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('.lxl-word').length, 5, 'it wraps words');

    var $span = this.$('#span');
    assert.equal($span.length, 1, 'span is present');
    assert.equal($span.text().trim(), 'inside  bold', 'span contains the right text');
    assert.ok($span.is('span'), 'span is correct element');

    var $strong = this.$('#strong');
    assert.equal($strong.length, 1, 'strong is present');
    assert.equal($strong.text().trim(), 'bold', 'strong contains the right text');
    assert.ok($strong.is('strong'), 'strong is correct element');

    assert.equal(this.$('.lxl-word').length - this.$('.lxl-dom-element').length, 3, 'correct number of lxl-words');
  });

  (0, _emberQunit.test)('it executes lxl-tags', function (assert) {
    var _this = this;

    assert.expect(6);

    var done = assert.async();

    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 127
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-lxl', [], ['text', 'Slow [[#cps 1000000000]]very fast, and it\'s still fast and fast fast fast[[/cps]] slow.', 'cps', 10, 'tweenRate', 5], ['loc', [null, [1, 0], [1, 127]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('.lxl-word:first').css('opacity'), 1, 'first starts out 0');
    assert.equal(this.$('.lxl-word:last').css('opacity'), 0, 'last starts out 0');
    assert.equal(this.$('.lxl-word').length - this.$('.lxl-tag').length, 12, 'correct number of lxl-words');

    later(function () {
      assert.equal(_this.$('.lxl-word:nth(1)').css('opacity'), 1, 'second word faded in');
      assert.equal(_this.$('.lxl-word:nth(10)').css('opacity'), 1, 'last fast word faded in');
      assert.ok(parseFloat(_this.$('.lxl-word:last .lxl-letter:last').css('opacity')) < 1, 'last letter not faded in');

      done();
    }, 1000);
  });

  (0, _emberQunit.test)('it gradually fades the characters in', function (assert) {
    var _this2 = this;

    assert.expect(5);

    var done = assert.async();

    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 46
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-lxl', [], ['text', 'Word.', 'cps', 100, 'tweenRate', 5], ['loc', [null, [1, 0], [1, 46]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('.lxl-letter:first').css('opacity'), 0, 'first starts out 0');
    assert.equal(this.$('.lxl-letter:last').css('opacity'), 0, 'last starts out 0');

    later(function () {
      assert.ok(_this2.$('.lxl-letter:first').css('opacity') > _this2.$('.lxl-letter:last').css('opacity'), 'fades from first to last');
    }, 20);

    later(function () {
      assert.equal(_this2.$('.lxl-letter:first').css('opacity'), 1, 'first becomes 1');
      assert.equal(_this2.$('.lxl-letter:last').css('opacity'), 1, 'last becomes 1');

      done();
    }, 125);
  });

  (0, _emberQunit.test)('it pauses once it reaches the bottom of the container', function (assert) {
    var _this3 = this;

    assert.expect(19);

    var done = assert.async();

    set(this, 'completed', function () {
      assert.ok(false, 'ran onComplete callback prematurely');
    });

    set(this, 'paused', function () {
      assert.ok(true, 'ran onPageEnd callback');
    });

    set(this, 'resumed', function () {
      assert.ok(true, 'ran onPageStart callback');
    });

    set(this, 'started', function () {
      assert.ok(true, 'ran onStartedWriting callback');
    });

    set(this, 'stopped', function () {
      assert.ok(true, 'ran onStoppedWriting callback');
    });

    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'triple-curlies'
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 14,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('div');
          dom.setAttribute(el1, 'style', 'width: 250px; height: 50px; font-family: DejaVu Serif; font-size: 18px;');
          var el2 = dom.createTextNode('\n      ');
          dom.appendChild(el1, el2);
          var el2 = dom.createComment('');
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode('\n    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [['inline', 'ember-lxl', [], ['text', 'This is a really long sentance, but that\'s totally necessary!', 'cps', 10000000000, 'tweenRate', 0, 'onComplete', ['subexpr', 'action', [['get', 'completed', ['loc', [null, [7, 27], [7, 36]]]]], [], ['loc', [null, [7, 19], [7, 37]]]], 'onPageEnd', ['subexpr', 'action', [['get', 'paused', ['loc', [null, [8, 26], [8, 32]]]]], [], ['loc', [null, [8, 18], [8, 33]]]], 'onPageStart', ['subexpr', 'action', [['get', 'resumed', ['loc', [null, [9, 28], [9, 35]]]]], [], ['loc', [null, [9, 20], [9, 36]]]], 'onStartedWriting', ['subexpr', 'action', [['get', 'started', ['loc', [null, [10, 33], [10, 40]]]]], [], ['loc', [null, [10, 25], [10, 41]]]], 'onStoppedWriting', ['subexpr', 'action', [['get', 'stopped', ['loc', [null, [11, 33], [11, 40]]]]], [], ['loc', [null, [11, 25], [11, 41]]]]], ['loc', [null, [3, 6], [12, 8]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('.lxl-word').length, 10, 'it immediately writes all words');
    assert.equal(this.$('.lxl-letter').length, 4, 'it starts with this many characters wrapped');

    later(function () {
      assert.equal(_this3.$('.lxl-letter').length, 17, 'it continues wrapping characters');
    }, 350);

    later(function () {
      assert.equal(_this3.$('.lxl-letter').length, 17, 'it has stopped wrapping characters');

      _this3.$('.lxl-container').trigger('mouseup');

      set(_this3, 'completed', function () {
        assert.ok(true, 'ran onComplete callback at correct time');
      });
    }, 400);

    later(function () {
      assert.equal(_this3.$('.lxl-letter').length, 42, 'it has resumed wrapping characters');

      _this3.$('.lxl-container').trigger('mouseup');
    }, 750);

    later(function () {
      assert.equal(_this3.$('.lxl-letter').length, 52, 'it completes writing');

      _this3.$('.lxl-container').trigger('mouseup');

      done();
    }, 1000);
  });

  (0, _emberQunit.test)('text can be instawrote with a click', function (assert) {
    var _this4 = this;

    assert.expect(2);

    var done = assert.async();

    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'triple-curlies'
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 7,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n    ');
          dom.appendChild(el0, el1);
          var el1 = dom.createElement('div');
          dom.setAttribute(el1, 'style', 'width: 250px; height: 50px; font-family: DejaVu Serif; font-size: 18px;');
          var el2 = dom.createTextNode('\n      ');
          dom.appendChild(el1, el2);
          var el2 = dom.createComment('');
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode('\n    ');
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('\n  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [['inline', 'ember-lxl', [], ['text', 'This is a really long sentance, but that\'s totally necessary!'], ['loc', [null, [3, 6], [5, 8]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$('.lxl-word:last').css('opacity'), 0, 'last word starts faded out');

    later(function () {
      _this4.$('.lxl-container').trigger('mouseup');
    }, 25);

    later(function () {
      _this4.$('.lxl-container').trigger('mouseup');
    }, 50);

    later(function () {
      _this4.$('.lxl-container').trigger('mouseup');
    }, 75);

    later(function () {
      _this4.$('.lxl-container').trigger('mouseup');
    }, 100);

    later(function () {
      assert.equal(_this4.$('.lxl-word:last').css('opacity'), 1, 'last word faded in');

      done();
    }, 250);
  });

  (0, _emberQunit.test)('text is not scrollable by default', function (assert) {
    assert.expect(1);

    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 41
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-lxl', [], ['text', 'Word, I have a word.'], ['loc', [null, [1, 0], [1, 41]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(!this.$('.lxl-container').hasClass('ps-container'), 'scrollbar not applied');
  });

  (0, _emberQunit.test)('text can be scrollable', function (assert) {
    assert.expect(1);

    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.5.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 57
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-lxl', [], ['text', 'Word, I have a word.', 'scrollable', true], ['loc', [null, [1, 0], [1, 57]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok(this.$('.lxl-container').hasClass('ps-container'), 'scrollbar applied');
  });
});
define('dummy/tests/integration/components/ember-lxl-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/ember-lxl-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ember-lxl-test.js should pass jshint.');
  });
});
define('dummy/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('dummy/tests/routes/installation.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/installation.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/installation.js should pass jshint.');
  });
});
define('dummy/tests/routes/lxl-tags.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/lxl-tags.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/lxl-tags.js should pass jshint.');
  });
});
define('dummy/tests/routes/lxl-tags/custom.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/lxl-tags/custom.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/lxl-tags/custom.js should pass jshint.');
  });
});
define('dummy/tests/routes/lxl-tags/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/lxl-tags/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/lxl-tags/index.js should pass jshint.');
  });
});
define('dummy/tests/routes/lxl-tags/instant.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/lxl-tags/instant.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/lxl-tags/instant.js should pass jshint.');
  });
});
define('dummy/tests/routes/lxl-tags/pause.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/lxl-tags/pause.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/lxl-tags/pause.js should pass jshint.');
  });
});
define('dummy/tests/routes/lxl-tags/stagger.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/lxl-tags/stagger.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/lxl-tags/stagger.js should pass jshint.');
  });
});
define('dummy/tests/routes/lxl-tags/tween-effect.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/lxl-tags/tween-effect.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/lxl-tags/tween-effect.js should pass jshint.');
  });
});
define('dummy/tests/routes/lxl-tags/tween-rate.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/lxl-tags/tween-rate.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/lxl-tags/tween-rate.js should pass jshint.');
  });
});
define('dummy/tests/routes/lxl-tween-adapters.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/lxl-tween-adapters.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/lxl-tween-adapters.js should pass jshint.');
  });
});
define('dummy/tests/routes/usage.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/usage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/usage.js should pass jshint.');
  });
});
define('dummy/tests/routes/usage/callbacks.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/usage/callbacks.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/usage/callbacks.js should pass jshint.');
  });
});
define('dummy/tests/routes/usage/cps.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/usage/cps.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/usage/cps.js should pass jshint.');
  });
});
define('dummy/tests/routes/usage/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/usage/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/usage/index.js should pass jshint.');
  });
});
define('dummy/tests/routes/usage/instant.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/usage/instant.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/usage/instant.js should pass jshint.');
  });
});
define('dummy/tests/routes/usage/keys.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/usage/keys.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/usage/keys.js should pass jshint.');
  });
});
define('dummy/tests/routes/usage/scrollable.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/usage/scrollable.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/usage/scrollable.js should pass jshint.');
  });
});
define('dummy/tests/routes/usage/tween-effect.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/usage/tween-effect.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/usage/tween-effect.js should pass jshint.');
  });
});
define('dummy/tests/routes/usage/tween-rate.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/usage/tween-rate.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/usage/tween-rate.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/unit/instance-initializers/ember-letter-by-letter/register-lxl-tags-test', ['exports', 'ember', 'dummy/instance-initializers/ember-letter-by-letter/register-lxl-tags', 'qunit', 'dummy/tests/helpers/destroy-app'], function (exports, _ember, _dummyInstanceInitializersEmberLetterByLetterRegisterLxlTags, _qunit, _dummyTestsHelpersDestroyApp) {

  (0, _qunit.module)('Unit | Instance Initializer | ember letter by letter/register lxl tags', {
    beforeEach: function beforeEach() {
      var _this = this;

      _ember['default'].run(function () {
        _this.application = _ember['default'].Application.create();
        _this.appInstance = _this.application.buildInstance();
      });
    },
    afterEach: function afterEach() {
      _ember['default'].run(this.appInstance, 'destroy');
      (0, _dummyTestsHelpersDestroyApp['default'])(this.application);
    }
  });

  (0, _qunit.test)('lxl-tags are uninitialized', function (assert) {
    assert.expect(1);

    (0, _dummyInstanceInitializersEmberLetterByLetterRegisterLxlTags.initialize)(this.appInstance);

    this.appInstance.register('lxl-tag:foo', _ember['default'].Object.extend());

    assert.ok(this.appInstance.lookup('lxl-tag:foo').create, 'not initialized');
  });
});
define('dummy/tests/unit/instance-initializers/ember-letter-by-letter/register-lxl-tags-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/instance-initializers/ember-letter-by-letter/register-lxl-tags-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/instance-initializers/ember-letter-by-letter/register-lxl-tags-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/lxl-tags/instant-test', ['exports', 'ember', 'ember-letter-by-letter/lxl-tags/instant', 'qunit'], function (exports, _ember, _emberLetterByLetterLxlTagsInstant, _qunit) {
  var get = _ember['default'].get;

  (0, _qunit.module)('Unit | LXLTag | instant');

  ['open', 'execute'].forEach(function (methodName) {
    (0, _qunit.test)(methodName + ' sets a new cps on the lxlContainer', function (assert) {
      assert.expect(2);

      var instant = _emberLetterByLetterLxlTagsInstant['default'].create();
      var lxlContainer = {};
      var promise = instant[methodName](lxlContainer);

      assert.equal(get(lxlContainer, 'instant'), true, 'instant was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });
  });

  (0, _qunit.test)('close sets a new cps on the lxlContainer', function (assert) {
    assert.expect(2);

    var instant = _emberLetterByLetterLxlTagsInstant['default'].create();
    var lxlContainer = {};
    var promise = instant.close(lxlContainer);

    assert.equal(get(lxlContainer, 'instant'), false, 'instant was set');
    assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
  });
});
define('dummy/tests/unit/lxl-tags/instant-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/lxl-tags/instant-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/lxl-tags/instant-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/lxl-tags/pause-test', ['exports', 'ember', 'ember-keyboard', 'ember-letter-by-letter/lxl-tags/pause', 'qunit'], function (exports, _ember, _emberKeyboard, _emberLetterByLetterLxlTagsPause, _qunit) {
  var Evented = _ember['default'].Evented;
  var on = _ember['default'].on;
  var later = _ember['default'].run.later;

  var LxlContainer = _ember['default'].Object.extend(Evented, {
    keys: [],
    _notifyStartedWriting: function _notifyStartedWriting() {},
    _notifyStoppedWriting: function _notifyStoppedWriting() {}
  });

  (0, _qunit.module)('Unit | LXLTag | pause');

  ['open', 'execute'].forEach(function (methodName) {
    (0, _qunit.test)(methodName + ' resolves immediately if lxlContainer isInstant', function (assert) {
      var done = assert.async();

      assert.expect(1);

      var resolved = false;

      var pause = _emberLetterByLetterLxlTagsPause['default'].create();
      var lxlContainer = LxlContainer.create({ isInstant: true });
      var promise = pause[methodName](lxlContainer);

      promise.then(function () {
        resolved = true;
      });

      later(function () {
        assert.ok(resolved, 'promise resolves at the start of the next run loop');

        done();
      }, 25);
    });

    (0, _qunit.test)(methodName + ' triggers _notifyStoppedWriting and _notifyStartedWriting', function (assert) {
      var done = assert.async();

      assert.expect(2);

      var pause = _emberLetterByLetterLxlTagsPause['default'].create();
      var lxlContainer = LxlContainer.create({
        _notifyStartedWriting: function _notifyStartedWriting() {
          assert.ok(true, '_notifyStartedWriting ran');

          done();
        },

        _notifyStoppedWriting: function _notifyStoppedWriting() {
          assert.ok(true, '_notifyStoppedWriting ran');
        }
      });

      pause[methodName](lxlContainer, [100]);
    });

    (0, _qunit.test)(methodName + ' resolves after the provided duration', function (assert) {
      var done = assert.async();

      assert.expect(2);

      var resolved = false;

      var pause = _emberLetterByLetterLxlTagsPause['default'].create();
      var lxlContainer = LxlContainer.create();
      var promise = pause[methodName](lxlContainer, [100]);

      promise.then(function () {
        resolved = true;
      });

      assert.ok(!resolved, 'promise not immediately resolved');

      later(function () {
        assert.ok(resolved, 'promise resolved after 100ms');

        done();
      }, 200);
    });

    (0, _qunit.test)(methodName + ' resolves after the bound key press', function (assert) {
      var done = assert.async();

      assert.expect(1);

      var resolved = false;

      var pause = _emberLetterByLetterLxlTagsPause['default'].create();
      var lxlContainer = LxlContainer.create({
        keys: ['Enter', 'ArrowRight'],

        _advanceText: on((0, _emberKeyboard.keyDown)('Enter'), (0, _emberKeyboard.keyDown)('ArrowRight'), function () {
          assert.ok(resolved, '_advanceText ran');
        })
      });

      var promise = pause[methodName](lxlContainer, []);

      promise.then(function () {
        resolved = true;
      });

      lxlContainer.trigger((0, _emberKeyboard.keyDown)('ArrowRight'));

      later(function () {
        lxlContainer.trigger((0, _emberKeyboard.keyDown)('ArrowRight'));

        done();
      }, 10);
    });

    ['mouseUp', 'touchEnd'].forEach(function (eventName) {
      (0, _qunit.test)(methodName + ' resolves after ' + eventName, function (assert) {
        var done = assert.async();

        assert.expect(1);

        var resolved = false;

        var pause = _emberLetterByLetterLxlTagsPause['default'].create();
        var lxlContainer = LxlContainer.create({
          keys: ['Enter', 'ArrowRight'],

          _pressEvent: on(eventName, function () {
            assert.ok(resolved, '_pressEvent ran');
          })
        });

        var promise = pause[methodName](lxlContainer, []);

        promise.then(function () {
          resolved = true;
        });

        lxlContainer.trigger(eventName);

        later(function () {
          lxlContainer.trigger(eventName);

          done();
        }, 10);
      });
    });
  });
});
define('dummy/tests/unit/lxl-tags/pause-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/lxl-tags/pause-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/lxl-tags/pause-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/lxl-tags/stagger-test', ['exports', 'ember', 'ember-letter-by-letter/lxl-tags/cps', 'qunit'], function (exports, _ember, _emberLetterByLetterLxlTagsCps, _qunit) {
  var get = _ember['default'].get;

  (0, _qunit.module)('Unit | LXLTag | cps');

  ['open', 'execute'].forEach(function (methodName) {
    (0, _qunit.test)(methodName + ' sets a new cps on the lxlContainer', function (assert) {
      assert.expect(3);

      var cps = _emberLetterByLetterLxlTagsCps['default'].create();
      var lxlContainer = { cps: '20' };
      var promise = cps[methodName](lxlContainer, [12.5]);

      assert.equal(get(lxlContainer, 'cps'), 12.5, 'cps was updated');
      assert.equal(get(cps, 'initialCps'), 20, 'initialCps was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });

    (0, _qunit.test)(methodName + ' multiplies the initial cps if starting with a *', function (assert) {
      assert.expect(3);

      var cps = _emberLetterByLetterLxlTagsCps['default'].create();
      var lxlContainer = { cps: '20' };
      var promise = cps[methodName](lxlContainer, ['*2.5']);

      assert.equal(get(lxlContainer, 'cps'), 50, 'cps was updated');
      assert.equal(get(cps, 'initialCps'), 20, 'initialCps was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });

    (0, _qunit.test)(methodName + ' adds the initial cps if starting with a +', function (assert) {
      assert.expect(3);

      var cps = _emberLetterByLetterLxlTagsCps['default'].create();
      var lxlContainer = { cps: '20' };
      var promise = cps[methodName](lxlContainer, ['+2.5']);

      assert.equal(get(lxlContainer, 'cps'), 22.5, 'cps was updated');
      assert.equal(get(cps, 'initialCps'), 20, 'initialCps was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });

    (0, _qunit.test)(methodName + ' divides the initial cps if starting with a /', function (assert) {
      assert.expect(3);

      var cps = _emberLetterByLetterLxlTagsCps['default'].create();
      var lxlContainer = { cps: '20' };
      var promise = cps[methodName](lxlContainer, ['/2']);

      assert.equal(get(lxlContainer, 'cps'), 10, 'cps was updated');
      assert.equal(get(cps, 'initialCps'), 20, 'initialCps was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });

    (0, _qunit.test)(methodName + ' subtracts the initial cps if starting with a -', function (assert) {
      assert.expect(3);

      var cps = _emberLetterByLetterLxlTagsCps['default'].create();
      var lxlContainer = { cps: '20' };
      var promise = cps[methodName](lxlContainer, ['-2.5']);

      assert.equal(get(lxlContainer, 'cps'), 17.5, 'cps was updated');
      assert.equal(get(cps, 'initialCps'), 20, 'initialCps was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });

    (0, _qunit.test)(methodName + ' gives the remainder of the initial cps if starting with a %', function (assert) {
      assert.expect(3);

      var cps = _emberLetterByLetterLxlTagsCps['default'].create();
      var lxlContainer = { cps: '22' };
      var promise = cps[methodName](lxlContainer, ['%2.5']);

      assert.equal(get(lxlContainer, 'cps'), 2, 'cps was updated');
      assert.equal(get(cps, 'initialCps'), 22, 'initialCps was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });
  });

  (0, _qunit.test)('close returns the lxlContainer cps to its initial value', function (assert) {
    assert.expect(2);

    var cps = _emberLetterByLetterLxlTagsCps['default'].create({ initialCps: 5 });
    var lxlContainer = { cps: '22' };
    var promise = cps.close(lxlContainer);

    assert.equal(get(lxlContainer, 'cps'), 5, 'cps was returned to initialCps');
    assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
  });
});
define('dummy/tests/unit/lxl-tags/stagger-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/lxl-tags/stagger-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/lxl-tags/stagger-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/lxl-tags/tween-effect-test', ['exports', 'ember', 'ember-letter-by-letter/lxl-tags/tween-effect', 'qunit'], function (exports, _ember, _emberLetterByLetterLxlTagsTweenEffect, _qunit) {
  var get = _ember['default'].get;

  (0, _qunit.module)('Unit | LXLTag | tween effect');

  ['open', 'execute'].forEach(function (methodName) {
    (0, _qunit.test)(methodName + ' sets a new tweenEffect on the lxlContainer', function (assert) {
      assert.expect(3);

      var tweenEffect = _emberLetterByLetterLxlTagsTweenEffect['default'].create();
      var lxlContainer = { tweenEffect: { foo: 'bar' } };
      var promise = tweenEffect[methodName](lxlContainer, [{ baz: 'boom' }]);

      assert.deepEqual(get(lxlContainer, 'tweenEffect'), { baz: 'boom' }, 'tweenEffect was updated');
      assert.deepEqual(get(tweenEffect, 'initialTweenEffect'), { foo: 'bar' }, 'initialTweenEffect was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });
  });

  (0, _qunit.test)('close returns the lxlContainer tweenEffect to its initial value', function (assert) {
    assert.expect(2);

    var tweenEffect = _emberLetterByLetterLxlTagsTweenEffect['default'].create({ initialTweenEffect: { foo: 'bar' } });
    var lxlContainer = { tweenEffect: { baz: 'boom' } };
    var promise = tweenEffect.close(lxlContainer);

    assert.deepEqual(get(lxlContainer, 'tweenEffect'), { foo: 'bar' }, 'tweenEffect was returned to initialTweenEffect');
    assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
  });
});
define('dummy/tests/unit/lxl-tags/tween-effect-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/lxl-tags/tween-effect-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/lxl-tags/tween-effect-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/lxl-tags/tween-rate-test', ['exports', 'ember', 'ember-letter-by-letter/lxl-tags/tween-rate', 'qunit'], function (exports, _ember, _emberLetterByLetterLxlTagsTweenRate, _qunit) {
  var get = _ember['default'].get;

  (0, _qunit.module)('Unit | LXLTag | tween rate');

  ['open', 'execute'].forEach(function (methodName) {
    (0, _qunit.test)(methodName + ' sets a new tweenRate on the lxlContainer', function (assert) {
      assert.expect(3);

      var tweenRate = _emberLetterByLetterLxlTagsTweenRate['default'].create();
      var lxlContainer = { tweenRate: '20' };
      var promise = tweenRate[methodName](lxlContainer, [12.5]);

      assert.equal(get(lxlContainer, 'tweenRate'), 12.5, 'tweenRate was updated');
      assert.equal(get(tweenRate, 'initialTweenRate'), 20, 'initialTweenRate was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });

    (0, _qunit.test)(methodName + ' multiplies the initial tweenRate if starting with a *', function (assert) {
      assert.expect(3);

      var tweenRate = _emberLetterByLetterLxlTagsTweenRate['default'].create();
      var lxlContainer = { tweenRate: '20' };
      var promise = tweenRate[methodName](lxlContainer, ['*2.5']);

      assert.equal(get(lxlContainer, 'tweenRate'), 50, 'tweenRate was updated');
      assert.equal(get(tweenRate, 'initialTweenRate'), 20, 'initialTweenRate was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });

    (0, _qunit.test)(methodName + ' adds the initial tweenRate if starting with a +', function (assert) {
      assert.expect(3);

      var tweenRate = _emberLetterByLetterLxlTagsTweenRate['default'].create();
      var lxlContainer = { tweenRate: '20' };
      var promise = tweenRate[methodName](lxlContainer, ['+2.5']);

      assert.equal(get(lxlContainer, 'tweenRate'), 22.5, 'tweenRate was updated');
      assert.equal(get(tweenRate, 'initialTweenRate'), 20, 'initialTweenRate was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });

    (0, _qunit.test)(methodName + ' divides the initial tweenRate if starting with a /', function (assert) {
      assert.expect(3);

      var tweenRate = _emberLetterByLetterLxlTagsTweenRate['default'].create();
      var lxlContainer = { tweenRate: '20' };
      var promise = tweenRate[methodName](lxlContainer, ['/2']);

      assert.equal(get(lxlContainer, 'tweenRate'), 10, 'tweenRate was updated');
      assert.equal(get(tweenRate, 'initialTweenRate'), 20, 'initialTweenRate was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });

    (0, _qunit.test)(methodName + ' subtracts the initial tweenRate if starting with a -', function (assert) {
      assert.expect(3);

      var tweenRate = _emberLetterByLetterLxlTagsTweenRate['default'].create();
      var lxlContainer = { tweenRate: '20' };
      var promise = tweenRate[methodName](lxlContainer, ['-2.5']);

      assert.equal(get(lxlContainer, 'tweenRate'), 17.5, 'tweenRate was updated');
      assert.equal(get(tweenRate, 'initialTweenRate'), 20, 'initialTweenRate was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });

    (0, _qunit.test)(methodName + ' gives the remainder of the initial tweenRate if starting with a %', function (assert) {
      assert.expect(3);

      var tweenRate = _emberLetterByLetterLxlTagsTweenRate['default'].create();
      var lxlContainer = { tweenRate: '22' };
      var promise = tweenRate[methodName](lxlContainer, ['%2.5']);

      assert.equal(get(lxlContainer, 'tweenRate'), 2, 'tweenRate was updated');
      assert.equal(get(tweenRate, 'initialTweenRate'), 22, 'initialTweenRate was set');
      assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
    });
  });

  (0, _qunit.test)('close returns the lxlContainer tweenRate to its initial value', function (assert) {
    assert.expect(2);

    var tweenRate = _emberLetterByLetterLxlTagsTweenRate['default'].create({ initialTweenRate: 5 });
    var lxlContainer = { tweenRate: '22' };
    var promise = tweenRate.close(lxlContainer);

    assert.equal(get(lxlContainer, 'tweenRate'), 5, 'tweenRate was returned to initialTweenRate');
    assert.equal(promise.constructor.name, 'Promise', 'returns a promise');
  });
});
define('dummy/tests/unit/lxl-tags/tween-rate-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/lxl-tags/tween-rate-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/lxl-tags/tween-rate-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/lxl-tween-adapters/jquery-test', ['exports', 'ember-letter-by-letter/lxl-tween-adapters/jquery', 'qunit'], function (exports, _emberLetterByLetterLxlTweenAdaptersJquery, _qunit) {

  (0, _qunit.module)('Unit | LXLTweenAdapter | jquery');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var jquery = _emberLetterByLetterLxlTweenAdaptersJquery['default'].create();
    assert.ok(jquery);
  });
});
define('dummy/tests/unit/lxl-tween-adapters/jquery-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/lxl-tween-adapters/jquery-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/lxl-tween-adapters/jquery-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/utils/ember-add-class-to-test', ['exports', 'ember-letter-by-letter/utils/add-class-to', 'qunit'], function (exports, _emberLetterByLetterUtilsAddClassTo, _qunit) {

  (0, _qunit.module)('Unit | Utility | add class to');

  (0, _qunit.test)('it adds classes to a DOM element with no class', function (assert) {
    assert.expect(1);

    var result = (0, _emberLetterByLetterUtilsAddClassTo['default'])(['foo', 'bar'], '<code id="something">');

    assert.equal(result, '<code id="something" class="foo bar">', 'classes added');
  });

  (0, _qunit.test)('it adds classes to a DOM element with class', function (assert) {
    assert.expect(1);

    var result = (0, _emberLetterByLetterUtilsAddClassTo['default'])(['foo', 'bar'], '<code class="baz">');

    assert.equal(result, '<code class="foo bar baz">', 'classes added');
  });

  (0, _qunit.test)('it returns closing tags as-is', function (assert) {
    assert.expect(1);

    var result = (0, _emberLetterByLetterUtilsAddClassTo['default'])(['foo', 'bar'], '</code>');

    assert.equal(result, '</code>', 'classes not added');
  });
});
define('dummy/tests/unit/utils/ember-add-class-to-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/ember-add-class-to-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/ember-add-class-to-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/utils/parse-lxl-tag-test', ['exports', 'ember-letter-by-letter/utils/parse-lxl-tag', 'qunit'], function (exports, _emberLetterByLetterUtilsParseLxlTag, _qunit) {

  (0, _qunit.module)('Unit | Utility | parse lxl tag');

  (0, _qunit.test)('it grabs the tagName', function (assert) {
    assert.expect(1);

    var result = (0, _emberLetterByLetterUtilsParseLxlTag['default'])('[[foo]]');

    assert.equal(result.tagName, 'foo', 'tagName is correct');
  });

  (0, _qunit.test)('`method` is "start" if `#`', function (assert) {
    assert.expect(3);

    var result = (0, _emberLetterByLetterUtilsParseLxlTag['default'])('[[#foo]]');

    assert.equal(result.method, 'open', 'method is correct');
    assert.ok(result.isOpening, '`isOpening` is true');
    assert.ok(!result.isClosing, '`isClosing` is false');
  });

  (0, _qunit.test)('`method` is "start" if none', function (assert) {
    assert.expect(3);

    var result = (0, _emberLetterByLetterUtilsParseLxlTag['default'])('[[foo]]');

    assert.equal(result.method, 'execute', 'method is correct');
    assert.ok(!result.isOpening, '`isOpening` is false');
    assert.ok(!result.isClosing, '`isClosing` is false');
  });

  (0, _qunit.test)('`method` is "stop" if `/`', function (assert) {
    assert.expect(3);

    var result = (0, _emberLetterByLetterUtilsParseLxlTag['default'])('[[/foo]]');

    assert.equal(result.method, 'close', 'method is correct');
    assert.ok(!result.isOpening, '`isOpening` is false');
    assert.ok(result.isClosing, '`isClosing` is true');
  });

  (0, _qunit.test)('`params` are split by spaces', function (assert) {
    assert.expect(1);

    var result = (0, _emberLetterByLetterUtilsParseLxlTag['default'])('[[/foo bar baz]]');

    assert.deepEqual(result.params, ['bar', 'baz'], 'params are correct');
  });

  (0, _qunit.test)('`params` are split by spaces, unless in quotes', function (assert) {
    assert.expect(1);

    var result = (0, _emberLetterByLetterUtilsParseLxlTag['default'])('[[/foo "I went to the bar, and \'ordered\' a drink" baz \'single quotes "also" work\' "as do a coder\'s unmatched quotes"]]');

    assert.deepEqual(result.params, ["I went to the bar, and 'ordered' a drink", 'baz', 'single quotes "also" work', "as do a coder's unmatched quotes"], 'params are correct');
  });

  (0, _qunit.test)('`params` can contain inner arrays', function (assert) {
    assert.expect(1);

    var result = (0, _emberLetterByLetterUtilsParseLxlTag['default'])('[[/foo bar (array inner "and string" (array deep) last) baz]]');

    assert.deepEqual(result.params, ['bar', ['inner', 'and string', ['deep'], 'last'], 'baz'], 'params are correct');
  });

  (0, _qunit.test)('`params` can contain inner hashes', function (assert) {
    assert.expect(1);

    var result = (0, _emberLetterByLetterUtilsParseLxlTag['default'])('[[/foo bar (hash foo=bar "key string"="value string" myHash=(hash baz=burger myArray=(array 1 2 3 -4 +5 true false) another=value)) baz]]');

    assert.deepEqual(result.params, ['bar', {
      foo: 'bar',
      'key string': 'value string',
      myHash: {
        baz: 'burger',
        myArray: [1, 2, 3, -4, '+5', true, false],
        another: 'value'
      }
    }, 'baz'], 'params are correct');
  });
});
define('dummy/tests/unit/utils/parse-lxl-tag-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/parse-lxl-tag-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/parse-lxl-tag-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map