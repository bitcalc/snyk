/*

Implements a div for covering the page content
when in a menu context that, for example,
should be closed when the user clicks elsewhere.

Example:
```
{{gh-content-cover onClick="closeMenus" onMouseEnter="closeAutoNav"}}
```
**/

import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['content-cover'],

    onClick: null,
    onMouseEnter: null,

    click: function () {
        this.sendAction('onClick');
    },

    mouseEnter: function () {
        this.sendAction('onMouseEnter');
    }
});
