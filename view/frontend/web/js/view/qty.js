/*
* @Author: Ngo Quang Cuong
* @Date:   2017-07-11 15:14:29
* @Last Modified by:   nquangcuong
* @Last Modified time: 2017-07-11 20:52:12
*/

define(
    [
        'jquery',
        'ko',
        'uiComponent'
    ],
    function($, ko, Component) {
        'use strict';

        return Component.extend({

            defaults: {
                template: 'PHPCuong_ProductQty/product/view/addtocart'
            },

            initialize: function() {
                this._super();
                this.qty = ko.observable(this.defaultQty);
            },

            decreaseQty: function() {
                var newQty = parseInt(this.qty()) - 1;
                if (newQty < 1) {
                    newQty = 1;
                }
                this.qty(newQty);
                $('input[name="qty"]').val(newQty);
            },

            increaseQty: function() {
                var newQty = parseInt(this.qty()) + 1;
                if (newQty > 100) {
                    newQty = 100;
                }
                this.qty(newQty);
                $('input[name="qty"]').val(newQty);
            },

            qtyChanged: function() {
                var newQty = parseInt($('input[name="qty"]').val());
                if (isNaN(newQty)) {
                    $('input[name="qty"]').val('1');
                    newQty = 1;
                }
                if (newQty > 100) {
                    newQty = 100;
                }
                this.qty(parseInt(newQty));
                $('input[name="qty"]').val(newQty);
            }

        });
    }
);
