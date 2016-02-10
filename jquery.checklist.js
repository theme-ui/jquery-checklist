/*!
 * @todo Add Select all, Deselect all actions
 * @todo More robust API with options
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.checklist = function () {
        // Create a wrapper
        var wrapperId = $(this).wrapAll('<div>').parent().uniqueId().attr('id');
        // Hide this element
        $(this).hide();
        // Deal with settings
        // @todo More robust API with options
        /*
        var settings  = $.extend(
            {},
            { wrapper: '' },
            options
        );
        */
        // Colect the optionLisit array
        var optionList = this.find('option').map(function (i, el) {
            return {
                value: $(this).attr('value'),
                text: this.innerHTML
            };
        }).get();
        // Initialize selectList
        var selectList = this.find('option').map(function (i, el) {
            if ($(this).is(':selected')) {
                return $(this).attr('value');
            }
        }).get();
        // Replace the original option with Vue implementation
        $(this).attr('v-model', 'selectList');
        $(this).attr('v-on:change', 'onSelectChanged');
        $(this).html(
            '<option v-for="option in optionList" :value="option.value">' +
                '{{ option.text }}' +
            '</option>'
        );
        // Show the checklist
        $(this).parent().prepend(
            '<div class="ui relaxed list">' +
                '<div class="item" v-for="option in optionList">' +
                    '<div class="ui checkbox">' +
                        '<input type="checkbox" v-bind:value="option.value" v-model="selectList" v-on:change="onCheckChanged">' +
                        '<label>{{ option.text }}</label>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
        // Instance Vue object
        var vm = new Vue({
            el: '#' + wrapperId,
            data: {
                optionList: optionList,
                selectList: selectList
            },
        });
        // Activate Semantic UI checkbox
        $('.ui.checkbox').checkbox();
        
        // Chainable
        return this;
    };
}));