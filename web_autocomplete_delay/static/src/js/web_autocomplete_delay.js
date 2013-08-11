/*##############################################################################
#
#    Web AutoComplete Delay
#    Copyright 2013 wangbuke <wangbuke@gmail.com>
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################*/
openerp.web_autocomplete_delay = function(instance) {
    instance.web.form.FieldMany2One = instance.web.form.FieldMany2One.extend({
        render_editable: function() {
            this._super();
            this.$input.autocomplete("option", "delay", 1500);
        },
    });
   instance.web.SearchView = instance.web.SearchView.extend({
        setup_global_completion: function () {
            var res = this._super();
            this.$el.autocomplete("option", "delay", 1500);
            this.$el.autocomplete("option", "minLength", 2);
            return res;
        },
    });
};

// vim:et fdc=0 fdl=0 foldnestmax=3 fdm=syntax:
